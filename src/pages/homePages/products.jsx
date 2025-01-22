import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/navigationBar'
import axios from 'axios'
import toast from 'react-hot-toast'
import ProductCard from '../../components/productCard'

export default function Products() {

  const [products,setProducts] = useState([])
  const [loadingStatus,setloadingStatus]= useState('loading')

  useEffect(()=>{
    if(loadingStatus == "loading"){
      axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products`).then((res)=>{
        console.log(res.data)
        setProducts(res.data)
        setloadingStatus('loaded')
      }).catch(
        (err)=>toast.error('Error fetching products')
      )
    }
    
  }
  ,[])

  return (
    <>

    <div className='w-full h-full overflow-y-scroll bg-red-600'>
        <ProductCard/>
    </div>
    </>
  )
}
