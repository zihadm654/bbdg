import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css"
import layoutStyle from "../../../helpers/layout/layout.module.css"
import { BaseApi, ImageBaseUrl } from "../../../utils/utils"
import CenterText from "../../../components/Text/CenterText";
import axios from "axios";
import CustomHead from "../../../helpers/header/CustomHead";
const index = (props) => {
    const Data = props.res.data[0];
    console.log(Data)

    return (
        <>
            <CustomHead title={Data.heading.split("-").join(" ")} />
            <Banner>
                <p className={BannerStyle.smallHeading}>news and events <i className="fas fa-chevron-right"></i> <span className={BannerStyle.lowOpacity}>{Data.heading.split("-").join(" ")}</span></p>
                <p className={BannerStyle.BigHeading}>{Data.heading.split("-").join(" ")}</p>
                <p className={BannerStyle.midHeading}>{Data.subHeading}</p>
            </Banner>
            <CenterText paragraphs={Data.text} />
        </>
    )
}

export default index;

export async function getServerSideProps({ params: { id } }) {
    const newsAndEvents = await axios.get(`${BaseApi}/newsandevents/${id}`)
    const response = newsAndEvents.data;

    return {
        props: {
            res: response,
            temp: id
        }
    }

}