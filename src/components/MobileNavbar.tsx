import { useState } from "react";
import Logo from "../assets/kifato-logo.webp";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <header className="relative md:hidden bg-gray-100 py-28 flex justify-between items-center px-6">
      <img src={Logo} alt="kifato logo" className="w-52" />
      <div className="flex lg:hidden">
        <button
          type="button"
          className="py-2 px-4 border-[1px] border-black flex items-center gap-2"
          onClick={handleMenu}
        >
          <Menu size={"18"} /> Menu
        </button>
      </div>

      <div
        className={`lg:hidden transition-all duration-[300ms] absolute bg-red-500 text-white w-full h-screen top-0 left-0 z-30 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        id="mobile-menu"
      >
        <X className="absolute top-6 right-6" onClick={handleMenu} />
        <div className="flex flex-col justify-center items-center h-full gap-5 text-base">
          <NavLink to={"/"}>Asosiy</NavLink>
          <NavLink to={"/"}>Xizmat va Kafolat</NavLink>
          <NavLink to={"/"}>Kontakt</NavLink>
          <NavLink to={"/"}>Zavodlar haqida</NavLink>
          <NavLink to={"/"}>Kifato rasmiy saytlari</NavLink>
          <NavLink to={"/"}>Showrumlar</NavLink>
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;
