import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const CreateOrder = () => {

  const {id} = useParams();
  return (
    <div>CreateOrder: {id}</div>
  )
}

export default CreateOrder