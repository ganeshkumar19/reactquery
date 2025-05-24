import React, { useContext } from 'react'
import { UserData } from '../contexts/UserContext'

const Profile = () => {
    const {setName} = useContext(UserData)
  return (
    <button onClick={()=> setName('Uday')}>Change Name</button>
  )
}

export default Profile