import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 
import SignUpVerify from "./SignUpVerify";
import SignUp from "./SignUp"
import Login from "./Login";
import Vector1 from "../assets/Vector 1.png"
import Vector4 from "../assets/Vector 4.png"
import meditation from "../assets/meditation.png"
import Vector2 from "../assets/Vector 2.png"
import Vector3 from "../assets/Vector 3.png"
import p2bg from "../assets/p2bg.png"
import p2bgg from "../assets/p2bgg.png"
import p2ill from "../assets/p2ill.png"
import textbl from "../assets/textbl.png"


import m2 from "../assets/m2.png"
import fwp from "../assets/fwp.png"
import bp from "../assets/bp.png"
import Rectangle8 from "../assets/Rectangle 8.png"
import ForgetPss from "./ForgetPss";
import ForgetPssVerify from "./ForgetPssVerify";
import ResetPss from "./ResetPss";
import Questions from "./Questions";




const LandingPage = () => {
  return (
      <div className="bg-[#D7F1F3] min-h-screen">
          <div>
              
              <div className="relative h-[800px]"> 
                  <img
                      src={Vector4}
                      alt="Vector4"
                      className="absolute top-0 left-0 z-10 w-[630px]"
                  />
                  <img
                      src={Vector1}
                      alt="Vector1"
                      className="absolute top-[20px] left-[0px] z-20 w-[600px]"
                  />
                  <img
                      src={m2}
                      alt="Meditation"
                      className="absolute top-[140px] left-[-18px] z-30 w-[654px]"
                  />
                  <img
                      src={Vector3}
                      alt="Vector3"
                      className="absolute top-[20px] right-0 z-10 w-[415px]"
                  />
                  <img
                      src={Vector2}
                      alt="Vector2"
                      className="absolute top-[28px] right-0 z-20 w-[400px]"
                  />
                  <div className="absolute right-28 top-48 z-30">
      
                    <div className="flex flex-col justify-center items-center">
                                     <div className="p-4 py-10 bg-[#AFFFBB] bg-opacity-35  rounded-2xl shadow-md border-2 z-10 w-96 h-[200px] ">
                                         <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Get Started</h1>
                                         <button
                                        type="button"
                                        className="w-full mt-10 px-4 py-2 text-white font-alice font-normal bg-[#33D7FF] rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                                        >
                                        <Link
                                            to="/registration"
                                            className="w-full h-full flex justify-center items-center"
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            Click
                                        </Link>
                                        </button>

                                    </div>
                    </div>
                    </div>
                    
                
                 
              </div>

              
          </div>
          <div className="relative h-[800px]">
              <img 
              src={textbl}
              className="absolute left-0 z-30 w-[800px] top-[1px] "
              />
                <div className="absolute left-[50px] text-black font-alice font-normal z-40 top-[60px] w-[700px] flex flex-col gap-16 leading-10 justify-center items-center" >
                    <h1 className="text-5xl font-bold">How we can help you ?</h1>
                    <p className="font-alice font-normal text-[25px] leading-10">We provide a holistic solution to enhance your mental wellness. Through guided yoga sessions tailored to your needs and a collection of soothing wellness music, I can help you reduce stress, improve focus, and find balance in your life. Whether you're looking to unwind, boost your mood, or simply take a moment for yourself, SUKOON offers the tools and support to nurture your mind and body, helping you feel more centered and at peace every day.</p>
                </div>
              <img
              src={p2bgg}
              className="absolute right-0 z-10 w-[500px]"
              />
              <img
              src={p2bg}
              className="absolute right-0 z-20 w-[519px] top-[-17px]"
              />
              <img
              src={p2ill}
              className="absolute right-0 z-30 w-[397px] top-[-71px]"
              />

          </div>
          <div className="relative inset-0 flex justify-center items-center h-[900px]">
            <img 
            src={fwp}
            className=" absolute w-[800px]" 
            />
            <div className="absolute left-[36%] text-black font-alice font-normal z-40 top-[331px]" >
                    <p className="text-[25px] leading-5">Detailed <br></br> Analysis</p>
            </div>
            <div className="absolute right-[35%] text-black font-alice font-normal z-40 top-[331px]" >
                    <p className="text-[25px] leading-5">Relaxed <br></br> Journals</p>
            </div>
            <div className="absolute right-[35%] text-black font-alice font-normal z-40 bottom-[346px]" >
                    <p className="text-[25px] leading-5">Yoga <br></br> Sessions</p>
            </div>
            <div className="absolute left-[36%] text-black font-alice font-normal z-40 bottom-[346px]" >
                    <p className="text-[25px] leading-5">Relaxing <br></br> Music</p>
            </div>
            <div className="absolute top-[370px] right-[44%] text-black font-alice font-normal z-40 " >
                    <p className="text-[55px] leading-[50px] text-center">Features <br></br> We <br></br> Provide</p>
            </div>

          </div>
          <div className="relative h-[800px] flex items-end">
            
            <img 
                src={bp} 
                className="absolute bottom-[-56px] w-[926px]" 
                alt="Background" 
            />

            
            <div className="absolute right-[150px] bottom-[190px] text-[34px] font-normal leading-10">
                <div className="flex flex-col justify-center items-center ">
                <p className=" text-black font-alice font-normal  ">
                Chance make changes!!</p>
                <p className=" text-black font-alice font-normal  ">
                Give us a Chance!!
                </p>
                </div>
                
                
            </div>
            </div>

      </div>
  );
};

export default LandingPage;
