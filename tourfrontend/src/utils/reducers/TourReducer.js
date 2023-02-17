import {
    ALL_TOUR_REQUEST, ALL_TOUR_SUCCESS, ALL_TOUR_FAIL, 
    TOUR_DETAILS_REQUEST, TOUR_DETAILS_SUCCESS, TOUR_DETAILS_FAIL, 
    CLEAR_ERRORS} from '../constants/tourConstant'

export const tourReducer = (state={tours: []}, action)=>{
    switch(action.type){
        case ALL_TOUR_REQUEST:
            return {
                loading: true,
                tours:[]
            }
        case ALL_TOUR_SUCCESS:
            return {
                loading: false,
                tours: action.payload.tours,
                tourCount: action.payload.tourCount,
                resultPerPage: action.payload.resultPerPage
            }
        case ALL_TOUR_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const tourDetailsReducer = (state={tour: {}}, action)=>{
    switch(action.type){
        case TOUR_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case TOUR_DETAILS_SUCCESS:
            return {
                loading: false,
                tour: action.payload,
            }
        case TOUR_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}