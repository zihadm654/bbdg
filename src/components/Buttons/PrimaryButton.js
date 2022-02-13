import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./primarybutton.module.css";

function PrimaryButton({ dark, text, url = "", newPage }) {
  const [isDark, setIsDark] = useState(dark);

  return (
    <div>
      <Link to={url} target={newPage ? "_blank" : ""} rel="noreferrer">
        <button
          style={
            isDark
              ? {
                  backgroundColor: "#163653",
                  backgroundImage:
                    " -webkit-linear-gradient(-27deg, #163653 90%, #4b78a3 15%)",
                  color: "white",
                }
              : {
                  backgroundColor: "#7ABAF7",
                  color: "#163653",
                  backgroundImage:
                    " -webkit-linear-gradient(-27deg, #7ABAF7 90%, #4b78a3 15%)",
                }
          }
          className={styles.discover}
        >
          {text}
        </button>
      </Link>
    </div>
  );
}

export default PrimaryButton;
