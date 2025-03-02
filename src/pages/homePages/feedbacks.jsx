import React, { useEffect, useState } from 'react';
import feedbackImg from '../../../public/fdbck.jpg';
import axios from 'axios';
import toast from 'react-hot-toast';
import FeedbackCart from '../../components/feedbackCart';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import feedbackCover from '../../../public/feedbackCover.mp4';

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const [feedbacksLoaded, setFeedbacksLoaded] = useState(false);

  useEffect(() => {
    if (loadingStatus === 'loading') {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/")
        .then((res) => {
          console.log(res.data);
          setFeedbacks(res.data.feedbacks);
          setFeedbacksLoaded(true);
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
    <div className='min-h-screen bg-gray-200 flex flex-col lg:flex-row p-4 relative'>
      {/* Add Feedback Button */}
      <div className='absolute top-4 right-4 z-10'>
        <Link to={'/addfeedback'} className='text-sm sm:text-base bg-black p-3 sm:p-4 text-white rounded-lg hover:bg-gray-300 hover:text-black'>
          Add Your Feedback
        </Link>
      </div>
      
      {/* Left Video Section */}
      <div className='w-full lg:w-[70%] h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center relative overflow-hidden mt-10'>
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover' 
          autoPlay 
          loop 
          muted
        >
          <source src={feedbackCover} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Right Feedback Section */}
      <div className='w-full lg:w-[50%] h-auto lg:h-[650px] mt-6 lg:mt-0 overflow-y-auto px-2'>
        {feedbacksLoaded ? (
          feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <FeedbackCart key={feedback._id} feedback={feedback} />
            ))
          ) : (
            <p className='text-gray-700 text-center p-4'>No feedbacks available</p>
          )
        ) : (
          <div className='w-full h-[200px] flex justify-center items-center'>
            <div className='w-16 h-16 border-4 border-gray-300 border-b-blue-500 animate-spin rounded-full'></div>
          </div>
        )}
      </div>
    </div>
  );
}