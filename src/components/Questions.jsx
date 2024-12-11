  import React from "react";
  import LikertScale from "./LikertScale";
  import { useState } from "react";
  import axios from "axios";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useStats } from "../contexts/StatsContexts";

  const Questions = () => {
    const [responses, setResponses] = useState({
      emotionalWellBeing: { happiness: null, recovery: null, overwhelm: null },
      stressAndAnxiety: { anxiety: null, exhaustion: null, stressHandling: null },
      socialRelationships: { support: null, loneliness: null, connections: null },
      selfEsteem: { confidence: null, comparison: null, selfAcceptance: null },
    });
    // const location = useLocation();
    // const {email} = location.state
    const navigate = useNavigate();
    const { setStats } = useStats();

    const [apiResponse, setApiResponse] = useState(null); // To store API response

    // Update the response dynamically based on category and question
    const handleValueChange = (category, question, value) => {
      setResponses((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [question]: value,
        },
      }));
    };

    // Handle API submission
    const handleSubmit = async () => {
      const payload = {
        email: localStorage.getItem("email"),
        ...responses,
      };

      try {
        const response = await axios.post("https://login-signup-page-3z09.onrender.com/user/submit-survey",payload);
        console.log("API Response:", response.data);
        const info = response.data
        setStats(info);

        navigate("/dashboard",{
        
        })
        
      } catch (error) {
        console.error("Error submitting data:", error.response || error);
      }
    };
    return (
      
      <div className="min-h-screen grid m-10 grid-cols-2 gap-24 ">


  {/* Emotional Well-being */}
        <LikertScale
          question="How often do you feel happy and content with your life?"
          scale={[1, 2, 3, 4, 5]}
          name="happiness"
          onValueChange={(value) => handleValueChange("emotionalWellBeing", "happiness", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}

        />
        <LikertScale
          question="How quickly do you recover emotionally after experiencing a setback"
          scale={[1, 2, 3, 4, 5]}
          name="recovery"

          onValueChange={(value) => handleValueChange("emotionalWellBeing", "recovery", value)}
          labels = {["Very Slowly", "Slowly", "Moderately", "Quickly", "Very Quickly"]}
        />
        <LikertScale
          question="How often do you feel overwhelmed by your emotions?"
          scale={[1, 2, 3, 4, 5]}
          name="overwhelm"
          onValueChange={(value) => handleValueChange("emotionalWellBeing", "overwhelm", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}
        />
        



  {/* Stress and Anxiety */}

        <LikertScale
          question="How often do you feel anxious or worried about the future?"
          scale={[1, 2, 3, 4, 5]}
          name="anxiety"

          onValueChange={(value) => handleValueChange("stressAndAnxiety", "anxiety", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}
        />
        <LikertScale
          question="How often do you feel physically or mentally exhausted, even after rest?"
          scale={[1, 2, 3, 4, 5]}
          name="exhaustion"
          onValueChange={(value) => handleValueChange("stressAndAnxiety", "exhaustion", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}
        />
        <LikertScale
          question="How confident are you in your ability to handle stressful situations?"
          scale={[1, 2, 3, 4, 5]}
          name="stressHandling"
          onValueChange={(value) => handleValueChange("stressAndAnxiety", "stressHandling", value)}
          labels = {["Not Confident", "Slightly Confident", "Neutral", "Confident", "Very Confident"]}
        />
        
        {/* <button className="w-1/3   mt-10 px-4 py-2  text-white font-alice font-normal  bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        onClick={handleClick}
        >Next</button> */}
        <LikertScale
          question="How supported and cared for do you feel by the people around you?"
          scale={[1, 2, 3, 4, 5]}
          name="support"
          onValueChange={(value) => handleValueChange("socialRelationships", "support", value)}
          labels = {["Not At All ", "Slightly", "Moderately", "Very Much", "Extremely"]}
          
        />
        <LikertScale
          question="How often do you feel isolated or lonely, even in the presence of others?"
          scale={[1, 2, 3, 4, 5]}
          name="loneliness"
          onValueChange={(value) => handleValueChange("socialRelationships", "loneliness", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}

        />
        <LikertScale
          question="How easy is it for you to maintain meaningful connections with friends or family?"
          scale={[1, 2, 3, 4, 5]}
          name="connections"
          onValueChange={(value) => handleValueChange("socialRelationships", "connections", value)}
          labels = {["Very Difficult", "Difficult", "Neutral", "Easy", "Very Easy"]}
        />

  {/* Self-esteem and Self-perception */}


        <LikertScale
          question="How confident are you in your abilities and strengths?"
          scale={[1, 2, 3, 4, 5]}
          name="confidence"
          onValueChange={(value) => handleValueChange("selfEsteem", "confidence", value)}
          labels = {["Not Confident", "Slightly Confident", "Neutral", "Confident", "Very Confident"]}
        />
        <LikertScale
          question="How often do you compare yourself to others and feel inadequate?"
          scale={[1, 2, 3, 4, 5]}
          name="comparison"
          onValueChange={(value) => handleValueChange("selfEsteem", "comparison", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}
        />
        <LikertScale
          question="How well do you accept yourself, including your flaws?"
          scale={[1, 2, 3, 4, 5]}
          name="selfAcceptance"
          onValueChange={(value) => handleValueChange("selfEsteem", "selfAcceptance", value)}
          labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}

        />
        <button
          className="w-1/3 mt-10 px-4 py-2 text-white font-alice font-normal bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  };

  export default Questions;
