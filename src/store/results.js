import * as actionTypes from './actionTypes'

export const getResults=(results)=>{
    return{
        type:actionTypes.GET_RESULTS,
        payload:results
    }
}

export const serachResults=(searchString)=>{
    return{
        type:actionTypes.SEARCH_RESULTS,
        searchString:searchString
    }
}