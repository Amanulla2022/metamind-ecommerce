import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import AllProducts from "./pages/AllProducts";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </Router>
  );
};

export default Layout;
