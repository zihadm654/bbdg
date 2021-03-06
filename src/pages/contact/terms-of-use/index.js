import Banner from "../../../helpers/Banner/Banner";
import BannerStyle from "../../../helpers/Banner/Banner.module.css";
import styles from "../policy.module.css";
import Markdown from "markdown-to-jsx";
// import LayoutStyle from "../../../helpers/layout/layout.module.css";

function Index() {
  var Content = `
  <p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) site terms of use</strong></p>
<ul>
<li><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>reserves the right to block access to the Site, without cause or notice, which may result in the confiscation and destruction of all information associated with the account. All of the provisions of this Agreement which, by their nature, will face termination, including, but not limited to rights, warranties, indemnities, and liability.</li>
<li>These terms and Conditions constitute a binding legal agreement between you, and your business. This will help us in governing the access to and the use of [the concerned parties].</li>
<li>You will provide contact details, website address, etc. to, attached to or otherwise associated with, (the use of "<strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>Website").</li>
<li>You acknowledge and agree that, by accessing and using the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>official website, you have read, understood, and agreed to all terms and conditions. Also, to be bound by all of the implied terms and conditions.</li>
<li>If you do not agree with any of these terms and conditions, you and your team are strictly forbidden from accessing and using the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>official website and you must discontinue using it immediately.</li>
<li>The <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website is intended solely for users who are adults as per their local laws. Persons under the specified legal age are not permitted to register on this <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> or be associated in any way with it</li>
<li>Supplemental terms and conditions or documents that may be posted on the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> website from time to time, are hereby expressly incorporated herein by reference.</li>
<li><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> reserves the right, at our sole discretion, to make changes or additions to these terms at any time and for any reason at all.</li>
<li>The information on <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> website is intended for education and knowledge of international business enthusiasts. The distribution to, or use by, any person or entity in any country or jurisdiction where such distribution or use is contrary to the local laws and / or regulations, or is against the intended registration requirements within the intended jurisdictions or country.</li>
<li>Accordingly, those who choose to access the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>official website from other locations do so at their own risk, and are responsible for compliance with local laws.</li>
<li>If you have the right to use the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website or services then you are granted a limited license to access and use the same only for your personal or non-commercial use only.</li>
<li>If you provide any information that is unreliable, incomplete, or fraudulent then <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>reserves the right to suspend the account, and all current or future use of it (or any part thereof).</li>
<li>You agree to keep your <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>login and password confidential and will be responsible for any of the unintended and unauthorised uses of your password or login account.</li>
<li><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> website reserves the right to remove, edit or modify your current website access if we determine that username is inappropriate, obscene, or otherwise objectionable to any community and local guidelines.</li>
<li>You may not be able to log on to the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website, or use it for any purpose other than the purposes for which it is intended.</li>
<li>The <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>website may not be used in connection with any commercial endeavors except those that are going to be specifically approved by or through us or our team. We are not responsible for any promises or representations on our part, in any part of the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong></li>
</ul>
  `;
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          <span className={BannerStyle.lowOpacity}>TERMS OF USE</span>
        </p>
        <p className={BannerStyle.BigHeading}>
          TERMS
          <br />
          OF USE
        </p>
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
          On our website and mobile application, we provide information???not
          advice tailored to your reality???unless we specifically say otherwise.
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
          We own???or are licensed for???all intellectual property rights on our
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
          on anyone???s rights, including their intellectual property rights.
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
          We own???or are licensed for???all intellectual property rights on our
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
          on anyone???s rights, including their intellectual property rights.
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
          We own???or are licensed for???all intellectual property rights on our
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
          on anyone???s rights, including their intellectual property rights.
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
          We own???or are licensed for???all intellectual property rights on our
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
          on anyone???s rights, including their intellectual property rights.
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

export default Index;
