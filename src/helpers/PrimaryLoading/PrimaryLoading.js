import style from "./PrimaryLoading.module.css";
import Logo from "../../assets/images/logo.png";
import { CircularProgress } from "@material-ui/core";
const PrimaryLoading = () => {
  return (
    <>
      <div className={style.mainLoadingContainer}>
        <img src={Logo} alt="" />
        <CircularProgress color="inherit" />
      </div>
    </>
  );
};

export default PrimaryLoading;
