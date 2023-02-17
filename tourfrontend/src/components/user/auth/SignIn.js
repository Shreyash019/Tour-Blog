import React, {useEffect, useState}  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {login, clearErrors} from '../../../utils/actions/UserAction';
import logImg from '../../img/logon.png';
import './sign.css'


const SignIn = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } =  useSelector((state)=> state.user)
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword))
  }
  useEffect(()=>{
    dispatch(clearErrors);
    if(isAuthenticated){
      history('/profile')
    }
  },[dispatch, error, isAuthenticated])

  return (
    <>{ loading ? 'Loading...':    
      <>
        <div className='user-auth-container'>
          <div className='sign-left'>
            <img src={logImg} alt='Default'/>
          </div>
          <div className='sign-right'>
            <div className='user-auth-title'>
              <h2>Sign In</h2>
            </div><br/><br/>
            <div className='user-auth-input'>
              <form onSubmit={handleOnSubmit}>
                <input type="email" name='email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}  placeholder='Email' autoComplete="off"/><br/>
                <input type="password" name='password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder='Password' autoComplete="off"/><br/>
                <button>Log In</button><br/><br/><br/>
                <p> <Link to='/password/forgot'>Forgot Password</Link></p>
              </form><br/>
              <p>Don't have a account! <Link to='/signup'>SignUp</Link></p>
            </div>
          </div>
        </div>
      </>
    }</>
  )
}

export default SignIn