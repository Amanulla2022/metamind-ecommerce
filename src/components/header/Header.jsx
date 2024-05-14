import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname !== "/") {
    return (
      <header className="flex justify-between bg-[#fef9c3] p-2">
        <h1>Aman Store</h1>
        <nav>
          <ul className="flex gap-4 text-[#4f46e5]">
            <li className="text-[#4ade80] underline">All Products</li>
            <li>Electronic</li>
            <li>Jewelry</li>
            <li>Men</li>
            <li>Women</li>
            <li>Cart</li>
            <li>Logout</li>
          </ul>
        </nav>
      </header>
    );
  }
  return null;
};

export default Header;
