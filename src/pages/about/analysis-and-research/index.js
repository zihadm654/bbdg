import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../../helpers/layout/layout.module.css";
import styles from "../about-us.module.css";
import ProjectCard from "../../../components/Project";
import Recognition from "../../../components/Recognition";
import NavigationProjectCard from "../../../components/Abous-Us/NavigationProjectCards";
import { BaseApi } from "../../../utils/utils";
import axios from "axios";
import CenterText from "../../../components/Text/CenterText";

import Markdown from "markdown-to-jsx";

const Index = () => {
  const [post, setPost] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BaseApi}/about/all/analysis-and-research`
      );
      const data = await response.data;
      setPost(data);
    };
    fetchData();
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
  const Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> help you to measure everything that matters for your business and its financial health. The company's health and fitness have a lasting impact on the community.</p><p><strong>Business impact and assessment</strong></p><p><strong>Step - 1 - Assessment of the business</strong></p><p>Take the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>free online assessment program and confidential evaluation and create a benchmark of your company's health and its positive impact.</p><p><strong>Step 2 - Comparison of the business</strong></p><p>Our experts help you to gain insight into your business health and performance in comparison to your global peers and industry experts.</p><p><strong>Step 3 - Improve your business</strong></p><p>You get a custom improvement and assessment plan and helps to get best practices that help you to improve.</p><p><strong>Step 4 - Take action</strong></p><p>Once you take the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>impact assessment, you can gain insight into the positive side of things and help yourself to improve your business.</p><p>Also, this helps you to get the best of results as -</p><ul><li>You assess how the company is better for the workers, community and environment</li><li>Compare the performance against the peers in your area</li><li>Gather sufficient information and tips to improve your business</li><li>Attain the best of counselling and feedback from experts</li></ul>`;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          ABOUT US{" "}
          <span className={BannerStyle.lowOpacity}>
            <i className="fas fa-chevron-right"></i> ANALYSIS AND RESEARCH{" "}
          </span>{" "}
        </p>
        <p className={BannerStyle.BigHeading}>
          ANALYSIS <br></br> AND <br></br> RESEARCH<br></br>{" "}
        </p>
        <p className={BannerStyle.midHeading}>
          WE RESEARCH ON ISSUES<br></br>
          IMPACTING SMALL AND MEDIUM<br></br>SIZED BUSINESSES IN CANADA
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
};

export default Index;
