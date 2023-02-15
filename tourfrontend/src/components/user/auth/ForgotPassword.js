import React, {useState}  from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import './sign.css'
import logImg from '../../img/logon.png'

const ForgotPassword = () => {
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
      sendRequest()
        .then((data)=>{
            alert(data.message)
            console.log(data)
            if(!data.success===false){
                history('/login')
            } else{
                history('/signup')
            }
            
        });
    }
  
    const sendRequest = async()=>{
      const res = await axios.post(`http://localhost:5000/api/v1/user/password/forgot`, {
        email: user.email,
      }).catch(err=>console.log(err))
      const data = await res.data;
      console.log(data.message)
      return data
    }
  return (
    <div className='user-auth-container'>
    <div className='sign-left'>
      <img src={logImg} alt='Default'/>
    </div>
    <div className='sign-right'>
      <div className='user-auth-title'>
        <h2>Forgot Password</h2>
      </div><br/><br/>
      <div className='user-auth-input'>
        <form onSubmit={handleOnSubmit}>
          <input type="email" name='email' value={user.email} onChange={handleOnChange}  placeholder='Email' autoComplete="off"/><br/>
          <button>Send</button><br/><br/><br/>
        </form><br/>
        <p>You have a account! <Link to='/login'>SignIn</Link></p><br/>
        <p>Don't have a account! <Link to='/sigup'>SignUp</Link></p>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword