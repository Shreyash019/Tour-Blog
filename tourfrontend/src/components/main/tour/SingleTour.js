import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const SingleTour = () => {
  const {id} = useParams();
  return (
    <div>SingleTour with:: {id}</div>
  )
}

export default SingleTour