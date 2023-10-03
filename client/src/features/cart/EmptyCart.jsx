import { useNavigate } from "react-router-dom"
import Button from "../../ui/Button"

function EmptyCart() {
  const navigate = useNavigate()

  return (
    <div>
      <Button type="back" onClick={() => navigate("/products")}>
        &larr; Back
      </Button>
      <h2 className="text-xl px-6 py-8 text-center">
        Your cart is still empty. Start adding some products.
      </h2>
    </div>
  )
}

export default EmptyCart
