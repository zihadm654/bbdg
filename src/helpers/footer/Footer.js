import style from "./footer.module.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.mainContainer}>
          <div className={style.mainSubDiv}>
            <img className={style.logoImg} src={Logo} alt="logo" />
            <p className={style.companyDescription}>
              5 Cherrycrest Drive, Brampton, ON L6P 3W4, Canada.
            </p>
            <div className={style.socialIcon}>
              <a
                href="https://www.facebook.com/Bajaj-Global-Business-Development-and-Consultancy-Group-102421449002815"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className={"fab fa-facebook-square " + style.socialIconTag}
                ></i>
              </a>
              <a
                href="https://www.twitter.com/bajaj_global"
                target="_blank"
                rel="noreferrer"
              >
                <i className={"fab fa-twitter " + style.socialIconTag}></i>
              </a>
              <a
                href="https://www.instagram.com/bbdg.ca"
                target="_blank"
                rel="noreferrer"
              >
                <i className={"fab fa-instagram " + style.socialIconTag}></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bbdg"
                target="_blank"
                rel="noreferrer"
              >
                <i className={"fab fa-linkedin-in " + style.socialIconTag}></i>
              </a>
              {/* <Link href="https://www.youtube.com/">
                <a target="_blank">
                  <i
                    className={"fab fa-youtube " + style.socialIconTag}
                  ></i>
                </a>
              </Link> */}
            </div>
          </div>
          <div className={style.mainSubDiv}>
            <div className={style.footerElementDiv}>
              <div className={style.subDiv}>
                <h3 className={style.divHeading}>I AM</h3>
                <li className={style.listItem}>
                  <Link to="/iam/60caef5270e111253c0782a1">A professional</Link>
                </li>
                <li className={style.listItem}>
                  <Link to="/iam/60caef4970e111253c0782a0">
                    A woman entrepreneur
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link to="/iam/60caef2f70e111253c07829d">
                    A newcomer entrepreneur
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link to="/iam/60caef2270e111253c07829c">
                    A technology entrepreneur
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link to="/iam/60caef1170e111253c07829b">A supplier</Link>
                </li>
              </div>
              <div className={style.subDiv}>
                <h3 className={style.divHeading}>QUICK LINKS</h3>
                <li className={style.listItem}>
                  <Link to="/services/financing/small-business-loans">
                    Small business loans
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link to="/services/advisory/business-plan-template">
                    Business Plan Template
                  </Link>
                </li>
                <li className={style.listItem + " " + style.dialButton}>
                  <Link to="/about/careers">Careers</Link>
                </li>
              </div>
              <div className={style.subDiv}>
                <h3 className={style.divHeading}>CONTACT US</h3>
                <a href="tel:9999999999">
                  <li className={style.listItem}>Call Us</li>
                </a>
                {/* <Link href="/services/articles-and-tools/newsletters-and-economic-letter">
                  <li className={style.listItem}>
                    <a>Newsletter</a>
                  </li>
                </Link> */}
                <Link to="/about/news-and-events">
                  <li className={style.listItem}>News And Events</li>
                </Link>
                <Link to="/services/articles-and-tools/newsletters-and-economic-letter">
                  <div className={style.emailDiv}>
                    <p>Subscribe</p>
                    <i className={"fas fa-arrow-right " + style.emailIcon}></i>
                  </div>
                </Link>
                <a href="/#Contact">
                  <div className={style.emailDiv}>
                    <p>Email</p>
                    <i className={"fas fa-envelope " + style.emailIcon}></i>
                  </div>
                </a>
              </div>
            </div>
            <div className={style.footerServices}>
              <li className={style.listItem}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={style.listItem}>
                <Link to="/contact/terms-of-use">Terms of Use</Link>
              </li>
              <li className={style.listItem}>
                <Link to="/contact/confidentiality">Confidentiality</Link>
              </li>
              <li className={style.listItem}>
                <Link to="/contact/security">Security</Link>
              </li>
              <li className={style.listItem}>
                <Link to="/contact/transparency">Transparency</Link>
              </li>
            </div>
          </div>
        </div>
        <p className={style.divider}></p>
        <p className={style.copyrightLine}>@Copyright 2021 by BBDG</p>
      </div>
    </>
  );
};

export default Footer;
