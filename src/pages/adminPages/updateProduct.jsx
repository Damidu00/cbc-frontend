import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import fileUploadForSupaBase from "../../utils/mediaUpload";

export default function UpdateProduct() {

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const product = location.state.product

    const altNames = product.altNames.join(",")
    

    if(product == null){
        navigate('products')
    }

    const [productId,setProductId] = useState(product.productId);
    const [productName,setProductName]= useState(product.productName)
    const [alternativeNames,setAlterNames] = useState("")
    const [imageUrls,setImageUrls] = useState("")
    const [imageFiles,setImageFiles] = useState([])
    const [price,setPrice] = useState(product.price)
    const [lastPrice,setLastPrice] = useState(product.lastPrice)
    const [stock,setStock]= useState(product.stock)
    const [description,setDescription] = useState(product.description)
    
    

    async function handleSubmit(){
        const altNames = alternativeNames.split(",")

        const promisesArray = []
        let imgUrls = product.images

        if(imageFiles.length > 0){
            for(let i=0; i<imageFiles.length; i++){
                promisesArray[i] = fileUploadForSupaBase(imageFiles[i])    
            }
            
            imgUrls = await Promise.all(promisesArray)
        }
        
        const productData = {
            productId :productId,
            productName : productName,
            altNames :  altNames,
            images : imgUrls,
            price : price,
            lastPrice : lastPrice,
            stock : stock,
            description : description
        }

        const token = localStorage.getItem("token")

        try {
            await axios.post( import.meta.env.VITE_BACKEND_URL + "/api/products",productData,{
                headers : {
                    Authorization : "Bearer "+token
                }
            })
            navigate("/admin/products")
            toast.success("response.data.message");
        } catch (err) {
            toast.error("field to add product")
            console.log(err)
        }

        
    }

    return (
        <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Update Your Product Here</h1>
                <div className="flex flex-col space-y-4">


                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Product ID</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            disabled
                            value={productId}
                                onChange={(e)=>{
                                    setProductId(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Product Name</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            value={productName}
                                onChange={(e)=>{
                                    setProductName(e.target.value)
                                }}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Alternative Names</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                        value={altNames}
                            onChange={(e)=>{
                                setAlterNames(e.target.value)
                            }}
                        />
                    </div>

       
                    <div className="flex flex-col space-y-2">
                        <label className="text-gray-700 font-semibold">Image Upload</label>
                        <input 
                            type="file" 
                            className="file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:cursor-pointer 
                                p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            onChange={(e) => setImageFiles(e.target.files)} 
                            multiple 
                        />
                    </div>


  
                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Price</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            value={price}
                                onChange={(e)=>{
                                    setPrice(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Last Price</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            value={lastPrice}
                                onChange={(e)=>{
                                    setLastPrice(e.target.value)
                                }}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Stock</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" 
                        value={stock}
                            onChange={(e)=>{
                                setStock(e.target.value)
                            }}
                        />
                    </div>

   
                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Description</label>
                        <textarea className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none" rows="4"
                        value={description}
                        onChange={(e)=>{
                                setDescription(e.target.value)
                            }}
                        ></textarea>
                    </div>


                    <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-md font-bold hover:bg-blue-900 transition"
                        onClick={handleSubmit}
                    >Update Product</button>
                </div>
            </div>
        </div>
    );
}
