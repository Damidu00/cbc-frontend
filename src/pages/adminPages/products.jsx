import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productsLoaded,setProductLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(!productsLoaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products`).then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setProductLoaded(true);
      });
    }
  }, [productsLoaded]);

  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative" >
      <Link to={"/admin/products/addProduct"} className='absolute right-[25px] bottom-[25px] text-[30px] bg-[#245af7] p-4 text-white rounded-xl hover:bg-[#2eb2dd] hover:text-black'><FaPlus/></Link>
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {
        productsLoaded?<table className="w-full table-auto border border-gray-300 bg-white shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 border border-gray-300 text-left">Product Id</th>
            <th className="p-4 border border-gray-300 text-left">Product Name</th>
            <th className="p-4 border border-gray-300 text-left">Price</th>
            <th className="p-4 border border-gray-300 text-left">Last Price</th>
            <th className="p-4 border border-gray-300 text-left">Stock</th>
            <th className="p-4 border border-gray-300 text-left">Description</th>
            <th className="p-4 border border-gray-300 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="odd:bg-gray-50 even:bg-gray-100">
              <td className="p-4 border border-gray-300">{product.productId}</td>
              <td className="p-4 border border-gray-300">{product.productName}</td>
              <td className="p-4 border border-gray-300">${product.price.toFixed(2)}</td>
              <td className="p-4 border border-gray-300">${product.lastPrice.toFixed(2)}</td>
              <td className="p-4 border border-gray-300">{product.stock}</td>
              <td className="p-4 border border-gray-300">
                {truncateDescription(product.description, 50)}
              </td>
              <td className="p-4 border border-gray-300 text-center flex justify-center space-x-4">
                <button
                  className="p-2 bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none rounded-full"

                  onClick={()=>{
                    navigate('updateproduct',{state : {product : product}})
                  }}



                >
                  <FaPencil size={20} />
                </button>
                <button
                  className="p-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none rounded-full"

                  onClick={()=>{
                    const token = localStorage.getItem("token");

                    axios.delete( import.meta.env.VITE_BACKEND_URL + `/api/products/${product.productId}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }).then((res) => {
                      console.log(res.data);
                      toast.success("Product deleted successfully");
                      setProductLoaded(false);
                    });
              
                  }}


                >
                  <FaTrash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>:<div className="w-full h-full flex justify-center items-center">
          <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
        </div>
      }
      



    </div>
  );
}
