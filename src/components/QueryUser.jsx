import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const QueryUser = () => {

    const apicall = async ({queryKey})=>{
        const response = await axios.get(queryKey[1])

        return response.data
    }

  
    const repo1 = useQuery(["userdata", "https://api.github.com/repos/ganeshdhya/hhtweb"], apicall)
    const repo2 = useQuery(["userdata1", "https://api.github.com/repos/ganeshdhya/dhyafarmdhya"], apicall)

    if(repo1.isLoading || repo2.isLoading){
        return <h1>Loading Data</h1>
    }

    if(repo1.error || repo2.error){
        return <h1>An Error Occured</h1>
    }

    console.log(repo1)
  return (
     <>
     <div>
      <h1>{repo1.data.name}</h1>
    </div>
    <div>
      <h1>{repo2.data.name}</h1>
    </div>
    </>
  )
}

export default QueryUser;