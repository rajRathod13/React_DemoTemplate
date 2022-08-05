import { combineReducers } from "redux";
import { allCoursesReducer } from "./Courses/reducer";
import { loginReducer } from "./Login/reducer";
import {appointmentReducer} from './Appointment/reducer'

export const rootReducer = combineReducers({
    login : loginReducer,
    allCourses : allCoursesReducer,
    appointment : appointmentReducer
})