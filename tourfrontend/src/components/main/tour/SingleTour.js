import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {gettourDetails} from '../../../utils/actions/tourActions';
import './style/singleTour.css';

axios.defaults.withCredentials = true;

const SingleTour = () => {
  const dispatch = useDispatch();
  const [isLoaded, setLoaded] = useState(true)
  const { errors, tour} = useSelector((state)=> state.tour)
  // const history = useNavigate();
  const {id} = useParams();


  useEffect(()=>{   
    dispatch(gettourDetails(id)).then(()=>setLoaded(false))
  }, [dispatch, id, errors])

 return (
  <>
    {isLoaded ? 'Loading...': 
      <>
      <div className='single-tour-container'>
        <div className='single-tour-container'>
          <div className='single-tour-left-details'>
            <img className='single-tour-left-details-img' src={tour.tour.images[0].url}/>
          </div>
          <div className='single-tour-right-details'>
            <h3 className='single-tour-title'>{tour.tour.name}</h3>
            <p>Duration: {tour.tour.duration}</p>
            <p>Summary: {tour.tour.description}</p>
            <p>Group Size: {tour.tour.maxGroup}</p>
            <p> Start Date: {tour.tour.startDate.split('T')[0]}</p>
            <p>End Date: {tour.tour.endDate.split('T')[0]}</p>
            <p>Total Reviews: {tour.tour.noOfReviews}</p> 
            <button>Book</button>
          </div>
          <div className='single-tour-reviews-container'>
          <p>.</p>
          <h2>Reviews</h2>
          <hr/><br/>
          <div className='single-tour-reviews'>
            <p>0</p>
          </div><br/><br/><br/><br/>
        </div>
        </div><br/>

      </div>
        

      </>
    }
  </>

  )
}

export default SingleTour