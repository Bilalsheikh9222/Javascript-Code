
var age = 20;

// And Operator
if(age >= 18 && age <= 21){
    document.write("You're eligible");
    console.log("You're eligible");
}

document.write("<br/>");

// OR Operator
var a = 10;
var b = 20;
if(a >= 10 || b<=21){
    document.write("You're eligible");
    console.log("You're eligible");
}

document.write("<br/>");

// Not Operator
if(!(a >= b)){
    document.write("A is not greator b");
}