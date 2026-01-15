export const Orders = () => {
  const ORDERS_LABEL = {
    title: "Orders",
    msg: "Manage your orders here.",
  };
  return (
    <div>
      <h1>{ORDERS_LABEL.title}</h1>
      <p>{ORDERS_LABEL.msg}</p>
    </div>
  );
};
