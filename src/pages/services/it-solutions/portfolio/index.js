import { useState, useEffect } from "react";
// import LayoutCSS from "../../../../helpers/layout/layout.module.css";
import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
// import style from "./portfolio.module.css";
// import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
// import CenterText from "../../../../components/Text/CenterText";
import axios from "axios";
import { BaseApi } from "../../../../utils/utils";
// import WideCarousel from "../../../../components/wideCarousel";

function Index() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const portfolioResponse = await axios.get(`${BaseApi}/portfolio/all`);
      const portfolio = await portfolioResponse.data;
      setPosts(portfolio);
    };
    fetchData();
  }, []);
  // const { q } = router.query;
  console.log(posts);
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          SERVICES <i className="fas fa-chevron-right"></i>
          IT SOLUTIONS
          <i className="fas fa-chevron-right"></i>PORTFOLIO{" "}
          <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> {} </span>
        </p>

        <p className={BannerStyle.BigHeading}>{} </p>
        <p className={BannerStyle.midHeading}>
          <br></br>
          HAVE A LOOK AT OUR
          <br></br>
          EXPANDED PORTFOLIO OF
          <br></br>
          PROJECTS THAT WE HAVE COMPLETED
        </p>
      </Banner>
      {/* <WideCarousel
        data={posts && posts.data}
        // tab={}
        title="our work showcase"
      /> */}
    </>
  );
}

export default Index;
