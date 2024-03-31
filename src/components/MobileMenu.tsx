import { Search, ShoppingBasket, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartQuantity } from "../slices/CartSlice";
import { NavLink } from "react-router-dom";
import { setSearchValue } from "../slices/SearchSlices";
import { useState } from "react";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const handleChange = (value: string) => {
    dispatch(setSearchValue(value));
  };
  const handleSearch = () => {
    setIsSearchOpen(prev => !prev)
  }
  const totalItems = useSelector(getTotalCartQuantity);
  return (
    <div className="fixed md:hidden bottom-0 w-full py-6 bg-white flex justify-evenly">
      <NavLink to={"/"}>
        <User />
      </NavLink>
      <Search onClick={handleSearch} />
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

      <input
      onChange={(e) => handleChange(e.target.value)}
        type="text"
        className={`absolute ${isSearchOpen ? 'top-[-90%]' : 'top-[200%]'}   rounded-md mx-auto w-[90%] py-3 px-2 border-[1px] border-black`}
      />
    </div>
  );
};

export default MobileMenu;
