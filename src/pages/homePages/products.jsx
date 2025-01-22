import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/navigationBar'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Products() {

  const [products,setProducts] = useState([])
  const [loadingStatus,setloadingStatus]= useState('loading')

  useEffect(()=>{
    if(loadingStatus == "loading"){
      axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products`).then((res)=>{
        console.log(res.data)
        setProducts(res.data)
      }).catch(
        (err)=>toast.error('Error fetching products')
      )
    }
    
  }
  ,[])

  return (
    <>
    <NavigationBar/>
    <div>
        Product Page
    </div>
    </>
  )
}
