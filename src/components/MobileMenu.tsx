import { Search, ShoppingBasket, User } from "lucide-react"

const MobileMenu = () => {
  return (
    <div className="fixed md:hidden bottom-0 w-full py-6 bg-white flex justify-evenly">
        <User />
        <Search />
        <ShoppingBasket />
    </div>
  )
}

export default MobileMenu
