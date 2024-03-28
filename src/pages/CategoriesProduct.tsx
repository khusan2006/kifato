import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Product from "../components/Product";
import { getProductsByCategory } from "../api/products";
import { useLocation, useParams } from "react-router-dom";
import { CategoryType, ProductType } from "../types";
import Category from "../components/Category";



const CategoriesProduct = () => {
  const { id = "1" } = useParams();
  const {state}: {state: CategoryType} = useLocation();
  const { data: products } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsByCategory(id),
  });
  if (!products) return <div>there is no product</div>;
  const { data = [] }: { data?: ProductType[] | CategoryType[] | [] } =
    products;

    const BREADCRUMBS = [
        { id: 1, name: "Asosiy", href: "/" },
        { id: 2, name: state.desc, href: "/factories" },
      ];
  return (
    <section>
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <div className="flex gap-3">
          <select className="border-[1px] border-black">
            <option value="dastlabki">Dastlabki tartib</option>
            <option value="dastlabki">Mashhurlik boyicha</option>
            <option value="dastlabki">Reyting boyicha</option>
            <option value="dastlabki">Yangilik boyicha</option>
            <option value="dastlabki">Narx: oshib borish boyicha</option>
            <option value="dastlabki">Narx: kamayib borish boyicha</option>
          </select>
          <p>{state?.count} ta mahsulot taqdim etildi</p>
        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
          {products.is_parent === 0
            ? data?.map((product) => (
                <Product product={product as ProductType} />
              ))
            : data?.map((product) => (
                <Category category={product as CategoryType} />
              ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CategoriesProduct;
