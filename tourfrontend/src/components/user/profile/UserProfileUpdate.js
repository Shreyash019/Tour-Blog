import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './profile.css';
import demoImg from '../../img/demouser.png';
import {useNavigate} from 'react-router-dom';
axios.defaults.withCredentials = true;

const UserProfileUpdate = () => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true)
  const history = useNavigate();
  const sendRequest = async ()=>{
    const res = await axios.get(`http://localhost:5000/api/v1/user/profile`, {
      withCredentials: true
    }).catch(err=>console.log(err))
    const data = await res.data;
    console.log(data)
    setLoading(false)
    return data
  }

  useEffect(()=>{
    sendRequest().then((data)=> setUser(data.user))
  }, [])

  const handleOnClickProfile = ()=>{
    history(`/profile/update/${user._id}`)
  }

  const handleOnClickPassword = ()=>{
    history(`/password/update/${user._id}`)
  }
  
  return (
    <>
    {isLoading?<>Loading...</>: 
    <div className='profile-container'>
      <div className='profile-left'>''
        <div className='profile-image'>
          <img src={demoImg}/>
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
          <p>Contact: 8912034567</p><br/>
          <p>Address: IN</p><br/>
          <p>DOB: 19 Jan</p><br/>
        </div>
      </div>
    </div>
      }
    </>
  )
}

export default UserProfileUpdate