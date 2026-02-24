let age = 16;
let msg = (age>= 18)? "You are an Adult" : "You are a Minor";
console.log(msg);
 //For loop
for (let i = 1; i <= 10; i++) {
    console.log("uflowstack");
    ;
}
    let coding = ["Javacsript", "ReactJS", "NodeJs" ]

    for (let i = 0; i < coding.length; i++){
        console.log(coding[i]);
        
    }
// Function In Javascript
    function Greet() {
        console.log("Hello UFlowStack");
        
    }
    Greet()
    // Parameters And Argument FirstNmae And LastName are argument.
    // If i pass only one parameter it will be undefined example if i pass only uflowstack without putting cuuryit will show Hello Uflowstack Undefined, if i pass 3 it will only show 2 and abandon the third one. Beacause only 2 parameters that is FirstName and LastName
    function greet (FirstName, LastName) {
        console.log("Hello" + FirstName + "" + LastName );
        
    }
    greet ("USt4ckDev", "Curry")
    //Default Parameters
 function number(x, y) {
    console.log(x+y);
    
 }
number (50);

function number(x, y) {
    console.log(x+y);
    
 }
number (50, 20);

function number(x, y=0) {
    console.log(x+y);
    
 }
number (50,);

 function fn1(x) {
    function fn2(y){
        return x*y;
    }
    return fn2;
 }

 let result = fn1(3);
 console.log(result);
  
console.log(result(2)); 

//Callback Function:- A callback is a function passed as an argument to another function. A callback function can run after another function has finishd {
        //  Remember when you pass a function as an argument, do not use the parenthesis, you will simply add the finction name.
//}

function display(result){
    console.log(result);
    
}

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum)
}
add(10, 90, display);

//ANNONYMOUS FUNCTIONS: Are functions in javascript that are not declared without a name.
//function(parameter){
     //
//}
// This below is known aS FUNCTION EXPRESSION
 let sum = function (x,y){
    return x+y;
}
console.log(sum(30, 30));
// Now how can i call this functiion, you know in order for us to call a function
// we need a function name but we dont have a function name lets see how we call this function
(
function(){
    console.log("Welcome to USt4ckDev");
    
}
)();
//Another example of anonymous function
setTimeout 
    (function(){
    console.log("Hello, USt4ckDev");
}, 3000);

//RECURSIVE FUNCTION: Is a function that calls itslf in javascript
function countDown(num){
    console.log(num);
    num--;
    if(num>=10){
        countDown(num);
    }   
}
countDown(10);

//0BJECT IN JAVASCRIPT: Is a non primitive data-type that allows you to store multiple collcetions of data
//Syntaxt to decalre an object 
// const object-name= {
  //    key1: value1,
   //   key2: value2
//}
//Key Value pairs are called properties
// NOTE: When we declare a function as a value in key:value pair then it is known as methods

const person = {
    FirstName: "USt4ckDev",
    LastName: "Curyy",
    age: 21
}

console.log(person);

// HOW TO ACCESS THE PROPERTIES OF AN OBJECT: We can do that by using its key name
//objectName.key
const PerSon = {
    firstname: "USt4ckDev",
    LastName: "Curry",
    age: 21
}
console.log(PerSon.firstname);

// Another way to do so is by using bracket notation

const peRson = {
    firstname: "USt4ckDev",
    lastname: "Curry",
    age: 21
}
console.log(peRson["lastname"]);

//If the value is in a string you cant use the . notation to acccess the properties of an object it will give an error. But we use the bracket notation[]

const DataType = {
    "Food Name": 'Beans',
    fruitName: 'Banana'
}

console.log(DataType["Food Name"]);

//How To Update The Properties Of An Object

const Group = {
    Group1: "Stake",  
    Group2: "Ace",
    AverageAge: 21
}
Group.Group1 = "Shark"
console.log(Group["Group1"]);

// How to access the property of an inner state object
 const Individual = {
    fisrtnamE: "Peter",
    lastnamE: "Ofodili" ,
    age: 21,

    address: {
        State:"Lagos",
        LGA: "Alimosho",
        city: "Egbeda",
        Street: "3, Aminu Ajibode",
        zipcode: "785423"
    }
}
console.log(Individual.address.Street);
console.log("age" in Individual);
console.log("state of origin" in Individual);
for (let prop in Individual) {
    console.log(prop);
    
}

for (let prop in Individual) {
    console.log(Individual[prop]);
}

for (let prop in Individual){
    console.log(prop+":"+ Individual[prop]);
    
}

//How to check if a property exist we can use the (in) operator we use the "in"

// If i want to display property of an objeect without knowing the property name we use (for in loop)

//for... in loop allows you to access each property and value of an object without knowing the specific name of the property
// Check for examples above 
//----------------------------------------------------------------------------------------------------------------------------------------

// Next how to create an obbject using the new keyword

const persOn = new Object();

persOn.Fname = "USt4ckDev";
persOn.Lname = "Curry";
person.gae = 21

console.log(persOn);


// JAVASCIPT PBJECT METHODS
// IS AN OBJECT property that contains a function definition