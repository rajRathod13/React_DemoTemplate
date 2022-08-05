import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_BEGIN, SIGNUP_ERROR, SIGNUP_SUCCESS } from "./type";

function getLocalStorageData() {
    const isShow = localStorage.getItem("login");
    if (isShow) {
      return Boolean(localStorage.getItem("login"));
    } else {
      return false;
    }
  }

  getLocalStorageData();

const initialState = {
    isShow :  getLocalStorageData(),
}


export const loginReducer = (state = initialState,action) => {
    if(action.type === LOGIN_BEGIN){
        return {...state}
    }
    if(action.type === LOGIN_SUCCESS){
        localStorage.setItem("login", "true");
        return {...state,isShow: true}
    }
    if(action.type === LOGIN_ERROR){
        return {...state}
    }
    if(action.type === LOGOUT){
        localStorage.removeItem("login");
        return {...state, isShow:false}
    }
    return state;
}

export const signupReducer = (state = initialState,action) => {
    if(action.type === SIGNUP_BEGIN){
        return{...state}
    }
    if(action.type === SIGNUP_SUCCESS){
        return{...state}
    }
    if(action.type === SIGNUP_ERROR){
        return {...state}
    }
}