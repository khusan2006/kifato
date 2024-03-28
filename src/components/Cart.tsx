import { ShoppingBasketIcon, X } from "lucide-react";
import { useState } from "react";
import CategoryImage from "../assets/category-image.webp";
const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="flex relative cursor-pointer p-2 rounded-md bg-white w-46 lg:w-60 justify-between text-red-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="flex gap-1 items-center">
        $0.00 <span className="text-red-400 text-sm"> 0 mahsulotlar</span>
      </p>
      <ShoppingBasketIcon />

      {isHovered ? (
        <div className="absolute text-gray-900  w-full top-[100%]  left-0 bg-gray-200">
          <div className="py-4 px-4 h-[10rem] overflow-y-scroll flex flex-col gap-3">
            <div className="flex">
              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  <X className="float-left mt-[3px]" size={"15"} /> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-sm">1 X $8935,45</p>
              </div>
              <img src={CategoryImage} className="w-16 h-10" alt="" />
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-3" />

            <div className="flex  ">
              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  <X className="float-left mt-[3px]" size={"15"} /> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-sm">1 X $8935,45</p>
              </div>
              <img src={CategoryImage} className="w-16 h-10" alt="" />
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-3" />

            <div className="flex  ">
              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  <X className="float-left mt-[3px]" size={"15"} /> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-sm">1 X $8935,45</p>
              </div>
              <img src={CategoryImage} className="w-16 h-10" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-1 py-3 justify-center">
            <b>Jami:</b> ₽172,317.00
          </div>
          <div className="w-full h-[1px] bg-gray-400 my-3 " />
          <div className="flex flex-col gap-3 py-2 px-4">
            <button className="w-full py-2 text-red-500 bg-gray-300">
              Savatni korish
            </button>
            <button className="w-full py-2 bg-red-500 text-white">
              Buyurtma
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;