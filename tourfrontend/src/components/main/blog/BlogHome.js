import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShowBlogs from './ShowBlogs';
axios.defaults.withCredentials = true;

const BlogHome = () => {
    const [blogs, setBlogs] = useState();
    const [bloglength, setLength] = useState();

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
            setLength(data.totalBlogs)
            setBlogs(data.blogs)}
            )
    },[])
    
  return (
    <>
    <h1>Blogs:</h1>
    <div>
      {blogs &&
        blogs.map((blog, index) => (
            <>
                <ShowBlogs
                    id={blog._id}
                    blogSummary={blog.blogSummary}
                    blogImg={blog.blogImg}
                    author={blog.authorName}
                />
            </>
        ))}
        <p>{bloglength}</p>
    </div>
    </>
  )
}

export default BlogHome