import { useSelector } from "react-redux"
import { selectSearchValue } from "../slices/SearchSlices"
import { useQuery } from "@tanstack/react-query";
import { getProductByValue } from "../api/products";
import { ProductType } from "../types";
import Product from "../components/Product";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const SearchResults = () => {
    const value = useSelector(selectSearchValue);
    const {data} = useQuery({
        queryKey: [value],
        queryFn: () => getProductByValue(value)
    })
  return (
    <div>
      <MaxWidthWrapper>
      <h3 className="text-3xl font-semibold ml-3 mt-6">Natijalar</h3>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
        {data?.map((item: ProductType) => (
        <Product product={item} />
      ))}
   
        </div>
        <div className="text-2xl  font-medium flex justify-center items-center mb-12 text-center">
        {data?.length === 0 ? 'Bunday mahsulot mavjud emas' : null}
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SearchResults
