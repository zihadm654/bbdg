import style from "./recognition.module.css";
import PrimaryButton from "../components/Buttons/PrimaryButton";

function Recognition({ headText, para, btnTitle = "Learn More", redirectUrl }) {
  return (
    <div className={style.recognition}>
      <div className={style.recognitionDiv}>
        <div className={style.recognitionDiv1}>
          <h2>{headText}</h2>
          <p>{para}</p>
        </div>
        <PrimaryButton url={redirectUrl} text={btnTitle} />
      </div>
    </div>
  );
}

export default Recognition;
