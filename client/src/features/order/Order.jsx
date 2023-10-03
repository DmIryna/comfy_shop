import { useLoaderData } from "react-router-dom"
import { getOrder } from "../../services/apiShop"
import OrderItem from "./OrderItem"

function Order() {
  const order = useLoaderData()
  const { _id, cart, totalPrice } = order

  return (
    <div className="py-6 px-4 space-y-8 lg:w-[50rem] mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="md:text-xl text-sm font-semibold">
          Order #{_id} status:
        </h2>

        <div className="space-x-2">
          <span className="bg-green-500 rounded-full px-3 py-1 text-xs md:text-sm font-semibold uppercase text-green-50 tracking-wide">
            preparing order
          </span>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <p className="font-bold">To pay on delivery: ${totalPrice}</p>
    </div>
  )
}

export const loader = async ({ params }) => {
  const order = await getOrder(params.id)

  return order
}
export default Order
