import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { BsCart3 } from "react-icons/bs"
import { getTotalCartQuantity } from "./cartSlice"

function CartOverView() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)

  return (
    <Link to="/cart" className="relative">
      <BsCart3 className="w-6 h-6 md:w-8 md:h-8 hover:text-orange-400 duration-500" />
      <span className="absolute -top-1 -right-2 block bg-orange-500 px-1 text-xs rounded-sm md:-top-2 md:-right-1 md:text-sm">
        {totalCartQuantity}
      </span>
    </Link>
  )
}

export default CartOverView
