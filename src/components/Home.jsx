

import { Link, useLocation } from "react-router-dom";
import BarChart from "./Bar";
import Mood from "./Mood";
import Quote from "./Quote";
import { useStats } from "../contexts/StatsContexts";
import MoodGraph from "./MoodGraph";




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
    
    
    
    return  (
        <>
            
                
                            <BarChart data={st2}/>
                            <Mood/>
                            
                            <MoodGraph/>
                            <Quote/>
                            

                        
                     
            
                
            
        </>
    )
}
export default Home;
