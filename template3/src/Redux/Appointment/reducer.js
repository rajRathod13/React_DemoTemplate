import { APPOINTMENT_POST_BEGIN, APPOINTMENT_POST_ERROR, APPOINTMENT_POST_SUCCESS } from "./type"

const initialState = {
    isLoading : true
}

export const appointmentReducer = (state = initialState, action) => {
    if(action.type === APPOINTMENT_POST_BEGIN){
        return {...state}
    }
    if(action.type === APPOINTMENT_POST_SUCCESS){
        return {...state}
    }
    if(action.type === APPOINTMENT_POST_ERROR){
        return {...state}
    }
    return state
}