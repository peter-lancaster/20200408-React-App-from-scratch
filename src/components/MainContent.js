import React from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import dateColor from "./dateColor"
import daySuffix from "./daySuffix"
import monthName from "./monthName"

function MainContent() {

    const firstName = "Pete"
    const lastName = "Lancaster"
    let date = new Date();
    const styles = {
        fontSize : "20px",
        fontFamily: 'Fredoka One'
    }

    //Call function to determine the color to apply to the date
    styles.color = dateColor(date.getDate())

    //Pass data required to generate list items to TodoItem component
    let todoItemsList = todosData.map(element => <TodoItem key={element.id} item={element}/>)

    return (<main className="mainContent">

        {/* Note this ES6 method of referencing variables would give the same result 
        for top line <span>To do list for {`${firstName} ${lastName}`}</span>
        Details here https://flaviocopes.com/javascript-template-literals/ 
        NB - those are backticks, NOT single quotes */}

        <span>To do list for {firstName + " " +lastName}</span>
        <br />
        <span className="date" style={styles}>
            Date : {date.getDate()+daySuffix(date.getDate())+" "
            +monthName[(date.getMonth())]+" "
            +date.getFullYear()}
        </span>
        <br />
        {todoItemsList}
        <br />
        <br />
    </main>)

}


export default MainContent


