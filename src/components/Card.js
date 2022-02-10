import React from "react";
import style from "./Card.module.css";

function Card({ image, heading, data }) {
  return (
    <>
      <div className={style.offercardS}>
        <img src={image} alt={heading}></img>

        <h4>{heading}</h4>
        <p>{data}</p>
      </div>
    </>
  );
}

export default Card;
