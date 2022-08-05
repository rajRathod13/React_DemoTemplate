import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Private({children}) {
    const isShow = useSelector((state)=> state.login.isShow)
    if(isShow){
        return <>
            {children}
        </>
    }else {
        return (
            <Navigate to={'/login'}/>
        )
    }
}

export default Private
