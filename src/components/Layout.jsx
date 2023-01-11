import { Outlet } from "react-router-dom";
import Header from "./header/Header";

// import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;