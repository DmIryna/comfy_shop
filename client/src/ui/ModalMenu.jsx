import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { getTotalCartQuantity } from "../features/cart/cartSlice"

function ModalMenu({ onSetIsOpen }) {
  const totalCartQuantity = useSelector(getTotalCartQuantity)

  return (
    <ul className="fixed inset-0 w-full bg-gray-300/95 z-10 flex flex-col gap-4 text-2xl justify-center items-center">
      <li
        className="cursor-pointer absolute top-6 left-4 hover:text-orange-400 duration-500"
        onClick={() => onSetIsOpen(false)}
      >
        <FaTimes />
      </li>
      <li className="text-cyan-900 font-bold hover:text-orange-400 duration-500">
        <Link to="/" onClick={() => onSetIsOpen(false)}>
          Home
        </Link>
      </li>
      <li className="text-cyan-900 font-bold  hover:text-orange-400 duration-500">
        <Link to="/products" onClick={() => onSetIsOpen(false)}>
          Products
        </Link>
      </li>
      <li className="text-cyan-900 font-bold  hover:text-orange-400 duration-500">
        <Link to="/about" onClick={() => onSetIsOpen(false)}>
          About
        </Link>
      </li>
      <li className="cursor-pointer absolute top-6 right-5 hover:text-orange-400 duration-500">
        <Link to="/cart" onClick={() => onSetIsOpen(false)}>
          <BsCart3 className="w-6 h-6" />
          <span className="absolute -top-1 -right-2 block bg-orange-500 px-1 text-xs rounded-sm md:-top-2 md:-right-1 md:text-sm">
            {totalCartQuantity}
          </span>
        </Link>
      </li>
    </ul>
  )
}

export default ModalMenu
