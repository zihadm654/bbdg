import CustomHead from "../../../helpers/header/CustomHead"
import Banner from "../../../helpers/Banner/Banner"
import BannerStyle from "../../../helpers/Banner/Banner.module.css"
import LayoutStyle from "../../../helpers/layout/layout.module.css"
import style from "./meet_our_team.module.css"
import ProjectCard from "../../../components/Project"
import CenterText from "../../../components/Text/CenterText"
import Quote from "../../../components/Quote"
import axios from "axios"
import { BaseApi, ImageBaseUrl } from "../../../utils/utils"
import Markdown from "markdown-to-jsx"
const Meet_our_team = (props) => {
    const Members = props.res.data;

    const content = '<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) meet our people</strong></p><p>With <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>you get to join a team of professionals and talented employees who work to promote entrepreneurship success and growth.</p><p>With us, all employees work towards one common goal - supporting enterprises to attain and move ahead.</p><p><strong>"</strong><em>I am proud to be associated with BBDG. We help clients to realize their potential and attain the best results for their business. We help them to look beyond the routine and achieve the desired results as their trustworthy partners."</em></p><p><em>Mohsin Khan</em></p><p><strong>"</strong><em>It is extremely gratifying to work with budding entrepreneurs. We help them to assess and evaluate their goals. We help new entrepreneurs to build long-term relationships. Each day is different and I love being at my job!".</em></p><p>John Lee</p><p><em>"I started my journey as an accounts executive and now I manage a portfolio of 10 businesses on my own. My team is supportive and we love being there to help international business enterprises to attain optimal results. "</em></p><p>Shyama Sood</p>'
    return (
        <>
            <CustomHead title="Meet Our Team | BBDG" />
            <Banner>
                <p className={BannerStyle.smallHeading}>ABOUT US <i className="fas fa-chevron-right"></i> CAREERS <span className={BannerStyle.lowOpacity}><i className="fas fa-chevron-right"></i> MEET OUR TEAM -
                    KNOW WHAT IT’S LIKE TO WORK HERE</span></p>
                <p className={BannerStyle.BigHeading}>MEET<br />OUR<br />TEAM</p>
                <br />
                <p className={BannerStyle.midHeading}>We’re here to help you  taking every step in your successful business journey</p>
            </Banner>
            <div className={LayoutStyle.RootDiv}>
                <div className={style.teamContainer}>

                    {
                        Members.map(member =>
                            <ProjectCard heading={member.name} image={`${ImageBaseUrl}${member.image}`} />
                        )
                    }
                </div>
            </div>
            <Markdown className={LayoutStyle.markDownStyle}>{content}</Markdown>
            <Quote text="Successful organizations make habits of things others don’t like to do, or don’t find time to do so, as wisely said He who wants to do everything will never do anything" />

        </>
    );

}

export default Meet_our_team;

export async function getStaticProps() {
    const res = await axios.get(`${BaseApi}/member/all`)
    const data = await res.data;

    return {
        props: {
            res: data,
        },
        revalidate: 10,
    }
}