import { useState } from "react";
import style from "./carousel.module.css";
import { ImageBaseUrl } from "../../utils/utils";
import { useLocation } from "react-router";

const Card = ({ img, heading, subHeading, url }) => {
  return (
    <a href={url}>
      <div className={style.customCard}>
        <img src={img} alt="" width="220" height="240" />
        <div className={style.blueContainer}>
          <p className={style.projectHeading}>
            {heading} <span className={style.blurLine}></span>
          </p>
          <p className={style.projectSubHeading}>{subHeading}</p>
        </div>
      </div>
    </a>
  );
};

function Carousel({ title, data }) {
  const [index, setIndex] = useState(0);
  const { pathname } = useLocation();
  return (
    <>
      <div className={style.mainDiv}>
        <h1 className={style.title}>{title}</h1>
        <ul>
          {data &&
            data.map((heading, i) => (
              <li
                onClick={() => setIndex(i)}
                className={i === index && style.active}
              >
                {heading.name}
              </li>
            ))}
        </ul>
        <div className={style.carousel}>
          {/* {data[index].contents.map((item) => (
            <Card
              url={
                pathname.toString === "/"
                  ? "/services/it-solutions/portfolio?q=" +
                    data[index].name.toLowerCase()
                  : pathname.toString +
                    "/" +
                    "portfolio?q=" +
                    data[index].name.toLowerCase()
              }
              img={ImageBaseUrl + item.image}
              heading={item.heading}
              subHeading={item.sub_heading}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default Carousel;
