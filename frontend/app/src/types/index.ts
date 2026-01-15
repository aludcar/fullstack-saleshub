export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: "electronics" | "clothing" | "home";
};

export type Customer = {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
};

export type Order = {
  id: string;
  customer: Customer;
  products: Product[];
  status: "pending" | "paid" | "shipped";
  total: number;
};

export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};

export type CreateProductDTO = Omit<Product, "id">;
export function isPaidOrder(order: Order): boolean {
  return order.status === "paid";
}

export type LikeStyle = {
  isActive: boolean;
};
