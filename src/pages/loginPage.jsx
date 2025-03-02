import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [email,setEmail] = useState("Your Email")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const googleLogin = useGoogleLogin({
    onSuccess : (res)=>{
      console.log(res)
      axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/google",{
        token : res.access_token
      })
      .then(
        (res)=>{
          if(res.data.message == "User created"){
            toast.success("Your account is created..now you can login via google.")
          }else{
            localStorage.setItem("token",res.data.token)
            if(res.data.user.type == "admin"){
              navigate("/admin")
            }else{
              navigate("/")
            }
          }
        }
      )
    }
  })

  function login(){
    axios.post( import.meta.env.VITE_BACKEND_URL + "/api/users/login",{
      email : email,
      password : password
    }).then((res)=>{
      
      if(res.data.user == null){
        toast.error(res.data.message)
        return
      }
      toast.success("Loged in successfully")

      localStorage.setItem("token",res.data.token)

      if(res.data.user.type == "admin"){
        navigate("/admin")
      }else{
        navigate("/")
      }
      
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login Here
        </h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>

            <input type="email" id="email" placeholder="Enter Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            
            onChange={(e)=>{
              setEmail(e.target.value)
            }}

            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input type="password" id="password"  placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="mb-6">
            <button 
              onClick={login}
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
              
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-center -mt-3">

          <button className="flex items-center gap-3 px-5 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300"
          onClick={()=>{googleLogin()}}
          >
            <FcGoogle className="text-xl text-red-500" />
            <span>Continue with Google</span>
          </button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <span 
              className="text-blue-600 hover:underline cursor-pointer" 
              onClick={() => navigate("/signup")}
            >
              {" "}Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
