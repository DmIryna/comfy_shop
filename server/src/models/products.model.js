import mongoose from "mongoose"

const productsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

const Products = mongoose.model("Products", productsSchema)
export default Products
