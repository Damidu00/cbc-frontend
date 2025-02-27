import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Orders() {
    const [orders,setOrders] = useState([]);
    const [orderDetails,setOrderDetails] = useState(false)

    useEffect(()=>
    {
        const token = localStorage.getItem("token");
        if(!token){
            return;
        }else{
            axios.get( VITE_BACKEND_URL +  "/api/orders",{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }).then((res)=>{
                console.log(res.data);
                setOrders(res.data);
            }).catch((err)=>{
                toast.error("Field to fetch errors..Please try again!")
            })
        }
        
    },[])
  return (
    <div className='w-full h-full flex flex-col items-center'>
        
    </div>
  )
}
