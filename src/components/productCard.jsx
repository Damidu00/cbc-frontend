// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/productinfo/${product.productId}`}
      className="w-[300px] flex flex-col m-5 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 "
    >
      {/* img */}
      <div className="h-[280px] w-full overflow-hidden rounded-t-lg">
        <img
          src={product.images[0]}
          alt={product.productName}
          className="h-[280px] w-full object-cover rounded-lg "
        />
      </div>
      {/* after img */}
      <div className="p-2 flex flex-col justify-between h-[150px] ">
        <h2 className="text-[24px] font-semibold text-gray-800 truncate font-mono">
          {product.productName}
        </h2>
        <h2 className="text-[14px] font-semibold text-gray-400 truncate font-thin">
          {product.altNames.join(" | ")}
        </h2>
        
        <div className="flex justify-start ">
          {/* names section */}
          <div className='flex justify-start items-center  '>
          {
            (product.price > product.lastPrice )&&<p className=" mr-2 text-[12px] font-bold text-gray-500 line-through ">${product.price}</p>
          }
          <p className="text-xl font-bold text-red-500 mr-5">${product.lastPrice}</p>
          </div>

          <div className='flex  ml-16 '>
            {/* stock part */}
          {product.stock > 0 ? (
            <span className="flex items-center px-2 py-1 text-[14px] text-green-500  rounded-full">
              In Stock
            </span>
          ) : (
            <span className="px-2 py-1  text-sm text-red-600  rounded-full">
              Out of Stock
            </span>
          )}
          {
            (product.stock > 0)&&<p className='bg-black text-white rounded-full px-2 -ml-1 text-[10px] font-semibold flex items-center justify-center'>{product.stock}</p>
          }
          
          </div>


        </div>
        <button className='m-1 bg-black text-white p-1 rounded text-lg font-semibold hover:bg-gray-600'>Buy Now</button>
        
      </div>
    </Link>
  );
}
