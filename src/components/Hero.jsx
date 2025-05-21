import React from "react";
import { useNavigate } from "react-router-dom";
import { categoryImages } from "../data/products";
const Hero = () => {
  const navigate = useNavigate();

  function handleCategoryClick(categoryId) {
    navigate(`/productList/${categoryId}`);
  }

  return (
    <div className="container mx-auto bg-[#F1E5D1] py-8 px-4">
      <div className="flex overflow-x-auto pb-4 gap-8 no-scrollbar">
        {categoryImages.map((categoryImage, index) => {
          return (
            <div
              key={index}
              className="text-center flex-shrink-0"
              onClick={() => handleCategoryClick(categoryImage.id)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 overflow-hidden rounded-full border-2 border-amber-700 bg-white hover:border-amber-500 transition-all">
                <img
                  src={categoryImage.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xs md:text-sm font-medium text-gray-800 w-20 md:w-24 mx-auto">
                {categoryImage.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
