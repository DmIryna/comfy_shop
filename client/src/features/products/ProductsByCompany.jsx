import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom"
import ProductList from "./ProductList"
import Button from "../../ui/Button"
import { getProductsByCompany } from "../../services/apiShop"

function ProductsByCompany() {
  const productsByCompany = useLoaderData()
  const { company } = useParams()
  const navigate = useNavigate()

  return (
    <section className="flex flex-col mx-auto my-8">
      <Button type="back" onClick={() => navigate(-1)}>
        <span>&larr; </span>
        Back
      </Button>
      <h2 className="my-5 text-2xl font-semibold text-center">{company}</h2>
      <ul className="mx-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 self-center">
        {productsByCompany.map((product) => (
          <li key={product.id} className="relative">
            <Link to={`/products/${product.id}`}>
              <ProductList product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductsByCompany

export const loader = async ({ params }) => {
  const company = params.company
  console.log(company)
  const productsByCompany = await getProductsByCompany(company)

  return productsByCompany
}
