import type { Product } from "../types";

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
  {
    id: "p3",
    name: "Coffee Table",
    price: 150,
    stock: 8,
    category: "home",
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
