import { useState } from "react";
import signin from "../assets/signin.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPss = () => {
  const [email, setEmail] = useState("")
  
  const navigate = useNavigate()
  const handleChange = (e) => {
      // console.log(e.target.value);
      
      setEmail(e.target.value)
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const url = process.env.REACT_APP_FORGETPSS_URL
    try{ 
      const response = await axios.post("https://login-signup-page-3z09.onrender.com/user/forget/password" ,{email})
      console.log("data sent",{email});
      const token = response.data.token
      // console.log(token);
      
      
      console.log("api response",response.data);
      navigate("/registration/forget-passwordverify", { 
        state: { email, token }
    });
    

      

    }
    catch(error){
      console.error("Complete error object:", error);
        console.error("Error details:", error.response?.data || "No error details");
    }
  }
    return(
        <>
         
    <div className="absolute right-28 top-10  z-30">
      
      <div className="flex flex-col justify-center items-center">
        <img src={signin} className="relative w-[150px] z-20 top-[35px] h-[80px]"/>
      <div className="p-4 py-10 bg-[#AFFFBB] bg-opacity-35  rounded-2xl shadow-md border-2 z-10 w-96 h-[250px] ">
        {/* <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login</h1> */}
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="login-email" className="block font-alice font-normal  text-gray-600">
              Email
            </label>
            <input
              type="email"   
              id="login-email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-2"
            />
          </div>
          
          
          
          <button
            type="submit"
            className="w-full mt-10 px-4 py-2  text-white font-alice font-normal  bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 "
          >
            Send OTP
          </button>
          
        </form>
      </div>
      </div>
    </div>
        </>
    )
}
export default ForgetPss;