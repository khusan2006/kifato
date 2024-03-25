import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Contact />
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
