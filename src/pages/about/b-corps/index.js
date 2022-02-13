import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import CenterText from "../../../components/Text/CenterText";
import styles from "../about-us.module.css";
import LayoutStyle from "../../../helpers/layout/layout.module.css";
import ProjectCard from "../../../components/Project";
import Recognition from "../../../components/Recognition";
import NavigationProjectCards from "../../../components/Abous-Us/NavigationProjectCards";
import { BaseApi } from "../../../utils/utils";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

function Index() {
  const [post, setPost] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    axios
      .get(`${BaseApi}/about/all/b-corp`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  if (!post) return <h3>Loading...</h3>;
  // console.log(post);
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

  const Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>is a global movement of people who help boost companies and technologies. The aim is to attain and boost the outcomes for entrepreneurs. Thus, the experts help to create prosperity on a local level and build strong communities.</p><p><strong><em>" I am using my profitable business to deliver a compelling style and comfort for my hometown in Montreal. The B Corp evaluation is a broad and meaningful initiative that helps young entrepreneurs like us to make a difference to the local community" </em></strong></p><p><strong>Mike Tannenbaum</strong></p><p><strong><em>"My social media marketing business uses films and video content to deliver positive social change. By joining the B-Corp movement of BBDG, we have met people who have similar goal but great ideas!"</em></strong></p><p><strong>Vanessa Gil </strong></p><p><strong><em>"From our humble beginnings as a backyard organization, we have quickly achieved sustainable development and acquisitions across the nation. By joining BBDG, we have met a pool of people who seek to do business and share values. BBDG helps to make a difference and melt distances"</em></strong></p><p><strong>Sheila Hopkins </strong></p>`;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          ABOUT US
          <span className={BannerStyle.lowOpacity}>
            <i className="fas fa-chevron-right"></i> WE’RE A B CORP
          </span>
        </p>
        <p className={BannerStyle.BigHeading}>
          WE’RE
          <br />
          A
          <br />B CORP
        </p>
        <br />
        <p className={BannerStyle.midHeading}>
          Bajaj Global Business Development & Consultancy Group (BBDG) is a
          global movement of people who help boost companies and technologies.
          The aim is to attain and boost the outcomes for entrepreneurs
        </p>
      </Banner>
      <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
      {/* {childrensList} */}
      <div className={LayoutStyle.RootDiv}>
        <div className={styles.teamContainer}>
          <NavigationProjectCards />
        </div>
      </div>
    </>
  );
}

export default Index;
