// Switch statement 
let DayName = 6;
switch (DayName) {
    case 1:
        DayName = "Sunday";
        break;
        case 2:
        DayName = "Monday";
        break;
        case 3:
        DayName = "Tuesday";
        break;

        case 4:
        DayName = "Wednesday";
        break;

        case 5:
        DayName = "Thursday";
        break;

        case 6:
        DayName = "Friday";
        break;

        case 7:
        DayName = "Saturday";
        break;


    default:
        DayName = "Invalid Day Number"
        break;
}

console.log("The day is: "+ DayName);

for (let i = 1;  i <= 5; i++) {
    console.log(i);

    for (let j = 1; j <=5; j++){
        console.log("Inner Loop" +j);
        
    }
    
}


