import Banner from "../../../helpers/Banner/Banner";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Card from "../../../components/Card";
import Project from "../../../components/Project";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import styles from "./businessplantemplate.module.css";
import LayoutStyle from "../../../helpers/layout/layout.module.css";

import Markdown from "markdown-to-jsx";
// images
import dp from "../../../assets/images/dp.png";
import md from "../../../assets/images/md.png";
import ms from "../../../assets/images/ms.png";
import man from "../../../assets/images/man.png";
import hand from "../../../assets/images/hand.png";
function index() {
  const Content = `<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) Business plan template</strong></p>
  <p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>offers a free business plan template to help you to define your business, describe your business goals, expertise and thus document how your business will be profitable in the long run.</p>
  <p>Such a business plan is not only a necessity but also crucial to seek financing and investment avenues for your project. It is a recognised management tool that helps your business to understand and clarify what needs to be done and how your business plans to succeed in the goals in the long run.</p>
  <p><strong>Identify what your business plan must include - </strong></p>
  <p>This <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>template is designed to help entrepreneurs who wish to tap international markets.</p>
  <p>As a business development organization, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>has been associated with entrepreneurs for decades and is dedicated to helping them to succeed. This plan aims to take your business to the next level and boost your growth and success.</p>
  <p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) Entrepreneurs kit includes - </strong></p>
  <ul>
  <li>A blank business plan template along with a financial appendix</li>
  <li>A user and glossary</li>
  <li>An example business plan</li>
  <li>Instructions for and how-to articles</li>
  <li>Terms and conditions of use</li>
  <li>BBDG extensive template tools and resources</li>
  </ul>
  <p><strong><em>Subscribe to receive via email - tips and articles for entrepreneurs and information about Events and solutions. You can withdraw the consent at any time.</em></strong></p>`;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          SERVICES <i className="fas fa-chevron-right"></i> ADVISORY
          <span className={BannerStyle.lowOpacity}>
            {" "}
            <i className="fas fa-chevron-right"></i> BUSINESS PLAN TEMPLATE{" "}
          </span>
        </p>

        <p className={BannerStyle.BigHeading}>
          BUSINESS
          <br />
          PLAN
          <br />
          TEMPLATE
        </p>
        <br />
        <PrimaryButton text="Write Us" url="/contact/write-us" dark />
      </Banner>
      <div className={styles.maindiv}>
        <p className={styles.heading}>
          GET YOUR TAILORED BUSINESS PLAN TEMPLATE
        </p>
        <br />
        <br />
        <Markdown
          className={LayoutStyle.markDownStyle + " " + styles.markDownStyle}
        >
          {Content}
        </Markdown>
        <div className={styles.templateCards}>
          <Project image={man} heading="Sample A" />
          <Project image={hand} heading="Sample B" />
          <Project image={man} heading="Sample A" />
          <Project image={hand} heading="Sample B" />
          <Project image={man} heading="Sample A" />
          <Project image={hand} heading="Sample B" />
        </div>

        <br />
        <br />
        <br />
        <p className={styles.heading}>WHY CHOOSE A BUSINESS PLAN FROM US</p>
        <br />
        <br />
        <div className={styles.templateCards}>
          <Card
            image={dp}
            heading="Practical Tools"
            data="Need something changed or is there something not quite working"
          />
          <Card
            image={md}
            heading="LONG EXPERIENCE"
            data="Need something changed or is there something not quite working"
          />
          <Card
            image={ms}
            heading="GUIDANCE FROM INDUSTRY LEADERS"
            data="Need something changed or is there something not quite working"
          />
        </div>
        <br />
        <br />
        <p className={styles.heading}>GET YOUR TEMPLATE NOW</p>
        <br />
        <PrimaryButton text="Apply" dark />
      </div>
    </>
  );
}

export default index;
