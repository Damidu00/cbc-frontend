import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CartComponent from '../../components/cartComponent';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Shipping() {
  const location = useLocation();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
      orderedItems: cart,
    }).then((res) => {
      console.log(res.data);
      setTotal(res.data.total);
      setLabeledTotal(res.data.labeledTotal);
    });
  }, []);

  const cart = location.state?.items;
  if (!cart) {
    toast("No Items Received");
    navigate('/cart');
  }

  function createOrder() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
      orderedItems: cart,
      name,
      address,
      phone,
    }, {
      headers: {
        Authorization: "Bearer " + token,
      }
    }).then((res) => {
      console.log(res.data);
      toast.success('Order Created Successfully');
      navigate('/order-success'); // redirect after success
    }).catch(err => {
      toast.error('Failed to Create Order');
    });
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center p-5 bg-gray-300">
      {/* Shipping Form */}
      <div className="w-full max-w-lg mb-5 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-gray-700 font-semibold mb-4">Enter Your Shipping Details</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Address Input */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-gray-600 font-medium">Shipping Address</label>
            <input
              type="text"
              id="address"
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your shipping address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-600 font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </form>
      </div>

      {/* Cart Table */}
      <div className="w-full max-w-4xl mb-5 overflow-x-auto bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto bg-gray-200 ">
          <thead>
            <tr className="">
              <th className="text-sm text-left p-2">Image</th>
              <th className="text-sm text-left p-2">Product Name</th>
              <th className="text-sm text-left p-2">Product ID</th>
              <th className="text-sm text-left p-2">Quantity</th>
              <th className="text-sm text-left p-2">Price</th>
              <th className="text-sm text-left p-2">Total</th>
              <th className="text-sm text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartComponent key={item.productId} productId={item.productId} qty={item.qty} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing Summary */}
      <div className="w-full max-w-lg text-center mt-5 bg-gray-100 p-5 rounded-lg shadow-lg">
        <div className="text-lg text-gray-700 font-semibold mb-2">Pricing Summary</div>
        <div className="text-xl text-red-600 font-extrabold mb-2">Total: LKR-: {labeledTotal.toFixed(2)}</div>
        <div className="text-xl text-red-600 font-extrabold mb-2">Discount: LKR-: {(labeledTotal - total).toFixed(2)}</div>
        <div className="text-xl text-red-600 font-extrabold mb-2">Grand Total: LKR-: {total.toFixed(2)}</div>
      </div>

      {/* Create Order Button */}
      <div className="mt-5">
        <button
          onClick={createOrder}
          className="bg-black text-white rounded-lg p-2 w-[300px] hover:bg-gray-600"
        >
          Create Order
        </button>
      </div>
    </div>
  );
}
