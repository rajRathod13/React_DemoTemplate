import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'

function Private({children}) {
    const isLogin = useSelector((state) => state.login.isLogin)
  if(isLogin) {
    return children
  }
  else {
    return <Navigate to = {'/AdminLogin'}/>
  }
}

export default Private
