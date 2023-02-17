import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {signup, clearErrors} from '../../../utils/actions/UserAction';
import logImg from '../../img/logon.png';
import './sign.css'

const SignUp = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(state=>state.user)

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
    dispatch(signup(user.name, user.email, user.password)).then(()=> history('/profile'))
  }

  useEffect(()=>{
    dispatch(clearErrors);
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
      </>
    }</>
  )
}

export default SignUp