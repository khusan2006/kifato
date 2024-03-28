import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../config";
import { ProductType } from "../types";
import { addItem, getCurrentQuantityById } from "../slices/CartSlice";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const item = useSelector(getCurrentQuantityById(product.id as string))
  const handleAddItem = () => {
    const productInfo = {
      productId: product.id,
      name: product.desc,
      quantity: 1,
      unitPrice: product.narx,
      totalPrice: product.narx,
      image: product.image
    };
    dispatch(addItem(productInfo))
  };
  return (
    <div className="bg-white md:min-h-[23rem] p-3 shadow-md rounded-sm">
      <img
        src={`${IMAGE_URL}/${product.image}`}
        alt="O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan)."
      />
      <div className="flex flex-col justify-between">
        <h5 className="text-center mt-2">{product.desc}</h5>
        <h6 className="text-base text-center mt-2 mb-auto">
          ${product.narx} <span className="text-sm">(QQsiz)</span>
        </h6>
        <button
          className="w-full py-2 px-4 bg-red-500 text-white mt-3"
          onClick={handleAddItem}
        >
          Savatga qoshish
        </button>
      {item ? (
          
          <button
          className="w-full py-2 px-4 bg-red-500 text-white mt-3"
          onClick={handleAddItem}
        >
          Savatga otish
        </button>
      ) : null}

      </div>
    </div>
  );
};

export default Product;
