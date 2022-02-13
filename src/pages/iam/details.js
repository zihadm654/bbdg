import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import axios from "axios";
import CenterText from "../../components/Text/CenterText";
import { BaseApi } from "../../utils/utils";
import Markdown from "markdown-to-jsx";
import LayoutStyle from "../../helpers/layout/layout.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SubSection = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams(null);

  useEffect(() => {
    axios
      .get(`${BaseApi}/iam/${id}`)
      .then((res) => {
        const data = res.data;
        setPost(data.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, post]);
  // const Content = post.text_data.replace("&#39;", "'");
  if (!post) return <h4>Loading...</h4>;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          I AM <i className="fas fa-chevron-right"></i>
          {/* <span className={BannerStyle.lowOpacity}> {post.heading}</span> */}
        </p>
        <br></br>
        {/* <p className={BannerStyle.BigHeading}>{post.heading}</p> */}
        <br></br>
        {/* <p className={BannerStyle.midHeading}>{post.sub_heading}</p> */}
      </Banner>
      {/* <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown> */}
    </>
  );
};
export default SubSection;
