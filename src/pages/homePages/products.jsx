import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import ProductCard from '../../components/productCard'

export default function Products() {

  const [products,setProducts] = useState([])
  const [loadingStatus,setloadingStatus]= useState('loading')
  const [query, setQuery] = useState("");
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

  function search(e) {
    const query = e.target.value;
    setQuery(query);
    setloadingStatus("loading");
    if (query == "") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setloadingStatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }else{
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/"+query)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setloadingStatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }
  }

  return (
    <div className=' h-full flex flex-wrap justify-center overflow-hidden '>

      <div className=" w-full flex justify-center m-2 absolute sticky mb-10 ">
        <input type="text" className="w-1/2 p-2 absolute z-50 border- bg-gray-200 rounded-full flex text-center  "
            placeholder="Search Products"
            onChange={search}
            alue={query}
        />
      </div>

      {
        products.map((product)=>
          <ProductCard key={product.id || product._id}  product={product}/>
        )
      }
    </div>
  )
}
