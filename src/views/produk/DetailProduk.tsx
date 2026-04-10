import { ProductType } from "../../types/product.type";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1>Detail Produk</h1>
      <div>
        <div>
          <img src={products?.image} alt={products?.name} />
        </div>

        <div>
          <h1>{products?.name}</h1>
          <p>{products?.kategori}</p>
          <p>
            Rp {products?.price && products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;