import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProductFeedbackSlider({ productFeedbacks }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextFeedback = () => {
      if (currentIndex < productFeedbacks.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const prevFeedback = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <div className="w-full mx-auto text-center">
        {/* Feedback Card */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md mb-4 transition-all duration-300">
          <p className="font-semibold text-gray-900">{productFeedbacks[currentIndex]?.userName}</p>
          <p className="text-sm text-gray-500">Rating: {productFeedbacks[currentIndex]?.rating} ⭐</p>
          <p className="text-lg text-gray-800 mt-2">{productFeedbacks[currentIndex]?.message}</p>
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevFeedback}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full bg-blue-500 text-white transition-all duration-200 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            <FaArrowLeft />
          </button>
  
          <button
            onClick={nextFeedback}
            disabled={currentIndex === productFeedbacks.length - 1}
            className={`p-3 rounded-full bg-blue-500 text-white transition-all duration-200 ${
              currentIndex === productFeedbacks.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
}
  