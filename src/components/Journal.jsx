import paper from "../assets/paper.jpg"

const Journal = () => {
    return(
        <>
        <p className="absolute left-[200px]  font-alice font-semibold text-[30px]">Start your journal</p>
        <div className="absolute left-[200px] top-[48px] bg-white p-4 rounded-lg shadow-lg w-[80%] h-[700px]">
            
            <form className="h-full">
                <textarea className="w-[100%] h-full border-2 border-black rounded-lg p-4 text-[25px] font-alice leading-10" ></textarea>
            </form>
        </div>
        </>
    )
}
export default Journal;