import CustomHead from "../../../helpers/header/CustomHead"
import Banner from "../../../helpers/Banner/Banner"
import BannerStyle from "../../../helpers/Banner/Banner.module.css"
import styles from "../about-us.module.css"
import ProjectCard from "../../../components/Project"
import Recognition from "../../../components/Recognition"
import CenterText from "../../../components/Text/CenterText"
import NavigationProjectCards from "../../../components/Abous-Us/NavigationProjectCards"
import { BaseApi } from "../../../utils/utils"
import axios from "axios"
import { useRouter } from "next/router";
import Markdown from "markdown-to-jsx"
import LayoutStyle from "../../../helpers/layout/layout.module.css"
const index = (props) => {
    const Content = `<p><strong>Events and sponsorships</strong></p><p><strong>Sponsorships - </strong></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>regularly hosts events that recognise the contribution made by international businesses to the global economy and development. One of these events is the Small Business Week that gives training and development opportunities for international entrepreneurs and helps them to realise their potential. It is a great chance for people to meet and share their business ideas and opportunities.</p><ul><li><strong>Managing your business and its finances</strong></li></ul><p>It is important to ensure that you have sufficient funds and capital to attain the optimal results for your business. You can easily familiarize your business with the national rules and regulations regarding capital and taxations. As a business owner, you need to ensure that your business pays the correct sales tax for your goods and services rendered.</p><p>For instance - In Canada, you need to pay either of the two taxes i.e. -</p><ul><li>Federal tax including Goods and Sales Tax or Harmonized Sales Tax or HST/GST</li></ul><p>Even if you are a small supplier then you need to assess the total revenue. If the same is less than 30000 $ CAD in the last four consecutive calendar quarters. A small supplier can elect to register and then they can collect the taxes. To understand more about the tax laws in your area, it is best to consult a certified taxation lawyer to attain the best results.</p><ul><li>Provincial Sales Tax or PST</li></ul><p>It is a sales tax that is levied on goods and services in provinces that have not harmonized their PST with the federal one. Since rates are determined by each province, these vary from one to another.</p><ul><li>Retail Sales Tax or RST from Manitoba</li><li>Quebec Sales Tax or QST for the state of Quebec</li><li>HST has been merged with the GST which is a combination of GST and PST.</li></ul><ul><li><strong>Invoicing basics or getting paid for the products and services</strong></li></ul><p>Cash flow is crucial to the success of any business and at the same time, it is essential to have a proper invoicing system and tools in place. This helps to ensure that you get paid on time. For this, you need to ensure that your invoices -</p><ul><li>Have all the relevant information like the product details, contact information, due dates, etc.</li><li>Offer you solutions that are appropriately branded and sent to the customer immediately</li><li>You need to make a system to track the status of the invoices and use software or tools to ensure that payments are made timely.</li><li>If you are dealing with the paper based invoicing system then you need to store these safely since you may need them more often</li><li>Make your invoices simple and easy to understand. This makes it easy for customers to check these and pay you.</li></ul><p>Whether you are a startup or a growing business or planning to expand internationally, having the aid of the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>can easily help in facilitating the process. The mentors of BBDG also help you to identify and create a suitable business account to augment your business needs and outcomes smoothly.</p><ul><li><strong>Managing your finances</strong></li></ul><p>Apart from your instincts, you can rely on your business's long term financial needs through accounting and financial software, etc.</p><ul><li>Bookkeeping - It refers to the everyday practices of recording, categorizing and cross-referencing the financial transactions that your business makes each day.</li><li>Accounting - It helps you to turn the data into insight. An accountant analyzes and interprets all the information that you need to collect to prepare financial statements and summarise the business performance. These help you to forecast future cash flow and devise a long term business strategy. It also helps you to file statutory returns and smoothen the tax processes.</li></ul><p>Setting up a new business internationally as a newcomer may seem daunting and confusing. However, with the aid of the mentors from <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>the process becomes easy and simple. The mentors offer you the right guidance and support to help you to jumpstart your business with ease and convenience.</p><p>At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>the mentors are dedicated to helping newcomers assess and achieve their business goals. Since a crucial aspect of this is to attain a partner to invest in your business idea, BBDG helps to procure such support to attain newcomer success. Working with us can help you to sort your financial situation and kickstart your business.</p><ul><li><strong>Social sponsorship opportunities</strong></li></ul><p>Each year, the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>supports the initiatives undertaken by social entrepreneurs to aid in their mission of national, regional and international development. Such sponsorship requests must be submitted to the office by using the online application form along with the visibility planning.</p>`;
    const router = useRouter();
    const childrens = props.res.data.allChildren;
    const childrensList = childrens.map(children => {
        return (
            < Recognition
                headText={children.heading}
                para={children.subHeading}
                redirectUrl={router.pathname + "/" + children._id}
            />

        )
    })
    return (
        <>
            <CustomHead title=" EVENTS AND SPONSORSHIPS | BBDG" />
            <Banner>
                <p className={BannerStyle.smallHeading}>ABOUT US  <span className={BannerStyle.lowOpacity}><i className="fas fa-chevron-right"></i> EVENTS AND SPONSORSHIPS  </span> </p>
                <p className={BannerStyle.BigHeading}> EVENTS AND SPONSORSHIPS </p>
                <p className={BannerStyle.midHeading}>Bajaj Global Business Development & Consultancy Group (BBDG) regularly hosts events that recognise the contribution made by international businesses to the global economy and development. </p>

            </Banner>
        
      <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
            {childrensList}
            <div className={LayoutStyle.RootDiv}>
                <div className={styles.teamContainer}>

                    <NavigationProjectCards />
                </div>
            </div>
        </>
    );

}

export default index;

export async function getStaticProps() {
    const response = await axios.get(`${BaseApi}/about/all/awards-and-distinctions`)
    const data = await response.data;

    return {
        props: {
            res: data
        },
        revalidate: 10,
    }
}