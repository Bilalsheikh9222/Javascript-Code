// Three Types of Comments 1.Var - 2.Let  - 3.Const ----- for Error check console
// don't start variable with numeric through an error & space - like first name, 99firstname.
var a = "Use Variable";
// declare and value assign
var b = 2233;
var c = 2.23;
var c = "hello";
// overwrite variable
c = 33;


// declare variable
var d, e;
// Error Undefined
document.write(d);

var firstName = "Owais";


document.write("<h1>Use Variable</h1>")
document.write(b + "<br/>");
document.write(c);
document.write("<br/>");
document.write(firstName);


// Let & Const Tut-06
// let mai dubara sai value declare nh krskte 
document.write("<h1>Let difference</h1>");
let LetName = "This is declare";
LetName = "overwrite";
// let LetName = "World"; // redeclare then through an Error
document.write(LetName);
document.write("<br/>");

// Const -- no redeclare and no reasign variable
const c = "This is const variable const";
const c = "This is redeclare variable const"; 
// c = "This is reasign and through an Error";
document.write(c);
