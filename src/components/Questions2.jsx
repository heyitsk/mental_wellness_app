import React from "react";
import LikertScale from "./LikertScale";

const Questions = () => {
  const handleValueChange = (value) => {
    console.log("Selected value:", value);
  };

  const handleClick=()=>{
    
  } 
  return (

    <div className="min-h-screen grid m-10 grid-cols-2 gap-24 ">


      
{/* Social Relationships*/}
      <LikertScale
        question="How supported and cared for do you feel by the people around you?"
        scale={[1, 2, 3, 4, 5]}
        name="support"
        onValueChange={handleValueChange}
        labels = {["Not At All ", "Slightly", "Moderately", "Very Much", "Extremely"]}
        
      />
      <LikertScale
        question="How often do you feel isolated or lonely, even in the presence of others?"
        scale={[1, 2, 3, 4, 5]}
        name="loneliness"
        onValueChange={handleValueChange}
        labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}

      />
      <LikertScale
        question="How easy is it for you to maintain meaningful connections with friends or family?"
        scale={[1, 2, 3, 4, 5]}
        name="connections"
        onValueChange={handleValueChange}
        labels = {["Very Difficult", "Difficult", "Neutral", "Easy", "Very Easy"]}
      />

{/* Self-esteem and Self-perception */}


      <LikertScale
        question="How confident are you in your abilities and strengths?"
        scale={[1, 2, 3, 4, 5]}
        name="confidence"
        onValueChange={handleValueChange}
        labels = {["Not Confident", "Slightly Confident", "Neutral", "Confident", "Very Confident"]}
      />
      <LikertScale
        question="How often do you compare yourself to others and feel inadequate?"
        scale={[1, 2, 3, 4, 5]}
        name="comparison"
        onValueChange={handleValueChange}
        labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}
      />
      <LikertScale
        question="How well do you accept yourself, including your flaws?"
        scale={[1, 2, 3, 4, 5]}
        name="selfAcceptance"
        onValueChange={handleValueChange}
        labels = {["Never", "Rarely", "Sometimes", "Often", "Always"]}

      />
      
      
      <button className="w-1/3   mt-10 px-4 py-2  text-white font-alice font-normal  bg-[#33D7FF] rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
      onClick={handleClick}
      >Next</button>
    </div>
  );
};

export default Questions;
