import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../../helpers/layout/layout.module.css";
import styles from "../about-us.module.css";
// import ProjectCard from "../../../components/Project";
// import CenterText from "../../../components/Text/CenterText";
import NavigationProjectCard from "../../../components/Abous-Us/NavigationProjectCards";
import Markdown from "markdown-to-jsx";

const Index = () => {
  const Content = `<p><strong>Corporate Governance</strong></p><p><span style="color: #ff6600;"><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>mandate is enacted as per the Business Development Bank of Canada Act, passed in July, 1995.</span></p><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>is governed by an independent board of directors that helps to ensure that the highest standards of quality and corporate governance practices are available. Various committees assist these Board of Directors and discharge their oversight duties. The management team also helps to execute the favorable business strategy and oversee the everyday operations at BBDG.</p><ul><li><strong>Corporate plan summary</strong></li></ul><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>is required to submit an annual five year corporate plan to the Federal government outlining the objectives and expected performance.</p><p><strong><em>View the Summary of Amendment and Original corporate plan (PDF).</em></strong></p><ul><li><strong>Governance and committees</strong></li></ul><p>At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>the Board of Directors assume the responsibility for stewardship of the organization and supervise the direction and management.</p><p>As a result, it delegates to the senior management team, the power to manage the business of BDC and expects the management to provide the board with regular, complete and accurate information.</p><p>All the activities of the board are defined in the Mandate of the Board of Directors. In addition to the same, the BDC Board code of conduct aims to establish a climate of honesty, truthfulness and integrity in all activities of the Board.</p><ul><li><strong>Committee</strong></li></ul><p><em>The following committees have been established to aid the Board to perform its duties - </em></p><ul><li><strong>Auditing and conduct committee</strong></li></ul><p>This committee advises the Board of Directors on the soundness of the financial situation of the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>especially in terms of overseeing the standards of integrity and conduct. Apart from this, an internal control system, financial assessment and auditing processes are undertaken to ensure compliance and capital management. The team also takes up internal audits, annual audits and periodic assessment to attain the best results.</p><ul><li><strong>The Board investment committee</strong></li></ul><p>This committee from the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>approves venture capital and equity investments. The team also deals with the delegation of authority to the management and then submit reviews and recommendations to the top brass. This committee is also responsible for review and assessment of all forms of risks associated with initiatives like use of Clean Technology and similar eco-friendly products. This committee is also responsible for reviewing and recommendations for approvals to the board - on an annual basis. All material venture capital and equity investments must form the part of the BBDG Corporate plan and as per the BBDG Capital investment reviews.</p><ul><li><strong>The Board Risk committee</strong></li></ul><p>The Board risk committee ensures that the key risks of the BBDG are identified and managed appropriately. For this purpose, a Risk Appetite assessment plan is taken up. This Risk Appetite Framework and risk management policies of the Board ensures that there are no key risks like - financial, credit, market, strategic planning and operational framework.</p><p>The committee approves loans, guarantees, growth and business transition capital along with private equity transactions. They must also deal with the process of securities in special transactions and exceed the delegation of authority of senior management and recommend to the Board factors that go beyond its authority.</p><ul><li><strong>Governance and Nomination Committee</strong></li></ul><p>Such a committee advises the Board of Directors in fulfilling its corporate governance responsibilities. The committee is also responsible for reviewing BBDG corporate governance policies on matters relating to composition of the Boards, its commitment and making recommendations on aspects like appointment of Chairperson, Directors and President.</p><ul><li><strong>Human resource committee</strong></li></ul><p>This committee oversees and advises the Board of Directors on corporate policies, strategies and similar aspects related to the human resource management including - policies, risks, recruitment, retention, training and development, pension plans, performance management, ethical code of conduct, etc. Apart from this, the same also advises the Board on matters related to the investment of funds established and maintained with respect to the existing pension plans of BBDG. The members are also responsible for reviewing and recommendations for succession planning for the top brass of the BBDG as well as the compensation package for the employees.</p>`;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          ABOUT US{" "}
          <span className={BannerStyle.lowOpacity}>
            <i className="fas fa-chevron-right"></i> CORPORATE GOVERNANCE{" "}
          </span>{" "}
        </p>
        <p className={BannerStyle.BigHeading}>
          {" "}
          CORPORATE <br></br> GOVERNANCE{" "}
        </p>
        <p className={BannerStyle.midHeading}>
          Bajaj Global Business Development & Consultancy Group (BBDG) is
          governed by an independent board of directors that helps to ensure
          that the highest standards of quality and corporate governance
          practices are available.{" "}
        </p>
      </Banner>

      <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>

      <div className={LayoutStyle.RootDiv}>
        <div className={styles.teamContainer}>
          <NavigationProjectCard />
        </div>
      </div>
    </>
  );
};

export default Index;
