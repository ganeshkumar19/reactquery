import React, { useContext } from 'react'
import { UserData } from '../contexts/UserContext'

const Home = () => {
    const {name} = useContext(UserData)
  return (
    <div>my name is {name}</div>
  )
}

export default Home