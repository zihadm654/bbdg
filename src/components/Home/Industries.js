import React, { useState } from "react";
import style from "./Industries.module.css";
import img from "../../assets/images/group.png";
const data1 = [
  {
    name: "LATEST TECHNOLOGY",
    top: "There are many variations of passages of lorem ipsum available , but the majority have suffered alternation in same form by injected humour or randomised words which don't look even slightly believable",
    mid: "If you are going to use a passage of lorem ipsum , you Need to be sure there isn't anything embarrassing hidden in thethe middle of text",
    points: [
      "Self-contained state of the art time clock",
      "Scalability of up to 500 employess per time clock",
      "Employee self-enrollment",
    ],
    image: img,
  },
  {
    name: "AWESOME SUPPORT",
    top: "There are many variations of passages of lorem ipsum available , but the majority have suffered alternation in same form by injected humour or randomised words which don't look even slightly believable",
    mid: "If you are going to use a passage of lorem ipsum , you Need to be sure there isn't anything embarrassing hidden in thethe middle of text",
    points: [
      "Self-contained state of the art time clock",
      "Scalability of up to 500 employess per time clock",
      "The ability to connect up to 32 times clocks",
      "Employee self-enrollment",
    ],
    image: img,
  },
  {
    name: "1 CLICK DEMO INSTALL",
    top: "There are many variations of passages of lorem ipsum available , but the majority have suffered alternation in same form by injected humour or randomised words which don't look even slightly believable",
    mid: "If you are going to use a passage of lorem ipsum , you Need to be sure there isn't anything embarrassing hidden in thethe middle of text",
    points: [
      "Self-contained state of the art time clock",
      // "Scalability of up to 500 employess per time clock",
      // "The ability to connect up to 32 times clocks",
      "Employee self-enrollment",
    ],
    image: img,
  },
];
const data2 = [
  {
    name: "ADVISORY",
    top: "At BBDG, Our experts will have a brainstorming session with your company or team and identify the organization's idealistic goals and plans. At this phase, experts main work is that they may attempt to set up your international business framework and identify as well as plug potential gaps in your existing plan. This includes the following steps -",
    mid: "",
    points: [
      "Outlining the business goals and purposefull objectives",
      "Explore or Inspect market trends and conducting competition analysis",
      "Understanding the needs of the customers",
      "Identifying and recognizing of the core issues and problems that the business wishes to solve",
      "Describing and defining the market niche",
    ],
    image: img,
  },
  {
    name: "FINANCING",
    top: "We help you Choose the best financing services for your international business. If your business is in operation for a period of fewer than 12 months then the Bajaj Global Business Development & Consultancy Group (BBDG) partners may have the best plan for you.",
    mid: "Bajaj Global Business Development & Consultancy Group (BBDG) partners offer the best financing solution for small businesses generating revenues. For more information, contact your BBDG mentor. We aid in providing financial support for some of the following - ",
    points: [
      "Small projects ",
      "Commercial real estate ",
      "Working capital loans",
      "Purchase/ Transfer your business ",
      "Equipment purchase",
    ],
    image: img,
  },
  {
    name: "LOANS",
    top: "Every so often, one needs to act fast to grab opportunities or conquer challenges. At bbdg, Our Small Business Loan is designed to help you quickly and easily access the funds you need with flexible terms you can afford. Loans you can use to:",
    mid: "",
    points: [
      "Augmment Augment cash flowSell online to increase sales",
      "Financing tailored to your needs",
      "Unprecedented flexibility",
      "Affordable and convenient",
      "Peace of mind",
    ],
    image: img,
  },
];

function Industries({ heading = "We work with industries" }) {
  const Data = heading === "Our services" ? data2 : data1;
  // console.log(Data);
  const [CurrentSection, setCurrentSection] = useState(Data[0]);

  return (
    <>
      <div className={style.Industries} id="Industries">
        <h1 className={style.heading}>{heading}</h1>
        <div className={style.IndustriesButton}>
          {/* <button ClassName={style.IndustriesButtonActive}>LATEST TECHNOLOGY</button>
                        <button>AWSOME SUPPORT</button>
                        <button>1 CLICK DEMO INSTALL</button> */}
          {Data.map((section, index) => {
            return (
              <button
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
            );
          })}
        </div>

        <div className={style.IndustriesContent}>
          <img src={CurrentSection.image} alt="img" />
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

export default Industries;
