import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductTable } from "../components/ProductTable";
import type { Product } from "../types";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  const PRODUCTS_LABELS = {
    title: "Products",
  };
  const filtered = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div>
      <h1>{PRODUCTS_LABELS.title}</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "6px",
          marginBottom: "12px",
          width: "200px",
        }}
      />
      <ProductTable products={filtered} />
    </div>
  );
};
