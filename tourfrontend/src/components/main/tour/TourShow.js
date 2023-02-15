import React from 'react'
import {useNavigate} from 'react-router-dom';

const TourShow = ({id, data}) => {
  const history = useNavigate();
  const handleOnClick = ()=>{
    history(`/tour/${id}`)
    alert(`You clicked ${id}`)
  }

  return (
  <div key={data._id} className='tour-card' onClick={handleOnClick}>
      <h4>{data.name}</h4>
      <img src={data.image} alt='Default'/>
      <p>Summary: {data.description}</p>
      <p>Price: {data.price}</p>
      <p>Start Date: </p>
      <p>End Date: </p>
      <button onClick={()=>alert('Booked')}>Add to Book</button>
  </div>
  )
}

export default TourShow