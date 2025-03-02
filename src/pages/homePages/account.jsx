import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../loginPage';
import SignupPage from '../signupPage';

export default function Account() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
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
        setShowPopup(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user details');
      }
    }

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
    window.location.reload();
  };

  // DELETE USER FUNCTION
  const handleDeleteUser = async () => {
    if (!user || !user._id) return;

    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    try {
      await axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/users/${user._id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });

      alert("User deleted successfully!");
      localStorage.removeItem("token"); // Remove token since user is deleted
      navigate('/');
      window.location.reload();
    } catch (error) {
      alert("Failed to delete user: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-800 dark:bg-gray-200 p-4 ">
      {user ? (
        <>
          {/* Dark Background Overlay */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              {/* Popup Modal */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center relative">
        
                {/* Profile Image */}
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src="https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//Profile-PNG-File.png"
                    alt="User Avatar"
                    className="w-full h-full rounded-full border-4 border-blue-500"
                  />
                </div>

                {/* User Details */}
                <h2 className="text-xl font-semibold text-gray-300 dark:text-white">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{user.type}</p>

                <div className="mt-4">
                  <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Blocked:</strong> {user.isBlocked ? "Yes" : "No"}</p>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex justify-center gap-4">
                  <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    onClick={() => navigate('/update-profile')}
                  >
                    Update
                  </button>
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    onClick={handleDeleteUser}
                  >
                    Delete
                  </button>
                  <button 
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>

              </div>
            </div>
          )}
        </>
      ) : (
        <div className="shadow-lg rounded-lg p-10 w-full text-center">
          {showLogin ? <LoginPage /> : <SignupPage />}
        </div>
      )}
    </div>
  );
}
