import { log10 } from "chart.js/helpers";
import { use } from "react";
import { useLocation } from "react-router-dom";
import pfp from "../assets/pfp.png"


const Header = () => {
    const location = useLocation();
    console.log(location.pathname);
    
    return(
        <>
        <div className="bg-[#D7F1F3] text-gray-800 py-4 px-8">
                  <div className="flex justify-between items-center">
                      <div className="p-3 text-center">
                          <h1 className="text-6xl font-normal font-alice">WELCOME TO SUKOON</h1>
                          <p className="text-2xl font-normal font-alice">Blessings to your Mind</p>
                      </div>
                      {(location.pathname==="/"|| 
                      location.pathname==="/registration/login"|| 
                      location.pathname==="/registration/signup"||
                       location.pathname==="/registration/signup-verify"|| 
                       location.pathname==="/registration/forget-password"|| 
                       location.pathname==="/registration/forget-passwordverify"||
                       location.pathname==="/registration/resetpss")
                      ?(
                      <div className="flex gap-12 font-alice font-normal text-[22px] mr-10 ">
                          <a href="#" className="hover:underline">Home</a>
                          {/* <a href="#" className="hover:underline">About</a> */}
                          <a href="#" className="hover:underline">Support</a>
                          <a href="#" className="hover:underline">Contact Us</a>
                      </div>
                      ):(
                        <div className=" flex mr-10">
                            <img
                            src={pfp}
                            alt="image"
                            className="w-[58px]"></img>
                        </div>
                      )}
                  </div>
              </div>
        </>
    )
}
export default Header;