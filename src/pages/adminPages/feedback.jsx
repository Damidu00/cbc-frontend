import axios from 'axios';
import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbacksLoaded,setFeedbacksLoaded] = useState(false)
    const [replyingTo,setReplyingTo] = useState(null)
    const [replyText,setReplyText] = useState('')


    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/")
            .then((res) => {
                console.log(res.data);
                setFeedbacks(res.data.feedbacks); 
                setFeedbacksLoaded(true)
            })
            .catch(err => console.error("Error fetching feedbacks:", err));
    }, [feedbacksLoaded]);

    const handleReplySubmit = (feedbackId)=>{
        if(!replyText.trim()){
            toast.error("You must enter a reply")
            return;
        }
    

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/reply",{
            feedbackId,
            message : replyText
        }).then((res)=>{
            toast.success("Replied succsessfully")
            setReplyingTo(null);
            setReplyText("");
            setFeedbacksLoaded(false);
        }).catch(()=>{
            toast.error("error submit reply!")
        })

    }



    return (
        <div className='w-full h-screen bg-gray-100 p-5'>
            {
               feedbacksLoaded? <table className='min-w-full bg-white shadow-md rounded-lg'>
                <thead>
                    <tr className='border-b'>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 '>FeedbackId</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Message</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>User Name</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Status</th>
                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.length > 0 ? feedbacks.map((feedback, index) => (
                        <tr key={index} className='border-b hover:bg-gray-200'>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.feedbackId}</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.message}</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.user_name}</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.status}</td>
                            <td className='px-6 py-4 text-sm text-gray-900 flex gap-3'>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded'
                                onClick={()=>setReplyingTo(replyingTo === feedback.feedbackId ? null : feedback.feedbackId)}                                
                                >Reply</button>

                                        {replyingTo === feedback.feedbackId && (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    className="border p-2 rounded w-64"
                                                    placeholder="Type your reply..."
                                                    value={replyText}
                                                    onChange={(e) => setReplyText(e.target.value)}
                                                />
                                                <button
                                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                                    onClick={() => handleReplySubmit(feedback.feedbackId)}
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        )}


                                <button className='bg-red-500 text-white px-4 py-2 rounded'
                                
                                onClick={()=>{
                                    Swal.fire({
                                        title: "Are you sure?",
                                        text: "You won't be able to revert this!",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#d33",
                                        cancelButtonColor: "#3085d6",
                                        confirmButtonText: "Yes, delete it!",
                                    }).then((result)=>{
                                        if(result.isConfirmed){
                                            axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/feedbacks/${feedback.feedbackId}`).then((res)=>{
                                                console.log(res.data)
                                                toast.success(res.data.message)
                                                setFeedbacksLoaded(false)
                                            }).catch((error)=>{
                                                toast.error("error")
                                            })
                                        }
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
