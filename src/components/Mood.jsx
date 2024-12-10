import neutral from "../assets/neutral.png"
import sad from "../assets/sad.png"
import smile from "../assets/smile.png"
import angry from "../assets/angry.png"
import happy from "../assets/happy.png"
import crying from "../assets/crying.png"
import axios from "axios"






const Mood = () => {

    const sendMood = async(value)=>{
        try{
            const userI = localStorage.getItem("userId");
            console.log(userI);
            
           const respone =  await axios.post("https://login-signup-page-3z09.onrender.com/user/track", {
                userId:userI,
                moodValue:value,
                
              });
            console.log(respone.data);
            alert(respone.data.message)
            
            
        }
        catch(err){
            console.error(err);
            

        }

    }
    const handleClick = (value) => {
        console.log("mood selected", value);
        sendMood(value)
        

    }
    return(
        <>
        <div className="absolute right-[140px] bg-white rounded-md shadow-lg border-2 p-10 border-black flex flex-col justify-center items-center gap-10">
            <div>
                <p className="font-alice font-normal text-[40px]">How's your MOOD today?</p>
            </div>
            <div className="flex gap-8">
                
                <button name="happy" value="1" onClick={()=>handleClick(1)}>
                <img
                src={happy}
                className="w-20 h-20 cursor-pointer"
                />
                </button>
                
                <button name="smile" value="2" onClick={()=>handleClick(2)}>
                <img
                src={smile}
                className="w-20 h-20 cursor-pointer"
                />
                </button>

                <button name="neutral" value="3" onClick={()=>handleClick(3)}>
                
                <img
                src={neutral}
                className="w-20 h-20 cursor-pointer"
                />
                </button>


                <button name="sad" value="4" onClick={()=>handleClick(4)}>
                
                <img
                src={sad}
                className="w-20 h-20 cursor-pointer"
                />
                </button>

                <button name="crying" value="5" onClick={()=>handleClick(5)}>
                
                <img
                src={crying}
                className="w-20 h-20 cursor-pointer"
                />
                </button>

            </div>

        </div>
        </>
    )
}
export default Mood;