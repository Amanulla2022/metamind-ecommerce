import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import ProductContainer from "./components/ProductsContainer";
import Cart from "./components/Cart";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/all-products"
          element={<ProductContainer category="all" />}
        />
        <Route
          path="/electronics"
          element={<ProductContainer category="electronics" />}
        />
        <Route
          path="/jewelry"
          element={<ProductContainer category="jewelry" />}
        />
        <Route
          path="/mens_clothing"
          element={<ProductContainer category="men's clothing" />}
        />
        <Route
          path="/womens_clothing"
          element={<ProductContainer category="women's clothing" />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Layout;
