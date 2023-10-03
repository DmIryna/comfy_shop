import Products from "../models/products.model.js"

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({}, { _id: 0, __v: 0 })
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Products could not be loaded" })
  }
}

export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Products.find({ id: productId }, { _id: 0, __v: 0 })
    if (!product) return res.status(404).json({ message: "Product not found" })

    res.status(200).json(product)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: "Product not found" })
  }
}

export const getProductsByCompany = async (req, res) => {
  try {
    const { company } = req.params
    const products = await Products.find(
      { company: company },
      { _id: 0, __v: 0 }
    )

    res.status(200).json({ products })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Failed getting products" })
  }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await Products.find().distinct("category")
    console.log(categories)
    res.status(200).json(categories)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Failed fetching categories" })
  }
}
