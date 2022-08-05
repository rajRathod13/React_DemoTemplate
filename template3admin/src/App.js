import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import Home from './Pages/Home'
import About from './Pages/About'
import Leads from './Pages/Leads'
import AddCourse from './Pages/AddCourse'
import Private from './Components/Private';
import AdminLogin from './Pages/AdminLogin';
import AdminSignup from './Pages/AdminSignup';
import ViewLeads from './Pages/ViewLeads';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Wrapper>
      <ToastContainer/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='addcourse' element={<Private><AddCourse/></Private>}/>
        <Route path='leads' element={<Private><Leads/></Private>}/>
        <Route path='AdminLogin' element={<AdminLogin/>}/>
        <Route path='sign_up' element={<AdminSignup/>}/>
        <Route path='leads/:item' element={<Private><ViewLeads/></Private>}/> 
      </Routes>
    </Wrapper>
  );
}

export default App;
