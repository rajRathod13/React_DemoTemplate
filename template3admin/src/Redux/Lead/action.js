import axios from "axios"
import { LEAD_FETCH_BEGIN, LEAD_FETCH_ERROR, LEAD_FETCH_SUCCESS, SINGLELEAD_DELETE, SINGLELEAD_FETCH_ERROR, SINGLELEAD_FETCH_SUCCESS } from "./type"
import {SINGLELEAD_FETCH_BEGIN} from '../Lead/type'

export const allLeads = () => {
    return (dispatch) => {
        dispatch({type:LEAD_FETCH_BEGIN})
        axios.get(`https://react-template3-default-rtdb.firebaseio.com/myAppointment.json`)
        .then ((resp) => {
            if(resp.data){
            dispatch({type:LEAD_FETCH_SUCCESS, payload : resp.data })

            }
        })
        .catch((err)=> dispatch({type:LEAD_FETCH_ERROR}))
    }
}

export const singleLead = (item) => {
    return (dispatch) => {
        dispatch({type : SINGLELEAD_FETCH_BEGIN})
        axios.get(`https://react-template3-default-rtdb.firebaseio.com/myAppointment/${item}.json`)
        .then((resp) => {
            if(resp.status === 200){
                dispatch({type : SINGLELEAD_FETCH_SUCCESS, payload:resp.data})
            }
        })
        .catch((err)=> dispatch({type:SINGLELEAD_FETCH_ERROR}))
    }
}

export const deleteSingleLead = (item) => {
        return (dispatch) => {
            dispatch({type:SINGLELEAD_DELETE})
            axios.delete(`https://react-template3-default-rtdb.firebaseio.com/myAppointment/${item}.json`)
            .then((resp) => {
                    console.log(resp)
                    dispatch(allLeads());
                
            })
            .catch((err) => console.log(err))
        }
}

