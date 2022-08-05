import React from 'react'
import Nav from './Nav'
import Topbar from './Topbar'
import Footer from './Footer'
import Copyright from './Copyright'

function Wrapper({children}) {
  return (
    <>
    <Topbar/>
    <Nav/>
    {children}
    <Footer/>
    <Copyright/>
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
    </>
  )
}

export default Wrapper
