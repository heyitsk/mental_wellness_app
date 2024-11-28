import { useState } from "react";
const Login = ()=>{
    const[username,setUsername] = useState("")
    const[isUsername,setIsUsername]= useState(false)
    const[password,setPassword] = useState("")
    const[isPassword,setIsPassword] =useState(false)
    const[passwordVisibility,setPasswordVisibility] = useState(false)

    const isButtonEnabled = isUsername  &&isPassword 
       


    return(
        <>
        <div className="RegisterContaier border-2 border-black m-4 rounded-md p-4 shadow-lg w-1/4">
            <h1 className="font-bold text-4xl">Login</h1>
            <div className="Username">
                <form className="py-4 flex flex-col">
                    <label htmlFor="usernameLogin">Username:-</label>
                    <input type="text" id="usernameLogin" name="username" className="border-2 w-3/4"
                    value={username} 
                    onChange={(e)=>{    
                        setUsername(e.target.value)
                        // setIsUsername(true) 
                        // console.log(username);
                        // console.log(isUsername);
                        setIsUsername(e.target.value.trim()!=="")
                        // console.log(isUsername);
                        // console.log(username);
                        // console.log(e.target.value);
                        
                    }} >
            
                    </input>
                    
                </form>
                <form className="py-4 flex flex-col">
                    <label htmlFor="passwordLogin">Password:-</label>
                    <div className="flex gap-4">
                    <input 
                    type={passwordVisibility?"text":"password"}  
                    id="passwordLogin" name="password" className="border-2 w-3/4"
                    value={password}
                    onChange={(e)=>{    
                        setPassword(e.target.value)
                        // setIsPassword(true)
                        // console.log(username);
                        // console.log(isPassword);
                        setIsPassword(e.target.value.trim().length>=4)
                        // console.log(isPassword);
                   }}></input>
                   <button 
                   type="button"
                   className=""
                   onClick={()=>{
                    setPasswordVisibility(!passwordVisibility)
                   }}>{passwordVisibility?"🔒":"👁️"}</button>
                   </div>
                </form>
                
                <button type="submit" className={` text-white p-2 rounded-sm 
                    ${isButtonEnabled
                        ?"bg-blue-400 hover:bg-blue-500"
                        :"bg-blue-100"
                    }`}>Submit</button>
                {/* <button 
                type="button"
                onClick={()=><Login/>}>Login</button> */}
                
            </div>
        </div>
        </>
    )

    
}
export default Login;