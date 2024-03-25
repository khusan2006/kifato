import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ShoppingBasketIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white py-1">
      <MaxWidthWrapper className="flex justify-between items-center">
        <ul className="flex gap-8 text-[1.1rem] font-semibold">
          <li>
            <NavLink to={"/"}>Asosiy</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Xizmat va Kafolat</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Kontakt</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Zavodlar haqida</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Kifato rasmiy saytlari</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Showrumlar</NavLink>
          </li>
        </ul>
        <div className="flex p-2 rounded-md bg-white w-60 justify-between text-red-500">
            <p>$0.00 <span>0 mahsulotlar</span></p>
            <ShoppingBasketIcon />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
