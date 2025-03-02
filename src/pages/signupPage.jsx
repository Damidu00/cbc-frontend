import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + `/api/users/`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      setSuccess(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create Your Account</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <label className="text-gray-700 font-medium sm:w-40">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300" required />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row">
            <label className="text-gray-700 font-medium sm:w-40">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300" required />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row">
            <label className="text-gray-700 font-medium sm:w-40">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300" required />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row">
            <label className="text-gray-700 font-medium sm:w-40">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300" required />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row">
            <label className="text-gray-700 font-medium sm:w-40">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300" required />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="w-full sm:w-60 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-purple-500">
              Sign Up
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => navigate("/login")}>
              Log In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
