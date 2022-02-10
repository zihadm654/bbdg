import Banner from "../../../helpers/Banner/Banner";
import style from "./it-solutions.module.css";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import CustomHead from "../../../helpers/header/CustomHead";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import axios from "axios";
import { BaseApi } from "../../../utils/utils";
import Recognition from "../../../components/Recognition";
import { useRouter } from "next/router";
import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import Markdown from "markdown-to-jsx";
import LayoutStyle from "../../../helpers/layout/layout.module.css"

function index(props) {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  return (
    <>
      <CustomHead title="it solutions" />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          SERVICES <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> IT SOLUTIONS</span>
        </p>

        <p className={BannerStyle.BigHeading}>IT SOLUTIONS</p>
        <p className={BannerStyle.midHeading}>
          <br></br>
          TAILORED SOLUTIONS
          <br></br> FOR YOUR MODERN DAY IT
          <br></br>
          SITUATIONS
        </p>
      </Banner>
      {console.log(props.solutions.data.parent)}
      {props.solutions.data.parent.text != null && (
        <Markdown className={LayoutStyle.markDownStyle}>{props.solutions.data.parent.text}</Markdown>
      )}
      {props &&
        props.solutions.data.allChildren.map((i) => (
          <Recognition
            headText={i.heading.split("-").join(" ")}
            para={i.subHeading}
            redirectUrl={i.perma_link}
          />
        ))}

      {/* <Recognition
        headText="Have Questions?"
        para="If you have any questions or doubt please feel free to contact us        "
        btnTitle="Write us"
        redirectUrl="/contact/write-us"
      /> */}
      <div style={{marginTop:"-12rem"}}>
        <Carousel
          title="our it solutions categories"
          data={props.portfolio.data}
        />
      </div>
    </>
  );
}

export default index;

export async function getServerSideProps(context) {
  const solutionResponse = await axios.get(
    `${BaseApi}/service/all/+services+it-solutions`
  );
  const solutions = await solutionResponse.data;
  const portfolioResponse = await axios.get(`${BaseApi}/portfolio/all`);
  const portfolio = await portfolioResponse.data;

  return {
    props: {
      solutions,
      portfolio,
    },
  };
}
