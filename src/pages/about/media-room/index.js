import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../../helpers/layout/layout.module.css";
import styles from "../about-us.module.css";
import Recognition from "../../../components/Recognition";
// import CenterText from "../../../components/Text/CenterText";
// import StayUpdated from "../../../components/Abous-Us/stayUpdated";
import { useEffect, useState } from "react";
import NavigationProjectCards from "../../../components/Abous-Us/NavigationProjectCards";
import { BaseApi } from "../../../utils/utils";
import axios from "axios";
// import CentreText from "../../../components/Text/CenterText";
import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router";
import Helmet from "react-helmet";
import PrimaryLoading from "../../../helpers/PrimaryLoading/PrimaryLoading";

const Index = () => {
  const { pathname } = useLocation();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const fetchData = async () => {
      const response = await axios.get(
        `${BaseApi}/about/all/awards-and-distinctions`
      );
      const data = await response.data;
      setPost(data.data.allChildren);
    };
    fetchData();
  }, []);
  const childrens = post;
  const childrensList = childrens.map((children) => {
    return (
      <Recognition
        headText={children.heading}
        para={children.subHeading}
        redirectUrl={pathname + "/" + children._id}
      />
    );
  });

  const Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) Media room</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong> Media room is designed to help journalist and researchers to get the best results and news from our office at one place!<br>Whether you wish to speak to one of the experts for expert tips and business ideas, obtain a byte on the current economic trends and issues or wish to understand more about BBDG then you can drop an email and contact our media relations team or obtain our media kit.</p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) media room also helps you to get research and analysis on the topics  - </strong></p><ul><li>Advanced manufacturing</li><li>Female entrepreneurs</li><li>Ethnic minorities and social growth</li><li>Economic trends and challenges</li><li>Venture capital</li><li>Social ranking, entrepreneurship and innovation</li><li>Usage of clean and green technology</li><li>Buying and selling a new business</li></ul>`;
  return (
    <>
      {loading ? <PrimaryLoading /> : null}
      <Helmet>
        <title>Media room | BBDG</title>
      </Helmet>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          ABOUT US{" "}
          <span className={BannerStyle.lowOpacity}>
            <i className="fas fa-chevron-right"></i> MEDIA ROOM{" "}
          </span>{" "}
        </p>
        <p className={BannerStyle.BigHeading}>
          {" "}
          MEDIA <br></br> ROOM{" "}
        </p>
        <p className={BannerStyle.midHeading}>
          LATEST NEWS AND RESEARCH FOR<br></br>
          JOURNALISTS AND RESEARCHERS
        </p>
      </Banner>

      <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
      {childrensList}
      {/* < StayUpdated /> */}
      <div className={LayoutStyle.RootDiv}>
        <div className={styles.teamContainer}>
          <NavigationProjectCards />
        </div>
      </div>
    </>
  );
};

export default Index;
