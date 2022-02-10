// import { useEffect } from "react";
import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css"
import axios from "axios";
import CenterText from "../../../components/Text/CenterText";
import {BaseApi} from "../../../utils/utils"
import CustomHead from "../../../helpers/header/CustomHead"
const SubSection = (props) => {
    const Data = props.res.data[0];
    
    return (
        <>
        <CustomHead title={Data.heading} />
            <Banner>
                <p className={BannerStyle.smallHeading}>about <i className='fas fa-chevron-right'></i><span className={BannerStyle.lowOpacity}> {Data.heading}</span></p>
                <br></br>
                <p className={BannerStyle.BigHeading}>{Data.heading}</p>
                <br></br>
                <p className={BannerStyle.midHeading}>{Data.subHeading}</p>
            </Banner>
            <CenterText paragraphs={Data.text} />
        </>
    )
}

export async function getServerSideProps({ params: { subSection, id } }) {
    const response = await axios.get(`${BaseApi}/about/${subSection}`)
    const data = await response.data;

    return {
        props: {
            res: data
        }
    }

}



export default SubSection;
