import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ShoppingBasketIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white py-2">
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
          <li>
            <NavLink to={"/"}>Kifato rasmiy saytlari</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Showrumlar</NavLink>
          </li>
        </ul>
        <div className="flex p-2 rounded-md bg-white w-60 justify-between text-red-500">
            <p className="flex gap-1 items-center">$0.00  <span className="text-red-400 text-sm"> 0 mahsulotlar</span></p>
            <ShoppingBasketIcon />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
