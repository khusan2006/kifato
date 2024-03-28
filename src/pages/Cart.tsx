import { X } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import CategoryImage from "../assets/category-image.webp";
const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "savatcha", href: "/contacts" },
];
const Cart = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <h3 className="text-2xl font-medium mb-4">Savatcha</h3>
        <table className="table-auto w-full border-collapse border mb-16">
          <thead className="hidden md:table-header-group">
            <tr className="bg-gray-200">
              <th className="border   px-4 py-2"></th>
              <th className="border   px-4 py-2"></th>
              <th className="border   px-4 py-2">Tovarlar</th>
              <th className="border   px-4 py-2">Narxi</th>
              <th className="border   px-4 py-2">Miqdori</th>
              <th className="border   px-4 py-2">Jami</th>
            </tr>
          </thead>
          <tbody className="flex flex-col md:table-row-group">
            <tr className="flex flex-col md:table-row">
              <td className="border-0 text-center px-4 py-4">
                <X
                  size={"18"}
                  className="bg-gray-600 rounded-full text-white"
                />
              </td>
              <td className="border-0 flex justify-center md:table-cell text-center px-4 py-4">
                <img src={CategoryImage} alt="afjkdf" className="w-10" />
              </td>
              <td className="border-0 text-center px-4 py-4">
                Past haroratli slayd "ENISEY 1875" 1875l
              </td>
              <td className="border-0 text-center px-4 py-4">$172 317,00</td>
              <td className="border-0 text-center px-4 py-4">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 border-[1px] border-black"
                />
              </td>
              <td className="border-0 text-center px-4 py-4">New York</td>
            </tr>
            <tr className="flex flex-col md:table-row">
              <td className="border-0 text-center px-4 py-4">
                <X
                  size={"18"}
                  className="bg-gray-600 rounded-full text-white"
                />
              </td>
              <td className="border-0 flex justify-center md:table-cell text-center px-4 py-4">
                <img src={CategoryImage} alt="afjkdf" className="w-10" />
              </td>
              <td className="border-0 text-center px-4 py-4">
                Past haroratli slayd "ENISEY 1875" 1875l
              </td>
              <td className="border-0 text-center px-4 py-4">$172 317,00</td>
              <td className="border-0 text-center px-4 py-4">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 border-[1px] border-black"
                />
              </td>
              <td className="border-0 text-center px-4 py-4">New York</td>
            </tr>
          </tbody>
        </table>
        <h4 className="text-2xl my-3">Umumiy summa</h4>
        <div className="w-full md:w-[40rem]">
          <div className="w-full">
            <div className="flex">
              <div className="w-[40%] py-2 px-3 bg-gray-300">Oraliq jami</div>
              <div className="w-[60%] py-2 px-3 bg-gray-200">₽ 684,218,00</div>
            </div>
            <div className="flex">
              <div className="w-[40%] py-2 px-3 bg-gray-300">
                Yetkazib berish
              </div>
              <div className="w-[60%] py-2 px-3 bg-gray-200">Yagona narx</div>
            </div>
            <div className="flex">
              <div className="w-[40%] py-2 px-3 bg-gray-300"></div>
              <div className="w-[60%] py-2 px-3 bg-gray-200">
                Yetkazib berish imkoniyatlari to‘lov vaqtida yangilanadi.
              </div>
            </div>
            <div className="flex">
              <div className="w-[40%] py-2 px-3 bg-gray-300">Jami</div>
              <div className="w-[60%] py-2 px-3 bg-gray-200">₽ 684,218,00</div>
            </div>
          </div>
          <button className="w-full py-3 bg-red-500 text-white mt-3 mb-12">
            Buyurtma berish
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cart;
