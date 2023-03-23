import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

const TourShow = ({id, data}) => {
  const history = useNavigate();
  return (
    <Link className='' to={`/tour/${id}`}>
      <div key={data._id} className='tour-card'>
      <h4>{data.name}</h4>
      <img src={data.images[0].url} alt='Default'/>
      <p>Duration: {data.duration}</p>
      <p>Duration: {data.startDate.split('T')[0]}</p>
      <p>Price: {`₹${data.price}`}</p>
      <button onClick={()=>alert('Booked')}>Add to Book</button>
  </div>
    </Link>

  )
}

export default TourShow