import React from 'react';
import man from '../../../img/man.png';
import media from "./css/media.module.scss";
import style from "./css/style.module.scss";

const Man = () => {
  return (
    <div className={`${style.imgContainer} ${media.imgContainer}`}>
      <img src={man} alt="Man" />
    </div>
  )
}

export default Man