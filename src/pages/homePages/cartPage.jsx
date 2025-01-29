import React, { useState } from 'react'
import { useEffect } from 'react'
import { loadCart } from '../../utils/cartFunction'
import CartComponent from '../../components/cartComponent'

export default function CartPage() {

    const [cart,setCart] = useState([])

    useEffect(
        ()=>{
            setCart(loadCart())
        },[]
    )

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col  items-center">
      {
        cart.map(
          (item)=>{
            return(
              <CartComponent key={item.productId} productId={item.productId} qty={item.qty} />
            )
          }
        )
      }
    </div>
  )
}

