import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {adminLogout} from '../Redux/Login/action'
function Nav() {
  const isLogin = useSelector((state) => state.login.isLogin)
  const leadData = useSelector((state)=> state.lead.leadData)
  console.log(leadData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function admin_Logout(){
    dispatch (adminLogout(navigate))
  }
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
      >
        <h2 className="m-0">
          <i className="fa fa-car text-primary me-2" />
          Drivin
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/addcourse" className="nav-item nav-link">
            Add Courses
          </Link>
          <Link to="/leads" className="nav-item nav-link">
          Leads{isLogin && <span className="badge text-bg-primary">{
            Object.keys(leadData).length
          }</span>}
          </Link>
          {isLogin ?
            <span className="nav-item nav-link " style={{cursor : "pointer"}} onClick={admin_Logout}>Logout</span> : null
           }
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;
