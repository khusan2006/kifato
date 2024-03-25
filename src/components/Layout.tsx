import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Contact />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
