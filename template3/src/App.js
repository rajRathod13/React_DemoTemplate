import React from "react";
import Wrapper from "./components/Wrapper";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Private from "./components/Private";
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Features from './pages/Features'
import Appointment from "./pages/Appointment";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
     <Wrapper>
    {/* <Spinner/> */}
    <Routes>
    <Route index element={<Private><Home/></Private>}/>
    <Route path="about" element={<Private><About/></Private>}/>
    <Route path="courses" element={<Private><Courses/></Private>}/>
    <Route path="contact" element={<Private><Contact/></Private>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="sign_up" element={<Signup/>}/>
    <Route path="features" element={<Private><Features/></Private>}/>
    <Route path="appointment" element={<Private><Appointment/></Private>}/>
    <Route path="team" element={<Private><Team/></Private>}/>
    <Route path="testimonial" element={<Private><Testimonial/></Private>}/>
    <Route path="404" element={<Private><NotFound/></Private>}/>
    
    </Routes>
    </Wrapper>
    </>
  );
}

export default App;
