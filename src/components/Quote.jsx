import axios from "axios";
import { QUARTER_PI } from "chart.js/helpers";
import { useEffect, useState } from "react";

const Quote = () =>  {
    const [quote,setQuote] = useState(null)
    const [author,setAuthor] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])
    

    const fetchData = async()=>{
        try{
            const response = await axios.get("https://zenquotes.io/api/today")
            console.log(response);
            const qu = response.data[0].q
            const au = response.data[0].a
            // console.log(a);
            setQuote(qu)
            setAuthor(au)
            
            
            
        }catch(error){
            console.log(error);
            
        }
    }
    return(
        
        <>
        <div className="bg-white absolute right-[140px] top-[345px] rounded-md shadow-lg border-2 p-10 border-black flex flex-col gap-10 justify-center items-center w-[579px]">
            <div>
                <p className="font-normal font-alice text-[40px]">Quote Of the Day</p>
            </div>
            <div>
              <p className="font-normal font-alice italic text-[20px]">{quote}</p>
              <br></br>
              <p className="font-normal font-alice italic text-[15px]"> ~ {author}</p>

            </div>
        </div>
        </>
    )
}
export default Quote;