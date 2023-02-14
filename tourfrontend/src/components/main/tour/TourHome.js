import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/tour.css';
import TourShow from './TourShow';
axios.defaults.withCredentials = true;


const TourHome = () => {

  const [tours, setTours] = useState();
  const [tourLength, setTourLength] = useState();

  const sendRequest = async ()=>{
    const res = await axios.get(`http://localhost:5000/api/v1/tours`, {
    withCredentials: true
    }).catch(err=>console.log(err))
    const data = await res.data;
    console.log(data.tours)
    console.log(data.status)
    console.log(typeof(data))
    return data
  }

  useEffect(()=>{   
    sendRequest().then((data)=> {
        setTourLength(data.Number_of_Tours)
        setTours(data.tours)}
        )
  },[])


  return (
    <>
    <div className='tour-container'>
      <h2>Available Tours</h2>
      <div className='tour-card-container'>
        {tours && tours.map((tour, index) => (
          <>
            <TourShow
              id={tour._id}
              data={tour}
            />
          </>          
        ))}<br/>
      </div>
    </div>

    </>
  )
}

export default TourHome