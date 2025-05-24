import React, { useState } from 'react'

const FormDataUser = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        age: '',
        occupation: '',

    })

    const fields = [
        {name: 'name', label: 'Username', type: 'text', placeholder: 'Enter Your Name'},
        {name: 'age', label: 'Age', type: 'text', placeholder: 'Enter Your Age'},
        {name: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Enter Your Occupation'}
    ]
    const handleChange= (e)=>{
        const {name, value} = e.target;

        setInputValues((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`my name is ${inputValues.name} and my age is ${inputValues.age}`)

    }

  return (
     <form onSubmit={handleSubmit}>
       
        {fields.map((feild, index)=>(
             <React.Fragment key={index}>
             <label className='userlabel'>{feild.label}</label>
             <input type={feild.type} name={feild.name} placeholder={feild.placeholder} value={inputValues[feild.name]} onChange={handleChange} />
             </React.Fragment>
        ))}
        <button>Submit</button>

     </form>
  )
}

export default FormDataUser