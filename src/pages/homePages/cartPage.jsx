import React from "react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Shopping Cart
        </h1>


        <div className="space-y-4">

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Product Name
                </h2>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <p className="text-sm text-gray-500">Price: $20.00</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-600">
              Remove
            </button>
          </div>


        </div>


        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-gray-700">
            <p className="font-medium">Subtotal</p>
            <p className="font-semibold">$20.00</p>
          </div>
          <div className="flex justify-between text-gray-700 mt-2">
            <p className="font-medium">Tax</p>
            <p className="font-semibold">$2.00</p>
          </div>
          <div className="flex justify-between text-gray-700 mt-2 border-t pt-2">
            <p className="font-medium text-lg">Total</p>
            <p className="font-bold text-lg">$22.00</p>
          </div>
        </div>


        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
