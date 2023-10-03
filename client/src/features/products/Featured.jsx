import { Link, useLoaderData } from "react-router-dom"
import Button from "../../ui/Button"
import ProductList from "./ProductList"

function Featured() {
  const products = useLoaderData()

  return (
    <section className="flex flex-col items-center mx-auto mb-6">
      <h2 className="my-8 font-bold">Featured</h2>
      <ul className="flex flex-col gap-6 md:flex-row mx-6">
        {products.slice(0, 3).map((product) => (
          <li key={product.id} className="relative">
            <Link to={`products/${product.id}`}>
              <ProductList product={product} />
            </Link>
          </li>
        ))}
      </ul>

      <Button type="primary" to="/products">
        All Products
      </Button>
    </section>
  )
}

export default Featured
