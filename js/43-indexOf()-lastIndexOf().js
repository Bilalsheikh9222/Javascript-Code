document.write("<h1>43 - IndexOf()</h1>");

var a = ["Bilal","Huzaifa","Owais","Bilal","Tayyab"];
document.write(a + "<br/><br/>");

document.write(a.indexOf("Bilal")+"<br/>");
// document.write(a.indexOf("Bilal",1));

document.write(a.indexOf("Zaid")+"<br/>");


var c = a.lastIndexOf("Bilal"); // staring from end
document.write(c+"<br/>");