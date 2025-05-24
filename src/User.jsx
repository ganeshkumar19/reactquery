import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

const User = () => {

    const {theme} = useContext(ThemeContext)

    const textStyles = {
        backgroundColor: theme === 'light' ? 'white': 'black',
        color: theme === 'light'? 'black': 'white'
    }
  return (
    <div style={textStyles}>
        <h1>User</h1>
    </div>
  )
}

export default User