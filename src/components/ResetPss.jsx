import axios from "axios";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const ResetPss = ()=>{
    // const [newPassword, setNewPassword] = useState("")
    // const [confirmPassword,setConfirmPassword] = useState("")
    const [data, setData] = useState({
      newPassword:"",
      confirmPassword:"",
    })
    const [passwordVisibility,setPasswordVisibility] = useState(false)
    const [cfpasswordVisibility,setCfPasswordVisibility] = useState(false)
    const [message, setMessage] = useState("");
    const location = useLocation();
    // console.log(location);
    
    const {resetToken} = location.state
    // console.log("rt:",resetToken);
    
    const navigate = useNavigate();

    const isPasswordMatch = (data.newPassword === data.confirmPassword)

    const handleChange = (e) => {   
        const {name,value} = e.target
        setData((prevData)=>({
          ...prevData,
          [name]:value,
        }))
    }
    const handleSubmit = async(e) => {
          e.preventDefault()
          // const url = process.env.REACT_APP_PASSWORDRESET_URL
          try{
            const response = await axios.post("https://login-signup-page-3z09.onrender.com/user/reset/password",{
              resetToken,
              ...data
              })
            console.log("api response", response.data);
            navigate("/registration/login")
            
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
                name="newPassword"
                value={data.newPassword}
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
            <div className="mt-4">
              <label className="font-alice font-normal text-gray-600" htmlFor="password">
                Confirm Password {isPasswordMatch?"✔️":"❌"}
              </label>
              <div className="flex gap-4 relative">
              <input
                type={cfpasswordVisibility?"text":"password"}
                id="confirmpassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
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
                className={`w-full mt-10 px-4 py-2  text-white font-alice font-normal ${isPasswordMatch?"bg-[#33D7FF]  hover:bg-indigo-700":"bg-[#93def0] "}  rounded-sm focus:outline-none focus:ring focus:ring-indigo-200 `}
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