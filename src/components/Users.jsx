import React from 'react'
import HigherOrder from './HigherOrder'

const Users = ({data}) => {
  return (
    <div>
        {data.map((data, index)=>(
            <h2>{data.name}</h2>
        ))}
    </div>
  )
}

const UserComp = HigherOrder("Users", Users, "users")

export default UserComp
