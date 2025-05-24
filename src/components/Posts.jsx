import React from 'react'
import HigherOrder from './HigherOrder'

const Posts = ({data}) => {
  return (
    <div>
        {data.map((data, index)=>(
            <h2>{data.title}</h2>
        ))}
    </div>
  )
}

const PostComp = HigherOrder("Posts", Posts, "posts")

export default PostComp
