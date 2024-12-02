import React, { useState } from "react";
import axios from "axios";
import signin from "../assets/signin.png"
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";



const Login = () => {
  const [data, setData] = useState({
    email:"",
    password:""
  })
  const [error, setError] = useState(null);
  const[passwordVisibility,setPasswordVisibility] = useState(false)
 


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://login-signup-page-w7f2.onrender.com/user/login",
        data
      );
      console.log("Login successful:", response.data);
      // console.log(response.data.status);
      
      // if(response.data.status === true) return <Dashboard/>
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Error submitting login:", err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  }
  
  

  return (
    <div className="absolute right-28 top-10  z-30">
      
      <div className="flex flex-col justify-center items-center">
        <img src={signin} className="relative w-[150px] z-20 top-[35px] h-[80px]"/>
      <div className="p-4 py-10 bg-[#AFFFBB] bg-opacity-35  rounded-2xl shadow-md border-2 z-10 w-96 h-[400px] ">
        {/* <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login</h1> */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="login-email" className="block font-alice font-normal  text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={data.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-2"
            />
          </div>
          <div className="mt-8">
          <label className=" font-alice font-normal  text-gray-600" htmlFor="password">
              Password
            </label>
          <div className="flex gap-4 relative">
            <input
              type={passwordVisibility?"text":"password"}
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 mt-2"
              required
            />
            <button 
               type="button"
                className="absolute right-1 top-4"
                onClick={()=>{
                   setPasswordVisibility(!passwordVisibility)
                   }}>{passwordVisibility?"🔓":"🔒"}</button>
            </div>
            </div>
          
          <div className="text-xs font-normal text-right my-3">
            <p><Link to="/forgetpss">Forgot Password?</Link></p>
          </div>
          <button
            type="submit"
            className="w-full mt-10 px-4 py-2  text-white font-alice font-normal  bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 "
          >
            Login
          </button>
          <div className="text-center ">
            <p><Link to="/SignUp">Don’t have an account?</Link></p>
          </div>
        </form>
        
      </div>
      </div>
    </div>
  );
};

export default Login;
