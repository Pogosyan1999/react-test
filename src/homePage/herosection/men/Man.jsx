import React from 'react';
import man from '../../../img/man.png';
import style from "./style.module.scss";

const Man = () => {
  return (
    <div className={style.imgContainer}>
      <img src={man} alt="Man" />
    </div>
  )
}

export default Man