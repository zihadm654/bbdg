import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import axios from "axios";
import Recognition from "../../components/Recognition";
import { BaseApi } from "../../utils/utils";
// import CenterText from "../../components/Text/CenterText";
import Markdown from "markdown-to-jsx";
import LayoutStyle from "../../helpers/layout/layout.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SubServicesList = (service) => {
  return (
    <Recognition
      key={service._id}
      headText={service.heading}
      para={service.subHeading}
      redirectUrl={service.perma_link}
    />
  );
};

const SubSection = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams(null);
  const slug = id;
  useEffect(() => {
    const fetchData = async () => {
      let perma_link = `+services+${slug.join("+")}`;
      const response = await axios.get(`${BaseApi}/service/all/${perma_link}`);
      const data = await response.data;
      setPost(data);
    };
    fetchData();
  }, [slug]);
  // console.log(post);
  const parentDetails = post.data.parent;
  const subServices = post.data.allChildren;
  const parentHeading = post.slug[post.slug.length - 1].split("-").join(" ");
  // const parentHeading = "ll"
  const RouteCreater = (routeArray) => {
    var route = `services <i class='fas fa-chevron-right'></i> `;
    for (let i = 0; i < routeArray.length; i++) {
      const element = routeArray[i].split("-").join(` `);
      if (i === routeArray.length - 1) {
        route =
          route +
          `<span class=${BannerStyle.lowOpacity}>` +
          element +
          "</span>";
      } else {
        route = route + element + " <i class='fas fa-chevron-right'></i> ";
      }
    }
    return route;
  };

  const route = RouteCreater(post.slug);

  const Content = parentDetails.text;
  // console.log(Content);

  return (
    <>
      <Banner>
        <p
          className={BannerStyle.smallHeading}
          dangerouslySetInnerHTML={{ __html: route }}
        ></p>
        <p className={BannerStyle.BigHeading}>{parentHeading}</p>
        <p className={BannerStyle.midHeading}>{parentDetails.subHeading}</p>
      </Banner>

      {parentDetails.text != null && (
        <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
      )}
      {subServices.map((service) => SubServicesList(service))}
      {subServices.length > 0 && (
        <Recognition
          headText="Have Questions?"
          para="If you have any questions or doubt please feel free to contact us"
          redirectUrl={"/contact/write-us"}
        />
      )}
    </>
  );
};

export default SubSection;
