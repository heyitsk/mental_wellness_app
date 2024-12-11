import sh3 from "../assets/sh3.jpeg"

const RecommendationCard = ({ title, category,link }) => {
    return (
      <div className="bg-[cover] shadow-md rounded-lg p-4 my-4 hover:bg-slate-500 cursor-pointer "
      style={{ backgroundImage: `url(${sh3})` }}
      onClick={()=>{
        window.open(link)
    }}>
        <h3 className="text-lg  text-gray-800  font-alice font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">Category: {category}</p>
        
      </div>
    );
  };
  
  export default RecommendationCard;
  