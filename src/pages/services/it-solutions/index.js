import Banner from "../../../helpers/Banner/Banner";
// import style from "./it-solutions.module.css";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
// import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import axios from "axios";
import { BaseApi } from "../../../utils/utils";
import Recognition from "../../../components/Recognition";
import { useEffect, useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import Markdown from "markdown-to-jsx";
import LayoutStyle from "../../../helpers/layout/layout.module.css";

function Index() {
  // const [index, setIndex] = useState(0);
  const [solutionData, setSolutionData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const solutionResponse = await axios.get(
        `${BaseApi}/service/all/+services+it-solutions`
      );
      const solutions = await solutionResponse.data;
      setSolutionData(solutions.data);

      const portfolioResponse = await axios.get(`${BaseApi}/portfolio/all`);
      const portfolio = await portfolioResponse.data;
      setPortfolioData(portfolio.data);
    };
    fetchData();
  }, []);
  console.log(solutionData);
  return (
    <>
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
      {/* {solutionData.parent.text != null && (
        <Markdown className={LayoutStyle.markDownStyle}>
          {solutionData.parent.text}
        </Markdown>
      )} */}
      {/* {solutionData.allChildren.map((i) => (
        <Recognition
          key={i}
          headText={i.heading.split("-").join(" ")}
          para={i.subHeading}
          redirectUrl={i.perma_link}
        />
      ))} */}

      <Recognition
        headText="Have Questions?"
        para="If you have any questions or doubt please feel free to contact us        "
        btnTitle="Write us"
        redirectUrl="/contact/write-us"
      />
      <div style={{ marginTop: "-12rem" }}>
        <Carousel title="our it solutions categories" data={portfolioData} />
      </div>
    </>
  );
}

export default Index;
