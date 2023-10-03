import { useSearchParams } from "react-router-dom"

function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleInput = (e) => {
    searchParams.set("query", e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-6 w-full">
      <input
        className="p-3 outline-none rounded text-sm  mb-3 w-full"
        type="search"
        placeholder="Search..."
        onChange={handleInput}
      />
    </form>
  )
}

export default SearchInput
