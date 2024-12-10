import neutral from "../assets/neutral.png"
import sad from "../assets/sad.png"
import smile from "../assets/smile.png"





const Mood = () => {
    return(
        <>
        <div className="absolute right-[140px] bg-white rounded-md shadow-lg border-2 p-10 border-black flex flex-col justify-center items-center gap-10">
            <div>
                <p className="font-alice font-normal text-[40px]">How's your MOOD today?</p>
            </div>
            <div className="flex gap-32">
                <img
                src={smile}
                className="w-20 h-20"
                />
                <img
                src={neutral}
                className="w-20 h-20"
                />
                <img
                src={sad}
                className="w-20 h-20"
                />

            </div>

        </div>
        </>
    )
}
export default Mood;