import { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { HiOutlineBars2 } from "react-icons/hi2";
import style from "./css/style.module.scss";
import media from "./css/media.module.scss";
import { Link } from "react-router-dom";
import HeaderBtn from "../button/HeaderBtn";
import {IoCloseSharp} from 'react-icons/io5'

const Navbar = () => {
  const [button, setButton] = useState("");
  return (
    <>
     <button
        className={`${style.btn} ${media.btn}`}
        onClick={() => setButton(!button)}
      >
        {button ? <IoCloseSharp/>: <HiOutlineBars2/>}
      </button>
    <nav className={`${style.nav} ${media.nav} ${button ? style.active : ''}`}>
      <ul className={`${style.navList} ${media.navList}`}>
        {NavbarItems.map((items) => {
          return (
            <li className={`${style.item} ${media.item}`} key={items.id}>
              <Link to={items.url}>{items.name}</Link>
            </li>
          );
        })}
        <HeaderBtn/>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
