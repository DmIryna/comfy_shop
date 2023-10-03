import Orders from "../models/orders.model.js"

export const createOrder = async (req, res) => {
  try {
    const { name, phone, address, cart, totalPrice } = req.body
    const order = new Orders({ name, phone, address, cart, totalPrice })
    const newOrder = await order.save()

    res.status(201).json(newOrder)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "There was an error creating order" })
  }
}

export const getOrder = async (req, res) => {
  try {
    const orderId = req.params._id
    const order = await Orders.findById({ _id: orderId })
    if (!order) return res.status(404).json({ message: "Order not found" })

    res.status(200).json(order)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Failed getting order" })
  }
}
