document.write("<h1> 41 - Slice - Splice </h1>");

var a = ["Bilal","Owais","Sheikh","Tayyab"];

document.write("<b> This is real array: </b> "+a);

document.write("<h2>Slice</h2><br/>");
// a.slice(start value, end value);
var b = a.slice(0,1);
document.write(b);

document.write("<h2>get values in existing array and Create new array </h2> <br/>");

var c = a.slice(-4,-2);
document.write(c);

document.write("<h2> splice work on existing array </h2><br/>");

// a.splice(2,2);
// a.splice(2,0,"Hello","world");
a.splice(-2,2);
document.write(a);