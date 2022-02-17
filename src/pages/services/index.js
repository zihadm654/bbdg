import { useState, useEffect } from "react";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import Recognition from "../../components/Recognition";
import { BaseApi } from "../../utils/utils";
import axios from "axios";
import Helmet from "react-helmet";

const Service = ({ service }) => {
  return (
    <>
      <Recognition
        headText={service.heading}
        para={service.subHeading}
        redirectUrl={service.perma_link}
      />
    </>
  );
};

function Index() {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseApi}/service/all`);
        const data = await response.data;
        const services = data.data.allChildren;
        setServiceData(services);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Services | BBDG</title>
      </Helmet>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          {/* <span className={BannerStyle.lowOpacity}>SERVICES</span> */}
        </p>
        <p className={BannerStyle.BigHeading}>SERVICES</p>
        <br />
        <p className={BannerStyle.midHeading}>
          WE OFFER A VARIETY OF
          <br />
          SERVICES TO SUIT YOUR
          <br />
          NEEDS.
        </p>
      </Banner>
      {serviceData?.map((service) => (
        <Service key={service._id} service={service} />
      ))}
      <Recognition
        headText="Have Questions?"
        para="If you have any questions or doubt please feel free to contact us"
        redirectUrl={"/contact/write-us"}
      />
    </>
  );
}

export default Index;
