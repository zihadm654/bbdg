import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import styles from "../about-us.module.css";
import LayoutStyle from "../../../helpers/layout/layout.module.css";
import CenterText from "../../../components/Text/CenterText";
import ProjectCard from "../../../components/Project";
import Recognition from "../../../components/Recognition";
import NavigationProjectCard from "../../../components/Abous-Us/NavigationProjectCards";
import { BaseApi } from "../../../utils/utils";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

function Index() {
  const { pathname } = useLocation();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`${BaseApi}/about/all/awards-and-distinctions`).then((res) => {
      const data = res.data;
      setPost(data);
    });
  }, []);
  // const childrens = post.data.allChildren;
  // const childrensList = childrens.map((children) => {
  //   return (
  //     <Recognition
  //       headText={children.heading}
  //       para={children.subHeading}
  //       redirectUrl={pathname + "/" + children._id}
  //     />
  //   );
  // });
  const Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) awards and distinctions</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>has won numerous awards and distinctions for its initiatives to promote small businesses and international development.</p><p><em>Contact </em><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong><em>to learn how we can help your business to achieve transformation and distinctions with our unique endeavours.</em></p>`;

  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          ABOUT US
          <span className={BannerStyle.lowOpacity}>
            <i className="fas fa-chevron-right"></i> AWARDS AND DISTINCTIONS
          </span>
        </p>
        <p className={BannerStyle.BigHeading}>
          AWARDS
          <br />
          AND
          <br />
          DISTINCTIONS
        </p>
        <br />
        <p className={BannerStyle.midHeading}>
          Bajaj Global Business Development & Consultancy Group (BBDG) awards
          and distinctions
        </p>
      </Banner>

      <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
      {/* {childrensList} */}
      <div className={LayoutStyle.RootDiv}>
        <div className={styles.teamContainer}>
          <NavigationProjectCard />
        </div>
      </div>
    </>
  );
}

export default Index;
