import React from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import ShowDate from "./ShowDate"

class MainContent extends React.Component{
    constructor() {
        super();
        this.state = {
            firstName : "Pete",
            lastName : "Lancaster",
            todosData : todosData
        }
    }

    render() {

        //Pass data required to generate list items to TodoItem component
        let todoItemsList = this.state.todosData.map(element => <TodoItem key={element.id} item={element}/>)

        return (
                    <main className="mainContent">
            <span>To do list for {this.state.firstName} {this.state.lastName}</span>
            <br />
            <ShowDate />
            <br />
            {todoItemsList}
            <br />
            <br />
            </main>)
        
    }

}

export default MainContent
