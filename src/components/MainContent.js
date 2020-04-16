import React from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import ShowDate from "./ShowDate"

class MainContent extends React.Component{
    constructor() {
        super();
        this.state = {
            firstName : "Peter",
            lastName : "Lancaster",
            todosData : todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {

        this.setState(prevState =>{
            let newState = prevState.todosData.map(element => {

                if(element.id === id) {
                    const changedElement = Object.assign({}, element);
                    changedElement.completed = !changedElement.completed;
                    return changedElement;
                } else {
                    return element;
                }

            })

            return {todosData : newState}
        })
        
    }

    render() {

        let todoItemsList = this.state.todosData.map(element => <TodoItem handleChange={this.handleChange} key={element.id} item={element}/>)

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
