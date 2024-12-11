import home from "../assets/home.png"

import ex from "../assets/ex.png"
import headphones from "../assets/headphones.png"
import journal from "../assets/journal.png"
import { Link, Outlet, useLocation } from "react-router-dom"
import pfp from "../assets/pfp.png"

const Dashboard = () => {
    const location = useLocation();
    return (
        <>
        <div className="min-h-screen pt-[100px] bg-gradient-to-b from-[#D7F1F3] to-[#A397CDD9]">
        <div className="relative">
                    <Link to="/dashboard">
                    {(location.pathname==='/dashboard/home')?(
                    <div id="home" className=" bg-white text-[#00CFED] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-60px] shadow-lg">
                        <p  className="text-[20px] ml-10">Home</p>
                        <img src={home} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>):
                     (
                    <div id="home" className=" bg-white text-[#00CFED] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-130px] hover:left-[-60px] shadow-lg">
                        
                        <p  className="text-[20px] ml-10">Home</p>
                        <img src={home} alt="home img" className="w-[49px] h-[52px]"></img>
                        
                     </div>
                     )}
                     </Link>
                     <Link to="/dashboard/exercise">

                     {(location.pathname==='/dashboard/exercise')?(
                        <div id="ex" className=" bg-white text-[#8B6FED] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal top-[100px] rounded-[40px] absolute left-[-60px] shadow-lg">
                        <p  className="text-[20px] ml-10">Exercise</p>
                        <img src={ex} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>):
                     
                     (
                        <div id="music" className=" bg-white text-[#8B6FED] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-150px] hover:left-[-60px] top-[100px] shadow-lg">
                        
                        <p  className="text-[20px] ml-10">Exercise</p>
                        <img src={ex} alt="home img" className="w-[49px] h-[52px]"></img>
                        
                     </div>

                     )}
                     </Link>
                     <Link to="/dashboard/music">
                     {(location.pathname==='/dashboard/music')?(
                        <div id="music" className=" bg-white text-[#F547E3] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal top-[200px] rounded-[40px] absolute left-[-60px] shadow-lg ">
                        <p  className="text-[20px] ml-10">Music</p>
                        <img src={headphones} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>
                     
                     ):(
                        <div id="music" className=" bg-white text-[#F547E3] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-130px] hover:left-[-60px] top-[200px] shadow-lg">
                        <p  className="text-[20px] ml-10">Music</p>
                        <img src={headphones} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>

                     )}
                     </Link>

                     <Link to="/dashboard/journal">
                     {(location.pathname==='/dashboard/journal')?(
                        <div id="journal" className=" bg-white text-[#FFB061] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal top-[300px] rounded-[40px] absolute left-[-60px] shadow-lg ">
                        <p  className="text-[20px] ml-10">Journal</p>
                        <img src={journal} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>
                     
                     ):(
                        <div id="journal" className=" bg-white text-[#FFB061]  flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-140px] hover:left-[-60px] top-[300px] shadow-lg">
                        <p  className="text-[20px] ml-10">Journal</p>
                        <img src={journal} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>

                     )}
                     </Link>



                     <Link to="/dashboard/profile">
                     {(location.pathname === '/dashboard/profile') ? (
                     <div id="profile" className="bg-white text-[#88f78a] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal top-[400px] rounded-[40px] absolute left-[-60px] shadow-lg">
                     <p className="text-[20px] ml-10">Profile</p>
                     <img src={pfp} alt="profile img" className="w-[49px] h-[52px]" />
                      </div>
                         ) : (
                     <div id="profile" className="bg-white text-[#88f78a] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-130px] hover:left-[-60px] top-[400px] shadow-lg">
                    <p className="text-[20px] ml-10">Profile</p>
                  <img src={pfp} alt="profile img" className="w-[49px] h-[52px]" />
                 </div>
                    )}
                    </Link>


                     
                     
        </div>
        <div className="relative ">
        <Outlet/>
        </div>
                
        </div>
        </>
    )
}
export default Dashboard;