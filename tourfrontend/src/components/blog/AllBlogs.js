import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/blogs.css';
import ShowBlogs from './ShowBlogs';
import CreateBlog from './CreateBlog';
axios.defaults.withCredentials = true;


const BlogHome = () => {
    const [isloading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState();

    const sendRequest = async ()=>{
        const res = await axios.get(`http://localhost:5000/api/v1/blogs`, {
        withCredentials: true
        }).catch(err=>console.log(err))
        const data = await res.data;
       console.log(data)
        return data
    }

    useEffect(()=>{
      sendRequest().then((data)=> {
          setBlogs(data.blogs)})
      if(sendRequest.length){
        sendRequest()
      }
    },[])
    
  return (
    <>
    {<div className='blog-container'>
      <div className='blog-left-container'>
        <CreateBlog/>
      </div>
      <div className='blog-right-container'>
        {blogs && blogs.map((blog, index) => (
          <>
          <ShowBlogs
            id={blog._id}
            blog={blog}
          />
          </>
        ))}
      </div>
    </div>}
    </>
  )
}

export default BlogHome