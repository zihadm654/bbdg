// import { useEffect } from "react";

import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import axios from "axios";
import Recognition from "../../components/Recognition";
import CenterText from "../../components/Text/CenterText";
import CustomeHead from "../../helpers/header/CustomHead";
import { BaseApi } from "../../utils/utils";
const SubSection = (props) => {
  const Data = props.res.data[0];
  console.log(Data);

  return (
    <>
      <CustomeHead title={`${Data.heading}`} />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          blog <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> {Data.heading}</span>
        </p>
        <br></br>
        <p className={BannerStyle.BigHeading}>{Data.heading}</p>
        <br></br>
        <p className={BannerStyle.midHeading}>{Data.sub_heading}</p>
      </Banner>
      <CenterText paragraphs={Data.text_data} />
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const response = await axios.get(`${BaseApi}/blog/${id}`);
  const data = await response.data;

  return {
    props: {
      res: data,
    },
  };
}

export default SubSection;

// const router = useRouter();

// // service/a
// const breadCrumbs = (url) => {
//     const currentUrl = decodeURI(url);
//     console.log(currentUrl);
//     var urls = currentUrl.substring(1, currentUrl.length).split("/");
//     var finalResult = urls[0];
//     if (urls.length > 1) {
//         for (var i = 1; i < urls.length - 1; i++) {
//             finalResult = finalResult + " <i className='fas fa-chevron-right'></i> " + urls[i];
//         }
//         finalResult = finalResult + "  <i className='fas fa-chevron-right'></i> <span className={BannerStyle.lowOpacity}>" + urls[i]+"</span>";
//         return finalResult;
//     } else
//         return finalResult;
// };

// const route = breadCrumbs(router.asPath);
