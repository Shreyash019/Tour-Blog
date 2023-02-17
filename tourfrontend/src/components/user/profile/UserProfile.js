import React, {useState, useEffect} from 'react';
import './profile.css';
import demoImg from '../../img/demouser.png';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {clearErrors} from '../../../utils/actions/UserAction';

const UserProfile = () => {
    // const [user, setUser] = useState();
    // const [isLoading, setLoading] = useState(true)
    const history = useNavigate();
    const dispatch = useDispatch();
    const { error, user, isAuthenticated } = useSelector(state=> state.user);
  
    useEffect(()=>{
    }, [])
  
    const handleOnClickProfile = ()=>{
      alert(user._id)
      history(`/profile/update/${user._id}`)
    }

    const handleOnClickPassword = ()=>{
      history(`/password/update/${user._id}`)
    }

    useEffect(()=>{
      dispatch(clearErrors);
      if(!isAuthenticated){
        history('/')
      }
    },[dispatch, error, isAuthenticated])
    
    return (
      <>
      {/* {isLoading?<>Loading...</>:  */}
      <div className='profile-container'>
        <div className='profile-left'>''
          <div className='profile-image'>
            <img src={demoImg} alt='Default'/>
          </div>
          <div className='profile-social-link'>
          <button onClick={handleOnClickProfile}>Edit Profile</button> 
          <button onClick={handleOnClickPassword}>Update Password</button><br/><br/>
            <h4>Social Sites</h4>
          </div>
        </div>
        <div className='profile-right'>
          <div className='user-details'>
            <h2>{user.name}</h2><br/><br/><br/>
            <p>Email: {user.email}</p><br/>
            <p>Contact: {user.contact}</p><br/>
            <p>Address: {user.address}</p><br/>
            <p>DOB: 19 Jan</p><br/>
            <p>Blogs: {user.blogs.length}</p><br/>
            <p>Role: {user.role}</p>
          </div>
        </div>
      </div>
        {/* } */}
      </>
    )
}

export default UserProfile