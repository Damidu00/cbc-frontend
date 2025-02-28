import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setOrders(res.data);
        }).catch(() => {
            toast.error("Failed to fetch orders. Please try again!");
        });
    }, []);

    const calculateTotal = (orderedItems) => {
        return orderedItems.reduce((total, item) => 
            total + ((Number(item.price) || 0) * (Number(item.quantity || item.quentity) || 0))
        , 0).toFixed(2);
    };
    

    return (
        <div className='w-full h-full flex flex-col items-center p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Orders</h2>
            <div className='w-full overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-200 shadow-lg'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Order ID</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Status</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Date</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.orderId} className='hover:bg-gray-50 cursor-pointer' onClick={() => setSelectedOrder(order)}>
                                <td className='border border-gray-300 px-4 py-2'>{order.orderId}</td>
                                <td className='border border-gray-300 px-4 py-2 capitalize'>{order.status}</td>
                                <td className='border border-gray-300 px-4 py-2'>{new Date(order.date).toLocaleDateString()}</td>
                                <td className='border border-gray-300 px-4 py-2 font-semibold'>LKR: {calculateTotal(order.orderedItems)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-4">Order Details</h3>
                        <p className="mb-2"><strong>Order ID:</strong> {selectedOrder.orderId}</p>
                        <p className="mb-2"><strong>Status:</strong> {selectedOrder.status}</p>
                        <p className="mb-4"><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
                        <h4 className="text-lg font-semibold mb-2">Products:</h4>
                        <ul className="mb-4">
                            {selectedOrder.orderedItems.map((item, index) => (
                                <li key={index} className="border-b py-2">
                                    {item.name} - {item.quantity} x LKR {item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        {selectedOrder.notes && (
                            <p className="mb-4"><strong>Notes:</strong> {selectedOrder.notes}</p>
                        )}
                        <p className="text-lg font-bold">Total: LKR {calculateTotal(selectedOrder.orderedItems)}</p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setSelectedOrder(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
