import Banner from "../../helpers/Banner/Banner";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import styles from "./contactus.module.css";
import Project from "../../components/Project";
import hand__img from "../../assets/images/hand.png";
import Helmet from "react-helmet";
import { useEffect, useState } from "react";
import Loader from "../../helpers/PrimaryLoading/PrimaryLoading";
function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? <Loader /> : null}
      <Helmet>
        <title>Contact | BBDG</title>
      </Helmet>
      <Banner>
        {/* <p className={BannerStyle.smallHeading}>Contact us</p> */}
        <p className={BannerStyle.BigHeading}>
          Contact
          <br />
          us
        </p>
        <p className={BannerStyle.midHeading}>Contact us title here</p>
        {/* <PrimaryButton
          url="/contact/write-us"
          text="Write Us" dark /> */}
      </Banner>
      <div className={styles.darkbluecontainer}>
        <div className={styles.innercontainer}>
          <p className={styles.heading + "  " + styles.textlight}>
            Head Office
          </p>
          <br />
          <p className={styles.innertext}>
            5 Cherrycrest Drive, <br /> Brampton, ON L6P 3W4,
            <br /> Canada.
          </p>
        </div>
        <div className={styles.innercontainer}>
          <p className={styles.middlecontainer}>
            TOLL FREE NUMBER: +1 863 666 7029
          </p>
          <br />
          {/* <p className={styles.middlecontainer}>FAX NUMBER: 1-877-232-2269</p> */}
          <br />
          {/* <p className={styles.middlecontainer}>
            {" "}
            Monday to Friday from 8.00 a.m to 6.00 p.m (Eastern Time)
          </p>{" "} */}
          <br />
        </div>
        <div className={styles.innercontainer}>
          <PrimaryButton url="/contact/write-us" text="Write US" />
          <PrimaryButton
            newPage
            url="https://www.google.com/maps?ll=40.677763,-73.944444&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=66+Brooklyn+Ave+Brooklyn,+NY+11216+USA"
            text="Locate US"
          />
        </div>
      </div>
      <div className={styles.lowerdiv}>
        <p className={styles.heading}>LOOKING FOR INFORMATION</p>
        <br />
        <br />
        <p className={styles.normaltext}>
          For general questions about about BBDG’s financing solutions,
          <br /> advisory services or for any other question,{" "}
          <span style={{ fontWeight: "Bold", textDecoration: "underline" }}>
            <a href="/contact/terms-of-use/write-us">write us</a>
          </span>
          . One of our <br />
          representatives will be in touch.
        </p>
        <br />
        <br />
        <p className={styles.redtext}>
          To request a business loan opr advisory services, click on
          <br />
          one of the links below:
        </p>
        <br />
        <br />

        <div className={styles.templateCards}>
          <Project
            image={hand__img}
            heading="REQUEST A BUSINESS LOAN"
            url="/request-business-loan"
          />
          <Project
            image={hand__img}
            heading="REQUEST ADVISORY SERVICES"
            url="/request-advisory-services"
          />
        </div>
      </div>
    </>
  );
}

export default Index;
