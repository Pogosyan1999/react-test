import React, { useState } from "react";

import style from "./style.module.scss";
import { IoCloseSharp } from "react-icons/io5";

const Form = (props) => {
  return props.trigger ? (
    <form action="#" className={style.form}>
      <div className={style.close}>
        <button type="button" onClick={()=>props.setTrigger(false)}>
          <IoCloseSharp />
        </button>
      </div>
      <h2 className={style.title}>Начни прямо сейчас!</h2>
      <p className={style.text}>
        Получи все нужные навыки для заработка
       на NFT всего за 28 дней!
      </p>
      <div className={style.inputBlog}>
        <input type="email" name="email" placeholder="Ваш email" />
      </div>
      <button className={style.btn} type="submit" disabled = "disabled">
      Отправить
    </button>
    </form>
  ) : (
    ""
  );
};

export default Form;
