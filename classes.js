// Javascript Classes 
// Classes are on of the features introduced in the ES6 version of Javascript
 // JS CLASS is a template for creating object
 //  You should always add a method with a name "constructor" within the class
 // "constuctor()" is used to innitialize the value or property of an object

 class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
       return "hello " + this.name;
    }
 }

 const person1 = new Person("USt4ckDev Curry", 21);
 const person2 = new Person("Ofodili Peter", 21);

 console.log(person1.greet());
 

 //JAVASCRIPT CLASS METHODS: We can add any number of methods in javascript class eg  greet(){
 //       "hello" + this.name.age
 //    } So this is a method
 // In the javascript class you can add any number of method 
