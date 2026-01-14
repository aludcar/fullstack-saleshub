import {
  Product,
  Customer,
  Order,
  ApiResponse,
  CreateProductDTO,
  isPaidOrder,
} from "./types";

const customer: Customer = {
  id: "c1",
  fullName: "John Doe",
  email: "john@email.com",
  isActive: true,
};

const products: Product[] = [
  {
    id: "p1",
    name: "laptop",
    price: 12000,
    stock: 5,
    category: "electronics",
  },
  {
    id: "p2",
    name: "T-shirt",
    price: 30,
    stock: 20,
    category: "clothing",
  },
];

const order: Order = {
  id: "01",
  customer,
  products,
  status: "paid",
  total: 1230,
};

const calculateTotal = (products: Product[]): number => {
  return products.reduce((sum, product) => sum + product.price, 0);
};

if (isPaidOrder(order)) console.log("Order is paid. Ready to ship");

const response: ApiResponse<Order> = {
  data: order,
  success: true,
  message: "Order fetched successfully",
};

const newProduct: CreateProductDTO = {
  name: "chair",
  price: 80,
  stock: 10,
  category: "home",
};

console.log(newProduct);
