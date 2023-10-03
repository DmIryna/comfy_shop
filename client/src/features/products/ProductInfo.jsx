import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import DeleteItem from "../cart/DeleteItem"
import UpdateItemQuantity from "../cart/UpdateItemQuantity"
import { getProductById } from "../../services/apiShop"
import { addItem, getCurrentQuantityById } from "../cart/cartSlice"

function ProductInfo() {
  const currentProduct = useLoaderData()
  const { name, company, price, description, img, id } = currentProduct
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
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
    <div className="flex flex-col">
      <Button type="back" onClick={() => navigate(-1)}>
        <span>&larr; </span>
        Back
      </Button>
      <div className="m-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8">
        <div className="justify-self-center">
          <img src={img} alt={name} className="w-[16rem] h-[20rem]" />
        </div>
        <div className="text-center sm:text-start">
          <h2 className="py-3 font-bold">{name}</h2>
          <Link
            to={`/company/${company}`}
            className="underline hover:text-orange-400 duration-500"
          >
            <p className="py-3 font-semibold">{company}</p>
          </Link>
          <p className="font-semibold mb-6">
            $ <span>{price}</span>
          </p>
          <p className="mb-6 leading-6">{description}</p>

          <div className="flex justify-center sm:justify-start gap-3">
            {!currentQuantity && (
              <Button type="primary" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
            {currentQuantity > 0 && (
              <div className="flex gap-4">
                <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
                <DeleteItem id={id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const loader = async ({ params }) => {
  const currentProduct = await getProductById(params.id)

  return currentProduct
}

export default ProductInfo
