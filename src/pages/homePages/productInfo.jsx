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
                    <div className='w-[40%] h-full flex items-center justify-center' >
                        <div className='w-30% h-[calc(100vh-200px)] p-5 '>
                            <img src={product.images[0]} alt="" className='w-full h-full object-cover'/>
                        </div>
                    </div>
                    {/* details part */}
                    <div className='w-[60%] h-full  flex items-center justify-center'>
                        <div className='w-[90%] h-[calc(100vh-200px)] p-5 '>
                            <h1 className='font-semibold text-gray-950 text-[40px] font-sans '>{product.productName}</h1>
                            <h1 className='font-semibold text-gray-400 text-[20px] font-serif '>{product.altNames.join(" | ")}</h1>
                            <div className='flex flex-row gap-10 items-center'>
                                <p className='text-red-600 font-semibold font-serif text-[30px] ' ><span className='text-[25px]'>Rs: </span>{product.lastPrice}</p>
                                <p className='text-gray-600 font-semibold font-serif text-[20px]' ><span className='text-[15px]'>Rs: </span>{product.price}</p>
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
