export const Customers = () => {
  const CUSTOMERS_LABEL = {
    title: "Customers",
    msg: "Manage your customers here.",
  };
  return (
    <div>
      <h1>{CUSTOMERS_LABEL.title}</h1>
      <p>{CUSTOMERS_LABEL.msg}</p>
    </div>
  );
};
