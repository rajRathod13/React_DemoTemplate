import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../Redux/Login/action'

function Navbar() {
  const isShow = useSelector((state)=> state.login.isShow)
 const dispatch =  useDispatch()
 const navigate = useNavigate()
  function handleLogout() {
    dispatch(logout(navigate))
  }
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
    <h2 className="m-0"><i className="fa fa-car text-primary me-2" />Drivin</h2>
  </Link>
  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <Link to="/" className="nav-item nav-link">Home</Link>
      <Link to="/about" className="nav-item nav-link">About</Link>
      <Link to="/courses" className="nav-item nav-link">Courses</Link>
      <div className="nav-item dropdown">
        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
        <div className="dropdown-menu bg-light m-0">
          <Link to="/features" className="dropdown-item">Features</Link>
          <Link to="/appointment" className="dropdown-item">Appointment</Link>
          <Link to="/team" className="dropdown-item">Our Team</Link>
          <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
          <Link to="/404" className="dropdown-item">404 Page</Link>
        </div>
      </div>
      <Link to="/contact" className="nav-item nav-link">Contact</Link>
      {isShow && <span className="nav-item nav-link" style={{cursor : "pointer"}} onClick={handleLogout}>Logout</span>}
    </div>
  </div>
</nav>

  )
}

export default Navbar
