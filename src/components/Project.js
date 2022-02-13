import React from "react";
import { Link } from "react-router-dom";
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

export default Project;
