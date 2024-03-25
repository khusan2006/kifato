import CategoryImage from "../assets/category-image.webp";
import MaxWidthWrapper from "./MaxWidthWrapper";
const Categories = () => {
  return (
    <div className="py-12 bg-gray-100">
      <MaxWidthWrapper className=" grid grid-cols-4 gap-12">
        {Array.from({ length: 14 }, () => (
          <div className="bg-white h-[23rem] shadow-md rounded-sm">
            <img
              src={CategoryImage}
              alt="O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan)."
            />
            <h5 className="text-center mt-2">
              O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan).
              <span className="font-bold">(4)</span>
            </h5>
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default Categories;
