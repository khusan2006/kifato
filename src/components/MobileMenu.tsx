import { Search, ShoppingBasket, User } from "lucide-react";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../slices/CartSlice";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const totalItems = useSelector(getTotalCartQuantity);
  return (
    <div className="fixed md:hidden bottom-0 w-full py-6 bg-white flex justify-evenly">
      <NavLink to={"/"}>
        <User />
      </NavLink>
      <Search />
      <span className="relative">
        <NavLink to={"/cart"}>
          <ShoppingBasket />
          {totalItems == 0 ? null : (
            <span className="w-4 h-4 text-sm rounded-full bg-black text-white flex items-center justify-center absolute top-[-15%] right-[-20%]">
              {totalItems}
            </span>
          )}
        </NavLink>
      </span>
    </div>
  );
};

export default MobileMenu;
