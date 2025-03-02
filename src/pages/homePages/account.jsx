import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../loginPage'
import SignupPage from '../signupPage'

export default function Account() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true); // Toggle between login/signup
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setUser(null);
          return;
        }

        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + `/api/users/`, {
          headers: { Authorization: "Bearer " + token }
        });
        
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user details');
      }
    }

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/'); // Redirect after logout
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      {user ? (
        // Account Details Section
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="w-full h-full rounded-full border-4 border-blue-500"
            />
          </div>

          {/* User Details */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{user.type}</p>

          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Blocked:</strong> {user.isBlocked ? "Yes" : "No"}</p>
          </div>

          {/* Logout Button */}
          <button 
            className="mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        // Login/Signup Section
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {showLogin ? 'Login to Your Account' : 'Create an Account'}
          </h2>

          {showLogin ? <LoginPage /> : <SignupPage />}

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            {showLogin ? "Don't have an account?" : "Already have an account?"} 
            <button 
              className="text-blue-500 hover:underline ml-1"
              onClick={() => setShowLogin(!showLogin)}
            >
              {showLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
