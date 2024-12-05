import logo from "../assets/logo.png"
import conatus from "../assets/conatus.png"


const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-[#562C3C] text-white">
      
      <div className="flex flex-col items-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-16 h-16 object-contain" 
        />
        <p className="  text-white font-alice font-normal text-[28px]">SUKOON</p>
      </div>

      {/* <div className="flex items-center "> */}
      <div className="flex gap-8">
        <a href="#about" className="hover:text-gray-400 font-alice font-normal text-[20px] underline">
          About Us
        </a>
        <a href="#help" className="hover:text-gray-400 font-alice font-normal text-[20px] underline">
          Help
        </a>
        <a href="#contact" className="hover:text-gray-400 font-alice font-normal text-[20px] underline">
          Contact
        </a>
        <a href="#support" className="hover:text-gray-400 font-alice font-normal text-[20px] underline">
          Support
        </a>
      </div>

      
      {/* <div className="flex-shrink-0 ml-32">
        <img 
          src={conatus} 
          alt="Footer Illustration" 
          className="w-24 h-24 object-cover" 
        />
      </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
