import React, { useState } from 'react'

function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func(...args)
        }, delay)
    }
}

const DebounceEx = () => {
    const [text, setText] = useState('')
    const [input, setInput] = useState('')

    const updateValue = debounce((value)=>{
        setText(value)
    }, 1000)

    const handleInput = (value)=>{
        setInput(value)
        updateValue(value)
    }
  
  return (
    <div>
        <input type='text' value={input} onChange={(e)=> handleInput(e.target.value)}/>
        <p>Typed Text: {text}</p> {/* Debounced display */}
    </div>
  )
}

export default DebounceEx