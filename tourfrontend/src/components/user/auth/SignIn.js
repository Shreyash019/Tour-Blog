import React, {useState}  from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { authActions } from '../../../store';
import './sign.css'

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
    // console.log(user)
    sendRequest().then(()=>dispatch(authActions.login())).then(()=>history('/homepage'));
  }

  const sendRequest = async()=>{
    const res = await axios.post(`http://localhost:5000/api/v1/user/login`, {
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
        <h2>Sign In</h2>
      </div><br/><br/>
      <div className='user-auth-input-form'>
        <form onSubmit={handleOnSubmit}>
          <input type="email" name='email' value={user.email} onChange={handleOnChange}  placeholder='Email'/><br/>
          <input type="password" name='password' value={user.password} onChange={handleOnChange} placeholder='Password'/><br/>
          <button>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn