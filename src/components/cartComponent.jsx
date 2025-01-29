import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteItem } from '../utils/cartFunction'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

export default function CartComponent(props) {


    const productId = props.productId
    const qty = props.qty

    const [quentity,setQuentity] = useState(qty)
    const [product,setProduct] = useState(null)
    const [loaded,setLoaded] = useState(false)

    useEffect(
        ()=>{
            if(!loaded){
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId).then(
                    (response)=>{
                        if(response.data != null){ 
                            setProduct(response.data)
                            setLoaded(true)
                        }else{
                            deleteItem(productId)
                        }                        
                    }
                ).catch((error)=>{
                    console.log(error)
                })
            }
        },[]
    )

  return (
    <tr className="items-center hover:bg-gray-100 p-4 transition duration-300 ease-in-out shadow-md">
    {/* Product Image */}
    <td className="text-center">
        <img
            src={product?.images?.[0]}
            className="w-[100px] h-[100px] object-cover mx-auto rounded-lg shadow-md transform hover:scale-105 transition duration-200 ease-in-out"
        />
    </td>

    {/* Product Name */}
    <td className="text-center text-lg font-semibold text-gray-800">{product?.productName}</td>

    {/* Product ID */}
    <td className="text-center text-gray-600">{productId}</td>

    {/* Quantity with Buttons */}
    <td className="flex items-center justify-center gap-5 p-2 rounded-md bg-gray-50 shadow-md">
        <button className="text-lg text-blue-600 hover:text-blue-800 p-2 bg-gray-300 rounded-lg transform hover:scale-105 transition duration-200 ease-in-out">
            <FaAngleUp />
        </button>
        <p className="text-lg font-semibold text-gray-700">{qty}</p>
        <button className="text-lg text-red-600 hover:text-red-800 bg-gray-300 rounded-lg p-2 transform hover:scale-105 transition duration-200 ease-in-out">
            <FaAngleDown />
        </button>
    </td>

    {/* Last Price */}
    <td className="text-center text-gray-800 font-semibold">{(product?.lastPrice)}</td>

    {/* Total Price */}
    <td className="text-center  rounded-lg font-semibold text-2xl text-gray-800 text-red-600">
        {(product?.lastPrice * qty).toFixed(2)}
    </td>

    {/* Delete Icon */}
    <td className="flex items-center justify-center font-bold text-3xl text-gray-600 hover:text-red-800 cursor-pointer">
        <MdDeleteForever className="transform hover:scale-110 transition duration-200 ease-in-out" />
    </td>
</tr>

  )
}
