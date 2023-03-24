import React, {useEffect} from 'react';
import MainBottom from './MainBottom';
import MainTop from './MainTop';
import MetaData from '../header/MetaData';
import './styles/main.css';

const Main = () => {
  return (
    <div className='home-container'>
      <MetaData title="Tour&Blog"/>
      <MainTop/>
      <MainBottom/>
    </div>
  )
}

export default Main