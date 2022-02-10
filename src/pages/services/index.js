import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import CustomHead from "../../helpers/header/CustomHead";
import Recognition from "../../components/Recognition";
import { useRouter } from "next/router";
import { BaseApi } from "../../utils/utils";
import axios from "axios";

const Service = ({ service }) => {
  const router = useRouter();
  return (
    <Recognition
      headText={service.heading.split("-").join(" ")}
      para={service.subHeading}
      redirectUrl={service.perma_link}
    />
  );
};

function index(props) {
  const services = props.res.data.allChildren;

  return (
    <>
      <CustomHead title="SERVICES | BBDG" />
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
      {services.map((service) => (
        <Service service={service} />
      ))}
      <Recognition
        headText="Have Questions?"
        para="If you have any questions or doubt please feel free to contact us"
        redirectUrl={"/contact/write-us"}
      />
    </>
  );
}

export default index;

export async function getServerSideProps() {
  const response = await axios.get(`${BaseApi}/service/all`);
  const data = await response.data;

  return {
    props: {
      res: data,
    },
  };
}
