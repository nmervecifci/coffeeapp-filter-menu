import React from "react";
import { filterOptions } from "../data/products";

const CategoryFilter = ({ activeFilters, handleFilterChange }) => {
  const featuredFilters = filterOptions.featuredFilters || [];

  return (
    <div className="mb-6">
      <h3 className="font-medium text-lg mb-3">Kategoriler</h3>
      <div className="space-y-2">
        {/* "All" filter option */}
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={(e) =>
              handleFilterChange("category", "all", e.target.checked)
            }
            checked={activeFilters.category.all || false}
            id="filter-all"
            className="w-4 h-4 text-[#58391C] rounded border-gray-300 focus:ring-[#58391C]"
          />
          <label htmlFor="filter-all" className="ml-2 text-sm">
            Tümü
          </label>
        </div>

        {/* Featured filters */}
        {Array.isArray(featuredFilters) && featuredFilters.length > 0 ? (
          featuredFilters.map((filterOption) => (
            <div key={filterOption.id} className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange(
                    "category",
                    filterOption.id,
                    e.target.checked
                  )
                }
                checked={activeFilters.category[filterOption.id] || false}
                id={`filter-${filterOption.id}`}
                className="w-4 h-4 text-[#58391C] rounded border-gray-300 focus:ring-[#58391C]"
              />
              <label
                htmlFor={`filter-${filterOption.id}`}
                className="ml-2 text-sm"
              >
                {filterOption.name} ({filterOption.count})
              </label>
            </div>
          ))
        ) : (
          <p>No filter options available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
