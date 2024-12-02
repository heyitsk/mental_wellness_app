import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ResetPss = ()=>{
    const [password, setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [passwordVisibility,setPasswordVisibility] = useState(false)
    const [cfpasswordVisibility,setCfPasswordVisibility] = useState(false)
    const [message, setMessage] = useState("");
    // const location = useLocation();
    // const {email} = location.state


    const isPasswordMatch = (password === confirmPassword)

    // const handleChange = (e) => {   
    //     const {name,value} = e.target

    // }
    const handleSubmit = async(e) => {
          e.preventDefault()
          try{
            const response = axios.post("https://login-signup-page-w7f2.onrender.com/user/reset/password",{
              password,
              confirmPassword,
              email})
            console.log("api response", response.data);

            
          }
          catch (error) {
            console.error("Error verifying OTP:", error);
            setMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    }

    return(
        
        <>
        <div  className="absolute right-28 top-10  z-30  " >

            <div className="p-4 py-10 bg-[#AFFFBB] bg-opacity-35  rounded-2xl shadow-md border-2 z-10 w-96 h-[400px] ">
            <form onSubmit={handleSubmit
            }>
            <div className="mt-4">
              <label className="font-alice font-normal text-gray-600" htmlFor="password">
                Password 
              </label>
              <div className="flex gap-4 relative">
              <input
                type={passwordVisibility?"text":"password"}
                id="password"
                name="password"
                value={password}
                onChange={(e)=>
                    setPassword(e.target.value)}
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
            <div className="mt-4">
              <label className="font-alice font-normal text-gray-600" htmlFor="password">
                Confirm Password {isPasswordMatch?"✔️":"❌"}
              </label>
              <div className="flex gap-4 relative">
              <input
                type={cfpasswordVisibility?"text":"password"}
                id="confirmpassword"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                }}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-2"
                required
              />
              <button 
                type="button"
                  className="absolute right-1 top-4"
                  onClick={()=>{
                    setCfPasswordVisibility(!cfpasswordVisibility)
                    }}>{cfpasswordVisibility?"🔓":"🔒"}</button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full mt-10 px-4 py-2  text-white font-alice font-normal  bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 "
              >Reset Password

              </button>
            </div>
            </form>
        </div>
        </div>
        </>
    )
}
export default ResetPss;