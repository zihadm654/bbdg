import { useEffect, useState } from "react";
import style from "./id.module.css";
import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
import axios from "axios";
import { BaseApi, ImageBaseUrl } from "../../../../utils/utils";
import { useLocation } from "react-router";

function Index() {
  const { pathname } = useLocation();
  const urlArray = pathname.split("/");
  const tab = urlArray[urlArray.length - 1].split("%20").join(" ");
  const [mainIndex, setMainIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const portfolioResponse = await axios.get(`${BaseApi}/portfolio/all`);
      const portfolio = await portfolioResponse.data;
      setData(portfolio.data);
    };
    fetchData();
    const i = data && data.findIndex((item) => item.name.toLowerCase() === tab);
    if (i === -1) {
      setMainIndex(0);
    } else {
      setMainIndex(i);
    }
  }, [data, tab]);
  const moveDown = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };
  const moveUp = () => {
    if (index < data[mainIndex]?.contents.length - 1)
      setIndex((prev) => prev + 1);
  };
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          SERVICES <i className="fas fa-chevron-right"></i>
          IT SOLUTIONS
          <i className="fas fa-chevron-right"></i>PORTFOLIO
          <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}>
            {data[mainIndex]?.name}
          </span>
        </p>

        <p className={BannerStyle.BigHeading}>{data[mainIndex]?.name} </p>
        <p className={BannerStyle.midHeading}>
          <br></br>
          HAVE A LOOK AT OUR
          <br></br>
          EXPANDED PORTFOLIO OF
          <br></br>
          PROJECTS THAT WE HAVE COMPLETED
        </p>
      </Banner>
      <div className={style.mainDiv}>
        <h1>our work showcase</h1>
        <ul>
          {data &&
            data.map((heading, i) => (
              <li
                key={i}
                onClick={() => {
                  setMainIndex(i);
                  setIndex(0);
                }}
                className={i === mainIndex && style.active}
              >
                {heading.name}
              </li>
            ))}
        </ul>

        <div className={style.imageContainer}>
          <span onClick={moveDown}>
            <i className="fas fa-chevron-left"></i>
          </span>
          <img
            src={ImageBaseUrl + data[mainIndex]?.contents[index].image}
            alt=""
            width="600"
            height="600"
            style={{ objectFit: "cover" }}
          />
          <span onClick={moveUp}>
            <i className="fas fa-chevron-right"></i>
          </span>
          <p>{data[mainIndex]?.contents[index].text_data}</p>
        </div>
      </div>
    </>
  );
}

export default Index;
