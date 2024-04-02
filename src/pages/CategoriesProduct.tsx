import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Product from "../components/Product";
import { getProductsByCategory } from "../api/products";
import { useLocation, useParams } from "react-router-dom";
import { CategoryType, ProductType } from "../types";
import Category from "../components/Category";
import Loading from "../components/Loading";
import { useState } from "react";
import { sortProductsByPrice } from "../utils/helper";

const CategoriesProduct = () => {
  const { id = "1" } = useParams();
  const { state }: { state: CategoryType } = useLocation();
  const [sortedData, setSortedData] = useState<ProductType[]>();
  console.log(sortedData);
  const { data: products } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsByCategory(id),
  });
  if (!products) return <Loading />;

  const { data = [] }: { data?: ProductType[] | CategoryType[] | [] } =
    products;

  const handleSortChange = (value: string) => {
    if (value == "default") {
      setSortedData(data as ProductType[]);
    } else if (value == "ascending") {
      setSortedData(sortProductsByPrice(data as ProductType[], " ascending"));
    } else if (value == "descending") {
      setSortedData(sortProductsByPrice(data as ProductType[], "descending"));
    }
  };
  const BREADCRUMBS = [
    { id: 1, name: "Asosiy", href: "/" },
    { id: 2, name: state.desc, href: "/factories" },
  ];

  return (
    <section>
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <div className="flex gap-3">
          <select
            className="border-[1px] border-black"
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Dastlabki tartib</option>
            <option value="ascending">Narx: oshib borish boyicha</option>
            <option value="descending">Narx: kamayib borish boyicha</option>
          </select>
          <p>{state?.count} ta mahsulot taqdim etildi</p>
        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
          {products.is_parent === 0
            ? data?.map((product) => (
                <Product product={product as ProductType} category={state} />
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
