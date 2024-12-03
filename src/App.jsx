import Register from "./components/SignUp"
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignUpVerify from "./components/SignUpVerify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ForgetPss from "./components/ForgetPss";

const App = () =>{
    return(
        <>
        <Header/>
        {/* <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}>
                <Route path="/login" element={<Login />} />
                <Route path="/forgetpss" element={<ForgetPss />} />

                <Route path="/verify" element={<SignUpVerify />} />
                <Route path="/SignUp" element={<SignUp/>}/>

                </Route>
            </Routes>
        </Router> */}
        <LandingPage/>
        <Footer/>
        </>
    )
}
export default App;