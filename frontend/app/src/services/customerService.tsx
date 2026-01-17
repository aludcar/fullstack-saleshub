import type { Customer } from "../types";

let customers: Customer[] = [
  { id: "c1", fullName: "John Doe", email: "john@email.com", isActive: true },
  { id: "c2", fullName: "Ana Perez", email: "ana@email.com", isActive: true },
];

export const getCustomers = () => {
  return new Promise<Customer[]>((resolve) => {
    setTimeout(() => resolve(customers), 300);
  });
};

export const createCustomer = (
  input: Omit<Customer, "id">
): Promise<Customer> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCustomer: Customer = {
        id: `c${Date.now()}`,
        ...input,
      };
      customers = [newCustomer, ...customers];
      resolve(newCustomer);
    }, 300);
  });
};
