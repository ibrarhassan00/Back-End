import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [tododata , getTodoData] =useState([]) 
  
  let addTodo = async()=>{
    try {
   const body ={
    todo:todo
   }
   const response = await fetch("http://localhost:5000/createtodo",{method:"POST",
    headers:{
      "content-type" : "application/json"
    },
    body:JSON.stringify(body)
   })
   .then(res=>res.json())
   console.log(response);
   setTodo("");
   getTodoData([])
   getTodo()
    } catch (error) {
      console.log(error.message)
    }
   
  }

  let getTodo = async()=>{
  const response = await fetch(`http://localhost:5000/gettodo`).then(res=>res.json())
  console.log(response.data);
  getTodoData(response.data)
 
  }

  return (
    <>
      <input type="text" placeholder='Enter todo' onChange={(value) => {
        setTodo(value.target.value)
      }} />
      <button onClick={addTodo} >Add</button>
     <div>
      {tododata.map((value,index)=>{
        return <h1 key={index}>{value.todo}</h1>
      })}
      </div> 
 
    </>
  )
}

export default App
