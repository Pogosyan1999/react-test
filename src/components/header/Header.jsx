import React from "react";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
