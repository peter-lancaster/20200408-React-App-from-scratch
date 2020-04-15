import React from "react"
import handleCheckBoxClick from "./handleCheckBoxClick"

function TodoItem(props) { 

    return(
    <div className="todoText">
        <input 
            type="checkbox" 
            checked={props.item.completed} 
            id="todo" 
            name ="todo"
            onChange = {handleCheckBoxClick}
            >
        </input>
        <label htmlFor="todo" >{props.item.text}</label>
    </div>)
}

export default TodoItem