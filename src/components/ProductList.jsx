// ProductList.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products, sortOptions, filterOptions } from "../data/products";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import GrindFilter from "./GrindFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import WeightFilter from "./WeightFilter";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { productId } = useParams();
  const [menuItems, setMenuItems] = useState(products);
  const [sortBy, setSortBy] = useState("newest");

  const [activeFilters, setActiveFilters] = useState({
    category: { all: true },
    grind: {},
    price: {},
    weight: {},
  });

  const handleFilterChange = (filterType, filterId, isChecked) => {
    const newFilters = { ...activeFilters };

    // Special handling for the "all" category
    if (filterType === "category" && filterId === "all" && isChecked) {
      // If "all" is checked, uncheck all other category filters
      newFilters.category = { all: true };
    } else if (filterType === "category" && filterId !== "all" && isChecked) {
      // If any category other than "all" is checked, uncheck "all"
      newFilters.category = {
        ...newFilters.category,
        [filterId]: isChecked,
        all: false,
      };
    } else {
      // Regular filter update
      newFilters[filterType] = {
        ...newFilters[filterType],
        [filterId]: isChecked,
      };
    }

    // Update the filter state
    setActiveFilters(newFilters);

    // Apply the filters
    const filtered = applyFilters(newFilters);
    setMenuItems(filtered);
  };

  // Apply all filters to the products
  const applyFilters = (filters) => {
    // Start with all products
    let results = [...products];

    // Apply category filters
    if (!filters.category.all) {
      const selectedCategories = Object.keys(filters.category).filter(
        (key) => filters.category[key] && key !== "all"
      );

      if (selectedCategories.length > 0) {
        results = results.filter((product) =>
          selectedCategories.some((category) =>
            product.featuredTags.includes(category)
          )
        );
      }
    }

    // Apply grind filters
    const selectedGrinds = Object.keys(filters.grind).filter(
      (key) => filters.grind[key]
    );

    if (selectedGrinds.length > 0) {
      results = results.filter((product) =>
        selectedGrinds.some((grind) => product.grindOptions.includes(grind))
      );
    }

    // Apply price range filters
    const selectedPriceRanges = Object.keys(filters.price).filter(
      (key) => filters.price[key]
    );

    if (selectedPriceRanges.length > 0) {
      results = results.filter((product) => {
        return selectedPriceRanges.some((rangeId) => {
          const range = filterOptions.priceRangeFilters.find(
            (r) => r.id === rangeId
          );
          return (
            range && product.price >= range.min && product.price <= range.max
          );
        });
      });
    }

    // Apply weight filters
    const selectedWeights = Object.keys(filters.weight).filter(
      (key) => filters.weight[key]
    );

    if (selectedWeights.length > 0) {
      results = results.filter((product) => {
        return selectedWeights.some((weightId) => {
          const weight = filterOptions.weightFilters.find(
            (w) => w.id === weightId
          );
          return weight && product.weight === weight.value;
        });
      });
    }

    // Apply sorting
    results = sortProducts(results, sortBy);

    return results;
  };

  // Sort products based on selected sort option
  const sortProducts = (productsToSort, sortOption) => {
    const sorted = [...productsToSort];

    switch (sortOption) {
      case "priceAsc":
        return sorted.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return sorted.sort((a, b) => b.price - a.price);
      case "popularity":
        return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "newest":
      default:
        // Assuming newest is the default order of the array
        return sorted;
    }
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setMenuItems(sortProducts(menuItems, newSortBy));
  };

  // Initialize products based on URL param
  useEffect(() => {
    if (productId && productId !== "all") {
      // Reset filters but set the URL category
      const newFilters = {
        category: { all: false },
        grind: {},
        price: {},
        weight: {},
      };

      // Try to match the URL parameter to a product category or tag
      const matchingProducts = products.filter(
        (product) =>
          product.category.toLowerCase().includes(productId.toLowerCase()) ||
          product.featuredTags.includes(productId)
      );

      if (matchingProducts.length > 0) {
        // Find which filter matches the URL
        const matchingFilter = filterOptions.featuredFilters.find(
          (filter) =>
            filter.id === productId ||
            filter.name.toLowerCase().includes(productId.toLowerCase())
        );

        if (matchingFilter) {
          newFilters.category[matchingFilter.id] = true;
        }
      }

      setActiveFilters(newFilters);
      setMenuItems(applyFilters(newFilters));
    } else {
      // Default: show all products
      const defaultFilters = {
        category: { all: true },
        grind: {},
        price: {},
        weight: {},
      };

      setActiveFilters(defaultFilters);
      setMenuItems(products);
    }
  }, [productId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <CategoryFilter
              activeFilters={activeFilters}
              handleFilterChange={handleFilterChange}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <GrindFilter
              activeFilters={activeFilters}
              handleFilterChange={handleFilterChange}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <PriceRangeFilter
              activeFilters={activeFilters}
              handleFilterChange={handleFilterChange}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <WeightFilter
              activeFilters={activeFilters}
              handleFilterChange={handleFilterChange}
            />
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
