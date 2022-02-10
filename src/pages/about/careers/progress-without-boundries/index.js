// import { useEffect } from "react";
import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css"
import LayoutCSS from "../../../../helpers/layout/layout.module.css"
import CustomHead from "../../../../helpers/header/CustomHead"
import Markdown from "markdown-to-jsx";
const index = () => {
    
    var Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) helps your business to progress without boundaries</strong></p><p>In today's interconnected and interdependent society, it is essential to understand the world in an international context. Many organisations are in search of the right talent who can address the problems faced by cross-cultural organizations and overcome issues that occur on a global scale.</p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>understands these issues clearly and helps your business to address the international issues using the aid of our top brass. As a result, your business is able to survive and gain momentum in the long run.</p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>professionals help your business to look forward and address issues associated with international business growth and development. We will help your business to attain the best results and negotiate across borders. Through this approach, your top brass is able to navigate and achieve the optimal performance internationally by imbibing skills like the following -</p><ul><li>Leadership</li><li>Strategic management</li><li>Communication</li><li>Problem identification and characterization</li><li>Decision making</li><li>Organization</li><li>Reporting</li></ul><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>helps your top executives to identify the critical aspects of international operations. We also help you to analyze the global business challenges and negotiate with the key international businesses.</p>`
    return (
        <>
        <CustomHead title="progress without boundries" />
            <Banner>
                <p className={BannerStyle.smallHeading}>about <i className='fas fa-chevron-right'></i> careers <i className='fas fa-chevron-right'></i><span className={BannerStyle.lowOpacity}> progress without boundries</span></p>
                <br></br>
                <p className={BannerStyle.BigHeading}>progress without boundries</p>
                <br></br>
                <p className={BannerStyle.midHeading}>Bajaj Global Business Development & Consultancy Group (BBDG) helps your business to progress without boundaries
</p>
            </Banner>
            
            <Markdown className={LayoutCSS.markDownStyle}>{Content}</Markdown>
        </>
    )
}




export default index;
