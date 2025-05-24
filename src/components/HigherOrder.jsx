import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HigherOrder = (title, Component, request) => {
  return function HOC() {
    const [data, setData] = useState([])

    const getData = async()=>{
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${request}`)
            console.log(response.data)
            setData(response.data)
            
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
        <h2>{title}</h2>
        <Component data={data}/>
        </div>
    )
  }
}



export default HigherOrder