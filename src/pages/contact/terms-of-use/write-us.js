import Banner from "../../../helpers/Banner/Banner";
// import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
// import styles from "./write-us.module.css";
// import Project from "../../../components/Project";
import SendMessage from "../../../components/SendMessage";

function WriteUS() {
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          TERMS OF USE{" "}
          <span className={BannerStyle.lowOpacity}>
            {" "}
            <i className="fas fa-chevron-right"></i> WRITE US
          </span>
        </p>
        <p className={BannerStyle.BigHeading}>
          Write<br></br> us
        </p>
        <p className={BannerStyle.midHeading}>Send us Message</p>

        <br />
      </Banner>
      <SendMessage location={false} />
    </>
  );
}

export default WriteUS;
