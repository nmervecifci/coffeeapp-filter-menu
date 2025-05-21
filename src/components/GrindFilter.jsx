// GrindFilter.jsx
import React from "react";
import { filterOptions } from "../data/products";

const GrindFilter = ({ activeFilters, handleFilterChange }) => {
  const grindFilters = filterOptions.grindFilters || [];

  return (
    <div className="mb-6">
      <h3 className="font-medium text-lg mb-3">Öğütülme Seçimi</h3>
      <div className="space-y-2">
        {Array.isArray(grindFilters) && grindFilters.length > 0 ? (
          grindFilters.map((filterOption) => (
            <div key={filterOption.id} className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange("grind", filterOption.id, e.target.checked)
                }
                checked={activeFilters.grind[filterOption.id] || false}
                id={`grind-${filterOption.id}`}
                className="w-4 h-4 text-[#58391C] rounded border-gray-300 focus:ring-[#58391C]"
              />
              <label
                htmlFor={`grind-${filterOption.id}`}
                className="ml-2 text-sm"
              >
                {filterOption.name} ({filterOption.count})
              </label>
            </div>
          ))
        ) : (
          <p>No grind options available</p>
        )}
      </div>
    </div>
  );
};

export default GrindFilter;
