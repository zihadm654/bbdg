import { useState, useEffect } from "react";
import CustomHead from "../../../../helpers/header/CustomHead";
import LayoutCSS from "../../../../helpers/layout/layout.module.css";
import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
import style from "./portfolio.module.css";
import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import CenterText from "../../../../components/Text/CenterText";
import axios from "axios";
import { BaseApi, ImageBaseUrl } from "../../../../utils/utils";
import WideCarousel from "../../../../components/wideCarousel";
import { useRouter } from "next/router";

function index(props) {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <CustomHead title="PORTFOLIO" />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          SERVICES <i className="fas fa-chevron-right"></i>
          IT SOLUTIONS
          <i className="fas fa-chevron-right"></i>PORTFOLIO{" "}
          <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> {q} </span>
        </p>

        <p className={BannerStyle.BigHeading}>{q} </p>
        <p className={BannerStyle.midHeading}>
          <br></br>
          HAVE A LOOK AT OUR
          <br></br>
          EXPANDED PORTFOLIO OF
          <br></br>
          PROJECTS THAT WE HAVE COMPLETED
        </p>
      </Banner>
      <WideCarousel
        data={props.portfolio.data}
        tab={q}
        title="our work showcase"
      />
    </>
  );
}

export default index;

export async function getServerSideProps(context) {
  const portfolioResponse = await axios.get(`${BaseApi}/portfolio/all`);
  const portfolio = await portfolioResponse.data;

  return {
    props: {
      portfolio,
    },
  };
}
