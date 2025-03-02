import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/allusers`,  
          {
            headers: {
              Authorization: `Bearer ${token}`,  
            },
          }
        );

        const data = response.data;  
        console.log("API Response:", data);

        if (data.users) {
          setUsers(data.users);
        } else {
          setError(data.message);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Users</h2>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-5 text-left">Email</th>
                <th className="py-3 px-5 text-left">Name</th>
                <th className="py-3 px-5 text-left">Type</th>
                <th className="py-3 px-5 text-left">Profile Picture</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-5">{user.email}</td>
                  <td className="py-3 px-5">{user.firstName} {user.lastName}</td>
                  <td className="py-3 px-5">{user.type}</td>
                  <td className="py-3 px-5">
                    <img
                      src={user.profilrPicture}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No users found.</p>
      )}
    </div>
  );
}
