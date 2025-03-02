import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { BsGraphDown } from "react-icons/bs"
import { AiOutlineProduct } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { IoPeopleSharp } from "react-icons/io5";
import Products from './adminPages/products'
import AddProductForm from './adminPages/addProductPage'
import DashboardPage from './adminPages/dashboardPage'
import UpdateProduct from './adminPages/updateProduct'
import Feedback from './adminPages/feedback'
import ProductFeedbacks from './adminPages/productFeedbacks'
import AdminOrdersPage from './adminPages/adminOrderpage'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AdminHomePage() {
  const navigate = useNavigate();

  const [user,setUser] = useState(null)
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (!token){
      return;
      navigate("/login")
    }
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users",{
      headers : {
        Authorization : `Bearer ${token}`
      },
    }).then((res)=>{
      console.log(res.data)
      if(res.data.type != 'admin'){
        toast.error("Unauthorized access")
        navigate("/login")
      }else{
        setUser(res.data)
        navigate("/admin")
      }

    }).catch((err)=>{
      console.log(err)
      toast.error("Failed to fetch user data")
      navigate("/login")
    })
    
  },[])

  return (
    <div className='bg-blue-300 w-full h-screen flex'>
        <div className='w-[20%] h-screen bg-gray-800 flex flex-col items-center ' >
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/dashboard"><BsGraphDown className='mr-2' />Dashboard</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/products"><AiOutlineProduct className='mr-2' />Products</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/productFeedbacks"><AiOutlineProduct className='mr-2' />Product Fedbacks</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/feedbacks"><AiOutlineProduct className='mr-2' />Feedbacks</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/orders"><FaShoppingCart className='mr-2' />Orders</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/customers"><IoPeopleSharp className='mr-2' />Customers</Link>
        </div>

        <div className="w-[80%] bg-gray-200 h-screen">
            {user!==null && <Routes path="/*">
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/addProduct' element={<AddProductForm/>}/>
                <Route path='/products/updateproduct' element={<UpdateProduct/>}/>
                <Route path='/feedbacks' element={<Feedback/>}/>
                <Route path='/productFeedbacks' element={<ProductFeedbacks/>}/>
                <Route path='/orders' element={<AdminOrdersPage/>}/>
            </Routes>}
            
            {
              user==null && <div className="w-full h-full flex justify-center items-center">
              <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
            </div>
            }
        </div>
    </div>
  )
}
