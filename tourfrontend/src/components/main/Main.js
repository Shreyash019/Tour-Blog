import React from 'react'
import './main.css';
import MainBottom from './MainBottom';
import MainTop from './MainTop';

const Main = () => {
  return (
    <div className='main-container'>
      <MainTop/>
      <MainBottom/>
    </div>
  )
}

export default Main