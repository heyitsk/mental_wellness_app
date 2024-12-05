import home from "../assets/home.png"

import ex from "../assets/ex.png"
import headphones from "../assets/headphones.png"
import journal from "../assets/journal.png"

import { useLocation } from "react-router-dom";
import PieChart from "./Pie";




const Home = () => {
    const location = useLocation()
    console.log(location.state)
    const stats = location.state?.info?.stats;
    console.log(stats);
    
    return  (
        <>
            <div className="min-h-screen pt-[100px] bg-gradient-to-b from-[#D7F1F3] to-[#A397CDD9]">
                <div className="relative">
                    <div id="home" className=" bg-white text-[#00CFED] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-130px] hover:left-[-60px] shadow-lg">
                        <p  className="text-[20px] ml-10">Home</p>
                        <img src={home} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>
                     <div id="home" className=" bg-white text-[#8B6FED] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-150px] hover:left-[-60px] top-[100px] shadow-lg">
                        <p  className="text-[20px] ml-10">Exercise</p>
                        <img src={ex} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>
                     <div id="home" className=" bg-white text-[#F547E3] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-130px] hover:left-[-60px] top-[200px] shadow-lg">
                        <p  className="text-[20px] ml-10">Music</p>
                        <img src={headphones} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>
                     <div id="home" className=" bg-white text-[#FFB061] flex justify-center items-center gap-4 pl-8 pr-6 py-4 font-alice font-normal rounded-[40px] absolute left-[-140px] hover:left-[-60px] top-[300px] shadow-lg">
                        <p  className="text-[20px] ml-10">Journal</p>
                        <img src={journal} alt="home img" className="w-[49px] h-[52px]"></img>
                     </div>
                     <div className="absolute z-10 right-[100px] h-28 w-[100px]">
                            <PieChart data={stats}/>
                     </div>
                </div>
                
            </div>
        </>
    )
}
export default Home;
