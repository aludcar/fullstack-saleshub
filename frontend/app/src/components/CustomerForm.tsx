import React, { useState } from "react";
import { isNonEmpty, isValidEmail } from "../services/validations";
import type { CustomerFormProps, CreateCustomerForm } from "../types";

const initialState = {
  fullName: "",
  email: "",
  isActive: true,
};

export const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  const [dataForm, setDataForm] = useState<CreateCustomerForm>(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isNonEmpty(dataForm.fullName))
      return setError("Full name is required");
    if (!isValidEmail(dataForm.email)) return setError("Email is invalid");

    setError(null);
    onSubmit(dataForm);
    setDataForm(initialState);
  };

  const CUSTOMER_FORM_LABELS = {
    title: "Add Customer",
    name: "Full name",
    email: "Email",
    active: "Active",
    cta: "create",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: 10,
        maxWidth: 360,
      }}
    >
      <h3>{CUSTOMER_FORM_LABELS.title}</h3>
      <input
        type="text"
        placeholder={CUSTOMER_FORM_LABELS.name}
        value={dataForm.fullName}
        onChange={(e) => {
          setDataForm({ ...dataForm, fullName: e.target.value });
        }}
      />
      <input
        placeholder={CUSTOMER_FORM_LABELS.email}
        type="email"
        value={dataForm.email}
        onChange={(e) => {
          setDataForm({ ...dataForm, email: e.target.value });
        }}
        style={{ padding: 8 }}
      />
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <input
          type="checkbox"
          checked={dataForm.isActive}
          onChange={(e) => {
            setDataForm({ ...dataForm, isActive: e.target.checked });
          }}
        />
        {CUSTOMER_FORM_LABELS.active}
      </label>

      {error && (
        <p
          style={{
            color: "crimson",
            margin: 0,
          }}
        >
          {error}
        </p>
      )}
      <button
        type="submit"
        style={{
          padding: 10,
          borderRadius: 8,
        }}
      >
        {CUSTOMER_FORM_LABELS.cta}
      </button>
    </form>
  );
};
