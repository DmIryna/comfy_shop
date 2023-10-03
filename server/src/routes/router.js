import express from "express"
import {
  getAllProducts,
  getProductById,
  getCategories,
  getProductsByCompany,
} from "../controllers/products.controller.js"
import { createOrder, getOrder } from "../controllers/order.controller.js"

const router = express.Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.get("/company/:company", getProductsByCompany)
router.get("/categories", getCategories)

router.post("/orders", createOrder)
router.get("/orders/:_id", getOrder)

export default router
