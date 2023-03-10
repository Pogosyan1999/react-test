import { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { HiOutlineBars2 } from "react-icons/hi2";
import style from "./style.module.scss";
import { Link } from "react-scroll";
import HeaderBtn from "../button/HeaderBtn";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [button, setButton] = useState("");
  return (
    <>
      <button className={style.btn} onClick={() => setButton(!button)}>
        {button ? <IoCloseSharp /> : <HiOutlineBars2 />}
      </button>
      <nav className={`${style.nav} ${button ? style.active : ""}`}>
        <ul className={style.navList}>
          {NavbarItems.map((items) => {
            return (
              <li className={style.item} key={items.id}>
                {/* <Link to={items.url}>{items.name}</Link> */}
                <Link
                  activeClass={style.activeLink}
                  to={items.url}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {items.name}
                </Link>
              </li>
            );
          })}
          <HeaderBtn />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
