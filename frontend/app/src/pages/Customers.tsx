import { useEffect, useState } from "react";
import type { Customer } from "../types";
import { createCustomer, getCustomers } from "../services/customerService";
import { CustomerForm } from "../components/CustomerForm";

const CUSTOMERS_LABEL = {
  title: "Customers",
  subTitle: "Customer List",
  loading: "...Loading",
};

export const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCreate = async (data: Omit<Customer, "id">) => {
    const created = await createCustomer(data);
    setCustomers((prev) => [created, ...prev]);
  };

  useEffect(() => {
    getCustomers()
      .then(setCustomers)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>{CUSTOMERS_LABEL.title}</h1>
      <div
        style={{ display: "grid", gap: 20, gridTemplateColumns: "360px 1fr" }}
      >
        <CustomerForm onSubmit={handleCreate} />

        <div>
          <h3>{CUSTOMERS_LABEL.subTitle}</h3>
          {loading ? (
            <p></p>
          ) : (
            <ul style={{ paddingLeft: 18 }}>
              {customers.map((customer: Customer) => (
                <li key={customer.id}>
                  <strong>{customer.fullName}</strong> = {customer.email}{" "}
                  {!customer.isActive ? "(Inactive)" : ""}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
