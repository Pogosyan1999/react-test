import React from 'react';
import { Link } from 'react-router-dom';
import style from "./style.module.scss";
const HeaderBtn = () => {
  return (
    <li className={style.headerBtn}>
        <Link to = "#">Личный кабинет</Link>
    </li>
  )
}

export default HeaderBtn