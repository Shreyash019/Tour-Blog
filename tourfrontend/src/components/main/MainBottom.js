import React from 'react';
import './styles/mainbottom.css';
import TourShow from '../tour/TourShow';

const MainBottom = () => {
  return (
    <div className='main-bottom-container'>
        <div className=''>
          <h3>Activities</h3>
        </div>
        <div className='tour-box-card'>
          <h3>Tours</h3>
          {/* <TourShow/> */}
        </div>
        <div className=''>
          <h3>This week</h3>
        </div>
        <div className=''>
          <h3></h3>
        </div>
    </div>
  )
}

export default MainBottom