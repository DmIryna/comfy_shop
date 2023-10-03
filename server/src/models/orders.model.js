import mongoose from "mongoose"

const ordersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    totalPrice: Number,
    cart: Array,
  },
  { timestamps: true }
)

const Orders = mongoose.model("Order", ordersSchema)
export default Orders
