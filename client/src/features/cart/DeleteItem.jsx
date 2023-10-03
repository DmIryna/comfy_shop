import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { removeItem } from "./cartSlice"

function DeleteItem({ id }) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeItem(id))
  }

  return (
    <Button type="primary" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  )
}

export default DeleteItem
