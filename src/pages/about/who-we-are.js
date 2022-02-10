import CustomHead from "../../helpers/header/CustomHead"
import Banner from "../../helpers/Banner/Banner"
import BannerStyle from "../../helpers/Banner/Banner.module.css"
import LayoutStyle from "../../helpers/layout/layout.module.css"
import CenterText from "../../components/Text/CenterText"
import styles from "./about-us.module.css"
import Progress from "../../components/Progress"
import axios from "axios";
import {BaseApi} from "../../utils/utils"
import NavigationProjectCards from "../../components/Abous-Us/NavigationProjectCards"
import Markdown from 'markdown-to-jsx';
const AboutUS = (props) => {
  const IndicatorData = props.res.data
  const Indicators = IndicatorData.map(x=> {
    
    return({
          percentage: x.description,
          subHeading: x.title,
        }
        
    )
})


const Content = `<p><strong>Welcome to Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong></p><p>According to <a href="https://www.forbes.com/sites/neilpatel/2015/01/16/90-of-startups-will-fail-heres-what-you-need-to-know-about-the-10/amp/">Forbes</a> magazine, nine out of every ten startups fail. This is a brutal truth, and the performance of the startups worldwide is dismal, with 21.5 per cent of startups taking the exit route in the early years itself and 50 per cent by the fifth <a href="https://www.investopedia.com/articles/personal-finance/040915/how-many-startups-fail-and-why.asp">year</a>. This is a harsh and grim reality, and entrepreneurs need to be reasonably aware of the apparent challenges ahead of them before they embark on their own business.</p><p>This is where Bajaj Global Business Development &amp; Consultancy Group (BBDG) comes into the support of entrepreneurs. We combine in-depth exploration, marketing experience, and strategic planning, utilizing our team of cross-functional specialists to deliver the best solutions for your fledgling business.</p><p>By integrating the strategic frameworks and substantial experience, we can provide actionable insights for your business betterment and improvement programs. At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>you can trust our experts to transform your business. They have assisted myriad enterprises like consumer goods, electronics, gaming, manufacturing sector, among a host of other businesses as well. BBDG prides itself on being the experts in the retail sector as well.</p><p><strong>Assisting businesses globally to etch their mark</strong></p><p>At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>we have been instrumental in securing financial aid, secured funding, negotiations, deals, etc., for our clients globally and. As a result, your organization gets a straightforward yet powerful end-to-end serviceable program.</p><p>With the aid of these meticulous approaches, strategic plans, human resources, research, etc. - small businesses have been able to accomplish themselves. We help them tap into unanticipated business alternatives using our explicit analysis and dedicated project managers with our reasonable recommendations and support.</p><p><strong>Who can approach us?</strong></p><p>As a business consulting and development organization, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) promotes</strong> organizations involved in marketing, procurement, sales, promotion of local and international markets, etc. We establish our high-end marketing support, supervision, negotiation skills, etc., at the client's disposal and aid in expanding markets for their products or services.</p><p>Other outstanding services extended by us encompass the following -</p><ul><li>Evaluation of the market potential of the products and services</li><li>Discovering competent human resources, financing options, agents, and partners</li><li>Screening and selection of the most desirable partners for specific objectives and to propel business promotion</li><li>Analyzing new opportunities by assessment of the track record, financial strength, and marketing capabilities.</li><li>Negotiation and structuring the transactions</li><li>Providing active support and guidance in locating new business opportunities and forging a symbiotic relationship</li><li>Assisting the businesses in their pursuit of international development and acquisitions</li></ul><p><strong>We are different from others and hence deliver unique solutions that fit!</strong></p><p>At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>we are a business consulting and training institution dedicated to entrepreneurial growth. We assist in establishing resilient businesses through our comprehensive financing, advisory, and capital growth plans with a special focus on small and medium businesses.</p><p>Hence, as an entrepreneur, you need encouragement and backing at all stages of business development through our dedicated team globally and. So, business for us is the overall success of our clients instead of their dollar valuation. With us, you can learn to identify business opportunities and maximize the potential of the business.</p>`
  return (
    <>
      <CustomHead title="WHO WE ARE " />
      <Banner>
        <p className={BannerStyle.smallHeading}>ABOUT US <span className={BannerStyle.lowOpacity}><i className="fas fa-chevron-right"></i> WHO WE ARE </span> </p>
        <p className={BannerStyle.BigHeading}>WHO WE
          <br />
          ARE </p>
        <p className={BannerStyle.midHeading}>Welcome to Bajaj Global Business Development & Consultancy Group (BBDG)</p>

      </Banner>
      
      <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
      < Progress

        heading="WE ARE STANDOUT EXPERTS IN BUSINESS"
        datas={Indicators}
       />
      <div className={LayoutStyle.RootDiv}>
        <div className={styles.teamContainer}>
          <NavigationProjectCards />
        </div>
      </div>


    </>
  );

}

export default AboutUS;

export async function getServerSideProps() {
  const response = await axios.get(`${BaseApi}/universal/whoweare1`)
  const data = await response.data;

 
  return {
      props: {
          res: data
      }
  }

}