import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NotFoundPage from '../../components/NotFoundPage';
import ImageSlider from '../../components/imageSlider';
import { addToCart } from '../../utils/cartFunction';
import toast from 'react-hot-toast';
import ProductFeedbackSlider from '../../components/productFeedbackSlider';

export default function ProductInfo() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("Loading");
  const [productFeedback, setProductFeedback] = useState([]);
  const [feedbackstatus, setfeedbackStatus] = useState("Loading");
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId).then((res) => {
      if (res.data == null) {
        setStatus("not-found");
      } else {
        setProduct(res.data);
        setStatus("found");
      }
    });
  }, []);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/productfeedbacks/" + productId).then((res) => {
      if (res.data == null) {
        setfeedbackStatus("Not-found");
      } else {
        setfeedbackStatus("Found");
        setProductFeedback(res.data);
      }
    });
  }, [productId]);

  function clickAddToCart() {
    addToCart(product.productId, 1);
    toast.success("Product Added To Cart");
  }

  function onBuyNowClick(){
    navigate('/shipping',{
      state : {
        items : [
        {productId : product.productId,
          qty : 1
        }
        ]
      }
    })
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      {status === "Loading" && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-r-4 border-transparent"></div>
        </div>
      )}
      {status === "not-found" && <NotFoundPage />}
      {status === "found" && (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-5 lg:space-y-0">
          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="w-full max-w-lg p-4">
              <ImageSlider images={product.images} />
            </div>
          </div>
          {/* Details Section */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start space-y-5 overflow-y-auto">
            <div className="w-full px-4 lg:px-0 ">
              <h1 className="font-semibold text-gray-950 text-2xl lg:text-4xl">{product.productName}</h1>
              <h2 className="font-semibold text-gray-400 text-lg lg:text-2xl">{product.altNames.join(" | ")}</h2>
              <div className="flex flex-row gap-5 items-center mt-2">
                {product.price > product.lastPrice && (
                  <p className="text-gray-600 font-semibold font-mono text-lg lg:text-xl line-through">
                    {"LKR: " + product.price}
                  </p>
                )}
                <p className="text-red-600 font-semibold font-mono text-2xl lg:text-3xl">
                  {"Rs: " + product.lastPrice}
                </p>
              </div>
              <p className="font-thin text-base lg:text-lg text-gray-800 text-justify mt-2 pr-6">{product.description}</p>

              <button
                onClick={clickAddToCart}
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300 mt-5 w-full lg:w-auto"
              >
                Add To Cart
              </button>

              <button
                onClick={onBuyNowClick}
                className="  font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-950 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300 mt-5 w-full lg:w-auto border border-black mx-2"
              >
                Buy Now
              </button>

            </div>

            {/* Feedback Slider */}
            <div className="w-full mt-5 p-2">
              {productFeedback.length > 0 ? (
                <ProductFeedbackSlider productFeedbacks={productFeedback} />
              ) : (
                <p className="text-gray-600 text-center">No feedback available.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
