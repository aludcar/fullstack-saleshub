import React from "react";
import type { Product } from "../types";

type ProductCard = {
  product: Product;
};

export const ProductCard: React.FC<ProductCard> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};
