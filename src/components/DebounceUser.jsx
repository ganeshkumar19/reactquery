import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Pincode = 'https://api.postalpincode.in/pincode/'

const DebounceUser = () => {

    const [pin, setPin] = useState('')

    useEffect(()=>{
        const debouncing = setTimeout(async()=>{
            try{
                const res = await axios.get(Pincode + pin)
                console.log('response', res.data[0].PostOffice)
            }catch(error){

            }
        }, 2000)

        return()=>{
            clearTimeout(debouncing)
        }
    }, [pin])
  return (
    <input onChange={(e)=> setPin(e.target.value)} placeholder='Enter Your Pincode'/>
  )
}

export default DebounceUser