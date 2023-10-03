import { FaShoppingCart } from "react-icons/fa"
import Button from "./Button"

function AddToCartBtn({ onClick }) {
  return (
    <Button type="cart" onClick={onClick}>
      <span>
        <FaShoppingCart />
      </span>
      Add to cart
    </Button>
  )
}

export default AddToCartBtn
