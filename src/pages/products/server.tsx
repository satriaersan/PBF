import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/product.type";

const ProductsServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Products Server Page</h1>
      <TampilanProduk products={products} isLoading={false} />
    </div>
  );
};

export default ProductsServer;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}