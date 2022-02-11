import React from "react";
import style from "./Feature.module.css";

function Feature({ heading, img, points, imageTitle }) {
  return (
    <>
      <div className={style.Feature} id="Feature">
        <div className={style.FeatureLeft}>
          <h1>{heading}</h1>
          {points.map((point, index) => {
            return (
              <div key={index} className={style.FeaturePoint}>
                <div className="me-3">
                  <span className={style.FeatureCircle}>0{index + 1}</span>
                </div>
                <div>
                  <h4>{point.head}</h4>
                  <p>{point.data}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.FeatureRight}>
          <div className={style.Container}>
            <div className={style.ImageContainer}>
              <img className={style.image} src={img} alt="img" />
              <div className={style.FeatureRightText}>
                <p>{imageTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
