import axios from 'axios';
import {
    ALL_TOUR_REQUEST, ALL_TOUR_SUCCESS, ALL_TOUR_FAIL, CLEAR_ERRORS,
    TOUR_DETAILS_REQUEST, TOUR_DETAILS_SUCCESS, TOUR_DETAILS_FAIL, 
    } from '../constants/tourConstant'


export const getTours = (currentPage=1)=> async(dispatch)=>{
    try{
        dispatch({
            type: ALL_TOUR_REQUEST
        });
        const {data} = await axios.get(`http://localhost:5000/api/v1/tours/?page=${currentPage}`);
        dispatch({
            type:ALL_TOUR_SUCCESS,
            payload: data,
        })
    } catch(error){
        dispatch({
            type: ALL_TOUR_FAIL,
            payload: error.response.data.message
        })
    }
}

export const gettourDetails = (id) =>(async(dispatch)=>{
    try{
        dispatch({
            type: TOUR_DETAILS_REQUEST
        });
        const {data} = await axios.get(`http://localhost:5000/api/v1/tour/${id}`);
        dispatch({
            type: TOUR_DETAILS_SUCCESS,
            payload: data,
        })
    } catch(error){
        dispatch({
            type: TOUR_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
})


// Clearing Error
export const clearErrors = async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}