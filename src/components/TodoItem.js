import React from "react"

function TodoItem(props) { 

    console.log(props)

    return(
    <div className="todoText">
        <input type="checkbox" checked={props.item.completed} id="todo" name ="todo"></input><label for="todo" >{props.item.text}</label>
    </div>)
}

 

export default TodoItem