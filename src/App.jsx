import Register from "./components/SignUp"
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignUpVerify from "./components/SignUpVerify";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () =>{
    return(
        <>
        <Header/>
        <LandingPage/>
        <Footer/>
        </>
    )
}
export default App;