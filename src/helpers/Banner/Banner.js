import style from "./Banner.module.css";
import { useEffect, useState } from "react";
const Banner = (props) => {
  const images = [
    "../assets/images/banner-img.png",
    "../assets/images/finger.jpg",
    "../assets/images/group.png",
    "../assets/images/working.png",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
    }, 8000);
  }, [index, images.length]);

  return (
    <div className={style.mainHomeDiv}>
      <div className={style.rightDiv}>
        <div className={style.clippedImg}>
          <img
            className={style.Substract}
            src="../assets/images/Subtract.png"
            alt=""
          />
          <img className={style.mainImg} src={images[index]} alt="main__img" />
        </div>
        <img
          className={style.rightBackCircle}
          src="../../assets/images/dark_circle.png"
          alt="dark__circle"
        />
      </div>
      <div className={style.leftDiv}>
        <img
          className={style.sideCircle}
          src="../../assets/images/side_circle.png"
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
