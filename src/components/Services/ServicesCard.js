import style from "./ServicesCard.module.css";
const ServicesCard = ({ heading, subHeading, image, url }) => {
  return (
    <>
      <a href={url} className={style.mainCardDiv}>
        <div className={style.upperDiv}>
          <div className={style.imgDiv}>
            <img className={style.cardImg} src={image} alt="..." />
          </div>
          <h4 className={style.heading}>{heading.split("-").join(" ")}</h4>
        </div>
        <div className={style.contentDiv}>
          <p className={style.contentText}>{subHeading}</p>
        </div>
      </a>
    </>
  );
};

export default ServicesCard;
