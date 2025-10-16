import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [tododata , getTodoData] =useState([]) 
  
  useEffect(() => {
    getTodo();
  }, []);

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
  //  console.log(response);
   setTodo("");
   getTodoData([])
   getTodo()
    } catch (error) {
      console.log(error.message)
    }
   
  }

  let getTodo = async()=>{
  const response = await fetch(`http://localhost:5000/gettodo`).then(res=>res.json())
  // console.log(response.data[1]._id);
  getTodoData(response.data)
 
  }

  let editTodo = async(element)=>{
try {
  let editValue = prompt()
    let todoId = element.target.id;
    let obj = {
      todo : editValue,
    }
    await fetch(`http://localhost:5000/updatetodo/${todoId}`, {method:"put",
      headers:{
       "content-type" : "application/json"
      },
      body:JSON.stringify(obj)
    })
    getTodo()

} catch (error) {
alert(error.message)  
}




  }

  let deleteTodo = async(element)=>{
  try {
    let todoId = element.target.id;
  await fetch(`http://localhost:5000/deletetodo?id=${todoId}`,{method:"DELETE",
    headers:{"content-type" : "application/json"}
  })
  getTodo()
  } catch (error) {
    alert(error.message)
    
  }
  }

  return (
    <>
      <input type="text" placeholder='Enter todo' onChange={(value) => {
        setTodo(value.target.value)
      }} value={todo} />
      <button onClick={addTodo} >Add</button>
     <ul>
      {tododata.map((value,index)=>{
        return <li key={index}>
          <p>{value.todo}</p>
          <button id={value._id} onClick={editTodo} >Edit</button>
          <button id={value._id} onClick={deleteTodo} >Delete</button>
        </li>
      })}
      </ul> 
 
    </>
  )
}

export default App
