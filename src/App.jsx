import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';



const fetchTodoData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const postTodoData = async(newPost)=>{
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  return response.data
}

const App = () => {
  const queryclient = useQueryClient()
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchTodoData,
    refetchOnWindowFocus: false
  });

  const {mutate, isPending, isError, isSuccess} = useMutation({
    mutationFn: postTodoData,
    onSuccess: (newPost)=>{
      queryclient.setQueryData(['posts'], (oldPosts) => [...oldPosts, newPost]);
    }
  })

  if (isLoading || isPending) {
    return <div>Loading...</div>;
  }

  if (error || isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      {isPending && <p>Data is being added</p>}
      <button onClick={()=> mutate({
         userId: 4000,
         id: 400,
         title: "new post",
         body: "this is my new post"
      })}>Add data</button>
      {data.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.id}</h4>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </>
  );
};

export default App;


/*import React from "react";
import { useContext } from "react";
import Container from "./Container";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import ReducerUser from "./components/ReducerUser";
import { QueryClientProvider, QueryClient } from "react-query";
import QueryUser from "./components/QueryUser";


const App = () => {
  const { toggleTheme } = useContext(ThemeContext); // Access context here correctly

  const queryclient = new QueryClient()

  
  return (
    <QueryClientProvider client={queryclient}>
     <QueryUser/>
    </QueryClientProvider>
  );
};

export default App;*/
