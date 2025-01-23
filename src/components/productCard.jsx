// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/productinfo/${product.productId}`}
      className="w-[400px] flex flex-col m-5 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
    >
      {/* Product Image */}
      <div className="h-[300px] w-full overflow-hidden rounded-t-lg">
        <img
          src={product.images[0]}
          alt={product.productName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between h-[100px]">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.productName}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-bold text-red-500">${product.price}</p>
          {product.stock > 0 ? (
            <span className="px-3 py-1 text-sm text-green-800 bg-green-200 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="px-3 py-1 text-sm text-red-800 bg-red-200 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
