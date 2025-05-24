import React, { useState } from 'react'

const LikeUser = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
  return (
    <div className='btnContainer'>
        <button onClick={()=> setLike((prevCount)=> prevCount+ 1)}>{`likes ${like}`}</button>
        <button onClick={()=> setDislike((prevCount)=> prevCount+ 1)}>{`dislikes ${dislike}`}</button>
    </div>
  )
}

export default LikeUser