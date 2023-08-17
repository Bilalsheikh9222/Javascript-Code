document.write("<h1>42 - isArray()</h1>");

var a = ["This","is","an","array"];
document.write("<b>This is an Array :</b>"+Array.isArray(a)+"<br/>");

var b = "String";
document.write("<b>This is not an Array :</b>"+Array.isArray(b)+"<br/>");

if(Array.isArray(b)){
    document.write("This is an array :"+b);
}else{
    document.write("<b>This is not an Array :</b>"+ b)
}