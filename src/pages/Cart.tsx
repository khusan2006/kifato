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
          <thead>
            <tr className="bg-gray-200">
              <th className="border   px-4 py-2"></th>
              <th className="border   px-4 py-2"></th>
              <th className="border   px-4 py-2">Tovarlar</th>
              <th className="border   px-4 py-2">Narxi</th>
              <th className="border   px-4 py-2">Miqdori</th>
              <th className="border   px-4 py-2">Jami</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-0 text-center px-4 py-4">
                <X
                  size={"18"}
                  className="bg-gray-600 rounded-full text-white"
                />
              </td>
              <td className="border-0 text-center px-4 py-4">
                <img src={CategoryImage} alt="afjkdf" className="w-10" />
              </td>
              <td className="border-0 text-center px-4 py-4">
                Past haroratli slayd "ENISEY 1875" 1875l
              </td>
              <td className="border-0 text-center px-4 py-4">$172 317,00</td>
              <td className="border-0 text-center px-4 py-4"><input type="number" defaultValue={1} className="w-12 border-[1px] border-black" /></td>
              <td className="border-0 text-center px-4 py-4">New York</td>
            </tr>
            <tr>
              <td className="border-0 text-center px-4 py-4">
                <X
                  size={"18"}
                  className="bg-gray-600 rounded-full text-white"
                />
              </td>
              <td className="border-0 text-center px-4 py-4">
                <img src={CategoryImage} alt="afjkdf" className="w-10" />
              </td>
              <td className="border-0 text-center px-4 py-4">
                Past haroratli slayd "ENISEY 1875" 1875l
              </td>
              <td className="border-0 text-center px-4 py-4">$172 317,00</td>
              <td className="border-0 text-center px-4 py-4"><input type="number" defaultValue={1} className="w-12 border-[1px] border-black" /></td>
              <td className="border-0 text-center px-4 py-4">New York</td>
            </tr>
            <tr>
              <td className="border-0 text-center px-4 py-4">
                <X
                  size={"18"}
                  className="bg-gray-600 rounded-full text-white"
                />
              </td>
              <td className="border-0 text-center px-4 py-4">
                <img src={CategoryImage} alt="afjkdf" className="w-10" />
              </td>
              <td className="border-0 text-center px-4 py-4">
                Past haroratli slayd "ENISEY 1875" 1875l
              </td>
              <td className="border-0 text-center px-4 py-4">$172 317,00</td>
              <td className="border-0 text-center px-4 py-4"><input type="number" defaultValue={1} className="w-12 border-[1px] border-black" /></td>
              <td className="border-0 text-center px-4 py-4">New York</td>
            </tr>
            <tr>
              <td className="border-0 text-center px-4 py-4">
              
              </td>
              <td className="border-0 text-center px-4 py-4">
              </td>
              <td className="border-0 text-center px-4 py-4">
              </td>
              <td className="border-0 text-center px-4 py-4"></td>
              <td className="border-0 text-center px-4 py-4"></td>
              <td className="border-0 text-center px-4 py-4"><button className="bg-red-500 text-white w-full h-full py-2 rounded-sm">Savatni tozalash</button></td>
            </tr>
          </tbody>
        </table>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cart;
