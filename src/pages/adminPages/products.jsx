import axios from 'axios'
import React, { useState } from 'react'

export default function Products() {

  const [products,setProducts] = useState([
  {
    "_id": "676844b2574e0a0d18ad049f",
    "productId": "CBC200",
    "productName": "1 Glow Face Serum",
    "altNames": [
      "Glowing Skin Serum",
      "Brightening Serum"
    ],
    "images": [
      "https://example.com/images/serum-front.jpg",
      "https://example.com/images/serum-back.jpg"
    ],
    "price": 49.99,
    "lastPrice": 59.99,
    "description": "A lightweight face serum enriched with Vitamin C and hyaluronic acid to give you radiant, glowing skin. Perfect for all skin types.",
    "stock": 150,
    "__v": 0
  },
  {
    "_id": "676849758724d0e9650e5794",
    "productId": "CBC20001",
    "productName": "japan Glow Face Serum",
    "altNames": [
      "Glowing Skin Serum",
      "Brightening Serum"
    ],
    "images": [
      "https://example.com/images/serum-front.jpg",
      "https://example.com/images/serum-back.jpg"
    ],
    "price": 49.99,
    "lastPrice": 59.99,
    "description": "A lightweight face serum enriched with Vitamin C and hyaluronic acid to give you radiant, glowing skin. Perfect for all skin types.",
    "stock": 150,
    "__v": 0
  }
  
])

  return (
    <div><h1>products</h1>

    {products.map((product)=>{
      console.log(product)
    })}

    </div>
    
  )
}

async function getProducts(){
  const res = await axios.get("http://localhost:5000/api/products")
  console.log(res)
}
