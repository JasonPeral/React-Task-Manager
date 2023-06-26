import { useState } from "react"


export function FormToDo({onBtnPress}){ 

    const [newItem, setNewItem] = useState("")
    // const [todos, setTodos] = useState([])


    function handleSubmit(e){
        //Prevents the page from refreshing when adding a todo item
        e.preventDefault() 

        if(newItem === "") return 
    
        onBtnPress(newItem)
        setNewItem("")
      }


    return( 
      
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row"> 
          <label htmlFor="item">New to-do</label>
          <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
    )
}