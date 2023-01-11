import React from 'react';
import { Link } from 'react-router-dom';
import style from "./css/style.module.scss";
import media from "./css/media.module.scss"
const HeaderBtn = () => {
  return (
    <li className={`${style.headerBtn} ${media.headerBtn}`}>
        <Link to = "#">Личный кабинет</Link>
    </li>
  )
}

export default HeaderBtn