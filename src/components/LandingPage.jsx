import SignUp from "./SignUp"
import Vector1 from "../assets/Vector 1.png"
import Vector4 from "../assets/Vector 4.png"
import meditation from "../assets/meditation.png"
import Vector2 from "../assets/Vector 2.png"
import Vector3 from "../assets/Vector 3.png"
import Login from "./Login"




const LandingPage = () => {
    return (
        <div className="bg-[#D7F1F3] min-h-screen">
          {/* Main Content */}
          <div>
            {/* Header Section */}
            <div className="text-gray-800 py-4 px-8">
              <div className="flex justify-between items-center">
                {/* Left Section */}
                <div className="p-3 text-center">
                  <h1 className="text-6xl font-normal font-alice">WELCOME TO SUKOON</h1>
                  <p className="text-2xl font-normal font-alice">Blessings to your Mind</p>
                </div>
      
                {/* Right Navigation Links */}
                <div className="flex space-x-6 text-lg font-medium">
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">Home</a>
                </div>
              </div>
            </div>
      
            {/* Image Section with Layering */}
            <div className="relative">
              {/* Vector4 (Background) */}
              <img
                src={Vector4}
                alt="Vector4"
                className="absolute top-0 left-0 z-10 w-[630px]" // Set a specific size for Vector4
              />
              {/* Vector1 */}
              <img
                src={Vector1}
                alt="Vector1"
                className="absolute top-[20px] left-[0px] z-20 w-[600px]" // Set a smaller size for Vector1 and position it slightly off
              />
              {/* Meditation Image */}
              <img
                src={meditation}
                className="absolute top-[140px] left-[-64px] z-30 w-[654px]"
              />
              {/* Vector3 */}
              <img
                src={Vector3}
                className="absolute top-[20px] right-0 z-10 w-[415px]"
              />
              {/* Vector2 */}
              <img
                src={Vector2}
                className="absolute top-[28px] right-0 z-20 w-[400px]"
              />
                <SignUp/>

              
            </div>
          </div>
      
          
        </div>
      );
      
}
export default LandingPage;