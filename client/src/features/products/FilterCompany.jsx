import { useSearchParams } from "react-router-dom"

function FilterCompany({ products }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterValue = searchParams.get("company") || "All"
  const companies = [
    "All",
    ...new Set(products.map((product) => product.company)),
  ]

  const handleFilter = (company) => {
    searchParams.set("company", company)
    setSearchParams(searchParams)
  }

  return (
    <div className=" row-start-2">
      <h4 className="font-semibold text-base mt-2">Company</h4>
      <ul>
        {companies.map((company) => (
          <li
            key={company}
            className={`cursor-pointer py-0.5 md:py-1 flex items-center gap-2 ${
              filterValue === company ? "active" : ""
            }
            `}
            onClick={() => handleFilter(company)}
          >
            <button className="w-auto" onClick={() => handleFilter(company)}>
              {company}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterCompany
