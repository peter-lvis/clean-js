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

    for (let j = 1; j <=3; j++){
        console.log("Inner Loop" +j);
        
    }
    
}

// While Loop

let i = 0;

while (i<=5){
    console.log(i);
    i++;
}

// Do While Loop

let x = 1;

do {
    console.log(x)
    x++
} while (x<=5);

// Break Statement in javascript
for (let p = 1; p<=5; p++){
    if (p == 3)
        break
    console.log(p);
    
}
//Continue Statement
let p1 = 1;

for (p1 =1; p1<=5; p1++){
    if (p1 == 3)
        continue;
        console.log(p1);
        
}