  import React, { useState } from "react";
  import axios from "axios";
  import { Link, useNavigate } from "react-router-dom";
  import signin from "../assets/signin.png"
  import spinner from "../assets/spinner.svg"


  const SignUp = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const[passwordVisibility,setPasswordVisibility] = useState(false)
    const [loading, setLoading] = useState(false); 

    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      // const url = process.env.REACT_APP_SIGNUP_URL
      try {
        const response = await axios.post("https://login-signup-page-3z09.onrender.com/user/register", formData);
        console.log("Data submitted:", formData);
        console.log("API response:", response.data);
        const token = response.data.token;
        localStorage.setItem("name", formData.name);
        localStorage.setItem("email", formData.email);
        navigate("/registration/signup-verify", {
          state: { token },
      })
        
      } catch (error) {
        
          console.error("Complete error object:", error); 
          console.error("Error details:", error.response?.data || "No error details");
      } finally{
        setLoading(false)
      }
      

      
    };

      return (
        <div  className="absolute right-28 top-10  z-30  " >
          <div className="flex flex-col justify-center items-center">
            <img src={signin} className="relative w-[150px] z-20 top-[35px] h-[80px]"/>
          <div className=" p-4 py-10 bg-[#AFFFBB] bg-opacity-35 rounded shadow-md border-2 z-10 w-96">
            {/* <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">SignUp</h2> */}

            {loading?(
              <div className="loading-screen flex flex-col justify-center items-center">
              
              <div className="spinner">
                <img 
                src={spinner}
                alt="spinner"
                className=""
                />
              </div>
              </div>
            ):(

            <form onSubmit={handleSubmit} className="">
              <div>
                <label className="font-alice font-normal  text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="font-alice font-normal text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-2"
                required
              />
            </div>

            
            <div className="mt-4">
              <label className="font-alice font-normal text-gray-600" htmlFor="password">
                Password
              </label>
              <div className="flex gap-4 relative">
              <input
                type={passwordVisibility?"text":"password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-2"
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

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full mt-10 px-4 py-2  text-white font-alice font-normal  bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 "
              >Sign Up

              </button>
            </div>
          </form>
          )}
        </div>
        </div>
      </div>
    );
  };

  export default SignUp;
