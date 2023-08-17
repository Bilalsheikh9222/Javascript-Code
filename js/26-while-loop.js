document.write("<h1>26 - While-loop</h1>");

// Intialization, condition, print and increment or decrement.

var i = 1;

while(i<=10){
    document.write(i+". "+"This is while loop <br/>");
    i++;
}

var j = 10;

document.write("<ul>");
while(j >= 1){
    document.write("<li>" +j+ ") This is decrement while loop </li>");
    j--; // j = j-1;
}
document.write("</ul>");