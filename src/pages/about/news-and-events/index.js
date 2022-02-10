import style from "./index.module.css"
import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css"
import Quote from "../../../components/Quote"
import ProjectCard from "../../../components/Project"
import LayoutStyle from "../../../helpers/layout/layout.module.css"
import {BaseApi, ImageBaseUrl} from "../../../utils/utils"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomHead from "../../../helpers/header/CustomHead"
import Markdown from "markdown-to-jsx";
const index = (props) => {
    const router = useRouter();
    const [newsAndEventsData, setNewsAndEventsData] = useState(props.res.data)


    const Content = `<p>Follow the latest news on <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong>, activities, access entrepreneurship development plans, resources and information for media and communication channels.</p><p>All our press releases are filed in a comfortable and easy to access way. You can make your selection using the right selection and filter criteria.</p><p><strong>Our spokespersons</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) spokespersons</strong></p><p>Below is the list of our national and international spokespersons. If you do not find an appropriate person to talk to or meet to discuss your media bytes then you may directly contact the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> media relations team.</p><p><strong>Visuals and logo</strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) visual and logos</strong></p><p>The media relations is in the top priority of the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> and public relations endeavours. When you wish to use our business as a reference, we ask you to select the right images from the below mentioned gallery. You can easily get the Bajaj Global Business Development &amp; Consultancy Group (BBDG) official logo to go along with your news feed </p><p><strong>High resolution images for your use and reference</strong></p><p>The <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> logo is pending for approval. You may still need to seek out the consent of our media team before publishing or reproduction. To get your own copy of our logo and marketing kit, you can write to our marketing team.</p>`;
    return(
        <>
        <CustomHead title="News and events" />
        <Banner>
            <p className={BannerStyle.smallHeading}><span className={BannerStyle.lowOpacity}>news and events</span></p>
            <p className={BannerStyle.BigHeading}>News<br />and<br />Events</p>
            <p className={BannerStyle.midHeading}>lorem ipsum dolor sit amet</p>
        </Banner>
        
        <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
        <div className={LayoutStyle.RootDiv + " " + style.cardContainer}>
            {newsAndEventsData.map((data, index)=>{
                return(
                <ProjectCard 
                    image={`${ImageBaseUrl}${data.thumbnail}`}
                    heading={data.heading.split("-").join(" ")}
                    url={`${router.pathname}/${data.heading}`}
                />
                )
            })}
        </div>
        <Quote />
        </>
    )
}

export default index;

export async function getStaticProps(){
    const newsAndEvents = await axios.get(`${BaseApi}/newsandevents/all`)
    const response = newsAndEvents.data;

    return{
        props:{
            res:response
        },
        revalidate: 10
    }

}