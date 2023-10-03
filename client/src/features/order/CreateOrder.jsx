import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { useSelector } from "react-redux"
import store from "../../store"
import EmptyCart from "../cart/EmptyCart"
import Button from "../../ui/Button"
import { createOrder } from "../../services/apiShop"
import { clearCart } from "../cart/cartSlice"
import { getTotalCartPrice } from "../cart/cartSlice"

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  )

function CreateOrder() {
  const { cart } = useSelector((state) => state.cart)
  const errors = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  const totalCartPrice = useSelector(getTotalCartPrice)

  if (!cart.length) return <EmptyCart />

  return (
    <div className="my-8 mx-6 md:mx-auto md:w-[45rem]">
      <h2 className="mb-4 font-semibold">Ready to order? Let`s go!</h2>

      <Form method="post" className="text-sm">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="grow rounded px-3 py-2 text-sm focus:outline-none"
          />
        </div>
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="phone" className="sm:basis-40">
            Phone
          </label>
          <div className="grow">
            <input
              type="text"
              name="phone"
              required
              className=" rounded px-3 py-2 text-sm focus:outline-none w-full"
            />
            {errors?.phone && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="address" className="sm:basis-40">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            className="grow rounded px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="totalPrice" value={totalCartPrice} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting order" : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data)
  const order = { ...data, cart: JSON.parse(data.cart) }

  const errors = {}

  if (!isValidPhone(order.phone))
    errors.phone = `Please, give us your correct phone number. We might need it to contact you.`

  if (Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order)
  store.dispatch(clearCart())

  return redirect(`/order/${newOrder._id}`)
}

export default CreateOrder
