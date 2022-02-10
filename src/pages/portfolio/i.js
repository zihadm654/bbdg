import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import CustomHead from "../../helpers/header/CustomHead";
import LayoutCSS from "../../helpers/layout/layout.module.css";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import style from "./portfolio.module.css";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import CenterText from "../../components/Text/CenterText";
import axios from "axios";
import { BaseApi, ImageBaseUrl } from "../../utils/utils";
import { getDisplayName } from "next/dist/next-server/lib/utils";

const OpenWorkCard = ({ imgsrc, heading, subheading }) => {
  const [IMG, setIMG] = useState(imgsrc);
  const [sub, setsub] = useState(subheading);

  const [ani, setani] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIMG(imgsrc);
      setsub(subheading);
    }, 500);
    setani(true);
    setTimeout(() => {
      setani(false);
    }, 1000);
  }, [imgsrc]);

  return (
    <>
      <div className={style.OpenWorkCard}>
        <div className={style.imgdiv}>
          <img id="Image" className={ani ? style.animate : ""} src={IMG} />
        </div>
        <div className={style.bluecontainer}>
          <div className={style.xtext}>
            <p className={style.xheading}>{heading} </p>
            <p className={style.xsubheading}>{sub}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home(props) {
  const Data = props.res.data;

  const [currentheading, setcurrentheading] = useState("Portfolio");
  const [currentsubHeading, setcurrentsubHeading] = useState(
    "HAVE A LOOK AT OUR EXPANDED PORTFOLIO OF PROJECTS THAT WE HAVE COMPLETED"
  );
  const [CurrSection, setCurrSection] = useState(0);
  const [CurrSectionData, setCurrSectionData] = useState(Data[0].contents);
  const [CurrObjectIndex, setCurrObjectIndex] = useState(0);
  const [CurrObject, setCurrObject] = useState({
    name: "",
    image: "",
    text_data: "",
  });
  const [Selected, setSelected] = useState(true);

  useEffect(() => {
    const content = Data[CurrSection].contents;
    setCurrSectionData(content);
  }, [CurrSection]);

  const WorkCard = ({ content, heading, index }) => {
    return (
      <div className={style.workcard}>
        <img src={`${ImageBaseUrl}${content.image}`} />
        <div className={style.bluecontainer}>
          <div className={style.xtext}>
            <p className={style.blueHeading}>
              {heading}
              <div className={style.blueLine}></div>
            </p>
            <p className={style.xsubheading}>{content.sub_heading}</p>
          </div>

          <div
            className={style.xbutton}
            value={index}
            onClick={(e) => {
              setSelected(false);
              setCurrObjectIndex(index);
              setCurrObject(content);
              setcurrentheading(Data[CurrSection].name);
              setcurrentsubHeading(
                "HAVE A LOOK AT OUR EXPANDED PORTFOLIO OF PROJECTS THAT WE HAVE COMPLETED"
              );
            }}
          >
            <SecondaryButton text="Check out" />
          </div>
        </div>
      </div>
    );
  };

  const Next = (num) => {
    var n = Data[CurrSection].contents.length;
    if (num) {
      setCurrObjectIndex((prv) => {
        // console.log(prv);
        return (prv - 2 + n) % n;
      });
    } else {
      setCurrObjectIndex((prv) => {
        // console.log(prv);
        return (prv + 2 + n) % n;
      });
    }
  };
  useEffect(() => {
    // console.log(111)
    setCurrObject(Data[CurrSection].contents[CurrObjectIndex]);
  }, [CurrObjectIndex]);

  return (
    <div>
      <main>
        <CustomHead title={currentheading} />
        <Banner>
          <p className={BannerStyle.smallHeading}>
            PORTFOLIO <i className="fas fa-chevron-right"></i>{" "}
            <span className={BannerStyle.lowOpacity}> </span>
          </p>

          <p className={BannerStyle.BigHeading}>{currentheading} </p>
          <p className={BannerStyle.midHeading}>
            <br></br>
            {currentsubHeading}{" "}
          </p>
        </Banner>
        <div className={LayoutCSS.RootDiv + " " + style.MainDiv}>
          <h1 className={style.heading}>OUR WORK SHOWCASE</h1>
          <div className={style.PortfolioButton}>
            {Data.map((topic, index) => {
              return (
                <>
                  <button
                    className={
                      index === CurrSection
                        ? style.activeSectionBtn
                        : style.sectionBtn
                    }
                    onClick={(e) => {
                      setSelected(true);
                      setCurrSection(Number(e.target.value));
                      setcurrentheading("Portfolio");
                    }}
                    value={index}
                  >
                    {topic.name}
                  </button>
                </>
              );
            })}
          </div>
          <div className={Selected ? style.showSection : style.hidden}>
            {CurrSectionData.map((content, index) => {
              return (
                <>
                  <WorkCard
                    heading={Data[CurrSection].name}
                    index={index}
                    content={content}
                  />
                </>
              );
            })}
          </div>
          <div className={Selected ? style.hidden : " "}>
            <div className={style.ShowIndividual}>
              <button onClick={() => Next(0)}>
                <i className={style.slider + " fas fa-chevron-left"}></i>
              </button>
              <OpenWorkCard
                heading={Data[CurrSection].name}
                subheading={CurrObject.sub_heading}
                imgsrc={`https://storage.googleapis.com/bbdg-faf43.appspot.com/${CurrObject.image}`}
              />
              <button onClick={() => Next(1)}>
                <i className={style.slider + " fas fa-chevron-right"}></i>
              </button>
            </div>
            <CenterText paragraphs={CurrObject.text_data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const portfolioResponse = await axios.get(`${BaseApi}/portfolio/all`);
  const portfolio = await portfolioResponse.data;

  return {
    props: {
      portfolio,
    },
  };
}
