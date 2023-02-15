import React, {useState}  from 'react'
import './contact.css';
import logImg from '../img/logon.png'
import {Link, useNavigate} from 'react-router-dom';

const Contact = () => {
  const [data, setData] = useState('')
  const history = useNavigate();

  const sendRequest = async()=>{
    // const res = await axios.post(`http://localhost:5000/api/v1/user/login`, {
    //   email: user.email,
    //   password: user.password
    // }).catch(err=>console.log(err))
    // const data = await res.token;
    setData('yes')
    return data
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    sendRequest().then(()=>alert('Yes')).then(()=>history('/'));
  }
  const handleOnClick = (e)=>{
    e.preventDefault();
    alert('Send Message')
  }
  return (
    <div className='contact-container'>
      <div className='contact-left'>
        <img src={logImg} alt='Default'/>
      </div>
      <div className='contact-right'>
        <div className='contact-title'>
          <h2>Contact</h2>
        </div><br/><br/>
        <div className='contact-input'>
          <form onSubmit={handleOnSubmit}>
            <input type="email" name='email'   placeholder='Email' autoComplete="off"/><br/>
            <textarea type="text" name='msg'  placeholder='Message' autoComplete="off"></textarea><br/>
            <button onClick={handleOnClick}>Send</button><br/><br/><br/>
          </form><br/>
        </div>
      </div>
    </div>
  )
}

export default Contact