import React, {useState}  from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateBlog = () => {

  const history = useNavigate()
  const [blog, setBlog] = useState({
    summary:'',
  })
  const [blogImg, setBlogImg] = useState('')

  const handleOnChange = (e)=>{
    setBlog(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))

    if (e.target.name === "blogImg") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setBlogImg(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setBlog({ ...blog, [e.target.name]: e.target.value });
    }
  }

  
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>history('/blogs'));
  }

  const sendRequest = async()=>{
    const res = await axios.post(`http://localhost:5000/api/v1/blog/post`, {
      blogSummary: blog.summary,
      blogImg: blogImg
    }).catch(err=>console.log(err))
    const data = await res.data;
    return data
  }

  return (
    <>
      <p>Post Blog</p>
      <div className='blog-post-new'>
        <form onSubmit={handleOnSubmit}>
          <input type='text' name='summary' value={blog.summary} onChange={handleOnChange}  placeholder='Summary' autoComplete="off"/><br/>
          <input type='file' name='blogImg' accept='image/*' onChange={handleOnChange}/><br/>
          {/* <input type="file" id='files' name="files"/> */}
          <button>Post</button>
        </form>
      </div>
    </>
  )
}

export default CreateBlog