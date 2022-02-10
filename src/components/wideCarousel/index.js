import { useState } from "react";
import style from "./widecarousel.module.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ImageBaseUrl } from "../../utils/utils";

const Card = ({ img, heading, subHeading, url }) => {
  return (
    <>
      <div className={style.customCard}>
        <img src={img} alt=""  />
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

function WideCarousel({ tab, title, data, indexValue = 0 }) {
  const [index, setIndex] = useState(indexValue);
  const [content, setContent] = useState(data);
  const [currentLimit, setCurrentLimit] = useState(3);
  const [expectedCount, setExpectedCount] = useState(currentLimit);
  const router = useRouter();

  useEffect(() => {
    const i = content.findIndex((item) => item.name.toLowerCase() === tab);
    if (i == -1) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  }, []);

  return (
    <>
      <div className={style.mainDiv}>
        <h1>{title}</h1>
        <ul>
          {content &&
            content.map((heading, i) => (
              <li
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
          {data[index].contents.slice(0, currentLimit).map((item) => (
            <Card
              url={router.pathname + "/" + content[index].name.toLowerCase()}
              img={ImageBaseUrl + item.image}
              heading={item.heading}
              subHeading={item.sub_heading}
            />
          ))}
          {expectedCount < data[index].contents.length && (
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