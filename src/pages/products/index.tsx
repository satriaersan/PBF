import useSWR from "swr";
import TampilanProduk from "../../views/produk";
import fetcher from "../../utils/swr/fetcher";

const Products = () => {
  const { data, error } = useSWR("/api/produk", fetcher);
  const isLoading = !data && !error;

  if (error) {
    return <div>Failed to load products.</div>;
  }

  return (
    <div>
      <TampilanProduk
        products={data?.data || []}
      />
    </div>
  );
};

export default Products;