import React from "react";
import coffeelogo from "../assets/coffee-logo.png";
import profile from "../assets/profile_icon.png";
import cart from "../assets/cart_icon.png";
import SearchBar from "./SearchBar";

const Header = () => {
  
  return (
    <div>
      <div className="container mx-auto px-4 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="w-40 md:w-48 bg-cream/10 p-2 rounded">
            <img src={coffeelogo} alt="Köken Kahve" className="w-full" />
          </div>
          <div className=" container w-30">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="p-1 hover:opacity-80 transition-opacity">
              <img
                src={profile}
                alt="Profil"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </button>
            <button className="p-1 hover:opacity-80 transition-opacity">
              <img src={cart} alt="Sepet" className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
