import style from "./PrimaryLoading.module.css";
import Logo from "../../assets/images/logo.png";
const PrimaryLoading = () => {
  return (
    <>
      <div className={style.mainLoadingContainer}>
        <img src={Logo} alt="" />
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default PrimaryLoading;
