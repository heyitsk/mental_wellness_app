import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ForgetPssVerify = () => {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const location = useLocation();
    const {email,token} = location.state
    // console.log(location.state);
    
    // console.log("email from state:", email);
    // console.log("token from state:", token);

    
    
    
    
    const navigate = useNavigate();
    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(token);
        
        

        try {
            const response = await axios.post("https://login-signup-page-w7f2.onrender.com/user/otp/verify", { 
                email,
                token,
                otp });
            console.log("api response",response.data);
            const resetToken = response.data.resetToken
                console.log(resetToken);
                navigate("/passwordreset",{
                    state:{resetToken}
                })
            

            if (response.data.success) {
                setIsSuccess(true);
                setMessage(response.data.message || "Verification successful!");
                
                
            } else {
                setMessage(response.data.message || "Verification failed!");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return(
        <>
            <div className="forgetpss-verify p-8 bg-[#AFFFBB] bg-opacity-35 rounded shadow-md border-2 absolute right-28 top-24 w-1/4 z-30">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label className="font-alice font-normal text-[20px]">
                    Enter OTP:
                    <input
                        type="text"
                        value={otp}
                        onChange={handleChange}
                        className="w-full my-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        required
                    />
                </label>
                <button type="submit" className="bg-[#33D7FF] text-white p-2 font-alice font-normal text-[20px]">
                    Verify OTP
                </button>
            </form>
            {message && (
                <p className={`mt-4 ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                    {message}
                </p>
            )}
        </div>
        </>
    )
}
export default ForgetPssVerify;