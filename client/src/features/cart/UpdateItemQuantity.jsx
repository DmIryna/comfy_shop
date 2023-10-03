import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseQuantity, increaseQuantity } from "./cartSlice"

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center gap-3 ">
      <Button type="primary" onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
      <span className="font-semibold">{currentQuantity}</span>
      <Button type="primary" onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
    </div>
  )
}

export default UpdateItemQuantity
