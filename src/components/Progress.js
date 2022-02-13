import React from "react";
import style from "./Progress.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress({ heading, datas }) {
  return (
    <>
      <div className={style.ProgressBars}>
        <div className={style.heading}>
          <h1>{heading}</h1>
        </div>
        <div className={style.barContainer}>
          {datas.map((data, index) => {
            return (
              <div className={style.bar} key={index}>
                <CircularProgressbar
                  strokeWidth={2}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "1rem",
                    pathTransitionDuration: 0.5,
                    pathColor: `#7ABAF7`,
                    textColor: "#fff",
                    trailColor: "none",
                  })}
                  value={data.percentage}
                  text={`${data.percentage}%`}
                />
                <h2>{data.subHeading}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Progress;
