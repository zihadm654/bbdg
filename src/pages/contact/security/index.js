import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import styles from "../policy.module.css";
import Markdown from "markdown-to-jsx";

function index() {
  var Content = `
  <p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) website security and privacy policy</strong></p>
<p>Personal data is information that can be used by <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>and its partners to identify an individual.</p>
<p>At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>we or our employees may collect the following information -</p>
<ul>
<li>First name,</li>
<li>Last name,</li>
<li>email address</li>
<li>Zip code,</li>
<li>Contact number.</li>
</ul>
<p>If you would like to receive in any one of our publications, newsletter or to request any information associated with&nbsp; <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website, please contact our customer service representatives.</p>
<p>The data collected by this method will be used for handling queries that may arise in connection with the troubleshooting efforts.</p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> will not transfer, sell, rent, or lease any form of personal data, information and compliance procedures, etc. to any third party without first receiving your permission. Moreover, the personal information contained in any BBDG application process is available only to the employees and not for our affiliates that are required to have it in order to respond to your inquiry.</p>
<p>In some cases, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>may receive the request for disclosure of information that you are using to access this website. We may however use this information internally for quality improvement, to manage the content of our website, and to determine what features and services are crucial for our users.</p>
<p>As the responsible party for the processing of the information, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> offers the necessary technical and organisational measures, in accordance with the current legislative processes and legal compliance&nbsp; and that too on aspects like the protection of the information or unauthorised loss, use, disclosure or access by the external agencies.</p>
<p>While <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> will take all the necessary measures to protect your personal data, etc. we however cannot guarantee the security of such information at any time. This is in light of the fact that no present method of communication or electronic storage is completely secure. <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> shall not be responsible for any personal information that you post to the public, such as on our blog.</p>
<p>By using <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> website, you consent to the collection, use, and transfer of information. By agreeing with the terms and conditions of this document, you are according to your implied consent.</p>
<p>Phone and email fraud have become a widespread problem. Fraudulent organizations often contact people who are trying to obtain sensitive information about their business. While at <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> we are fully committed to keeping the privacy of our customers, we also use safe connections to ensure that your information is protected.</p>
<p>If you receive a suspicious call or email that appears to be associated with <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>or its international locations or client database, etc. please contact us. The safety of our online customers is paramount to us. Your personal and financial information is&nbsp; likewise important and the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> will do its best to keep it safe. We also use reasonable security measures, as well as the most appropriate technology initiatives to protect the privacy of our esteemed customers. This improves data privacy and prevents the loss, and the misuse of information.</p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> safety and technology practices are regularly updated and updated to ensure a safe environment and attain data protection for our customers. We also monitor traffic to identify, prevent and investigate any suspicious activity.</p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>staff is similarly trained in these aspects, retaining information, security awareness and management of sensitive information.</p>
  `;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          <span className={BannerStyle.lowOpacity}>Security</span>
        </p>
        <p className={BannerStyle.BigHeading}>SECURITY</p>
        <p className={BannerStyle.midHeading}>
          HOW WE USE YOU PERSONAL
          <br />
          INFORMATION
        </p>
      </Banner>
      <div className={styles.bluecontainer}>
        <p>
          Here are the Terms of use.{" "}
          <span style={{ textDecoration: "underline" }}>Click here</span> to
          view those specific to use of Client Space
        </p>
        <div className={styles.listDiv}>
          <p className={styles.specialList}>
            &#62;{" "}
            <a href="#About-our-online-services"> About our online services </a>
          </p>
          <p className={styles.specialList}>
            {" "}
            &#62; <a href="#Your-obligations"> Your obligations</a>
          </p>
          <p className={styles.specialList}>
            {" "}
            &#62; <a href="#Our-obligations"> Our obligations</a>
          </p>
          <p className={styles.specialList}>
            &#62;{" "}
            <a href="#Exclusion-of-our-liability">
              {" "}
              Exclusion of our liability
            </a>
          </p>
          <p className={styles.specialList}>
            {" "}
            &#62;{" "}
            <a href="#About-these-Terms-of-use"> About these Terms of use</a>
          </p>
          <p className={styles.specialList}>
            {" "}
            &#62; <a href="#How-to-contact-us"> How to contact us</a>
          </p>
        </div>{" "}
        <Markdown>{Content}</Markdown>
        <p className={styles.mainHeading}>Do you need to read this?</p>
        <p>
          Probably! These Terms of use apply to you if you use our online
          services. For example, if:
        </p>
        <ul className={styles.ul}>
          <li>You visit our website, bbdg.in</li>
          <li>You subscribe to our newsletter</li>
          <li>You apply online for a loan</li>
          <li>
            You use your Client Space (you also need to read the
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "Bold",
                fontStyle: "italic",
                color: "white !important",
              }}
            >
              <a href="/contact/terms-of-use/client-space">
                Terms of use for your Client Space
              </a>
              &nbsp;
            </span>
            )
          </li>
        </ul>
        <p>
          By using our online services, you agree to follow BBDG s Terms of use.
        </p>
        <p className={styles.mainHeading} id="About-our-online-services">
          {" "}
          1. About our online services
        </p>
        <p className={styles.subHeading}>1.1 What are our online services?</p>
        <p>Our online services include:</p>
        <ul className={styles.ul}>
          <li>Our website, bbdg.in</li>
          <li>Applying for a loan through our website</li>
          <li>Your Client Space</li>
          <li>Sending emails</li>
          <li>Any other online services we may offer</li>
        </ul>
        <p className={styles.subHeading}>
          1.2 We provide information, not advice
        </p>
        <p>
          On our website and mobile application, we provide information—not
          advice tailored to your reality—unless we specifically say otherwise.
          You should not rely on this information without seeking advice from
          professionals.
        </p>
        <p className={styles.subHeading}>
          1.3 We do our best to provide useful information
        </p>
        <p>
          We do our best to provide useful information on our website and mobile
          application. However, we cannot guarantee that the information you
          have access to is complete, accurate, up to date or otherwise reliable
          for any particular purpose.
        </p>
        <br />
        <p>
          We monitor our website and mobile application. In case of problems
          with its content, we may intervene to correct the problem, but we do
          not guarantee that we will.
        </p>
        <p className={styles.subHeading}>
          1.4 Information may be removed and our services may become unavailable
          at any time
        </p>
        <p>
          We do not guarantee that information on our website or mobile
          application or that our online services will always remain available.
          You may possibly experience occasional interruptions or delays.
        </p>
        <p className={styles.subHeading}>
          1.5 Our products and services are only offered in Canada
        </p>
        <p>
          Even though you may access our website or mobile application from
          anywhere in the world, we only offer our products and services in
          Canada.
        </p>
        <p className={styles.mainHeading} id="Your-obligations">
          2. Your obligations
        </p>
        <p className={styles.subHeading}>
          2.1 You must take appropriate security measures
        </p>
        <p>
          If you wish to contact us, do not use your email to send us
          confidential information. Already a BDC client? Use your Client Space
          to send us confidential information.
        </p>
        <p className={styles.subHeading}>
          2.2 You must respect our intellectual property rights
        </p>
        <p className={styles.subHeading}>
          2.2.1 We own everything on our website or mobile application
        </p>
        <p>
          We own—or are licensed for—all intellectual property rights on our
          website or mobile application unless we say otherwise. This includes:
        </p>
        <ul className={styles.ul}>
          <li>
            All works, such as texts, images, illustrations, designs, software,
            codes, audio and video clips, and any other content
          </li>
          <li>Trademarks and trademarks that are licensed to us</li>
        </ul>
        <p className={styles.subHeading}>
          2.2.2 You must get our authorization in writing for any public or
          commercial use
        </p>
        <p>
          No one has permission to make public or commercial use of any content
          on our website or mobile application, unless we say otherwise. You
          must get our authorization in writing before using any content from
          our website or mobile application for:
        </p>
        <ul className={styles.ul}>
          <li>Modification</li>
          <li>Copy</li>
          <li>Distribution</li>
          <li>Republication</li>
          <li>Transmission</li>
          <li>Storage, whatever the medium</li>
          <li>Sale</li>
          <li>Any other public or commercial use</li>
        </ul>
        <p className={styles.subHeading}>
          2.3 You must not make an illegal use of our services or any use that
          could harm us or others
        </p>
        <p className={styles.subHeading}>
          2.3.1 Do not publish content if you re not sure you have the right to
          publish it
        </p>
        <p>
          By publishing on our website, you guarantee that you do not infringe
          on anyone’s rights, including their intellectual property rights.
        </p>
        <p className={styles.mainHeading} id="Our-obligations">
          3. Our obligations
        </p>
        <p className={styles.subHeading}>
          2.1 You must take appropriate security measures
        </p>
        <p>
          If you wish to contact us, do not use your email to send us
          confidential information. Already a BDC client? Use your Client Space
          to send us confidential information.
        </p>
        <p className={styles.subHeading}>
          2.2 You must respect our intellectual property rights
        </p>
        <p className={styles.subHeading}>
          2.2.1 We own everything on our website or mobile application
        </p>
        <p>
          We own—or are licensed for—all intellectual property rights on our
          website or mobile application unless we say otherwise. This includes:
        </p>
        <ul className={styles.ul}>
          <li>
            All works, such as texts, images, illustrations, designs, software,
            codes, audio and video clips, and any other content
          </li>
          <li>Trademarks and trademarks that are licensed to us</li>
        </ul>
        <p className={styles.subHeading}>
          2.2.2 You must get our authorization in writing for any public or
          commercial use
        </p>
        <p>
          No one has permission to make public or commercial use of any content
          on our website or mobile application, unless we say otherwise. You
          must get our authorization in writing before using any content from
          our website or mobile application for:
        </p>
        <ul className={styles.ul}>
          <li>Modification</li>
          <li>Copy</li>
          <li>Distribution</li>
          <li>Republication</li>
          <li>Transmission</li>
          <li>Storage, whatever the medium</li>
          <li>Sale</li>
          <li>Any other public or commercial use</li>
        </ul>
        <p className={styles.subHeading}>
          2.3 You must not make an illegal use of our services or any use that
          could harm us or others
        </p>
        <p className={styles.subHeading}>
          2.3.1 Do not publish content if you re not sure you have the right to
          publish it
        </p>
        <p>
          By publishing on our website, you guarantee that you do not infringe
          on anyone’s rights, including their intellectual property rights.
        </p>
        <p className={styles.mainHeading} id="Exclusion-of-our-liability">
          4. Exclusion of our liability
        </p>
        <p className={styles.subHeading}>
          2.1 You must take appropriate security measures
        </p>
        <p>
          If you wish to contact us, do not use your email to send us
          confidential information. Already a BDC client? Use your Client Space
          to send us confidential information.
        </p>
        <p className={styles.subHeading}>
          2.2 You must respect our intellectual property rights
        </p>
        <p className={styles.subHeading}>
          2.2.1 We own everything on our website or mobile application
        </p>
        <p>
          We own—or are licensed for—all intellectual property rights on our
          website or mobile application unless we say otherwise. This includes:
        </p>
        <ul className={styles.ul}>
          <li>
            All works, such as texts, images, illustrations, designs, software,
            codes, audio and video clips, and any other content
          </li>
          <li>Trademarks and trademarks that are licensed to us</li>
        </ul>
        <p className={styles.subHeading}>
          2.2.2 You must get our authorization in writing for any public or
          commercial use
        </p>
        <p>
          No one has permission to make public or commercial use of any content
          on our website or mobile application, unless we say otherwise. You
          must get our authorization in writing before using any content from
          our website or mobile application for:
        </p>
        <ul className={styles.ul}>
          <li>Modification</li>
          <li>Copy</li>
          <li>Distribution</li>
          <li>Republication</li>
          <li>Transmission</li>
          <li>Storage, whatever the medium</li>
          <li>Sale</li>
          <li>Any other public or commercial use</li>
        </ul>
        <p className={styles.subHeading}>
          2.3 You must not make an illegal use of our services or any use that
          could harm us or others
        </p>
        <p className={styles.subHeading}>
          2.3.1 Do not publish content if you re not sure you have the right to
          publish it
        </p>
        <p>
          By publishing on our website, you guarantee that you do not infringe
          on anyone’s rights, including their intellectual property rights.
        </p>
        <p className={styles.mainHeading} id="About-these-Terms-of-use">
          5. About these Terms of use
        </p>
        <p className={styles.subHeading}>
          2.1 You must take appropriate security measures
        </p>
        <p>
          If you wish to contact us, do not use your email to send us
          confidential information. Already a BDC client? Use your Client Space
          to send us confidential information.
        </p>
        <p className={styles.subHeading}>
          2.2 You must respect our intellectual property rights
        </p>
        <p className={styles.subHeading}>
          2.2.1 We own everything on our website or mobile application
        </p>
        <p>
          We own—or are licensed for—all intellectual property rights on our
          website or mobile application unless we say otherwise. This includes:
        </p>
        <ul className={styles.ul}>
          <li>
            All works, such as texts, images, illustrations, designs, software,
            codes, audio and video clips, and any other content
          </li>
          <li>Trademarks and trademarks that are licensed to us</li>
        </ul>
        <p className={styles.subHeading}>
          2.2.2 You must get our authorization in writing for any public or
          commercial use
        </p>
        <p>
          No one has permission to make public or commercial use of any content
          on our website or mobile application, unless we say otherwise. You
          must get our authorization in writing before using any content from
          our website or mobile application for:
        </p>
        <ul className={styles.ul}>
          <li>Modification</li>
          <li>Copy</li>
          <li>Distribution</li>
          <li>Republication</li>
          <li>Transmission</li>
          <li>Storage, whatever the medium</li>
          <li>Sale</li>
          <li>Any other public or commercial use</li>
        </ul>
        <p className={styles.subHeading}>
          2.3 You must not make an illegal use of our services or any use that
          could harm us or others
        </p>
        <p className={styles.subHeading}>
          2.3.1 Do not publish content if you re not sure you have the right to
          publish it
        </p>
        <p>
          By publishing on our website, you guarantee that you do not infringe
          on anyone’s rights, including their intellectual property rights.
        </p>
        <p className={styles.mainHeading} id="How-to-contact-us">
          6. How to contact us
        </p>
        <ul className={styles.ul}>
          <li>Send us a message</li>
          <li>Call us at 1 877 232 2269</li>
          <li>Mail us a letter:</li>
          <li className={styles.alignme}>
            Business Development Bank of Canada
            <br /> 5 Place Ville Marie <br />
            Suite 100 Montreal, Quebec
            <br /> H3B 5E7
          </li>
        </ul>
      </div>
    </>
  );
}

export default index;
