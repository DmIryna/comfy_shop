import { useEffect, useState } from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { LiaFilterSolid } from "react-icons/lia"
import ProductList from "./ProductList"
import SearchInput from "./SearchInput"
import FilterCompany from "./FilterCompany"
import FilterCategory from "./FilterCategory"
import { getProducts } from "../../services/apiShop"

function Products() {
  const products = useLoaderData()
  const [searchProducts, setSearchProducts] = useState(products)
  const [isOpen, setIsOpen] = useState(false)
  const [searchParams] = useSearchParams()

  const filterCompany = searchParams.get("company") || "All"
  const filterCategory = searchParams.get("category") || "All"
  const filterQuery = searchParams.get("query") || "All"

  useEffect(() => {
    setSearchProducts(
      products.filter((item) => {
        return (
          (filterCompany !== "All"
            ? item.company === filterCompany
            : item.company) &&
          (filterCategory !== "All"
            ? item.category === filterCategory
            : item.category) &&
          (filterQuery !== "All"
            ? item.name.toLowerCase().includes(filterQuery.toLowerCase())
            : item.name)
        )
      })
    )
  }, [filterCategory, filterCompany, filterQuery, products])

  return (
    <div className="my-10 mx-6 grid gap-3 md:grid-cols-[auto_1fr] grid-cols-1 ">
      <section className="text-sm justify-self-center mx-4 w-44 xl:w-56">
        <SearchInput products={products} onSearch={setSearchProducts} />
        <span className="flex items-center gap-2 text-lg">
          Filter
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-orange-400 duration-500"
          >
            <LiaFilterSolid />
          </button>
        </span>

        {isOpen && (
          <div>
            <FilterCompany
              products={products}
              onFilter={setSearchProducts}
              searchProducts={searchProducts}
            />
            <FilterCategory products={products} />
          </div>
        )}
      </section>
      <section className="flex flex-col items-center mx-auto ">
        <ul className="mx-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {searchProducts.map((product) => (
            <li key={product.id} className="relative">
              <Link to={`${product.id}`}>
                <ProductList product={product} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export const loader = async () => {
  const products = await getProducts()

  return products
}

export default Products
