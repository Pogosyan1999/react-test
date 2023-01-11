import React from "react";
import Herobutton from "../button/Herobutton";
import media from "./css/media.module.scss";
import style from "./css/style.module.scss";

const Title = () => {
  return (
  <div className={`${style.container} ${media.container}`}>
    <h2 className={`${style.title} ${media.title}`}>
      Не упусти возможность войти в <span>прибыльную нишу</span>
    </h2>
    <p className={`${style.text} ${media.text}`}>
    Получи все нужные навыки для заработка на NFT всего за 28 дней!
    </p>
    <Herobutton/>
  </div>
  );
};

export default Title;
