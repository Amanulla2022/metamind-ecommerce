import React, { useEffect, useState } from "react";
import AllProducts from "./../pages/AllProducts";
import { getProductsByCategory } from "../../src/api/apiCall";
import ProductFilter from "./ProductFilter";

const ProductContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProductsByCategory(category);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [category]);

  const sortProducts = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <div>
      <ProductFilter sortProducts={sortProducts} />
      <AllProducts products={products} category={category} />
    </div>
  );
};

export default ProductContainer;
