export function FilterBar({ filters, removeFilter, clearFilters }) {
    return (
        <div className="filter-container">
            {filters.map((filter, index) => (
                <div key={index} className="job-tag">
                    {filter} <span onClick={() => removeFilter(filter)}>X</span>
                </div>
            ))}
            <span onClick={clearFilters}>Clear</span>
        </div>
    );
}