import React, { useEffect, useState } from 'react';
import feedbackImg from '../../../public/fdbck.jpg';
import axios from 'axios';
import toast from 'react-hot-toast';
import FeedbackCart from '../../components/feedbackCart';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import feedbackCover from '../../../public/feedbackCover.mp4'

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const [feedbacksLoaded,setFeedbacksLoaded] = useState(false)

  useEffect(() => {
    if (loadingStatus === 'loading') {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/")
        .then((res) => {
          console.log( res.data);
          setFeedbacks(res.data.feedbacks)
          setFeedbacksLoaded(true)
          setLoadingStatus('loaded');
        })
        .catch((error) => {
          console.error("Error fetching feedbacks:", error);
          toast.error("Error fetching feedbacks");
          setLoadingStatus('error');
        });
    }
  }, []); 

  return (
    <div className='h-screen bg-gray-200 flex p-4'>
      <Link to={"/addfeedback"} className='absolute right-[40px] top-[95px] text-[15px] bg-black p-4 text-white rounded-xl hover:bg-gray-300 hover:text-black'>Add Your Feedback</Link>
      {/* Left Animated Video Part */}
      <div className='w-[70%] h-[500px] p-2 flex justify-center relative overflow-hidden mt-10'>
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover' 
          autoPlay 
          loop 
          muted
          >
          <source src={feedbackCover} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Feedback Part */}

      {
        feedbacksLoaded ? <div className='overflow-y-scroll w-[50%] h-[650px]'>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <FeedbackCart key={feedback._id} feedback={feedback} />
          ))
        ) : (
          <p className="text-white text-center p-4">No feedbacks available</p>
        )}
      </div>:<div className="w-full h-full flex justify-center items-center">
        <div className=" w-[100px] h-[100px] border-[6px] border-gray-300 border-b-[#3b82f6] animate-spin rounded-full"></div>
    </div>
      }

    </div>
  );
}
