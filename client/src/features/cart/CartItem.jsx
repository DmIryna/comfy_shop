import { useSelector } from "react-redux"
import UpdateItemQuantity from "./UpdateItemQuantity"
import DeleteItem from "./DeleteItem"
import { getCurrentQuantityById } from "./cartSlice"

function CartItem({ item }) {
  const { name, quantity, totalPrice, id } = item
  const currentQuantity = useSelector(getCurrentQuantityById(id))

  return (
    <li className="flex items-center justify-between px-6 py-4">
      <p className="mb-1">
        {quantity} &times; {name}
      </p>
      <div className="flex gap-4 items-center">
        <p className="font-semibold text-sm">{totalPrice.toFixed(2)}</p>
        <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
        <DeleteItem id={id} />
      </div>
    </li>
  )
}

export default CartItem
