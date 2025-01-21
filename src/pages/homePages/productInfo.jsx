import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import NavigationBar from '../../components/navigationBar';
import NotFoundPage from '../../components/NotFoundPage';
import { DiCelluloid } from 'react-icons/di';

export default function ProductInfo() {

    const params = useParams();
    const productId = params.id;
    const [product,setProduct] = useState(null)
    const [status, setStatus] = useState("Loading") 

    useEffect(()=>{
        console.log(productId)
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId).then((res)=>{
            console.log(res.data)

            //if products null?
            if(res.data == null){
                setStatus("not-found")
            }

            //if product found?
            if(res.data != null){
                setProduct(res.data)
                setStatus("found")
            }


        })




    },[])

  return (
    <>
    <NavigationBar/>
    <div className='w-full h-[calc(100vh-80px)] '>
        {
            status == "Loading" && (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-t-transparent border-r-4 border-r-transparent border-b-4 border-blue-500 border-l-4 border-l-transparent"></div>
                </div>
            )
        }
        {
            status == "not-found" && (
                <NotFoundPage/>
            )
        }
        {
            status == "found" && (
                <div className='w-full h-full flex items-center justify-center'>
                    {/* image part */}
                    <div className='w-[40%] h-full flex items-center justify-center ml-5' >
                        <div className='w-[100%] h-[calc(100vh-150px)] p-5 '>
                            <img src={product.images[0]} alt="" className='w-full  object-cover'/>
                        </div>
                    </div>
                    {/* details part */}
                    <div className='w-[60%] h-full  flex items-center justify-center'>
                        <div className='w-[1000%] h-[calc(100vh-100px)] p-5 '>
                            <h1 className='font-semibold text-gray-950 text-[40px] font-sans '>{product.productName}</h1>
                            <h1 className='font-semibold text-gray-400 text-[20px] font-serif '>{product.altNames.join(" | ")}</h1>
                            <div className='flex flex-row gap-5 items-center'>
                                {
                                    (product.price > product.lastPrice)&&
                                    <p className='text-gray-600 font-semibold font-mono text-[20px] line-through' >{"LKR:" + product.price}</p>                                    
                                }
                                <p className='text-red-600 font-semibold font-mono text-[35px] ' >{"Rs:" + product.lastPrice}</p>
                                                              
                            </div> 
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    </>
  )
}
