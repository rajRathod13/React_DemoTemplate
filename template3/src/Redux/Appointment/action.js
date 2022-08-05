import axios from "axios"
import { APPOINTMENT_POST_BEGIN, APPOINTMENT_POST_ERROR, APPOINTMENT_POST_SUCCESS } from "./type"

export const appointment = (value,navigate,setFormValue) => {
    return (dispatch) => {
        dispatch({type: APPOINTMENT_POST_BEGIN})
        axios.post(`https://react-template3-default-rtdb.firebaseio.com/myAppointment.json`,value)
        .then((resp)=> {
            console.log(resp)
            dispatch({type: APPOINTMENT_POST_SUCCESS})
            setFormValue ({
                personName: '',
    phoneNo: '',
    email: '',
    courseType: '',
    personAge: " ",
    message: ""
            })
            navigate('/')

        })
        .catch((err)=> dispatch({type: APPOINTMENT_POST_ERROR}))
    }
} 