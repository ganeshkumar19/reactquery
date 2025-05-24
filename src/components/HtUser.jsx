import React from 'react'

const HtUser = () => {
    let data = `<h1 style= 'color: green'>This is ganeshkumar</h1>`
  return (
    <div dangerouslySetInnerHTML={{__html: data}}></div>
  )
}

export default HtUser