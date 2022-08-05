import axios from "axios"
import { COURSE_FETCH_BEGIN, COURSE_FETCH_ERROR, COURSE_FETCH_SUCCESS } from "./type"

export const fetchCoursesData = () => {
    return (dispatch) => {
        dispatch({type : COURSE_FETCH_BEGIN})
        axios.get(`https://react-template3-default-rtdb.firebaseio.com/myCourses.json`)
        .then((resp)=> {
            // console.log(resp)
            if(resp.data){
            dispatch({type:COURSE_FETCH_SUCCESS, payload : resp.data})
            }
        })
        .catch((err) => dispatch({type:COURSE_FETCH_ERROR}))
    }
}