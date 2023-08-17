document.write("<h1> Ternary Operator</h1>")


var a = 100;
var b; // declare

// but multiple values cannot store 
(a == 100)? b = "true" : b= "False";

b = (a == 500)? "True": "False";

b = "Value is " + (a == 100 ? "True": "False");
document.write(b);