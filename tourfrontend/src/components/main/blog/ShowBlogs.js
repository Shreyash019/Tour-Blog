import React from 'react'

const ShowBlogs = ({id, blogSummary, blogImg, author}) => {
  return (
    <div key={id}>
        <p>{blogSummary}</p>
        <p>{blogImg}</p>
        <p>{author}</p>
    </div>
  )
}

export default ShowBlogs