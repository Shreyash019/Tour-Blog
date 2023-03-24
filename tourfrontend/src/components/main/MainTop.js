import React from 'react';
import './styles/maintop.css';
import backimg from '../img/bg2.png'
import sbgimg from '../img/sbg2.png'

const MainTop = () => {
  return (
    <div className='main-top-container'>
        <div className='top-content'>
          <div className='top-content-left'>
            <h4>Welcome to our Tour & Blog website</h4>
          </div>
          <div className='top-content-right'>
            {/* <img src={backimg} alt='back_image'/> */}
          </div>
        </div>
    </div>
  )
}

export default MainTop