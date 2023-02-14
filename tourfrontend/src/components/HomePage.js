import React, {useState, useEffect} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const HomePage = () => {

  const [user, setUser] = useState();
  
  const sendRequest = async ()=>{
    const res = await axios.get(`http://localhost:5000/api/v1/user/profile`, {
      withCredentials: true
    }).catch(err=>console.log(err))
    const data = await res.data;
    return data
  }

  useEffect(()=>{
    sendRequest().then((data)=> setUser(data.user))
  }, [])

  return (
    <>
      {user && <h1>{user.name}</h1>}
    </>
  )
}

export default HomePage;