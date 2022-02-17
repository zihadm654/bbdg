// import { useEffect } from "react";
import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
import Markdown from "markdown-to-jsx";
import layoutStyle from "../../../../helpers/layout/layout.module.css";
import PrimaryLoading from "../../../../helpers/PrimaryLoading/PrimaryLoading";
import { useState } from "react";
const Index = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  var content =
    "<p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) - investing in people and talent</strong></p><ul><li>Meet our team</li></ul><p><em>Our employees tell you more about our working at BBDG.</em></p><ul><li>Progress without boundaries</li></ul><p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong><em>helps to boost your business, growth, and development projects.</em></p><ul><li>Building a career with BBDG</li></ul><p><strong><em>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </em></strong><em>helps to manage diversity and act as your greatest strength and conditioning unit. We are proud to be recognized as one of the leading business ventures </em></p><ul><li>Comprehensive rewards package</li></ul><p><em>From competitive compensation packages to equal benefits, we at&nbsp; </em><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong><em>help you to attain the best results and quality performance to boost employee success.</em></p><ul><li>Student job</li></ul><p><em>More than a hundred students come to work at </em><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG). </strong><em>It is a great opportunity to solidify their work experience.</em></p><ul><li>Become a network consultant</li></ul><p><em>Do you have the passion to serve enterprises and entrepreneurship ventures? Do you wish to be a part of the success story and development of a strong partnership? Contact </em><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG).</strong></p><ul><li>Join our team</li></ul><p><em>We are dedicated to the growth and development of enterprises and our teams are the best. We believe that you will love our work culture too.</em></p>";
  return (
    <>
      {loading ? <PrimaryLoading /> : null}
      <Banner>
        <p className={BannerStyle.smallHeading}>
          about <i className="fas fa-chevron-right"></i> careers{" "}
          <i className="fas fa-chevron-right"></i>
          <span className={BannerStyle.lowOpacity}> available position</span>
        </p>
        <br></br>
        <p className={BannerStyle.BigHeading}>available position</p>
        <br></br>
        <p className={BannerStyle.midHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </Banner>
      <Markdown className={layoutStyle.markDownStyle}>{content}</Markdown>
    </>
  );
};

export default Index;
