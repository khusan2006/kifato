import { Outlet } from "react-router-dom";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  );
};

export default Layout;
