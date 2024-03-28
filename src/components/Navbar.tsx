import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white py-2 md:block hidden">
      <MaxWidthWrapper className="flex justify-between items-center">
        <ul className="flex gap-8 text-[1.1rem] font-semibold">
          <li>
            <NavLink to={"/"}>Asosiy</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Xizmat va Kafolat</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Kontakt</NavLink>
          </li>
          <li>
            <NavLink to={"/factories"}>Zavodlar haqida</NavLink>
          </li>
          <li className="hidden xl:block ">
            <NavLink to={"/"}>Kifato rasmiy saytlari</NavLink>
          </li>
          <li className="hidden xl:block ">
            <NavLink to={"/shovrum"}>Showrumlar</NavLink>
          </li>
        </ul>
        <Cart />
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
