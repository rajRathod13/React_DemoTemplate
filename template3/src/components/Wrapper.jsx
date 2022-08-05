import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

function Wrapper({children}) {
  return (
    <>
      <Topbar/>
      <Navbar/>
      {/* <Carousole/> */}
      {children}
      <Footer/>
      <Copyright/>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
    </>
  )
}

export default Wrapper
