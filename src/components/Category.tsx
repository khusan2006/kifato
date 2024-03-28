import { useNavigate } from "react-router-dom"
import { CategoryType } from "../types"
import { IMAGE_URL } from "../config"

const Category = ({category}: {category: CategoryType}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/categories/${category.id}`, {state: category})
    }
  return (

    <div className="bg-white md:min-h-[23rem] shadow-md rounded-sm" onClick={handleClick}>
      <img
        src={`${IMAGE_URL}/${category.image}`}
        alt="O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan)."
      />
      <h5 className="text-center mt-2">
        {category.desc}
        <span className="font-bold">({category.count})</span>
      </h5>
    </div>

  )
}

export default Category
