import React, { useState } from "react";
import styles from "./primarybutton.module.css";

function PrimaryButton({ dark, text, url = "", newPage }) {
  const [isDark, setIsDark] = useState(dark);

  return (
    <div>
      <a href={url} target={newPage ? "_blank" : ""}>
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
      </a>
    </div>
  );
}

export default PrimaryButton;
