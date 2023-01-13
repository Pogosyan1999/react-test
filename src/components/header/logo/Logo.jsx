import React from "react";
import style from "./style.module.scss"
import logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={style.logo} >
      <Link to="#">
        <img src={logo} alt="Net" />
      </Link>
    </div>
  );
};

export default Logo;
