import React, { useState } from "react";
import style from "./CashFlow.module.css";
import groupImg from "../../assets/images/group.png";
const Data = [
  {
    name: "SUPLLEMENT CASH FLOW",
    top: "There are many variations of passages of lorem ipsum available , but the majority have suffered alternation in same form by injected humour or randomised words which don't look even slightly believable",
    mid: "If you are going to use a passage of lorem ipsum , you Need to be sure there isn't anything embarrassing hidden in thethe middle of text",
    points: [
      "Self-contained state of the art time clock",
      "Scalability of up to 500 employess per time clock",
      // "The ability to connect up to 32 times clocks",
      "Employee self-enrollment",
    ],
    image: { groupImg },
  },
  {
    name: "SELL ONLINE",
    top: "There are many variations of passages of lorem ipsum available , but the majority have suffered alternation in same form by injected humour or randomised words which don't look even slightly believable",
    mid: "If you are going to use a passage of lorem ipsum , you Need to be sure there isn't anything embarrassing hidden in thethe middle of text",
    points: [
      "Self-contained state of the art time clock",
      "Scalability of up to 500 employess per time clock",
      "The ability to connect up to 32 times clocks",
      "Employee self-enrollment",
    ],
    image: { groupImg },
  },
  {
    name: "COVER EXPENSES",
    top: "There are many variations of passages of lorem ipsum available , but the majority have suffered alternation in same form by injected humour or randomised words which don't look even slightly believable",
    mid: "If you are going to use a passage of lorem ipsum , you Need to be sure there isn't anything embarrassing hidden in thethe middle of text",
    points: [
      "Self-contained state of the art time clock",
      // "Scalability of up to 500 employess per time clock",
      // "The ability to connect up to 32 times clocks",
      "Employee self-enrollment",
    ],
    image: { groupImg },
  },
];

function CashFlow({ heading }) {
  const [CurrentSection, setCurrentSection] = useState(Data[0]);
  return (
    <>
      <div className={style.Industries} id="Industries">
        <h1>WE WORK WITH INDUSTRIES</h1>
        <div className={style.IndustriesButton}>
          {/* <button ClassName={style.IndustriesButtonActive}>LATEST TECHNOLOGY</button>
                        <button>AWSOME SUPPORT</button>
                        <button>1 CLICK DEMO INSTALL</button> */}
          {Data.map((section, index) => {
            return (
              <>
                <button
                  key={index}
                  className={
                    CurrentSection.name === section.name
                      ? style.IndustriesButtonActive
                      : ""
                  }
                  onClick={(e) => {
                    // console.log(CurrentSection.name ===section.name)
                    setCurrentSection(Data[index]);
                  }}
                >
                  {section.name}
                </button>
              </>
            );
          })}
        </div>

        <div className={style.IndustriesContent}>
          <img src={CurrentSection.image.groupImg} alt="currentImg" />
          <div className={style.IndustriesContentText}>
            <div className={style.IndustriesContentTexta}>
              <p>{CurrentSection.top}</p>
            </div>
            <div className={style.IndustriesContentTextb}>
              <p>{CurrentSection.mid}</p>
            </div>
            <ol className={style.IndustriesContentTextcol}>
              {CurrentSection.points.map((li, index) => {
                return (
                  <li key={index} className={style.IndustriesContentTextcolLi}>
                    {li}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default CashFlow;
