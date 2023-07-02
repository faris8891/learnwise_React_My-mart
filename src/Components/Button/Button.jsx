import React from "react";
import style from "../Button/Button.module.css";

export default function Button({ btnName, type }) {
  return (
    <button className={style.btn} type={type}>
      {btnName}
    </button>
  );
}
