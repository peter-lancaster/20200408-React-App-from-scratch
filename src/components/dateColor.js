
function dateColor(day){
    switch (day) {
        case 1: 
        case 21: 
        case 31: return "blue";
        case 2 :
        case 22 : return "red";
        case 3 : 
        case 23 : return "grey";
        default: return "orange";
    }
}

export default dateColor