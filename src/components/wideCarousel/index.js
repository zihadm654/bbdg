import { useState } from "react";
import style from "./widecarousel.module.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useEffect } from "react";
import { ImageBaseUrl } from "../../utils/utils";
import { useLocation } from "react-router";
const Card = ({ img, heading, subHeading, url }) => {
  return (
    <>
      <div className={style.customCard}>
        <img src={img} alt="" />
        <div className={style.blueContainer}>
          <span>
            <p className={style.projectHeading}>
              {heading}
              <span className={style.blueLine}></span>
            </p>
            <p className={style.projectSubHeading}>{subHeading}</p>
          </span>
          <PrimaryButton text="Check out" url={url} />
        </div>
      </div>
    </>
  );
};

function WideCarousel({ tab, title, data }) {
  const [index, setIndex] = useState(0);
  const [currentLimit, setCurrentLimit] = useState(3);
  const [expectedCount, setExpectedCount] = useState(currentLimit);
  const { pathname } = useLocation();
  useEffect(() => {
    const i = data && data.findIndex((item) => item.name.toLowerCase() === tab);
    if (i === -1) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  }, [data, tab]);
  return (
    <>
      <div className={style.mainDiv}>
        <h1>{title}</h1>
        <ul>
          {data &&
            data.map((heading, i) => (
              <li
                key={i}
                onClick={() => {
                  setIndex(i);
                  setCurrentLimit(3);
                  setExpectedCount(currentLimit);
                }}
                className={i === index && style.active}
              >
                {heading.name}
              </li>
            ))}
        </ul>
        <div className={style.carousel}>
          {data &&
            data[index]?.contents
              .slice(0, currentLimit)
              .map((item, i) => (
                <Card
                  key={i}
                  url={pathname + "/" + data[index].name.toLowerCase()}
                  img={ImageBaseUrl + item.image}
                  heading={item.heading}
                  subHeading={item.sub_heading}
                />
              ))}
          {expectedCount < data && data[index]?.contents.length ? null : (
            <div
              className={style.discover}
              onClick={() => {
                setCurrentLimit((prev) => prev + 3);
                setExpectedCount((prev) => prev + 3);
              }}
            >
              view more
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WideCarousel;
