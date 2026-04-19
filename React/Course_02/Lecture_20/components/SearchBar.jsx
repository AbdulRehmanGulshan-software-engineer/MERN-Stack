export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
