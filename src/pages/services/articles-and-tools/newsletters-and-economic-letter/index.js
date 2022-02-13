import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
import NewsLetterCard from "../../../../components/NewsLetterCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseApi } from "../../../../utils/utils";
import styles from "./index.module.css";
import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import CenterText from "../../../../components/Text/CenterText";

const Index = () => {
  // const [post, setPost] = useState([]);
  const [limit, setLimit] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(null);
  const [lastNewsLetterId, setLastNewLetterId] = useState("");
  const [newsLetterArray, setNewsLetterArray] = useState([]);

  useEffect(() => {
    setLimit(2);
    const fetchData = async () => {
      const response = await axios.get(
        `${BaseApi}/newsletterandeventletters/all`
      );
      const data = await response.data;
      const articleData = await data.data[0];

      // setPost(articleData);
      setIsNextAvailable(articleData.isNextAvailable);
      setLastNewLetterId(articleData.lastNewsLetterId);
      setNewsLetterArray(articleData.foundNewsLetters);
    };
    fetchData();
  }, []);
  const LoadMoreData = async (id) => {
    setLoadMore(true);
    const response = await axios.get(
      `${BaseApi}/newsletterandeventletters/all?limit=${limit}&id=${lastNewsLetterId}`
    );
    const res = await response.data;
    setLastNewLetterId(res.data[0].lastNewsLetterId);
    setIsNextAvailable(res.data[0].isNextAvailable);
    const newData = res.data[0].foundNewsLetters;
    var LetterArray = [...newsLetterArray];
    newData.map((letterData) => {
      const newList = LetterArray.push(letterData);
      return newList;
    });
    setNewsLetterArray(LetterArray);
    setLoadMore(false);
  };
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          services <i className="fas fa-chevron-right"></i> articles and tools{" "}
          <i className="fas fa-chevron-right"></i>{" "}
          <span className={BannerStyle.lowOpacity}>
            newsletters and economic letter
          </span>
        </p>
        <br />
        <p className={BannerStyle.BigHeading}>
          newsletters and economic letter
        </p>
        <br />
      </Banner>
      {newsLetterArray.map((data, index) => {
        return (
          <NewsLetterCard
            key={index}
            heading={data.subject}
            subHeading={data.sub_heading}
            id={data._id}
          />
        );
      })}

      <div
        onClick={() => LoadMoreData(lastNewsLetterId)}
        className={
          isNextAvailable === false
            ? styles.hidden
            : loadMore === true
            ? styles.hidden
            : styles.buttonContainer
        }
      >
        <SecondaryButton text="Discover More" dark />
      </div>

      <div
        className={loadMore === false ? styles.hidden : styles.buttonContainer}
      >
        <CenterText paragraphs="Loading..." />
      </div>
    </>
  );
};

export default Index;
