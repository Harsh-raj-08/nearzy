const FilterSort = ({ onSortChange, onPriceFilter, sortBy, priceRange }) => {
  return (
    <div className="filter-sort">
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="sort" className="filter-label">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="filter-select"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="title">Name</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="maxPrice" className="filter-label">
            Max Price:
          </label>
          <input
            type="range"
            id="maxPrice"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => onPriceFilter(Number(e.target.value))}
            className="price-slider"
            style={{ background: "#fe4773" }}
          />
          <span className="price-value">${priceRange}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
