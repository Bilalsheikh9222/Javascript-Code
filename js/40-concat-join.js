document.write("<h1> 40 - Concat - Join </h1>");

// first way concatenate
var a = ["Bilal","Owais","Huzaifa","Tayyab"];
var b = a.concat("Raza","Zaid");

document.write(b);

document.write("<br/><br/>");

// second way concatenate
var d = ["Hello","World"];
var c = a.concat(b,d);
document.write("<h2>Concat 2nd way</h2>");
document.write(c);

document.write("<br/><br/>");

// join Make one string

document.write("<h2>join - Make one string</h2>");

var e = ["Bilal","Sheikh","Zaid","Shahood"];
//  var f = ["Owais","Sheikh"];

var g = e.join(" ");
document.write(g);