import React from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authActions} from '../../store'
import axios from 'axios';
import './header.css';
axios.defaults.withCredentials = true;

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=> state.isLoggedIn);

  const handleLogout =() =>{
    sendLogoutRequest().then(()=> dispatch(authActions.logout()))
  }

  const sendLogoutRequest = async()=>{
    const res = await axios.get(`http://localhost:5000/api/v1/user/logout`, null, {
      withCredentials: true
    })
    if(res.status===200){
      return res
    }
    return new Error('Unable to logout');
  }

  return (
    <div className='header-container'>
        <div className='header-title'>
            <Link to='/'>Home</Link>
        </div>
        <div className='header-navopt'>
          {
            isLoggedIn && 
            <>
              <Link to='/tours'>Tours</Link>
              <Link to='/blogs'>Blogs</Link>
            </>
          }
          <Link to='/profile'>Profile</Link>
          { 
            !isLoggedIn && 
            <>
              <Link to='/login'>SignIn</Link>
              <Link to='/signup'>SignUp</Link> 
            </>
          }

          {
            isLoggedIn && <Link to='/' onClick={handleLogout}>Logout</Link>
          }
        </div>
    </div>
  )
}

export default Header