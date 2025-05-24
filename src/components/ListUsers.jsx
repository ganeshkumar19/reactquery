import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListUsers = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async()=>{
       try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
        console.log(response.data)
       }catch(error){
        console.log(error)
       }

    }

    const filteredData = ()=>{
        let filterData = users.filter((user)=>{
            return user.name.startsWith('L')
       })
       setUsers(filterData)
    }

    useEffect(()=>{
        fetchUsers()
    }, [])

    const sortUsersAlphabetically = () => {
        const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sortedUsers);
      };
  return (
    <div>
        <h2>ListUsers</h2>
        {users.map((user, index)=>(
            <p key={index}>{user.name}</p>
        ))}
        <button onClick={filteredData}>Filter data</button>
        <button onClick={sortUsersAlphabetically}>Sort Data</button>
    </div>
  )
}

export default ListUsers