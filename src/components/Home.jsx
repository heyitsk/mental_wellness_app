

import { Link, useLocation } from "react-router-dom";
import BarChart from "./Bar";
import Mood from "./Mood";
import Quote from "./Quote";
import { useStats } from "../contexts/StatsContexts";
import MoodGraph from "./MoodGraph";
import { useNavigate } from "react-router-dom";




const Home = () => {
    // const location = useLocation()
    // // console.log(location.state)
    // const stats = location.state?.info?.stats;
    // const st = location.state?.info;
    // console.log(st);
    const {stats} = useStats();
    console.log("homestats",stats);
    const st2 = stats.stats;
    console.log(st2);
    const navigate = useNavigate();
    
    
    
    return  (
        <>
            
                
                            <BarChart data={st2}/>
                            <Mood/>
                            
                            <MoodGraph/>
                            <Quote/>
                            <button 
                            className="absolute top-[661px] left-[887px] bg-white p-4 border-2 border-black rounded-lg font-alice font-normal text-[20px] hover:bg-slate-400"
                            onClick={()=>{
                                navigate("/questions")

                            }}>Retest</button>
                            

                        
                     
            
                
            
        </>
    )
}
export default Home;
