import Register from "./components/SignUp"
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
// import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import SignUp from "./components/SignUp";
import SignUpVerify from "./components/SignUpVerify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ForgetPss from "./components/ForgetPss";
import Questions from "./components/Questions";
import Home from "./components/Home";
import Registration from "./components/Registration";
import { Navigate } from "react-router-dom";
import ForgetPssVerify from "./components/ForgetPssVerify";
import ResetPss from "./components/ResetPss";
const App = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/registration",
          element:<Registration/>,
          children: [
            {
                path: "", 
                element: <Navigate to="login" />
              },
            {
              path: "login", 
              element: <Login />
            },
            {
              path: "signup", 
              element: <SignUp />
            },
            {
                path: "signup-verify", 
                element: <SignUpVerify />
            },
            {
              path: "forget-password", 
              element: <ForgetPss />
            },
            {
                path: "forget-passwordverify", 
                element: <ForgetPssVerify />
            },
            {
                path: "resetpss", 
                element: <ResetPss />
            },
          ]
        },
        {
            path:"/questions",
            element: <Questions/>
        },
        {
            path:"/home",
            element:<Home/>
        }
        
      ],
    //   errorElement:<Error/>
    }
  ])
  

export default App;