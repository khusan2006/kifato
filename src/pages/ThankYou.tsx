import { NavLink } from "react-router-dom"

const ThankYou = () => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center">
      <h4 className="w-[40%] text-center">Sizning buyurtmangiz qabul qiindi. Operatorlar siz bilan tez orada aloqaga chiqishadi</h4>
      <NavLink to={'/'}>
      <button className="bg-red-500 text-white py-2 px-4 rounded-md my-4">Asosiy bolimga qaytish</button>

      </NavLink>
    </div>
  )
}

export default ThankYou
