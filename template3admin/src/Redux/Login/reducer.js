import { ADMIN_LOGIN_BEGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT, ADMIN_SIGNUP_BEGIN, ADMIN_SIGNUP_ERROR, ADMIN_SIGNUP_SUCCESS } from "./type"

function getLocalStorageData(){
    // console.log(localStorage)
    const isLogin = localStorage.getItem('login')
    if(isLogin){
        return Boolean(localStorage.getItem('login'))
    }else {
        return false;
    }
}
const initialState = {
    isLogin : getLocalStorageData(),

}

export const adminLoginReducer = (state = initialState,action) => {
    if (action.type === ADMIN_LOGIN_BEGIN){
        return{...state}
    }
    if(action.type === ADMIN_LOGIN_SUCCESS){
        localStorage.setItem('login','true')
        return {...state,isLogin: true}
    }
    if(action.type === ADMIN_LOGIN_ERROR){
        return {...state}
    }
    if(action.type === ADMIN_LOGOUT){
        localStorage.removeItem('login')
        return {...state, isLogin : false}
    }
    if (action.type === ADMIN_SIGNUP_BEGIN){
        return {...state}
    }
    if(action.type === ADMIN_SIGNUP_SUCCESS){
        return {...state}
    }
    if ( action.type === ADMIN_SIGNUP_ERROR){
        return {...state}
    }
    return state
}