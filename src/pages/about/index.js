import CustomHead from "../../helpers/header/CustomHead";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../helpers/layout/layout.module.css";
import styles from "./about-us.module.css";
import Card from "../../components/Card";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Industries from "../../components/Home/Industries";
import CenterText from "../../components/Text/CenterText";
import ProjectCard from "../../components/Project";
import Progress from "../../components/Progress";
import { BaseApi } from "../../utils/utils";
import axios from "axios";
import NavigationProjectCards from "../../components/Abous-Us/NavigationProjectCards";
import Recognition from "../../components/Recognition";
import { useRouter } from "next/router";

const AboutUS = (props) => {
  const router = useRouter();

  const aboutServices = props.services.data.allChildren;
  const aboutServicesChildrens = aboutServices.map((data, index) => {
    return (
      <Recognition
        headText={data.heading}
        para={data.subHeading}
        redirectUrl={`${router.pathname}/${data._id}`}
      />
    );
  });

  return (
    <>
      <CustomHead title="ABOUT US" />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          {/* <span className={BannerStyle.lowOpacity}> ABOUT US </span>{" "} */}
        </p>
        <p className={BannerStyle.BigHeading}>
          ABOUT
          <br />
          US{" "}
        </p>
        <p className={BannerStyle.midHeading}>
          Helping you build a prosperous, efficient business.
        </p>
      </Banner>
      <CenterText paragraphs="We at Bajaj Global business development helps one and all Overcome a business challenge or strike your next growth milestone by working with our Canada-wide network of a wide number of business consultants. Our highly qualified experts have industry and sector experience which focuses on a structured, business-driven approach that integrates proven methodologies, techniques and best practices that deliver practical , substantial and corporeal results. We believe working with us can help you apply effective management methods that will empower your workforce, simplify decision-making, more practical - approach , and facilitate performance measurement. With Structured approach, Effective management tools, Coaching and support there are increased chances of improving your business stakes. With a solid management framework, BBDG  aids people to secure buy-in from the team on a clear company vision aligned with  values, as well as structured work processes to improve business performance." />
      {/* <div className={styles.offering} id="offering">
        <h1>WHAT WE CAN DO FOR YOUR BUSINESS</h1>
        <div className={styles.offercard}>
          <Card
            image="../assets/images/dp.png"
            heading="DIGITAL PRODUCTS"
            data="Need something changed or is there
            something not quite working"
          />
          <Card
            image="../assets/images/ms.png"
            heading="MARKETING STRATEGY"
            data="Need something changed or is there
            something not quite working"
          />

          <Card
            image="../assets/images/md.png"
            heading="MODERN DESIGNING"
            data="Need something changed or is there
                        something not quite working"
          />

          <Card
            image="../assets/images/wd.png"
            heading="WEBSITE DEVELOPMENT"
            data="Need something changed or is there
                        something not quite working"
          />
        </div>
      </div> */}

      {/* <Industries /> */}
      {/* <Progress
        heading="WE ARE STANDOUT EXPERTS IN BUSINESS"
        datas={Indicators}
      /> */}

      {/* // about us services */}
      <div style={{ padding: "3rem 0rem" }}>{aboutServicesChildrens}</div>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/oLWScthpAgY"
          title="We are BBDG"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className={styles.exceptional}>
        <p className={styles.mainHeading}>We are exceptional employers</p>
        <div className={styles.center}>
          <PrimaryButton
            url="/about/careers/available-positions"
            text="Available Positions"
          />
          <PrimaryButton
            text="Meet our team"
            url="/about/careers/meet-our-team"
          />
        </div>
        <div className={styles.certified}>
          <span>
            <p className={styles.mainHeading}>
              bbdg is a certified b corporation
            </p>
            <p>And we help grow canada’s B CORP movement</p>
          </span>
          <PrimaryButton text="learn more" url="/about/b-corps" />
        </div>
      </div>
      <div className={LayoutStyle.RootDiv}>
        <div className={styles.teamContainer}>
          <NavigationProjectCards />
        </div>
      </div>
    </>
  );
};

export default AboutUS;

export async function getStaticProps() {
  const aboutServices = await axios.get(`${BaseApi}/about/all`);

  return {
    props: {
      services: aboutServices.data,
    },
  };
}
