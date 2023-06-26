import { ToDoItem } from "./ToDoItem"

export function ToDoList({todos, toggTodo, toggleDelete}){

    return(
      
        <ul className="list">
        {todos.length === 0 && "0 To-Dos"}
        {todos.map(x => {
                return(
           < ToDoItem {...x} key={x.id} toggleDelete={toggleDelete} toggTodo={toggTodo}/>
        )
        })}
      </ul>
    )
}