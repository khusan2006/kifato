import { ShoppingBasketIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../slices/CartSlice";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const totalItems = useSelector(getTotalCartQuantity);

  return (
    <NavLink to={"/cart"}>
      <p className=" relative flex items-center gap-2">
        Savatcha <ShoppingBasketIcon />
        {totalItems == 0 ? null : (
          <span className="absolute top-[-8%] right-[-10%] bg-red-700 rounded-full w-4 h-4 text-sm flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </p>
    </NavLink>
    // <div
    //   className="flex relative cursor-pointer p-2 rounded-md bg-white w-46 lg:w-60 justify-between text-red-500"
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    // >
    //   <p className="flex gap-1 items-center">
    //     {totalPrice}{" "}
    //     <span className="text-red-400 text-sm"> {totalItems} mahsulotlar</span>
    //   </p>
    //   <ShoppingBasketIcon />

    //   {isHovered ? (
    //     <div className="absolute text-gray-900  w-full top-[100%]  left-0 bg-gray-200">
    //       <div className="py-4 px-4 h-[10rem] overflow-y-scroll flex flex-col gap-3">
    //         {items.map((item) => (
    //           <>
    //             <div className="flex justify-between">
    //               <div className="flex flex-col gap-2">
    //                 <p className="text-sm">
    //                   <X onClick={() => handleDelete(item.productId)} className="float-left mt-[3px]" size={"15"} />{" "}
    //                   {item.name}
    //                 </p>
    //                 <p className="text-sm">
    //                   {item.quantity} X ${item.totalPrice}
    //                 </p>
    //               </div>
    //               <img
    //                 src={`${IMAGE_URL}/${item.image}`}
    //                 className="w-16 h-10"
    //                 alt={item.name}
    //               />
    //             </div>
    //             <div className="w-full h-[1px] bg-gray-400 my-3" />
    //           </>
    //         ))}
    //       </div>
    //       <div className="flex items-center gap-1 py-3 justify-center">
    //         <b>Jami:</b> ₽{totalPrice}
    //       </div>
    //       <div className="w-full h-[1px] bg-gray-400 my-3 " />
    //       <div className="flex flex-col gap-3 py-2 px-4">
    //        <NavLink to={'/cart'}>
    //        <button className="w-full py-2 text-red-500 bg-gray-300">
    //           Savatni korish
    //         </button>
    //        </NavLink>
    //         <button className="w-full py-2 bg-red-500 text-white">
    //           Buyurtma
    //         </button>
    //       </div>
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default Cart;
