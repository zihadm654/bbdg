import React from "react";
import style from "./small_business_loans.module.css";
import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import Feature from "../../../components/Feature";
import LayoutCSS from "../../../helpers/layout/layout.module.css";
import CashFlow from "../../../components/SBL/CashFlow";
import QualityService from "../../../components/Qualityservice";
import CustomHead from "../../../helpers/header/CustomHead";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

import axios from "axios";
import { BaseApi } from "../../../utils/utils";
import Markdown from "markdown-to-jsx";

function SBL(props) {
  const Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) small business loans</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>has a special business loan for small entrepreneurs who wish to grab an excellent opportunity or overcome business challenges. The same is designed to help you to quickly identify and access the funds needed for your business on a flexible term*</p><p>*<em>Conditions apply.</em></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) financing options - </strong></p><ul><li>Supplement cash flow</li><li>Purchase equipment, software or hardware</li><li>Cash for everyday use</li><li>To sell products online</li><li>Upgrade your business and purchase inventory</li><li>Run marketing campaigns</li><li>Hire a professional service provider or business consultant</li><li>Cover expenses, pay rent, etc.</li></ul><p>Bajaj Global Business Development &amp; Consultancy Group (BBDG) financing options tailored to your needs -</p><ul><li>Unparalleled flexibility</li><li>Postpone principal payments</li><li>Repay loans at your own pace</li><li>Affordable and convenient loans</li><li>No application fees</li><li>No penalties</li><li>No lump sum payment</li><li>Peace of mind</li></ul><p><em>We do not take personal assets as collateral security for the loan.</em></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) financing options are available for the following - </strong></p><ul><li>Businesses in operation for at least 2 years</li><li>Businesses generating revenues</li><li>Good credit history</li><li>International entrepreneurs</li></ul>`;

  const IndicatorData = props.response.data;

  const Indicators = IndicatorData.map((x) => {
    return {
      percentage: x.description,
      subHeading: x.title,
    };
  });
  return (
    <>
      <CustomHead title="SMALL BUSINESS LOANS" />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          SERVICES <i className="fas fa-chevron-right"></i> FINANCING{" "}
          <i className="fas fa-chevron-right"></i>{" "}
          <span className={BannerStyle.lowOpacity}>SMALL BUSINESS LOANS </span>{" "}
        </p>

        <p className={BannerStyle.BigHeading}>
          SMALL <br></br> BUSINESS <br></br> LOAN{" "}
        </p>
        <p className={BannerStyle.midHeading}>
          <br></br>GET UPTO $XXXK ONLINE <br></br>
          <br></br>{" "}
        </p>

        <PrimaryButton text="APPLY NOW" daark="true" />
      </Banner>
      <Markdown className={LayoutCSS.markDownStyle}>{Content}</Markdown>
      <Feature
        heading="FEATURE OF OUR LOANS"
        image="../assets/images/imag.png"
        imageTitle="TOTAL FREEDOM TO DO BUSINESS"
        points={[
          {
            head: "100% ONLINE",
            data: "There are many variations of passsages of lorem ipsum majority has suffered",
          },
          {
            head: "NO APPLICATION FEES",
            data: "There are many variations of passsages of lorem ipsum majority has suffered",
          },
          {
            head: "AFFORDABLE RATES",
            data: "There are many variations of passsages of lorem ipsum majority has suffered",
          },
        ]}
      />
      <CashFlow />
      <QualityService IndicatorArray={Indicators} />
      <div className={LayoutCSS.RootDiv + " " + style.Last}>
        <h1 className={style.heading}>READY TO TAKE ACTION</h1>
        <div className={style.buttons}>
          <PrimaryButton text="APPLY NOW" dark="true" />
        </div>
      </div>
    </>
  );
}

export default SBL;

export async function getServerSideProps() {
  const Indicatorresponse = await axios.get(
    `${BaseApi}/universal/smallbusinessloans1`
  );

  const Idata = await Indicatorresponse.data;

  return {
    props: {
      response: Idata,
    },
  };
}
