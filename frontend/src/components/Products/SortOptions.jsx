import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;

    // Create a new instance so React detects changes properly
    const newParams = new URLSearchParams(searchParams);
    if (sortBy) {
      newParams.set("sortBy", sortBy);
    } else {
      newParams.delete("sortBy"); // clean up when selecting "Default"
    }
    setSearchParams(newParams);
  };

  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        name="sort"
        id="sort"
        className="border p-2 rounded-md focus:outline-none"
        value={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
