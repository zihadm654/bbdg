import React from "react";
import styles from "./project.module.css";
function Project({ heading, image, url = "/", isActive = false }) {
  return (
    <>
      <div className={styles.projectcontainer}>
        <img className={styles.imgMenu} src={image} alt="project" />
        <div
          className={
            isActive === false ? styles.bluecontainer : styles.whiteContainer
          }
        >
          <p className={styles.blueheading}>{heading}</p>
          <a href={url}>
            <div className={styles.bluecircle}>
              {" "}
              <i className="fas fa-chevron-right"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
