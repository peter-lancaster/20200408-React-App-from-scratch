import React from "react"

function MainContent() {

    const firstName = "Pete"
    const lastName = "Lancaster"
    let date = new Date();
    const styles = {
        fontSize : "14px"
    }

    function daySuffix(day){
        switch (day) {
            case 1: 
            case 21: 
            case 31: styles.color = "blue"; return "st";
            case 2 :
            case 22 : styles.color = "red"; return "nd";
            case 3 : 
            case 23 : styles.color = "green"; return "rd";
            default: styles.color = "yellow"; return "th";
        }
    }

    let monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    return (<main className="mainContent">

        {/* Note this ES6 method of referencing variables would give the same result 
        for top line <span>To do list for {`${firstName} ${lastName}`}</span>
        Details here https://flaviocopes.com/javascript-template-literals/ 
        NB - those are backticks, NOT single quotes */}

        <span>To do list for {firstName + " " +lastName}</span>
        <br />
        <span className="date" style={styles}>Date : {date.getDate()+daySuffix(date.getDate())+" "+monthName[(date.getMonth())]+" "+date.getFullYear()}</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <input type="checkbox"></input><span>_____________________________________</span>
        <br />
        <br />
        <br />
    </main>)

}


export default MainContent


