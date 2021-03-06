import React, { useEffect, useState } from "react";
import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
// import Feature from "../../../components/Feature";
import LayoutCSS from "../../../helpers/layout/layout.module.css";
import Project from "../../../components/Project";
import Recognition from "../../../components/Recognition";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Card from "../../../components/Card";
import style from "./careers.module.css";
import { BaseApi } from "../../../utils/utils";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router";
import dp from "../../../assets/images/dp.png";
import man from "../../../assets/images/man.png";
import md from "../../../assets/images/md.png";
import ms from "../../../assets/images/ms.png";

function Careers() {
  const { pathname } = useLocation();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BaseApi}/about/all/careers`);
      const data = await response.data;
      setPosts(data.data.allChildren);
    };
    fetchData();
  }, []);
  let Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) careers</strong></p><p>Meet our employees and learn why <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>is the best place for you to realise your dreams and aspirations. They help you to learn more about the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>and its work culture.</p><p><strong>Progress internationally</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>capitalizes on growth and skill development. We have been awarded for our exciting work culture and training methodologies.</p><p>We are worthy of international recognition and our employers appreciate us everyday for our excellent results.</p><p><strong>Team with diversity</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>encourages a diverse workplace. Hence, we strive to give opportunities to all sections of the society and cultures. This is our biggest strength.</p><p><strong>Comprehensive rewards</strong></p><p>From competitive compensation packages to equal benefits for all, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>invests in employees and their success.</p><p><strong>Student jobs</strong></p><p>A number of students join us to realize their potential and attain optimal training. <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>is a favourable place to attain a solid work experience.</p><p><strong>Become a network consultant</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>welcomes people who love to drive success for entrepreneurs. We love to partner with them using our expertise and strong consultant network.</p><p><strong>Join us today</strong></p><p>We bank on young talent and encourage leadership. Our workplace is both dynamic and fun. Join us today and redefine your career graph.</p>`;

  const childrensList = posts.map((children, i) => {
    return (
      <Recognition
        key={i}
        headText={children.heading}
        para={children.subHeading}
        redirectUrl={pathname + "/" + children._id}
      />
    );
  });
  // console.log(posts);
  return (
    <div>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          about us <i className="fas fa-chevron-right"></i>{" "}
          <span className={BannerStyle.lowOpacity}>careers</span>
        </p>
        <p className={BannerStyle.BigHeading}>Careers</p>
        <br></br>
        <br></br>
        <PrimaryButton
          dark
          text="Available Postions"
          url="/about/careers/available-positions"
        />
      </Banner>
      <Markdown className={LayoutCSS.markDownStyle}>{Content}</Markdown>

      <div className={LayoutCSS.RootDiv}>
        <div className={style.projectContainer1}>
          <Project
            heading="progress without boundries"
            image={man}
            url="/about/careers/progress-without-boundries"
          />
          <Project
            heading="Meet our team - know what it's like to work here"
            image={man}
            url="/about/careers/meet-our-team"
          />
        </div>
      </div>
      <h1 className={style.h2}> WE???RE WORTHY OF OFFICIAL RECOGNITION</h1>

      {childrensList}
      <div className={LayoutCSS.RootDiv}>
        <div className={style.career2}>
          <h2 className={style.h2}>BUILD A CAREER AT BBDG</h2>
          <div className={style.card}>
            <Card
              image={dp}
              heading="DIVERSITY"
              data="Need something changed or is
    there something not quite working"
            />

            <Card
              image={md}
              heading="REWARDS"
              data="Need something changed or is
    there something not quite working"
            />

            <Card
              image={ms}
              heading="STUDENT INTERNSHIPS"
              data="Need something changed or is
    there something not quite working"
            />
          </div>
          <h2 className={style.h2}>JOIN OUR TEAM</h2>
          <PrimaryButton dark text="Contact Us" url="/contact" />
        </div>
      </div>
    </div>
  );
}

export default Careers;
