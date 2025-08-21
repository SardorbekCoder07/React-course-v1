

export default function FilterButtons({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setSelectedFilter(null)}
        className={selectedFilter === null ? "active" : ""}
      >
        All Members
      </button>
      <button
        onClick={() => setSelectedFilter("Premium")}
        className={selectedFilter === "Premium" ? "active" : ""}
      >
        Premium
      </button>
      <button
        onClick={() => setSelectedFilter("Guest")}
        className={selectedFilter === "Guest" ? "active" : ""}
      >
        Guests
      </button>
    </div>
  );
}
