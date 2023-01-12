import React from "react";
import style from "./style.module.scss";

const Title = () => {
  return (
  <div className={style.container} >
    <h2 className={style.title} >
      Не упусти возможность войти в <span>прибыльную нишу</span>
    </h2>
  </div>
  );
};

export default Title;
