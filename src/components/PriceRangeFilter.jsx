import React, { useContext } from "react";
import { filterOptions } from "../data/products";
import { FilterContext } from "../context/FilterContext";

const PriceRangeFilter = () => {
  const { activeFilters, handleFilterChange } = useContext(FilterContext);
  const priceRangeFilters = filterOptions.priceRangeFilters || [];

  return (
    <div className="mb-6">
      <h3 className="font-medium text-lg mb-3">Fiyat Aralığı</h3>
      <div className="space-y-2">
        {Array.isArray(priceRangeFilters) && priceRangeFilters.length > 0 ? (
          priceRangeFilters.map((filterOption) => (
            <div key={filterOption.id} className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange("price", filterOption.id, e.target.checked)
                }
                checked={activeFilters.price[filterOption.id] || false}
                id={`price-${filterOption.id}`}
                className="w-4 h-4 text-[#58391C] rounded border-gray-300 focus:ring-[#58391C]"
              />
              <label
                htmlFor={`price-${filterOption.id}`}
                className="ml-2 text-sm"
              >
                {filterOption.name}
              </label>
            </div>
          ))
        ) : (
          <p>No price range options available</p>
        )}
      </div>
    </div>
  );
};

export default PriceRangeFilter;
