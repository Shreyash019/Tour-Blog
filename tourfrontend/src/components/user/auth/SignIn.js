import React, {useState}  from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { authActions } from '../../../store';
import './sign.css'
import logImg from '../../img/logon.png'

const SignIn = () => {

  const dispatch = useDispatch();

  const history = useNavigate()
  const [user, setUser] = useState({
    email:'',
    password: ''
  })

  const handleOnChange = (e)=>{
    setUser(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>dispatch(authActions.login())).then(()=>history('/profile'));
  }

  const sendRequest = async()=>{
    const res = await axios.post(`http://localhost:5000/api/v1/user/login`, {
      email: user.email,
      password: user.password
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
          <h2>Sign In</h2>
        </div><br/><br/>
        <div className='user-auth-input'>
          <form onSubmit={handleOnSubmit}>
            <input type="email" name='email' value={user.email} onChange={handleOnChange}  placeholder='Email' autoComplete="off"/><br/>
            <input type="password" name='password' value={user.password} onChange={handleOnChange} placeholder='Password' autoComplete="off"/><br/>
            <button>Log In</button><br/><br/><br/>
            <p> <Link to='/password/forgot'>Forgot Password</Link></p>
          </form><br/>
          <p>Don't have a account! <Link to='/signup'>SignUp</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn