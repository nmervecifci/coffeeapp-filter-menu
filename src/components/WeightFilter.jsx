import React, { useContext } from "react";
import { filterOptions } from "../data/products";
import { FilterContext } from "../context/FilterContext";

const WeightFilter = () => {
  const { activeFilters, handleFilterChange } = useContext(FilterContext);
  const weightFilters = filterOptions.weightFilters || [];

  return (
    <div className="mb-6">
      <h3 className="font-medium text-lg mb-3">Gramaj</h3>
      <div className="space-y-2">
        {Array.isArray(weightFilters) && weightFilters.length > 0 ? (
          weightFilters.map((filterOption) => (
            <div key={filterOption.id} className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange(
                    "weight",
                    filterOption.id,
                    e.target.checked
                  )
                }
                checked={activeFilters.weight[filterOption.id] || false}
                id={`weight-${filterOption.id}`}
                className="w-4 h-4 text-[#58391C] rounded border-gray-300 focus:ring-[#58391C]"
              />
              <label
                htmlFor={`weight-${filterOption.id}`}
                className="ml-2 text-sm"
              >
                {filterOption.name} ({filterOption.count})
              </label>
            </div>
          ))
        ) : (
          <p>No weight options available</p>
        )}
      </div>
    </div>
  );
};

export default WeightFilter;
