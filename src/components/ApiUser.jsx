import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiUser = () => {
    const [userData, setUserData] = useState([])
    const [inputValues, setInputValues] = useState('')
    const [showInput, setShowInput] = useState(false)
    const [editingUserId, setEditingUserId] = useState(null); // Track which user is being edited

    const handleShow = (id) => {
      setEditingUserId(id); // Set the ID of the user being edited
    };
  

 
    const postData = async()=>{
        try{
            const response = await axios.post('https://671881377fc4c5ff8f49bd8f.mockapi.io/users',{
                name: 'Tamil',
                age: 22,
                hobbies: ['Driving', 'Cooking', 'Playing Cricket']
            })
            console.log('response', response.data)
            getData()
        } catch(error){

        }
    }

    const getData = async()=>{
        try{
            const response = await axios.get('https://671881377fc4c5ff8f49bd8f.mockapi.io/users')
            setUserData(response.data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const updateData = async(id)=>{
        try{
            const response = await axios.put(`https://671881377fc4c5ff8f49bd8f.mockapi.io/users/${id}`,{
                name: inputValues,
                age: 29,
            })
            console.log('updated sucessfully', response)
            getData()
            setEditingUserId(null)
            setInputValues('')
        } catch(error){

        }
    }

    const deleteData = async(id)=>{
        try{
            const response = await axios.delete(`https://671881377fc4c5ff8f49bd8f.mockapi.io/users/${id}`)
            getData()
        } catch(error){

        }
    }
  
    return (
        <div className="App">
          <button onClick={postData}>Post Data</button>
          {userData.map((user, index) => {
            return (
              <div key={user.id}>
                <h2>{`${user.id}. ${user.name}`}</h2>
                {editingUserId === user.id ? (
                  <>
                    <input
                      type="text"
                      placeholder={user.name} // Using placeholder instead of value
                      value={inputValues} // Keeps the value controlled
                      onChange={(e) => setInputValues(e.target.value)}
                    />
                    <button onClick={() => updateData(user.id)}>Enter</button>
                  </>
                ) : (
                  <button onClick={() => handleShow(user.id)}>Update</button>
                )}
                <button onClick={() => deleteData(user.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      );
    };
    
    export default ApiUser;
    