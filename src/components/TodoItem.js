import React from "react"

function TodoItem(props) { 

    const completedTaskStyle = {
        textDecoration: "line-through", 
        color: "#d3d3d3",
        fontStyle: "italic"}

    return(
    <div className="todoText">
        <input 
            type="checkbox" 
            checked={props.item.completed} 
            id="todo" 
            name ="todo"
            onChange = {function() {props.handleChange(props.item.id)}}
            >
        </input>
        <label htmlFor="todo" style={props.item.completed ? completedTaskStyle : null}>{props.item.text}</label>
    </div>)
}

export default TodoItem