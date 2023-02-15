import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='main-footer-container'>
        <div className='main-footer-left'>
          <p>.</p>
        </div>
        <div className='main-footer-right'>
          <p><Link to='/about'>About</Link></p>
          <p><Link to='/contact'>Contact</Link></p>
          <p><Link to='/'>Purpose</Link></p>
          <p><a href='https://www.linkedin.com/in/shreyash-51sk998p1' target="_blank">Developer</a></p>
        </div>
      </div>
      <div className='sub-footer-container'>
        <p>@ Copyright 2023 | Shreyash</p>
      </div>
    </div>
  )
}

export default Footer