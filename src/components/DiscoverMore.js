import style from "./DiscoverMore.module.css";
import PrimaryButton from "./Buttons/PrimaryButton";

const DiscoverMore = () => {
  return (
    <div className={style.mainDiv}>
      <p className={style.DiscoverMoreFont}>
        WE’RE READY TO BRING BIGGER & STRONGER PROJECTS
      </p>

      <PrimaryButton url="/about/what-we-do" text="Discover more" />
    </div>
  );

};

export default DiscoverMore;
