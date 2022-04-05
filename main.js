// write the destructurin assignment that reads;

var absent = true;
let user ={
    name: "John",
    age : 30,
    isAdmin: absent? true : false
}
console.log(user);


// give the right name;
var ourPlanet = 'earth'
var currentVisitor = [];
currentVisitor.push('Rajab', 'Ahmed', 'samir')
console.log(currentVisitor);


//exrcise 4


const person = { 
    firstName : "John", 
    lastName :"Smith", 
    age :33,
}
    console.log(person)
    person.firstName = "pete"


//storing salary

    let Fred = 100;
    let Ted = 160;
    let Ghaith = 10;
    let sum = Fred + Ted + Ghaith;
    console.log(sum);
//
//
///function paid (Fred, Ted, Ghaith) {
///    let sum = Fred + Ted + Ghaith;
///    console.log(sum);}
//
///paid(100,160,30);
//
//
// // function paid (Fred, Ted, Ghaith) {
// //   let sum = Fred + Ted + Ghaith;
// //   return sum;
// // }
// //
// // console.log(paid(100,160, 170)) ;
//  
//   const sum = (Fred = 100, Ted = 160, Ghaith = 130) =>{ console.log(Fred, Ted, Ghaith);};
//
//   for (let i = 0 ; i < 135; i++) {
//       console.log(i);
//   }


//Rewrite this if statmet using the ternary operator
let a= 1 ;
let b = 1;
    (a+ b> 4) ? console.log("Below"): console.log("Over")



//Rewrite if ..else using the ternary operator

let message ;
message == "Employee"
?console.log("Hello")
:message == "Director"
?console.log("Greetings")
:message == ""
?console.log("No login")
:console.log("");
