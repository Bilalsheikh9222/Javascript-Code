document.write("<h1>23 - Function-with-return-value</h1>");

document.write("<br/>");

// Sum two number 
function sum(a,b){
    return a+b;
}

var a = 10;
var b = 20;
var add = sum(a,b);

document.write(add);

document.write("<br/>");
// function two -- print fullName
function fullName(fName, lName){
    var a = fName + " " + lName;
    return a;
}

// var fn = fullName("Bilal","Sheikh");
// document.write(fn);

var a = "Bilal";
var b = "Sheikh";
document.write(fullName(a,b));

document.write("<br/>");
// recursion
function desc(n){
    if(n == 0){
        return;
    }

    document.write(n+"<br/>");
    desc(n-1);
}

var n = 10;
desc(n);