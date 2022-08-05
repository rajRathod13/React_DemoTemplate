import { LEAD_FETCH_BEGIN, LEAD_FETCH_ERROR, LEAD_FETCH_SUCCESS, SINGLELEAD_DELETE, SINGLELEAD_FETCH_BEGIN, SINGLELEAD_FETCH_ERROR, SINGLELEAD_FETCH_SUCCESS } from "./type"

const initialState = {
    leadData : {},
    singleLeadData : {},
    isLoading : false
}

export const leadReducer = (state = initialState,action) => {
    if(action.TYPE === LEAD_FETCH_BEGIN){
        return {...state,isLoading:true}
    }
    if(action.type === LEAD_FETCH_SUCCESS){
        return {...state, leadData : action.payload,isLoading:false}
    }
    if(action.type === LEAD_FETCH_ERROR){
        return {...state,isLoading: false}
    }
    if(action.type ===SINGLELEAD_FETCH_BEGIN){
        return {...state,isLoading:true}
    }
    if(action.type === SINGLELEAD_FETCH_SUCCESS){
        return {...state,singleLeadData: action.payload,isLoading: false}
    }
    if(action.type === SINGLELEAD_FETCH_ERROR){
        return {...state,isLoading:false}
    }
    if(action.type === SINGLELEAD_DELETE){
        return {...state}
    }
    return state
}