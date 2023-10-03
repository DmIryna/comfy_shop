import { useSearchParams } from "react-router-dom"

function FilterCategory({ products }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterValue = searchParams.get("category") || "All"
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ]

  const handleFilter = (cat) => {
    searchParams.set("category", cat)
    setSearchParams(searchParams)
  }

  return (
    <div className=" row-start-2">
      <h4 className="font-semibold text-base mt-2">Category</h4>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`cursor-pointer py-0.5 md:py-1 ${
              filterValue === cat ? "active" : ""
            }`}
          >
            <button className="w-auto" onClick={() => handleFilter(cat)}>
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterCategory
