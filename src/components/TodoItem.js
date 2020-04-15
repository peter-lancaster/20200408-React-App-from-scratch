import React from "react"

function TodoItem(props) { 

    return(
    <div className="todoText">
        <input 
            type="checkbox" 
            checked={props.item.completed} 
            id="todo" name ="todo">
        </input>
        <label for="todo" >{props.item.text}</label>
    </div>)
}

/*

class TodoItem extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render() {
        return(
        <div className="todoText">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                id="todo" name ="todo">
            </input>
            <label for="todo" >{props.item.text}</label>
        </div>)
    }

}



*/

 

export default TodoItem