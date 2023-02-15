import React, {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import './sign.css';
import logImg from '../../img/logon.png'

const SignUp = () => {
  const history = useNavigate()

  const [user, setUser] = useState({
    name: '',
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
    // console.log(user)
    // Sending request
    sendRequest().then(()=>history('/profile'));
  }

  const sendRequest = async()=>{
    const res = await axios.post(`http://localhost:5000/api/v1/user/signup`, {
      name: user.name,
      email: user.email,
      password: user.password
    }).catch(err=>console.log(err))
    const data = await res.token;
    console.log(`Data recieved: ${data}`)
    return data
  }

  return (
    <div className='user-auth-container'>
      <div className='sign-left'>
        <img src={logImg} alt='Default'/>
      </div>
      <div className='sign-right'>
        <div className='user-auth-title'>
          <h2>Sign Up</h2>
        </div><br/><br/>
        <div className='user-auth-input'>
          <form onSubmit={handleOnSubmit}>
          <input type="text" name='name' value={user.name} onChange={handleOnChange} placeholder='Name' autoComplete="off"/><br/>
            <input type="email" name='email' value={user.email} onChange={handleOnChange} placeholder='Email' autoComplete="off"/><br/>
            <input type="password" name='password' value={user.password} onChange={handleOnChange} placeholder='Password' autoComplete="off"/><br/>
            <button>Sign Up</button>
            
          </form><br/>
          <p>Already have a account! <Link to='/login'>SignIn</Link></p>
        </div>
      </div>

    </div>
  )
}

export default SignUp