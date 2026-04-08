import React from 'react';

interface DetailProdukProps {
  id: string;
}

const DetailProduk: React.FC<DetailProdukProps> = ({ id }) => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Detail Produk</h1>
      <p className="text-lg">Produk ID: <span className="font-semibold">{id}</span></p>
    </div>
  );
};

export default DetailProduk;