import React, { useEffect, useState } from "react";
import styles from "./secondarybutton.module.css";

function SecondaryButton({ dark, text }) {
  const [isDark, setIsDark] = useState("");
  useEffect(() => {
    setIsDark(dark);
  }, [dark]);
  return (
    <div>
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
    </div>
  );
}

export default SecondaryButton;
