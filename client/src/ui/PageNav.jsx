import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import CartOverView from "../features/cart/cartOverview"
import ModalMenu from "./ModalMenu"

function PageNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="p-3 md:p-5">
      <ul className="flex justify-between items-center p-2">
        <li
          className="sm:hidden hover:text-orange-400 cursor-pointer duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu />
        </li>
        <li className="sm:flex gap-4 hidden text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <Link
            to="/"
            className="logo italic text-3xl md:text-5xl font-semibold cursor-pointer  hover:text-orange-400 duration-500"
          >
            Comfy
          </Link>
        </li>
        <li>
          <CartOverView />
        </li>
      </ul>

      {isOpen && <ModalMenu onSetIsOpen={setIsOpen} />}
    </nav>
  )
}

export default PageNav
