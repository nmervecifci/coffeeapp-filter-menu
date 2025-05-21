import React from "react";
import bgImage from "../assets/background.png";

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "#f5ecd7",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
