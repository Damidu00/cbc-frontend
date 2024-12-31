import { useState } from "react";

export default function AddProductForm() {

    const [productId,setProductId] = useState("");
    const [productName,setProductName]= useState("")
    const [alterNames,setAlterNames] = useState("")
    const [imageUrls,setImageUrls] = useState("")
    const [price,setPrice] = useState("")
    const [lastPrice,setLastPrice] = useState("")
    const [stock,setStock]= useState("")
    const [Description,setDescription] = useState("")




    return (
        <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Add Your Product Here</h1>
                <form className="flex flex-col space-y-4">


                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Product ID</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onChange={(e)=>{
                                    setProductId(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Product Name</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                                onChange={(e)=>{
                                    setProductName(e.target.value)
                                }}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Alternative Names</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            onChange={(e)=>{
                                setAlterNames(e.target.value)
                            }}
                        />
                    </div>

       
                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Image URLs</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            onChange={(e)=>{
                                setImageUrls(e.target.value)
                            }}
                        />
                    </div>

  
                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Price</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                                onChange={(e)=>{
                                    setPrice(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Last Price</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                                onChange={(e)=>{
                                    setLastPrice(e.target.value)
                                }}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Stock</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            onChange={(e)=>{
                                setStock(e.target.value)
                            }}
                        />
                    </div>

   
                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Description</label>
                        <textarea className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none" rows="4"
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }}
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-md font-bold hover:bg-blue-900 transition">Add Product</button>
                </form>
            </div>
        </div>
    );
}
