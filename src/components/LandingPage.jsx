import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
import m2 from "../assets/m2.png"
import fwp from "../assets/fwp.png"
import bp from "../assets/bp.png"
import Rectangle8 from "../assets/Rectangle 8.png"
import ForgetPss from "./ForgetPss";




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
                  <Router>
                    <Routes>
                         <Route path="/" element={<Login />} />
                         <Route path="/forgetpss" element={<ForgetPss />} />

                        <Route path="/verify" element={<SignUpVerify />} />
                        <Route path="/SignUp" element={<SignUp/>}/>
                    </Routes>
                 </Router>
              </div>

              
          </div>
          <div className="relative h-[800px]">
              <img 
              src={Rectangle8}
              className="absolute left-0 z-30 w-[800px] top-[1px] "
              />
              {/* <div className="absolute left-[50px] text-black font-alice font-normal z-40 top-[10px] flex flex-col justify-center items-center gap-8" >
                <h1 className="text-5xl font-bold">How we can help you ?</h1>
                 <p className="text-lg">we provide a holistic solution to enhance your mental wellness. Through guided yoga sessions tailored to your needs and a collection of soothing wellness music, I can help you reduce stress, improve focus, and find balance in your life. Whether you're looking to unwind, boost your mood, or simply take a moment for yourself, SUKOON offers the tools and support to nurture your mind and body, helping you feel more centered and at peace every day.</p>
            </div> */}
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
            className=" absolute w-[700px]" 
            />

          </div>
          <div className="relative h-[800px] flex items-end">
            
            <img 
                src={bp} 
                className="absolute bottom-[-56px] w-[926px]" 
                alt="Background" 
            />

            
            <div className="ml-[885px] mb-[203px] bottom-[10px] text-[34px] font-normal leading-10">
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
