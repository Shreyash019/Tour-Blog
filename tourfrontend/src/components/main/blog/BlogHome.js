import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/blogs.css';
import ShowBlogs from './ShowBlogs';
axios.defaults.withCredentials = true;


const BlogHome = () => {
    const [blogs, setBlogs] = useState();

    const sendRequest = async ()=>{
        const res = await axios.get(`http://localhost:5000/api/v1/blogs`, {
        withCredentials: true
        }).catch(err=>console.log(err))
        const data = await res.data;
        console.log(data)
        console.log(data.status)
        console.log(typeof(data))
        return data
    }

    useEffect(()=>{
        sendRequest().then((data)=> {
            setBlogs(data.blogs)}
            )
    },[])
    
  return (
    <>
    <div className='blog-container'>
      <div className='blog-left-container'>
        <p>Post Blog</p>
        <div className='blog-post-new'>
          <form>
            <input type='text'/><br/>
            <input type='image' alt='Default'/><br/>
            <button>Post</button>
          </form>
        </div>
      </div>
      <div className='blog-right-container'>
        {blogs && blogs.map((blog, index) => (
          <>
          <ShowBlogs 
            id={blog._id}
            blogSummary={blog.blogSummary}
            blogImg={blog.blogImg}
            author={blog.authorName}
          />
          </>
        ))}
      </div>
    </div>
    </>
  )
}

export default BlogHome