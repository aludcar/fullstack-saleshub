import { NavLink } from "react-router-dom";
import type { LikeStyle } from "../types";

const linkStyle = ({ isActive }: LikeStyle) => ({
  display: "block",
  padding: "10px 12px",
  borderRadius: 9,
  textDecoration: "none",
  color: isActive ? "#fff" : "#111",
  background: isActive ? "#111" : "transparent",
});

export const Sidebar = () => {
  const SIDEBAR_LABELS = {
    title: "SalesHub",
    dashboard: "Dashboard",
    products: "Products",
    customers: "Customers",
    orders: "Orders",
  };
  return (
    <aside
      style={{
        width: 240,
        padding: 16,
        borderRight: "1px solid #eee",
      }}
    >
      <h2
        style={{
          marginBottom: 16,
        }}
      >
        {SIDEBAR_LABELS.title}
      </h2>
      <nav>
        <NavLink to={"/"} style={linkStyle}>
          {SIDEBAR_LABELS.dashboard}
        </NavLink>
        <NavLink to={"/products"} style={linkStyle}>
          {SIDEBAR_LABELS.products}
        </NavLink>
        <NavLink to={"/customers"} style={linkStyle}>
          {SIDEBAR_LABELS.customers}
        </NavLink>
        <NavLink to={"/orders"} style={linkStyle}>
          {SIDEBAR_LABELS.orders}
        </NavLink>
      </nav>
    </aside>
  );
};
