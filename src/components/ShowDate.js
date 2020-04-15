import React from "react"
import dateColor from "./dateColor"
import daySuffix from "./daySuffix"
import monthName from "./monthName"

function ShowDate() {
    
    let date = new Date();
    const styles = {
        fontSize : "20px",
        fontFamily: 'Fredoka One'
    }
    
    //Call function to determine the color to apply to the date
    styles.color = dateColor(date.getDate());

    return (
    <span className="date" style={styles}>
    Date : {date.getDate()+daySuffix(date.getDate())+" "
    +monthName[(date.getMonth())]+" "
    +date.getFullYear()}
    </span>
    )


}

export default ShowDate