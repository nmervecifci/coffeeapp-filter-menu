// ProductList.js
import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { sortOptions } from "../data/products";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import GrindFilter from "./GrindFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import WeightFilter from "./WeightFilter";
import ProductCard from "./ProductCard";

const ProductList = () => {
  // Context'ten değerleri almak
  const {
    menuItems,
    sortBy,
    activeFilters,
    handleFilterChange,
    handleSortChange,
  } = useContext(FilterContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <CategoryFilter />
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <GrindFilter />
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <PriceRangeFilter />
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <WeightFilter />
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              FİLTRELER/ÜRÜNLER ({menuItems.length} Sonuç)
            </h2>
            <div className="flex items-center">
              <span className="mr-2">Sırala:</span>
              <select
                className="border rounded p-1"
                value={sortBy}
                onChange={handleSortChange}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.length > 0 ? (
              menuItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-lg text-gray-600">Ürün bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
