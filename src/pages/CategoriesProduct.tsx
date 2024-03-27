import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Product from "../components/Product";

const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "Zavodlar haqida", href: "/factories" },
];

const CategoriesProduct = () => {
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
          <p>4 ta mahsulot taqdim etildi</p>
        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 ">
            {Array.from({length: 5}, () => (
                <Product />
            ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CategoriesProduct;
