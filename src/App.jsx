import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList/:productId" element={<ProductList />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
