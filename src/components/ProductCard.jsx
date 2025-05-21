// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    id,
    title,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    badges = [],
    featuredTags = [],
  } = product;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              style={{ clipPath: "inset(0 0 0 50%)", fill: "#d1d5db" }}
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <div className="relative h-64 overflow-hidden">
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              %{discount} İndirim
            </span>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          {featuredTags.includes("bestseller") && (
            <div className="absolute top-2 right-2 bg-[#58391C] text-white text-xs px-2 py-1 rounded">
              Çok Satan
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">{renderStars()}</div>
          <span className="text-xs text-gray-500 ml-2">({reviewCount})</span>
        </div>

        <div className="flex justify-between items-end">
          <div>
            {originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                {originalPrice.toFixed(2)} ₺
              </p>
            )}
            <p className="text-lg font-bold text-[#58391C]">
              {price.toFixed(2)} ₺
            </p>
          </div>
          <button className="bg-[#58391C] text-white px-3 py-1 rounded-md text-sm transition hover:bg-[#6e4a2c]">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
