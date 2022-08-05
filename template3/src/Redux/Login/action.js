import axios from "axios"
import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_BEGIN, SIGNUP_ERROR, SIGNUP_SUCCESS } from "./type"
export const login = (value) => {
    return (dispatch) => {
        dispatch({type : LOGIN_BEGIN})
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtWO8Ef2ebuHIlzOmXSnOmWp22ZX5QQVY `,value)
        .then((resp)=> {
            console.log(resp)
            if(resp.data.localId){
                dispatch({type:LOGIN_SUCCESS})
            }
        })
        .catch((err)=>{ dispatch({type:LOGIN_ERROR})
        console.log(err)})
    }
}

export const logout = (navigate) => {
    return (dispatch) => {
        dispatch({type : LOGOUT})
        navigate('/login')
    }
}

export const signup = (value,navigate) => {
    return (dispatch) => {
        dispatch({type:SIGNUP_BEGIN})
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtWO8Ef2ebuHIlzOmXSnOmWp22ZX5QQVY `,value)
        .then((resp) => {
            if(resp.data.localId){
            dispatch({type : SIGNUP_SUCCESS})
                navigate('/login')
            }
        })
        .catch((err)=> {dispatch({type : SIGNUP_ERROR})
    console.log(err)})
    }
}