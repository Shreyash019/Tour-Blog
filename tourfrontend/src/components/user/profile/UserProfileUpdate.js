import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// import { useDispatch} from 'react-redux';
// import { authActions } from '../../../store';
import demoImg from '../../img/demouser.png';
import './profile.css';


const UserProfileUpdate = () => {

  // const dispatch = useDispatch();
  const history = useNavigate()
  const [user, setUser] = useState({
    name:'',
    address:'',
    contact:''
  });

  const handleOnChange = (e)=>{
    setUser(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    // sendRequest().then(()=>dispatch(authActions.login())).then(()=>history('/profile'));
  }

  // const sendRequest = async ()=>{
  //   const res = await axios.put(`http://localhost:5000/api/v1/user/update/profile`, {
  //     name: user.name,
  //     address: user.address,
  //     contact: user.contact
  //   }, {
  //     withCredentials: true
  //   }).catch(err=>console.log(err))
  //   const data = await res.data;
  //   console.log(data)
  //   return data
  // }

  useEffect(()=>{
    // sendRequest().then((data)=> setUser(data.user))
  }, [])

  const handleOnClickProfile = ()=>{
    history(`/profile/update/${user._id}`)
  }

  const handleOnClickPassword = ()=>{
    history(`/password/update/${user._id}`)
  }
  
  return (
    <>
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
          <h2>.</h2><br/><br/><br/>
          <form onSubmit={handleOnSubmit}>
            <input type="text" name='name' value={user.name} onChange={handleOnChange}  placeholder='Name' autoComplete="off"/><br/>
            <input type="text" name='address' value={user.address} onChange={handleOnChange}  placeholder='Address' autoComplete="off"/><br/>
            <input type="number" name='contact' value={user.contact} onChange={handleOnChange} placeholder='Contact' autoComplete="off"/><br/>
            <button>Update</button>
          </form><br/>
          <p>Contact: 8912034567</p><br/>
          <p>Address: IN</p><br/>
          <p>DOB: 19 Jan</p><br/>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserProfileUpdate