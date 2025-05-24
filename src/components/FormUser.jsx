import React, { useState } from 'react'

const FormUser = () => {
    const [objData, setObjData] = useState({})

    const getInputs = (name, value)=>{

        let data = {[name]: value}

        setObjData({...objData, ...data})

    }

    const submitUser = (event)=>{
        event.preventDefault()
        console.log(objData)
    }
  return (
    <form onSubmit={submitUser}>
        <div className='formuser'>
            <input type="text" name='name' onChange={(e)=> getInputs(e.target.name, e.target.value)}/>
            <input type="number" name='age' onChange={(e)=> getInputs(e.target.name, e.target.value)}/>
            <input type="date" name='date'onChange={(e)=> getInputs(e.target.name, e.target.value)}/>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default FormUser