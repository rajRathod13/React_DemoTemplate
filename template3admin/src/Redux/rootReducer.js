import { combineReducers } from "redux";
import { addCourseReducer } from "./AddCourse/reducer";
import { adminLoginReducer } from "./Login/reducer";
import { leadReducer } from "./Lead/reducer";

export const rootReducer = combineReducers({
    login : adminLoginReducer,
    add_course : addCourseReducer,
    lead : leadReducer
})