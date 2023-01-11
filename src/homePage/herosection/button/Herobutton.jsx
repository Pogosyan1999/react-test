import React from "react";
import style from "./css/style.module.scss";
import media from "./css/media.module.scss";

const Herobutton = () => {
  return (
    <button className={`${style.btn} ${media.Btn}`}>
      Начать зарабатывать на NFT
    </button>
  );
};

export default Herobutton;
