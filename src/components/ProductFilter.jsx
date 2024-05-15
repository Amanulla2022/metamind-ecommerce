import React from "react";

const ProductFilter = ({ sortProducts }) => {
  return (
    <div className="flex justify-end mt-8">
      <select
        onChange={(e) => sortProducts(e.target.value)}
        className=" px-4 py-2 rounded mr-4"
      >
        <option value="asc">Sort by Price Low to High</option>
        <option value="desc">Sort by Price High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
