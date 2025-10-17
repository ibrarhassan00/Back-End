import { useState, useEffect } from 'react'
// import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [tododata, getTodoData] = useState([])

  useEffect(() => {
    getTodo();
  }, []);

  let addTodo = async () => {
    try {
      const body = {
        todo: todo
      }
      const response = await fetch("http://localhost:5000/createtodo", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
      //  console.log(response);
      setTodo("");
      getTodoData([])
      getTodo()
    } catch (error) {
      console.log(error.message)
    }

  }

  let getTodo = async () => {
    const response = await fetch(`http://localhost:5000/gettodo`).then(res => res.json())
    // console.log(response.data[1]._id);
    getTodoData(response.data)

  }

  let editTodo = async (element) => {
    try {
      let editValue = prompt()
      let todoId = element.target.id;
      let obj = {
        todo: editValue,
      }
      await fetch(`http://localhost:5000/updatetodo/${todoId}`, {
        method: "put",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      getTodo()

    } catch (error) {
      alert(error.message)
    }




  }

  let deleteTodo = async (element) => {
    try {
      let todoId = element.target.id;
      await fetch(`http://localhost:5000/deletetodo?id=${todoId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
      getTodo()
    } catch (error) {
      alert(error.message)

    }
  }

  return (
    // <>
    //   <input type="text" placeholder='Enter todo' onChange={(value) => {
    //     setTodo(value.target.value)
    //   }} value={todo} />
    //   <button onClick={addTodo} >Add</button>
    //  <ul>
    //   {tododata.map((value,index)=>{
    //     return <li key={index}>
    //       <p>{value.todo}</p>
    //       <button id={value._id} onClick={editTodo} >Edit</button>
    //       <button id={value._id} onClick={deleteTodo} >Delete</button>
    //     </li>
    //   })}
    //   </ul> 

    // </>
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Todo App</h1>

        <div className="flex gap-3 w-full max-w-md mb-6">
          <input
            type="text"
            placeholder="Enter todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Add
          </button>
        </div>

        <ul className="w-full max-w-md space-y-3">
          {tododata.map((value, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white shadow-md rounded-lg px-4 py-3 border border-gray-200"
            >
              <p className="text-gray-800 font-medium">{value.todo}</p>
              <div className="flex gap-2">
                <button
                  id={value._id}
                  onClick={editTodo}
                  className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-all duration-200"
                >
                  Edit
                </button>
                <button
                  id={value._id}
                  onClick={deleteTodo}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default App
