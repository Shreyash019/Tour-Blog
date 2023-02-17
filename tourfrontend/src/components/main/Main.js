import React, {useEffect} from 'react';
import './main.css';
import MainBottom from './MainBottom';
import MainTop from './MainTop';
import MetaData from '../header/MetaData';


const Main = () => {
  return (
    <div className='main-container'>
      <MetaData title="E-Commerce"/>
      <MainTop/>
      <MainBottom/>
    </div>
  )
}

export default Main