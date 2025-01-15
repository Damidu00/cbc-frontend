import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { BsGraphDown } from "react-icons/bs"
import { AiOutlineProduct } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { IoPeopleSharp } from "react-icons/io5";
import Products from './adminPages/products'
import AddProductForm from './adminPages/addProductPage'
import DashboardPage from './adminPages/dashboardPage'
import UpdateProduct from './adminPages/updateProduct'

export default function AdminHomePage() {
  return (
    <div className='bg-blue-300 w-full h-screen flex'>
        <div className='w-[20%] h-screen bg-blue-900 flex flex-col items-center ' >
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/dashboard"><BsGraphDown className='mr-2' />Dashboard</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/products"><AiOutlineProduct className='mr-2' />Products</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/orders"><FaShoppingCart className='mr-2' />Orders</Link>
            <Link className='m-2 flex flex-row items-center text-white text-lg hover:text-amber-600 hover:-translate-y-1 transition-transform duration-300 hover:scale-110' to="/admin/customers"><IoPeopleSharp className='mr-2' />Customers</Link>
        </div>

        <div className="w-[80%] bg-blue-200 h-screen">
            <Routes path="/*">
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/addProduct' element={<AddProductForm/>}/>
                <Route path='/products/updateproduct' element={<UpdateProduct/>}/>
            </Routes>
        </div>
    </div>
  )
}
