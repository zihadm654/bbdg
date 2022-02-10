import style from "./OurClients.module.css";

const OurClients = () => {
  return (
    <>
      {/* <p className={style.divider}></p> */}
      <div className={style.mainDiv}>
        <div className={style.heading}>
          <p className={style.headingTxt}>
            SOME OF THE CLIENTS WE HAVE WORKED WITH
          </p>
        </div>
        <div className={style.clients}>
          <div className={style.imgDiv}>
            <img className={style.img} src="../assets/images/cmp1.png" alt="" />
          </div>
          <div className={style.imgDiv}>
            <img className={style.img} src="../assets/images/cmp2.png" alt="" />
          </div>
          <div className={style.imgDiv}>
            <img className={style.img} src="../assets/images/cmp3.png" alt="" />
          </div>
          <div className={style.imgDiv}>
            <img className={style.img} src="../assets/images/cmp4.png" alt="" />
          </div>
          <div className={style.imgDiv}>
            <img className={style.img} src="../assets/images/cmp5.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
