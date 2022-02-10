import { useState, useEffect } from "react";
import LayoutCSS from "../../helpers/layout/layout.module.css";
import style from "./work.module.css";
import SecondaryButton from "../../components/Buttons/SecondaryButton"

export default function Work({ Data }) {

  const [currentheading, setcurrentheading] = useState()
  const [CurrSection, setCurrSection] = useState(0);
  const [CurrSectionData, setCurrSectionData] = useState(Data[0].contents);

  useEffect(()=>{
    setCurrSectionData(Data[CurrSection].contents)
  },[CurrSection])

  const WorkCard = ({ content, heading, index }) => {
    return (
      <div className={style.workcard}>
        <img src={`https://storage.googleapis.com/bbdg-faf43.appspot.com/${content.image}`} />
        <div className={style.bluecontainer}>
          <div className={style.xtext}>
            <p className={style.blueHeading}>{heading}<div className={style.blueLine}></div></p>
            <h3 className={style.blueSubHeading}>{content.sub_heading}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <main>
        <div className={LayoutCSS.RootDiv + " " + style.MainDiv}>
          <h1 className={style.heading} >OUR WORK SHOWCASE</h1>
          <div className={style.PortfolioButton}>
            {
              Data.map((topic, index) => {
                return (
                  <>
                    <button className={index === CurrSection ? style.activeSectionBtn : style.sectionBtn} onClick={
                      (e) => {
                        setCurrSection((Number)(e.target.value))
                        setcurrentheading("Portfolio")
                      }
                    } value={index} >{topic.name}</button>
                  </>
                )
              })
            }
          </div>
          <div className={style.showSection}>
            {
              CurrSectionData.map((content, index) => {
                return (
                  <>
                    <WorkCard
                      heading={Data[CurrSection].name}
                      index={index}
                      content={content}
                    />
                  </>
                )
              })
            }

          </div>

        </div>


      </main>
    </div>
  );
}
