import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  const navLinks = [
    { label: "All Products", path: "/all-products" },
    { label: "Electronics", path: "/electronics" },
    { label: "Jewelry", path: "/jewelry" },
    { label: "Men's Clothing", path: "/mens_clothing" },
    { label: "Women's Clothing", path: "/womens_clothing" },
    { label: "Cart", path: "/cart" },
    { label: "Logout", path: "/", onClick: handleLogout },
  ];

  if (location.pathname !== "/") {
    return (
      <header className="flex justify-between bg-[#fef9c3] p-2">
        <h1>Aman Store</h1>
        <nav>
          <ul className="flex gap-4 text-[#4f46e5]">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={
                  location.pathname === link.path
                    ? "text-[#4ade80] underline"
                    : ""
                }
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  return null;
};

export default Header;
