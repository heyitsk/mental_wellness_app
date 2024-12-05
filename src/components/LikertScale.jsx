import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const LikertScale = ({
  question,
  scale,
  name,
  onValueChange,
  labels
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  

  const handleSelection = (value) => {
    setSelectedValue(value);
    if (onValueChange) onValueChange(value);
    // console.log("Value seclected",selectedValue);
  };

  return (
    
    <div className="flex flex-col items-center gap-7 w-[600px] rounded-2xl shadow-md  border-2 p-10">
      
      <p className="text-lg font-medium text-gray-700">{question}</p>

      
      <div className="relative flex items-center w-full justify-between ">
        
        <div className="absolute w-full h-0.5 z-[10] bg-gray-300 "></div>
        
        {scale.map((value, index) => (
          <button
            key={value}
            className={`z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center 
              ${
                selectedValue === value
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              } 
              hover:bg-gray-200 transition duration-300 ${
                index !== 0 ? "ml-4" : ""
              }`}
            onClick={() => handleSelection(value)}
          >
          </button>
        ))}
      </div>

      {/* Labels Below the Buttons */}
      <div className="flex justify-between w-full  text-sm text-gray-600">
        {labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
        
    </div>
  );
};

export default LikertScale;
