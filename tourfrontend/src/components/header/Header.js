import React, {useEffect, useState}  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout, clearErrors} from '../../utils/actions/UserAction';
import './header.css';

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  // const [isLoaded, setLoaded] = useState(true)
  const { error, loading, isAuthenticated } = useSelector(state=> state.user);

  const handleLogout =(e) =>{
    e.preventDefault();
    dispatch(logout()).then(()=>history('/'))
  }

  useEffect(()=>{
    dispatch(clearErrors);
    if(isAuthenticated===false){
      history('/')
    }
  },[dispatch, error, isAuthenticated])


  return (


    <div className='header-container'>
        <div className='header-title'>
            <Link className='header-link' to='/'>Home</Link>
        </div>
        <div className='header-navopt'>
        <Link className='header-link' to='/tours'>Tours</Link>
          {
            isAuthenticated && isAuthenticated ?
            <>
              <Link className='header-link' to='/blogs'>Blogs</Link>
              <Link className='header-link' to='/profile'>Profile</Link>
            </>: <></>
          }
          
          { 
            !isAuthenticated && 
            <>
              <Link className='header-link' to='/login'>SignIn</Link>
              <Link className='header-link' to='/signup'>SignUp</Link> 
            </>
          }

          {
            isAuthenticated && <Link className='header-link' to='/' onClick={handleLogout}>Logout</Link>
          }
        </div>
    </div>
  )
}

export default Header