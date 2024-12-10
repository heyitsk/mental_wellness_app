import axios from "axios";
import { useStats } from "../contexts/StatsContexts";
import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";

const exercise  = () => {
    
    const[exerciserec,setexerciserec] = useState([""])
    const {stats} = useStats();
    // console.log("exercisestats",stats);
    const st2 = stats?.stats;
    console.log("st2",st2);
    const{emotemotionalWellBeing, stressAndAnxiety, socialRelationships, selfEsteem} = st2
    const handleSubmit = async() => {
        if(st2){
        try {
            const response = await axios.post("https://login-signup-page-3z09.onrender.com/user/recommendations", {
                stats: {emotemotionalWellBeing, stressAndAnxiety, socialRelationships, selfEsteem},
            });
            console.log(response);
            
            console.log("API Response:", response.data);
            const rec = response.data.recommendations.exercises
            console.log(rec);
            
            setexerciserec(rec)
            
            
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    }
    }
    useEffect(() => {
        handleSubmit();
    }, [stats]);
    return (
        <div className="absolute left-[400px] w-[60%]  ">
          <div className="">
            {exerciserec.length > 0 ? (
              exerciserec.
              slice(0,9)
              .map((rec, index) => (
                <RecommendationCard
                  key={index}
                  title={rec.title}
                  category={rec.category}
                  link={rec.link}
                />
              ))
            ) : (
              <p className="text-gray-600">No exercise recommendations available.</p>
            )}
          </div>
        </div>
      );
}
export default exercise;