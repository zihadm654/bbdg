// import { useEffect } from "react";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import axios from "axios";
import CenterText from "../../components/Text/CenterText";
import CustomeHead from "../../helpers/header/CustomHead";
import { BaseApi } from "../../utils/utils";
import Markdown from 'markdown-to-jsx';
import LayoutStyle from '../../helpers/layout/layout.module.css'  

const SubSection = (props) => {
  const Data = props.res.data[0];
  const Content = Data.text_data.replace("&#39;","'");
  return (
    <>
      <CustomeHead title={`${Data.heading}`} />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          I AM <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> {Data.heading}</span>
        </p>
        <br></br>
        <p className={BannerStyle.BigHeading}>{Data.heading}</p>
        <br></br>
        <p className={BannerStyle.midHeading}>{Data.sub_heading}</p>
      </Banner>
      <Markdown className={LayoutStyle.markDownStyle}>{ Content }</Markdown>
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const response = await axios.get(`${BaseApi}/iam/${id}`);
  const data = await response.data;

  return {
    props: {
      res: data,
    },
  };
}

export default SubSection;
