import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {useState} from 'react'
import {Navigate} from 'react-router-dom'
import { login } from "../Redux/Login/action";
import {Link} from 'react-router-dom'

function Login() {
  const isShow = useSelector((state) => state.login.isShow)
  const [formValue,setFormValue] = useState({
    email : "",
    password : ""
  })
  function handleChange(e){
    const {name,value} = e.target
    setFormValue({...formValue, [name] : value})
  }
  const dispatch = useDispatch();
  function myLogin(e) {
    e.preventDefault()
    dispatch(login(formValue))
  }
  if(isShow){
    return <Navigate to ='/'/>
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
                <button className="btn btn-primary w-100" onClick={myLogin}>
                  Log in
                </button>
                <div className="d-flex">
                <span>Don't have account</span>
                <Link to='/sign_up'>Sign up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
