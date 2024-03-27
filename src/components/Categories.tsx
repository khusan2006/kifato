import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/categories";
import { Category } from "../types";
import { IMAGE_URL } from "../config";
const Categories = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  return (
    <div className="py-12 bg-gray-100">
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
        {data?.map((category: Category) => (
          <NavLink to={"/categories/134"}>
            <div className="bg-white md:min-h-[23rem] shadow-md rounded-sm">
              <img
                src={`${IMAGE_URL}/${category.image}`}
                alt="O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan)."
              />
              <h5 className="text-center mt-2">
                {category.desc}
                <span className="font-bold">({category.count})</span>
              </h5>
            </div>
          </NavLink>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default Categories;
