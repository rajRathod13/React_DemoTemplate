import { COURSE_FETCH_BEGIN, COURSE_FETCH_ERROR, COURSE_FETCH_SUCCESS } from "./type";

const initialState = {
    fullData : {}
}

export const allCoursesReducer = (state = initialState,action) => {
    if(action.type === COURSE_FETCH_BEGIN){
        return {...state}
    }
    if(action.type === COURSE_FETCH_SUCCESS){
        return {...state, fullData : action.payload}
    }
    if(action.type === COURSE_FETCH_ERROR){
        return {...state}
    }
    return state;
}