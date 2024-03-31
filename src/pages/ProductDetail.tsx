import { useLocation, useParams } from "react-router-dom";
import { CategoryType, ProductType } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getProductById, getProductsByCategory } from "../api/products";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Breadcrumbs from "../components/Breadcrumbs";
import Loading from "../components/Loading";
import { IMAGE_URL } from "../config";
import ReactMarkdown from "react-markdown";
import Product from "../components/Product";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../slices/CartSlice";
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { state }: { state: CategoryType } = useLocation();
  const { data }: { data: ProductType | undefined } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id as string),
  });
  const { data: products } = useQuery({
    queryKey: ["products", state.id],
    queryFn: () => getProductsByCategory(state.id as string),
  });
  const item = useSelector(getCurrentQuantityById(data?.id as string));
  const BREADCRUMBS = [
    { id: 1, name: "Asosiy", href: "/" },
    { id: 2, name: state?.desc || "category", href: `categories/${state?.id}` },
    { id: 3, name: data?.desc || "product", href: `/product/${data?.id}` },
  ];

  const handleAddItem = () => {
    if (item) {
      dispatch(increaseItemQuantity(data?.id));
      toast.success("mahsulot savatchaga qoshildi");
    } else {
      const productInfo = {
        productId: data?.id,
        name: data?.desc,
        quantity: 1,
        unitPrice: data?.narx,
        totalPrice: data?.narx,
        image: data?.image,
      };

      dispatch(addItem(productInfo));
      toast.success("mahsulot savatchaga qoshildi");
    }
  };
  if (!data) <Loading />;
  return (
    <section>
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <div className="flex md:flex-row flex-col">
          <div className="flex-[2]">
            <img src={`${IMAGE_URL}/${data?.image}`} alt={data?.desc} />
          </div>
          <div className="flex-[3] mt-10">
            <h2 className="text-3xl font-medium">{data?.desc}</h2>
            <p className="text-2xl font-semibold mt-5">${data?.narx} (QQsiz)</p>
            <div className="flex flex-col gap-4 mt-5">
              {data
                ? data.sifatlar.map((sifat) => {
                    const [items] = Object.entries(sifat);
                    console.log(items)
                    return (
                      <p>
                        {items[0]} - <strong>{items[1]}</strong>
                      </p>
                    );
                  })
                : null}
            </div>
            <button
              onClick={handleAddItem}
              className="mt-5 bg-red-500 text-white py-3 px-4 rounded-md"
            >
              Savatchaga qoshish
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-3xl my-3">Tavsif</h4>
          <ReactMarkdown>{data?.opis}</ReactMarkdown>
        </div>
        <div className="mt-12">
          <h4 className="text-3xl">Shunga o'xshash mahsulotlar</h4>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
            {products?.data.map((product: ProductType) => (
              <Product product={product} category={state} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductDetail;
