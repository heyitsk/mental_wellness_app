import { useState } from "react";
import Login from "./Login";

const Register = () => {
    const[username,setUsername] = useState("")
    const[isUsername,setIsUsername]= useState(false)
    const[isTypingUsername,setIsTypingUsername] = useState(false)
    const[password,setPassword] = useState("")
    const[isPassword,setIsPassword] =useState(false)
    const[confirmPassword,setConfirmPassword] = useState("")
    const[passwordVisibility,setPasswordVisibility] = useState(false)
    const[isTypingPassword,setIsTypingPassword] = useState(false)
    const[isConfirmPassword,setIsConfrimPassword] =useState(false);
    const[confirmPasswordVisibility,setConfirmPasswordVisibility] = useState(false)

    const isPasswordMatching = password===confirmPassword
    const isButtonEnabled = isUsername && isPasswordMatching &&isPassword && isConfirmPassword;


    return(
        <>
        <div className="RegisterContaier border-2 border-black m-4 rounded-md p-4 shadow-lg w-1/4">
            <h1 className="font-bold text-4xl">Register</h1>
            <div className="Username">
                <form className="py-4 flex flex-col">
                    <label htmlFor="username">Username:-</label>
                    <input type="text" id="username" name="username" className="border-2 w-3/4"
                    value={username} 
                    onChange={(e)=>{    
                        setUsername(e.target.value)
                        // setIsUsername(true) 
                        // console.log(username);
                        // console.log(isUsername);
                        setIsUsername(e.target.value.trim()!=="" && e.target.value.trim().length>=6)
                        // console.log(isUsername);
                        // console.log(username);
                        // console.log(e.target.value);
                    }} 
                    onFocus={()=>{
                        setIsTypingUsername(true)
                    }}
                    onBlur={()=>{
                        setIsTypingUsername(false)
                    }}>
            
                    </input>
                    <div className={` bg-black text-white w-3/4 rounded-md p-3 my-2 ${isTypingUsername?"inline-block":"hidden"}`}>
                        <p> ℹ️ Username must be 6–20 characters, start with a letter, and can include letters, numbers, underscores.</p>
                    </div>
                </form>
                <form className="py-4 flex flex-col">
                    <label htmlFor="password">Password:-</label>
                    <div className="flex gap-4">
                    <input 
                    type={passwordVisibility?"text":"password"}  
                    id="password" name="password" className="border-2 w-3/4"
                    value={password}
                    onChange={(e)=>{    
                        setPassword(e.target.value)
                        // setIsPassword(true)
                        // console.log(username);
                        // console.log(isPassword);
                        setIsPassword(e.target.value.trim().length>=6)
                        // console.log(isPassword);
                   }}
                   onFocus={()=>{
                        setIsTypingPassword(true)
                   }}
                   onBlur={()=>{
                        setIsTypingPassword(false)
                   }}>
                    

                   </input>
                   <button 
                   type="button"
                   className=""
                   onClick={()=>{
                    setPasswordVisibility(!passwordVisibility)
                   }}>{passwordVisibility?"🔒":"👁️"}</button>
                   </div>
                   <div className={` bg-black text-white w-3/4 rounded-md p-3 my-2 ${isTypingPassword?"inline-block":"hidden"}`}>
                        <p> ℹ️ Password must be of atleast 6 characters, include at least one uppercase letter, one number, and one special character.</p>
                    </div>
                </form>
                <form className="py-4 flex flex-col">
                    <label htmlFor="confirmpassword">Confirm Password:-{isPasswordMatching?"✔️":"❌"}</label>
                    <div className="flex gap-4">

                    <input type={confirmPasswordVisibility?"text":"password"} 
                    id="confirmpassword" name="confirmpassword" className="border-2 w-3/4"
                    value={confirmPassword} 
                    onChange={(e)=>{    
                        setConfirmPassword(e.target.value)
                        setIsConfrimPassword(e.target.value.trim()!=="")
                        // console.log(username);
                        // console.log(isConfirmPassword);
                        
                        

                    }}></input>
                    <button
                    type="button"
                    onClick={()=>{
                        setConfirmPasswordVisibility(!confirmPasswordVisibility)
                    }}
                    >{confirmPasswordVisibility?"🔒":"👁️"}</button>
                    </div>
                </form>
                <button type="submit" className={` text-white p-2 rounded-sm 
                    ${isButtonEnabled
                        ?"bg-blue-400 hover:bg-blue-500"
                        :"bg-blue-100"
                    }`}>Submit</button>
                
                
            </div>
        </div>
        </>
    )
}
export default Register;