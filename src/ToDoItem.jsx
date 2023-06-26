
export function ToDoItem({completed, id, title, toggTodo, toggleDelete}){

    return(
        <li>
          <label>
            <input type="checkbox" checked={completed} 
            onChange={e => toggTodo(id, e.target.checked)}/>
            {title}
          </label>
          <button 
          onClick={() => toggleDelete(id)} 
          className="btn btn-danger">delete
          </button>
        </li>
    )
}