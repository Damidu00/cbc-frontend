import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function ProductFeedbacks() {

    const [feedbacks,setFeedbacks] = useState([])
    const [loaded,setLoaded] = useState(false)

    useEffect (()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/productfeedbacks/")
        .then((res)=>{
            setFeedbacks(res.data)
            setLoaded(true)
            console.log(res.data)
        }).catch(()=>{
            console.log("error fetching feedbacks")
        })
    },[loaded])


  return (
    <div className='w-full h-full bg-gray-200'>
        <table className="w-full table-auto border border-gray-300 bg-white shadow-lg">
            <thead>
                <tr>
                    <td className="p-4 border border-gray-300 text-left">Feedback ID</td>
                    <td className="p-4 border border-gray-300 text-left">ProductId</td>
                    <td className="p-4 border border-gray-300 text-left">Message</td>
                    <td className="p-4 border border-gray-300 text-left">User</td>
                    <td className="p-4 border border-gray-300 text-left">Rating</td>
                    <td className="p-4 border border-gray-300 text-left">Status</td>
                    <td className="p-4 border border-gray-300 text-left">Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                   feedbacks.map((feedback,index)=>(
                    <tr key={index} className="odd:bg-gray-50 even:bg-gray-100">
                        <td className="p-4 border border-gray-300">{feedback.productFeedbackId}</td>
                        <td className="p-2 border border-gray-300">{feedback.productId}</td>
                        <td className="p-2 border border-gray-300">{feedback.message}</td>
                        <td className="p-4 border border-gray-300">{feedback.userName}</td>
                        <td className="p-4 border border-gray-300">{feedback.rating}</td>
                        <td className="p-4 border border-gray-300">{feedback.status}</td>
                        <td className="p-4 border border-gray-300">
                            
                            <div className='flex gap-2'>
                                <button className='p-3 bg-blue-500 rounded-2xl text-white'>Active</button>
                                <button className='p-3 bg-red-500 rounded-2xl text-white'
                                
                                onClick={()=>{

                                    axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/productfeedbacks/${feedback.productId}`)
                                    .then(()=>{
                                        toast.success("Feedback Deleted Successfully😏")
                                        setLoaded(false)
                                    }).catch(()=>{
                                        toast.error("Error with Deleting Feedback🫡")
                                    })
                                }}
                                
                                >Delete</button>
                            </div>

                        </td>
                    </tr>
                   )) 
                }
            </tbody>
        </table>
    </div>
  )
}
