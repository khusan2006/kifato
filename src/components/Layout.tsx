import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";

const Layout = () => {
  return (
    <>
      <Contact />
      <Header />
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
