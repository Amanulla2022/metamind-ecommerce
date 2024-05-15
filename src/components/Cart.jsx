import React from "react";
import { useCart } from "../cart/CartProvider";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <p className="text-2xl  flex justify-end mb-4">
            Total Price: ${getTotalPrice()}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cart.map((item) => (
              <li key={item.id} className="border p-4 flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain mb-4"
                />
                <p className="text-gray-700 text-center">
                  Price: ${item.price}
                </p>

                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 px-4 py-2 rounded-full mt-4 hover:bg-red-600 transition-colors"
                >
                  Remove To Cart
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearCart}
            className="mt-8 bg-red-800 text-white p-2 rounded-full"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
