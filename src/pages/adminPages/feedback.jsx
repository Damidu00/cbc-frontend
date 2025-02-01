import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/")
            .then((res) => {
                console.log(res.data);
                setFeedbacks(res.data.feedbacks); // Access the feedbacks array
            })
            .catch(err => console.error("Error fetching feedbacks:", err));
    }, []);

    return (
        <div className='w-full h-screen bg-gray-100 p-5'>
            <table className='min-w-full bg-white shadow-md rounded-lg'>
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
                            <td className='px-6 py-4 text-sm text-gray-900'>{feedback.userName}</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Reply</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4" className='px-6 py-4 text-center text-sm text-gray-500'>No feedbacks available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
