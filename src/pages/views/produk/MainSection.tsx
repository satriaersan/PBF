import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Daftar Produk</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white p-6 rounded-lg shadow-md">Produk 1</li>
          <li className="bg-white p-6 rounded-lg shadow-md">Produk 2</li>
          <li className="bg-white p-6 rounded-lg shadow-md">Produk 3</li>
        </ul>
      </div>
    </section>
  );
};

export default MainSection;