import { ADD_COURSE_BEGIN, ADD_COURSE_ERROR, ADD_COURSE_SUCCESS } from "./type"

const initialState = {
    fullCourseData : {},
}
export const addCourseReducer = (state = initialState,action) => {
    if(action.type === ADD_COURSE_BEGIN){
        return {...state}
    }
    if(action.type === ADD_COURSE_SUCCESS){
        return {...state}
    }
    if(action.type === ADD_COURSE_ERROR){
        return {...state}
    }
    return state
}