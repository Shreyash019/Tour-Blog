import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const AllOrders = () => {

  const {id} = useParams();
  return (
    <div>CreateOrder: {id}</div>
  )
}

export default AllOrders