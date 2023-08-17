document.write("<h1>33 - Array</h1>");

// Array index from zero
var arr = [30,40,50,60,70];
var sum = 0;
// document.write(arr);
for(var a = 0; a<5; a++){
    document.write(arr[a] + "<br/>");
    sum = sum + arr[a];
}
document.write("<b>Total Sum:</b> "+sum+"<br/>");
document.write("<br/>");

// all datatypes use in array
var array = [100,"String",true,null];

for(var b = 0; b<3; b++){
    document.write(array[b]+"<br/>");
}