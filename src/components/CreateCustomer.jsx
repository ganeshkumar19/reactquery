import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../slices/customerSlice'

const CreateCustomer = () => {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

   const addCustomerAction = ()=>{
    if(input){
        dispatch(addCustomer(input))
    }
    setInput("")
   }
  return (
    <div>
        <input value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={addCustomerAction}>Add</button>
    </div>
  )
}

export default CreateCustomer