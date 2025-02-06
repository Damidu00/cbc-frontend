import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AddFeedback() {

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = { message };
    const token = localStorage.getItem("token");

    console.log("Token - "+token);

    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/feedbacks/", feedback,{
      headers: {
        Authorization: "Bearer "+token
      }
    })
      .then(() => {
        toast.success("Feedback sent successfully!");
        navigate("/feedbacks");
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        toast.error("Error submitting feedback.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 -mt-5">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-blue-600">We Value Your Feedback</h2>
        <p className="text-gray-700 mt-4">
          At Crystal Beauty Clear, we take pride in providing exceptional beauty products and services to enhance your confidence and charm.
          Your satisfaction is our priority, and we strive for excellence in everything we do. However, if we ever fall short, we sincerely apologize.
          Your feedback helps us improve and serve you better. Please share your thoughts below—we truly value your voice.
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* <input
            type="text"
            value={userName}
            placeholder="Enter Your User Name"
            className="h-10 w-full mb-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none shadow-sm transition duration-300"
            onChange={(e) => setUserName(e.target.value)}
          /> */}
          <textarea
            value={message}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            rows="5"
            placeholder="Write your feedback here..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-black text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-400 hover:text-black transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
