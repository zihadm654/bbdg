import React from "react";
import styles from "./ActiveProjectCard.module.css";
import Link from "next/link";
function ActiveProjectCard({ heading, image, url = "/", isActive = false }) {
  return (
    <>
      <div className={styles.projectcontainer}>
        <img className={styles.imgcontainer} src={image} alt="" />
        <div
          className={
            isActive === false ? styles.bluecontainer : styles.whiteContainer
          }
        >
          <p className={styles.blueheading}>{heading}</p>
          <Link to={url}>
            <div className={styles.bluecircle}>
              {" "}
              <i className="fas fa-chevron-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ActiveProjectCard;
