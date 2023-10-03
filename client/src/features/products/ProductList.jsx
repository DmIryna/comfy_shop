import { useDispatch, useSelector } from "react-redux"
import AddToCartBtn from "../../ui/AddToCartBtn"
import DeleteItem from "../cart/DeleteItem"
import { addItem, getCurrentQuantityById } from "../cart/cartSlice"

function ProductList({ product }) {
  const { id, name, price, img } = product
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()

    const newItem = {
      id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    }

    dispatch(addItem(newItem))
  }

  return (
    <div className="text-center text-cyan-800">
      <div className="relative overflow-hidden">
        <img src={img} alt={name} className="w-[16rem] h-[20rem] mb-2" />
      </div>
      <p className="py-3">{name}</p>
      <p className="font-semibold mb-6">
        $ <span>{price}</span>
      </p>

      {!currentQuantity ? (
        <AddToCartBtn type="cart" onClick={handleAddToCart} />
      ) : (
        <div className="absolute bottom-[120px] right-0">
          <DeleteItem id={id} />
        </div>
      )}
    </div>
  )
}

export default ProductList
