const RecommendationCard = ({ title, category,link }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 my-4 hover:bg-slate-500 cursor-pointer"
      onClick={()=>{
        window.open(link)
    }}>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">Category: {category}</p>
        
      </div>
    );
  };
  
  export default RecommendationCard;
  