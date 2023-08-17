document.write("<h1>Function Parameter</h1>");
document.write("<br/>");

function functionPara(fName,lName){
    document.write("Hello "+ fName + " " + lName);
}

functionPara("Bilal","Sheikh");

document.write("<br/>");
// by default values store 
function byDefault(fName = "Owais",lName = "Sheikh"){
    document.write("Hello "+ fName + " " + lName + "<br/>");
}

byDefault('default');
byDefault("Tayyab");


// sum two numbers
function sum(a,b){
    document.write("The sum is ")
    document.write(a+b);
}

sum(10,20);