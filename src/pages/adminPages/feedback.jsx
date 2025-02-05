import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbacksLoaded,setFeedbacksLoaded] = useState(false)


    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/")
            .then((res) => {
                console.log(res.data);
                setFeedbacks(res.data.feedbacks); 
                setFeedbacksLoaded(true)
            })
            .catch(err => console.error("Error fetching feedbacks:", err));
    }, [feedbacksLoaded]);

    return (
        <div className='w-full h-screen bg-gray-100 p-5'>
            {
               feedbacksLoaded? <table className='min-w-full bg-white shadow-md rounded-lg'>
                <thead>
                    <tr className='border-b'>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>FeedbackId</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Message</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>User Name</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.length > 0 ? feedbacks.map((feedback, index) => (
                        <tr key={index} className='border-b'>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.feedbackId}</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.message}</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.user_name}</td>
                            <td className='px-6 py-4 text-sm text-gray-900 flex gap-3'>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Reply</button>
                                <button className='bg-red-500 text-white px-4 py-2 rounded'
                                
                                onClick={()=>{
                                    axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/feedbacks/${feedback.feedbackId}`).then((res)=>{
                                        console.log(res.data)
                                        toast.success(res.data.message)
                                        setFeedbacksLoaded(false)
                                    }).catch((error)=>{
                                        toast.error("error")
                                    })
                                }}
                                
                                
                                >Delete</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4" className='px-6 py-4 text-center text-sm text-gray-500'>No feedbacks available</td>
                        </tr>
                    )}
                </tbody>
            </table>:<div className="w-full h-full flex justify-center items-center">
                    <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
                  </div>
            }
            
        </div>
    );
}
