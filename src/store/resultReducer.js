import * as actionTypes from './actionTypes'
import {studentsInfo} from '../constants/StudentsInfo'

const initialState = {
    results: studentsInfo,
    searchResults:[]
}

 const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESULTS:
            return {
                ...state,
            results: action.payload,
            searchResults:action.payload
            }
        case actionTypes.SEARCH_RESULTS:
            return {
                ...state,
                results: state.searchResults.filter((student) => student.studentName.toLocaleLowerCase().indexOf(action.searchString.toLocaleLowerCase()) > -1)
            }
            default:
                return state;

    }
}

export default resultReducer