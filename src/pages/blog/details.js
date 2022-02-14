import { useEffect, useState } from "react";

import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import axios from "axios";
// import Recognition from "../../components/Recognition";
import CenterText from "../../components/Text/CenterText";
import { BaseApi } from "../../utils/utils";
import { useParams } from "react-router";

const SubSection = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BaseApi}/blog/${id}`);
      const data = await response.data;
      setPost(data.data[0]);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          blog <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> {post.heading}</span>
        </p>
        <br></br>
        <p className={BannerStyle.BigHeading}>{post.heading}</p>
        <br></br>
        <p className={BannerStyle.midHeading}>{post.sub_heading}</p>
      </Banner>
      <CenterText paragraphs={post.text_data} />
    </>
  );
};

export default SubSection;
