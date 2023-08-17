document.write("<h1>35 - Dimensional - Array </h1>");

// array index start from 0
var array = [
    ["harry",18,"M","Fname"],
    ["yahoo",18,"M","Fname"],
    ["oh yeh",18,"M","Fname"],
    ["harry",18,"M","Fname"],
    ["harry",18,"M","Fname"],
];

// document.write(array);
document.write("<table border='1px' cellspacing='0'>");
for(var i = 0; i<array.length; i++){
    document.write("<tr>");
    for(var j=0; j<array[i].length; j++){
        document.write("<td>" + array[i][j] + "</td>");
    }
    document.write("</tr>");
    document.write("<br/>");
}

document.write("</table>");
