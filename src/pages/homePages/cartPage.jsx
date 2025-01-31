import React, { useState } from 'react'
import { useEffect } from 'react'
import { loadCart } from '../../utils/cartFunction'
import CartComponent from '../../components/cartComponent'
import axios from 'axios'

export default function CartPage() {

    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [labeledTotal, setLabeledTotal] = useState(0)
    useEffect(
        ()=>{
            setCart(loadCart())
            axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote",{
              orderedItems : loadCart()
          }).then(
            (res)=>{
              console.log(res.data)
              setTotal(res.data.total)
              setLabeledTotal(res.data.labeledTotal)
              
            }
          )

        },[]
    )

    function onOrderCheckOutClick(){
      const token = localStorage.getItem("token");
      if(token == null){
        return;
      }
      axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders",{
        orderedItems : cart,
        name : "damidu nayanajith",
        address : "8th mile post rideemaliyadda",
        phone : "0766708311"
      },{
        headers : {
            Authorization : "Bearer "+token
        }
    }).then((res)=>{
        console.log(res.data)
      })
    }

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
    <h1 className='text-xl mr-5 mt-5 text-red-600 font-extrabold'>Total: LKR-: {labeledTotal.toFixed(2)}</h1>
    <h1 className='text-xl mr-5 text-red-600 font-extrabold'>Discount: LKR-: {(labeledTotal - total).toFixed(2)}</h1>
    <h1 className='text-xl mr-5 text-red-600 font-extrabold'>Grand Total: LKR-: {total.toFixed(2)}</h1>
    <button onClick={onOrderCheckOutClick} className='bg-black p-2 text-white rounded-lg w-[300px] mt-5 hover:bg-gray-600' >Checkout</button>
</div>
  )
}

