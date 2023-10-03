import axios from "./axios"

const API_URL_PRODUCTS = "/products"
const API_URL_ORDERS = "/orders"
const API_URL_COMPANY = "/company"

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL_PRODUCTS)

    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL_PRODUCTS}/${id}`)

    return response.data.at(0)
  } catch (err) {
    console.log(err)
  }
}

export const getProductsByCompany = async (company) => {
  try {
    const response = await axios.get(`${API_URL_COMPANY}/${company}`)

    return response.data.products
  } catch (err) {
    console.log(err)
  }
}

export const createOrder = async (newOrder) => {
  try {
    const response = await axios.post(API_URL_ORDERS, newOrder)

    return response.data
  } catch {
    throw Error("Failed creating your order")
  }
}

export const getOrder = async (id) => {
  try {
    const response = await axios.get(`${API_URL_ORDERS}/${id}`)

    return response.data
  } catch {
    throw new Error(`Could not find order ${id}`)
  }
}
