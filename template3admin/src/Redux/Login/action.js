import {
  ADMIN_LOGIN_BEGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_SIGNUP_BEGIN,
  ADMIN_SIGNUP_ERROR,
  ADMIN_SIGNUP_SUCCESS,
} from "./type";
import axios from "axios";
export const adminLogin = (value) => {
  return (dispatch) => {
    dispatch({ type: ADMIN_LOGIN_BEGIN });
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtWO8Ef2ebuHIlzOmXSnOmWp22ZX5QQVY `,value
      )
      .then((resp) => {
        if (resp.data.localId) {
          dispatch({ type: ADMIN_LOGIN_SUCCESS });
        }
      })
      .catch((err) => dispatch({ type: ADMIN_LOGIN_ERROR }));
  };
};

export const adminLogout = (navigate) => {
  return (dispatch) => {
    dispatch({type : ADMIN_LOGOUT})
    navigate('/AdminLogin')
  }
}

export const adminsignup = (value,navigate) => {
  return (dispatch) => {
    dispatch({type : ADMIN_SIGNUP_BEGIN})
    axios.post (`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtWO8Ef2ebuHIlzOmXSnOmWp22ZX5QQVY `,value)
    .then ((resp)=> {
      if(resp.data.localId){
        dispatch({type : ADMIN_SIGNUP_SUCCESS})
        navigate('/')
      }
    })
    .catch((err) => dispatch({type : ADMIN_SIGNUP_ERROR}))
  }
}
