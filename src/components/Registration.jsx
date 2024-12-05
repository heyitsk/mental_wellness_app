import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 

import m22 from "../assets/m22.png"
import bg2 from "../assets/bg2.png"
import Login from "./Login";
import { Outlet } from "react-router-dom";


const Registration = () => {
    return(
        <>
        <div className="bg-[#D7F1F3] min-h-screen">
          <div>
              
              <div className="relative h-[1000px]"> 
                  <img
                      src={bg2}
                      alt="Vector4"
                      className="absolute top-[-160px] left-0 z-10 w-[850px]"
                  />
                  <img
                      src={m22}
                      alt="Vector1"
                      className="absolute top-[90px] left-[0px] z-20 w-[553px]"
                  />
                  <Outlet/>
                  
                  
                    
                
                 
              </div>

              
          </div>
          </div>
        </>
    )
}
export default Registration;