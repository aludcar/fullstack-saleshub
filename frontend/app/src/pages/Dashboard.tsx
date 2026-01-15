import type { Product } from "../types";
import { ProductCard } from "../components/ProductCard";

const products: Product[] = [
  {
    id: "p1",
    name: "Laptop",
    price: 1200,
    stock: 5,
    category: "electronics",
  },
  {
    id: "p2",
    name: "T-Shirt",
    price: 30,
    stock: 20,
    category: "clothing",
  },
];

export const Dashboard = () => {
  const title = "SalesHub Dashboard";
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};
