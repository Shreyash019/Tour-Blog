import React, {useState}  from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { authActions } from '../../../store';
import './sign.css'
import logImg from '../../img/logon.png';
axios.defaults.withCredentials = true;


const UpdatePassword = () => {

  const dispatch = useDispatch();

  const history = useNavigate()
  const [user, setUser] = useState({
    oldPassword:'',
    newPassword:'',
    confirmPassword:''
  })

  const handleOnChange = (e)=>{
    setUser(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>dispatch(authActions.login())).then(()=>history('/'));
  }

  const sendRequest = async()=>{
    const res = await axios.put(`http://localhost:5000/api/v1/user/password/update`, {
      oldPassword: user.oldPassword,
      newPassword: user.newPassword,
      confirmPassword: user.confirmPassword
    }, {
      withCredentials: true
    }).catch(err=>console.log(err))
    const data = await res.token;
    return data
  }

  return (
    <div className='user-auth-container'>
    <div className='sign-left'>
      <img src={logImg}/>
    </div>
    <div className='sign-right'>
      <div className='user-auth-title'>
        <h3>Password Update</h3>
      </div><br/><br/>
      <div className='user-auth-input'>
        <form onSubmit={handleOnSubmit}>
        <input type="password" name='oldPassword' value={user.oldPassword} onChange={handleOnChange}  placeholder='Old Password' autoComplete="off"/><br/>
          <input type="password" name='newPassword' value={user.newPassword} onChange={handleOnChange}  placeholder='New Password' autoComplete="off"/><br/>
          <input type="password" name='confirmPassword' value={user.confirmPassword} onChange={handleOnChange} placeholder='Confirm Password' autoComplete="off"/><br/>
          <button>Update Password</button><br/><br/><br/>
          <p> <Link to='/password/forgot'>Forgot Password</Link></p>
        </form><br/>
      </div>
    </div>
  </div>
  )
}

export default UpdatePassword