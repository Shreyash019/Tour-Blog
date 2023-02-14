import React from 'react'

const ShowBlogs = ({id, blogSummary, blogImg, author}) => {

  const handleOnCLick = ()=>{
    alert(`You clicked ${id}`)
  }
  
  return (
    <div key={id} className='blog-card' onClick={handleOnCLick}>
      <h4>{author}</h4>
      <p>{blogSummary}</p>
      <img src={blogImg}/>
      <div>
        <button>Like</button>
        <button>Dislike</button>
        <span>Comment</span>
      </div>
    </div>
  )
}

export default ShowBlogs