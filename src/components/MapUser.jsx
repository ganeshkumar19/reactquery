import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MapUser = () => {

    const [users, setUsers] = useState([])
    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9, 10])

    useEffect(()=>{
        const fetchUserInfo = async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('responsedata', response.data)
            setUsers(response.data)
        }
        fetchUserInfo()
    }, [])

    const mappedData = ()=>{
        let mappedArray = numbers.map((number)=> {
            return number * number
        }).filter((fn)=> fn <=50)
        
        setNumbers(mappedArray)
    }

    const filteredData = ()=>{
        let filterData = users.filter((user)=>{
            return user.name.startsWith('L')
       })
       setUsers(filterData)
    }
  return (
    <>
    {/*{users.map((user)=>(
        <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
        </div>
    ))}*/}
    {numbers.map((number)=>(
        <div key={number}>
            {number}
        </div>
    ))}
    <button onClick={mappedData}>add</button>
    <button onClick={filteredData}>filter</button>
    </>
  )
}

export default MapUser