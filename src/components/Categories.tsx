import MaxWidthWrapper from "./MaxWidthWrapper";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/categories";
import { CategoryType } from "../types";
import Category from "./Category";
const Categories = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  return (
    <div className="py-12 bg-gray-100">
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
        {data?.map((category: CategoryType) => (
          <Category category={category} />
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default Categories;
