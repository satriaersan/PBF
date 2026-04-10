import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/product.type";

const HalamanProduk = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <TampilanProduk products={products ?? []} />
    </div>
  );
};

export default HalamanProduk;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  return {
    props: {
      products: response.data ?? [],
    },
  };
}