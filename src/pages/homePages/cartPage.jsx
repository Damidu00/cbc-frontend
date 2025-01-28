import React, { useState } from 'react'
import { useEffect } from 'react'
import { loadCart } from '../../utils/cartFunction'

export default function CartPage() {

    const [cart,setCart] = useState([])

    useEffect(
        ()=>{
            setCart(loadCart())
        },[]
    )

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center">
      {
        cart.map(
          (item)=>{
            return(
              <span>{item.productId} X {item.qty}</span>
            )
          }
        )
      }
    </div>
  )
}

