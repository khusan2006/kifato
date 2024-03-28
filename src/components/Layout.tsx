import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import MobileMenu from "./MobileMenu";

const Layout = () => {
  return (
    <>
      <Contact />
      <Header />
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <MobileMenu />
      <Footer />
    </>
  );
};

export default Layout;
