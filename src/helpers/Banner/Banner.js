import style from "./Banner.module.css";
import { useEffect, useState } from "react";
import slide__circle from "../../assets/images/side_circle.png";
import dark__circle from "../../assets/images/dark_circle.png";
import banner__img from "../../assets/images/banner-img.png";
import finger__img from "../../assets/images/finger.jpg";
import group__img from "../../assets/images/group.png";
import working__img from "../../assets/images/working.png";
import subtract__img from "../../assets/images/Subtract.png";
const Banner = (props) => {
  const images = [banner__img, finger__img, group__img, working__img];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count === images.length - 1) {
        setCount(0);
      } else {
        setCount((count) => count + 1);
      }
    }, 8000);
  }, [count, images.length]);
  return (
    <div className={style.mainHomeDiv}>
      <div className={style.rightDiv}>
        <div className={style.clippedImg}>
          <img
            className={style.Substract}
            src={subtract__img}
            alt="Substract"
          />
          <img className={style.mainImg} src={images[count]} alt="main__img" />
        </div>
        <img
          className={style.rightBackCircle}
          src={dark__circle}
          alt="dark__circle"
        />
      </div>
      <div className={style.leftDiv}>
        <img
          className={style.sideCircle}
          src={slide__circle}
          alt="slide_circle"
        />
      </div>
      <div className={style.leftDivLinks}>
        <div className={style.leftDivLinksSec1}>
          {/* <li className={style.linkItem}>MON-FRI</li>
          <li className={style.linkItem}>8AM-7PM</li> */}
        </div>
        <div className={style.leftDivLinksSec2}>
          <li className={style.linkItem}>
            <a
              href="https://www.twitter.com/bajaj_global"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className={style.linkItem}>
            <a
              href="https://www.facebook.com/Bajaj-Global-Business-Development-and-Consultancy-Group-102421449002815"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          {/* <li className={style.linkItem}>
            <Link href="https://www.youtube.com">
              <a target="_blank"><i className="fab fa-youtube"></i></a>
            </Link>
          </li> */}
          <li className={style.linkItem}>
            <a
              href="https://www.instagram.com/bbdg.ca"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className={style.linkItem}>
            <a
              href="https://www.linkedin.com/in/bbdg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </div>
      </div>
      <div autoFocus className={style.mainTextDiv}>
        {props.children}
      </div>
    </div>
  );
};

export default Banner;
