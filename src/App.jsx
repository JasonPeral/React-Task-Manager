import { useEffect, useState } from "react"
import "./styles.css"
import { FormToDo } from "./FormToDo"
import { ToDoList } from "./ToDoList"

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS") 
    if(localVal == null){
      return []
    }
    return JSON.parse(localVal)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title){
            setTodos(currentToDos =>{
          return[
            ...currentToDos, {id : crypto.randomUUID(), title, completed: false},
          ]
        })
  }


  function toggTodo(id, completed){
    setTodos(currentToDos => {
      return currentToDos.map(todo => {
        if(todo.id === id){
          return{ ...todo, completed}
        }
        return todo
      })
    })
  }

  function toggleDelete(id){
    setTodos(currentToDos => {
      return currentToDos.filter(todo => todo.id !== id)
    
    })
  }

  return (
    <>
    <FormToDo onBtnPress={addTodo}/>
    <h1> 
      Tasks due
    </h1>
    <ToDoList todos={todos} toggTodo={toggTodo} toggleDelete={toggleDelete}/>
            


  </>
  )
}