import axios from "axios";
import { ADD_COURSE_BEGIN, ADD_COURSE_ERROR, ADD_COURSE_SUCCESS } from "./type";

export const add_course = (value, setFormValue,notify) => {
  return (dispatch) => {
    dispatch({ type: ADD_COURSE_BEGIN });
    axios
      .post(
        `https://react-template3-default-rtdb.firebaseio.com/myCourses.json`,value
      )
      .then((resp) => {
        notify("Course added Successfully!")
        dispatch({ type: ADD_COURSE_SUCCESS });
        setFormValue({
            courseName: "",
            courseDuration: "",
            courseFee: "",
            assetType: "",
            certificateType: "",
            courseDetail: "",
        })
      }
      )
      .catch((err) => dispatch({ type: ADD_COURSE_ERROR }));
  };
};
