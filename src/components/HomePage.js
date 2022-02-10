import style from "./HomePage.module.css";
import DiscoverMore from "./DiscoverMore";
import Banner from "../helpers/Banner/Banner";
import BannerStyle from "../helpers/Banner/Banner.module.css";
const HomePage = () => {
  return (
    <>
      {/* <Head> */}
      {/* <script type="text/javascript" src="/js/home.js"></script> */}
      {/* </Head> */}
      <Banner>
        <p
          className={BannerStyle.BigHeading + " " + style.typingWrapper}
          id="typingLogo"
        ></p>
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
