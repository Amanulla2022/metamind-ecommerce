import React from "react";
import { useCart } from "./../cart/CartProvider";

const AllProducts = ({ products, category }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);

    alert(`Added ${product.title} to cart`);
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{category} products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-center">Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-yellow-500 px-4 py-2 rounded-full mt-4 hover:bg-yellow-600 transition-colors"
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
