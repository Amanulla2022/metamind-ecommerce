import "./App.css";
import Layout from "./Layout";
import CartProvider from "./cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;
