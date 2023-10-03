import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../ui/Button"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import { clearCart, getTotalCartPrice } from "./cartSlice"

function Cart() {
  const { cart } = useSelector((state) => state.cart)
  const totalPrice = useSelector(getTotalCartPrice)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOrder = () => {
    navigate("/order/new")
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  if (!totalPrice) return <EmptyCart />

  return (
    <div className="w-full md:w-[50rem] mx-auto flex flex-col">
      <Button type="back" onClick={() => navigate("/products")}>
        &larr; Back
      </Button>
      <h2 className="text-center py-6 px-8 text-2xl font-semibold">
        Your cart
      </h2>

      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-auto">
        <h3 className="text-2xl px-6 py-4 font-semibold text-center">
          Total: $ {totalPrice.toFixed(2)}
        </h3>

        <div className="flex gap-3 mx-4 my-8 justify-center">
          <Button type="primary" onClick={handleOrder}>
            Make order
          </Button>
          <Button type="secondary" onClick={handleClearCart}>
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
