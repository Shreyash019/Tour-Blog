import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ShowBlogs = ({ id, blog}) => {
  const [name, setName] = useState();
  const handleOnCLick = ()=>{
    alert(`You clicked ${id}`)
  }
  useEffect(()=>{
    const sendRequest = async ()=>{
      const res = await axios.get(`http://localhost:5000/api/v1/blog/name/${blog.author}`, {
        withCredentials: true
        }).catch(err=>console.log(err))
      const data = await res;
      console.log(data)
      return data
  } 
  sendRequest()
},[])
  
  return (
    <div key={id} className='blog-card' onClick={handleOnCLick}>
      <h4>{blog.name}</h4>
      <p>{blog.blogSummary}</p>
      <img src={blog.blogImg.url} alt='Default'/>
      <div>
        <button>Like({blog.likes.length})</button>
        <button>Dislike({blog.dislikes.length})</button>
        <span>Comment</span>
      </div>
    </div>
  )
}

export default ShowBlogs