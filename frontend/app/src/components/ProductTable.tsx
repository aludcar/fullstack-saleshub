import type { Product, ProductTableProps } from "../types";

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Category</th>
          <th align="left">Price</th>
          <th align="left">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: Product, index: number) => (
          <tr
            key={product.id}
            style={{ background: index % 2 ? "#f9f9f9" : "white" }}
          >
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
