import React, { useState } from 'react'
import { useEffect } from 'react'
import { loadCart } from '../../utils/cartFunction'
import CartComponent from '../../components/cartComponent'
import { FaRecycle } from 'react-icons/fa'

export default function CartPage() {

    const [cart,setCart] = useState([])

    useEffect(
        ()=>{
            setCart(loadCart())
        },[]
    )

    

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-end">
    <table className=' w-full border-separate '>
        {/* Table Header */}
        <thead>
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>

        {/* Table Body */}
        <tbody>
            {
                cart.map((item) => (
                    <CartComponent key={item.productId} productId={item.productId} qty={item.qty} />
                ))
            }
        </tbody>
    </table>
    <button className='bg-black p-2 text-white rounded-lg w-[300px] mt-5 hover:bg-gray-600' >Checkout</button>
</div>
  )
}

