import { useRouter } from "next/router";
import DetailProduk from "../views/produk/DetailProduk";

const HalamanProduk = () => {
  const { query } = useRouter();
  const id = query.id as string;

  return <DetailProduk id={id} />;
};

export default HalamanProduk;