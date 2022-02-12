import style from "./HomePage.module.css";
import DiscoverMore from "./DiscoverMore";
import Banner from "../helpers/Banner/Banner";
import BannerStyle from "../helpers/Banner/Banner.module.css";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

const HomePage = () => {
  return (
    <>
      <Banner>
        <p
          className={BannerStyle.BigHeading + " " + style.typingWrapper}
          id="typingLogo"
        >
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
            words={[
              "ADVISORY",
              "FINANCING",
              "BUSINESS ACQUISTIONS",
              "INDUSTRIES",
              "IT SOLUTIONS",
              "DIGITAL MARKETING",
              "ACCOUNTING SERVICES",
              "LEGAL SERVICES",
              "INVESTMENT PLANNING",
              "TRAINING",
              "ENVIRONMENT",
              "TAX PLANNING",
            ]}
          />
        </p>
        <p className={style.smallSubHeading}>
          We are committed to providing our customers with exceptional service
          while offering our employess the best training
        </p>
      </Banner>
      <DiscoverMore />
    </>
  );
};

export default HomePage;
