import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './sign.css';

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
    sendRequest().then(()=>history('/homepage'));
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
      <div className='user-auth-title'>
        <h2>Sign Up</h2>
      </div><br/><br/>
      <div className='user-auth-input-form'>
        <form onSubmit={handleOnSubmit}>
        <input type="text" name='name' value={user.name} onChange={handleOnChange} placeholder='Name'/><br/>
          <input type="email" name='email' value={user.email} onChange={handleOnChange} placeholder='Email'/><br/>
          <input type="password" name='password' value={user.password} onChange={handleOnChange} placeholder='Password'/><br/>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp