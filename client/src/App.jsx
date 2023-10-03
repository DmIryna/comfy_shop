import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./ui/HomePage"
import Products, {
  loader as productsLoader,
} from "./features/products/Products"
import About from "./ui/About"
import Cart from "./features/cart/Cart"
import ProductInfo, {
  loader as currentProductLoader,
} from "./features/products/ProductInfo"
import AppLayout from "./ui/AppLayout"
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder"
import Order, { loader as orderLoader } from "./features/order/Order"
import ProductsByCompany, {
  loader as productsByCompanyLoader,
} from "./features/products/ProductsByCompany"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage />, loader: productsLoader },
      { path: "/products", element: <Products />, loader: productsLoader },
      {
        path: "/products/:id",
        element: <ProductInfo />,
        loader: currentProductLoader,
      },
      {
        path: "/company/:company",
        element: <ProductsByCompany />,
        loader: productsByCompanyLoader,
      },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
