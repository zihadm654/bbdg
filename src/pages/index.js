import { useEffect, useState } from "react";
import styles from "../Home.module.css";
import HomePage from "../components/HomePage";
import Project from "../components/Project";
import Card from "../components/Card";
import Feature from "../components/Feature";

import Portfolio from "../components/Home/Portfolio";
import Works from "../components/Home/Work";
import SendMessage from "../components/SendMessage";
import OurClients from "../components/Home/OurClients";
// import CustomHead from "../helpers/header/CustomHead";
import Industries from "../components/Home/Industries";
import CustomeCarousel from "../components/carousel/Carousel";

import ServicesCard from "../components/Services/ServicesCard";

import axios from "axios";
import { BaseApi, ImageBaseUrl } from "./../utils/utils";
import Carousel from "react-multi-carousel";

export default function Home(props) {
  // const [Work, setWork] = useState(props.res.data);
  const [servicesData, setServicesData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchData = await axios.get(
          "https://bbdg-backend.herokuapp.com/service/all",
          {}
        );
        const arrays = fetchData.data.data.allChildren;
      } catch (err) {
        console.log(err);
      }

      const res = await axios.get(`${BaseApi}/portfolio/all`);
      const portfolioRes = await res.data;
      const portfolio = await portfolioRes.data;

      const data = await axios.get(`${BaseApi}/service/all`);
      const servicesRes = data.data;
      const services = servicesRes.data.allChildren;

      setPortfolioData(portfolio);
      setServicesData(services);
    }
    fetchData();
  }, []);

  const servicesCard = servicesData.map((data, index) => {
    return (
      <ServicesCard
        key={index}
        image={`${ImageBaseUrl}${data.image_url}`}
        heading={data.heading}
        subHeading={data.subHeading}
        url={`${data.perma_link}`}
      />
    );
  });
  // const IndicatorData = props.response.data;

  // const Indicators = IndicatorData.map((x) => {
  //   return {
  //     percentage: x.description,
  //     subHeading: x.title,
  //   };
  // });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <main>
        {/* <CustomHead title="HOME" /> */}
        <HomePage />
        <div className={styles.Projects} id="Projects">
          <h1>DISCOVER OUR BEST PROJECTS</h1>
          <div className={styles.ProjectsComponents}>
            <Project
              image="../assets/images/Mask Group-6.png"
              heading="What We Do"
              url="/about/what-we-do"
            />
            <Project
              image="../assets/images/Mask Group-1.png"
              heading="Who We Are"
              url="/about/who-we-are"
            />
          </div>
        </div>
        <div className={styles.offering} id="offering">
          <h1>WHAT WE'RE OFFERING</h1>
        </div>

        <div className={styles.offercard}>
          {/* <Carousel
            className={styles.carouselStyle}
            swipeable={true}
            draggable={true}
            responsive={responsive}
          > */}
          {servicesCard}
          {/* </Carousel> */}
        </div>
        <Feature
          heading="BBDG'S ALL CORE FEATURE"
          image="../assets/images/imag.png"
          imageTitle="TOTAL DESIGN FREEDOM FOR EVERYONE"
          points={[
            {
              head: "PROFESSIONAL STAFF",
              data: "There are many variations of passsages of lorem ipsum majority has suffered",
            },
            {
              head: "100%",
              data: "There are many variations of passsages of lorem ipsum majority has suffered",
            },
            {
              head: "QUALITY DESIGNING",
              data: "There are many variations of passsages of lorem ipsum majority has suffered",
            },
          ]}
        />
        <Industries heading="Our services" />
        {/* <Portfolio IndicatorArray={Indicators} /> */}
        {/* <CustomeCarousel
          title="OUR IT SOLUTIONS CATEGORIES"
          data={props.portfolio.data}
        /> */}
        {/* {Work ? <Works Data={Work} /> : <></>} */}
        <div id="Contact">
          <SendMessage location={true} />
        </div>
        {/* <OurClients /> */}
      </main>
    </div>
  );
}
