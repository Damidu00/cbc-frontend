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
    <tr className=' items-center border-b border-gray-600 hover:bg-gray-200 p-4'>
    <td >
        <img src={product?.images?.[0]} className='w-[100px] h-[100px] object-cover mx-auto rounded-lg' />
    </td>
    <td className='text-center'>{product?.productName}</td>
    <td className='text-center'>{productId}</td>
    <td className="flex items-center justify-center gap-5 p-2 rounded-md  ">
        <button className="text-lg text-blue-600 hover:text-blue-800 p-2 bg-gray-300 rounded-lg">
            <FaAngleUp />
        </button>
        <p className="text-lg font-semibold text-gray-700">{qty}</p>
        <button className="text-lg text-red-600 hover:text-red-800 bg-gray-300 rounded-lg p-2">
            <FaAngleDown />
        </button>
    </td>
    <td className='text-center'>{(product?.lastPrice)}</td>
    <td className='text-center bg-gray-200 rounded-'>{(product?.lastPrice * qty).toFixed(2)}</td>
    <td className=' flex items-center justify-center font-bold text-4xl'><MdDeleteForever className=' flex items-center justify-center'/></td>
</tr>
  )
}
