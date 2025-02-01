import React from 'react';

export default function AddFeedback() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 -mt-5">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-blue-500 ">We Value Your Feedback</h2>
        <p className="text-gray-700 mt-4">
          At Cristal Beauty Clear, we take pride in providing exceptional beauty products and services to enhance your confidence and charm. Your satisfaction is our priority, and we strive for excellence in everything we do. However, if we ever fall short, we sincerely apologize. Your feedback helps us improve and serve you better. Please share your thoughts below—we truly value your voice.
        </p>
        <form className="mt-6">
          <textarea 
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            rows="5"
            placeholder="Write your feedback here..."
          ></textarea>
          <button 
            type="submit" 
            className="mt-4 bg-black  text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-400 hover:text-black transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
