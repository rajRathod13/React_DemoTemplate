import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {adminsignup} from '../Redux/Login/action'

function AdminSignup() {
    const [formValue,setFormValue] = useState({
        email : '',
        password : '',
    })
    function handleChange(e){
      const {name, value} = e.target 
      setFormValue({...formValue, [name] : value})
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function adminSignup(e){
      e.preventDefault()
      dispatch(adminsignup(formValue,navigate)) 
    }
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-5">
              <form action="">
                <label htmlFor="email">E-mail / Username</label>
                <input
                  type="text"
                  id="email"
                  className="form-control mb-3"
                  placeholder="Enter E-mail or Username"
                  name="email"
                  value={formValue.email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control mb-3"
                  placeholder="Enter Password"
                  name='password'
                  value={formValue.password}
                  onChange={handleChange}
                />
                <button className="btn btn-primary w-100" onClick={adminSignup}>
                  Sign Up
                </button>
                <span><p>Already have account</p></span>
                <Link to='/AdminLogin'>Log In</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSignup
