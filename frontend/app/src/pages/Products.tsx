export const Products = () => {
  const PRODUCTS_LABELS = {
    title: "Products",
    msg: "Manage your products here",
  };
  return (
    <div>
      <h1>{PRODUCTS_LABELS.title}</h1>
      <p>{PRODUCTS_LABELS.msg}</p>
    </div>
  );
};
