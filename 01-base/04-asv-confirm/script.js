let age = window.prompt("What is ur age ?");
let result = confirm("are you " +age+  " years old?"); 

if ( result==false ) {
    age = window.prompt("What is ur age ?");
        
}
//console.log("age:");
console.log(age);


//gender part

let question ="What is ur gender ?";
let gender = window.prompt("What is ur gender ?");
let result2=confirm("are you a " +gender+  "?"); 

if (!result2) { //! can be used instead of result==false
    gender= window.prompt(question); // question variable can be used or you just write the question in quotes

}
console.log(gender);


//City part

let city = window.prompt("Which town do you live in ?");
let result3=confirm("Do you live in " +city+  " ?"); 


if (result3==false) {
    city=window.prompt("Which town do you live in ?");
}

console.log(city);













