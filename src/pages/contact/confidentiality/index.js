import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import styles from "../policy.module.css";
import CustomHead from "../../../helpers/header/CustomHead";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

function index() {
  var Content = `
  <p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) site confidentiality</strong></p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> is of the opinion that it is important to disclose sources and methods of collection of users information and their personal data. This comprehensive statement describes these practices of collection and use of all such sources of personal information that you provide on this site.</p>
<p>As an entrepreneurial development venture, we plan to help and support budding international enterprises and as a result, our website may contain links to external sites, which are not the property of the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong>.</p>
<p>Hence, BBDG does not accept any liability or guarantee for these external sources, links, sites or third-party applications that you may use and the resulting impact on your system. Moreover, the below-mentioned privacy policy does not apply or promote the practices of any third parties especially in terms of the collection and use of their personal data.</p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> is thus not responsible for their practices, policies, etc. Neither are we responsible, in any way, for the actions of such external parties in respect of the collection and use of personal data. That's why <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> recommends that it is vital to read the privacy statements posted on such sites, to be able to make a well-informed decision.</p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) confidentiality note</strong></p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>experts strive to protect your personal information by means of sound business practices and procedures. Thus, our team makes every effort to protect the privacy and confidentiality of your personal data posted on the website and forms.</p>
<p>&nbsp;</p>
<p>Further, the personal data that may be collected about the entrepreneurs through such forms/ templates/ login credentials, etc. shall take place only with the consent of the user, using the form provided on the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>official website, or by consensus regarding an email that you receive, or by the use of similar sources. Hence, the personal information that is collected will be used by <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong>, and employees. It is hereby clarified that all such information is only for the purposes described at the appropriate point of collection and all the same stays consistent with <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>and its objectives without sharing your information with any third party or non-BBDG sources.</p>
<p>However, at <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>we surely use your personal information to process the requests and provide the necessary articles and tools for you to augment your business outcomes.</p>
<p>Also, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> will use all the information that you voluntarily provide in order to use our site. If you have given consent for usage and receive appropriate information about the news and events, we may use such information to send newsletters, information and articles in order to provide you with a better service and transition across borders.</p>
<p>In any event, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> shall use your personal information to be shared with institutions and its employees.&nbsp; There is no sharing with other organizations without your consent, except as required by laws of the state. We may share information with government agencies if it is necessary or expected.</p>
<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> will not sell, share, or disclose the information collected by us through emails or calls. In the case you need to opt out from all such promotional and informational content, you can ask us to remove your name from the mailing lists at any time.</p>
<p><strong>Apart from this, Bajaj Global Business Development &amp; Consultancy Group (BBDG) website -</strong></p>
<ul>
<li>Does not use cookies to track any personal information on your computer.</li>
<li>All the collected data is used for statistical purposes only</li>
<li>If you set your browser to notify you before accepting cookies, then <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website may prompt you to consent to accept all these cookies on your computer.</li>
<li>You can also opt-out of all such cookies by setting your browser to reject them.</li>
<li>At <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG), </strong>we also make use of special systems to monitor the network traffic, detect unauthorized attempts, phishing, etc. or similar attempts to obtain or alter data. We do not make any attempt to make a connection between this address and the identity of individuals visiting our site unless an hacking attempt or a criminal offence has occurred.</li>
<li>All of the personal data that you provide will be protected in accordance with the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>policies, legal authorities, and the privacy policy.</li>
<li>As a result, <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> transfers you the right to know where the information has been collected, and to be informed of the purpose of the same.</li>
<li><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> is required by law to carry and to store all information that you provide for at least two years, and after the stipulated time, your personal data will be deleted from our website.</li>
</ul>
<p>You can access, modify or request deletion of the data that <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website collects about you and your business at any time. In order to do this, or if you have any questions, comments or concerns, please contact our team at any time. </p>
  `;
  return (
    <>
      <CustomHead title="CONFIDENTIALITY | BBDG" />
      <Banner>
        <p className={BannerStyle.smallHeading}>
          <span className={BannerStyle.lowOpacity}>CONFIDENTIALITY</span>
        </p>
        <p className={BannerStyle.BigHeading}>CONFIDENTIALITY</p>
        <br></br>
        <br></br>
        <p className={BannerStyle.midHeading}></p>
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
            You use your Client Space (you also need to read the &nbsp;
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "Bold",
                fontStyle: "italic",
                color: "white !important",
              }}
            >
              <Link href="/contact/terms-of-use/client-space">
                Terms of use for your Client Space
              </Link>
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
