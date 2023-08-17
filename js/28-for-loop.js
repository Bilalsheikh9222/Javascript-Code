document.write("<h1>28 - For loop</h1>");

// intialization, condition, increment
for(var i = 1; i<=10; i++){
    document.write("This is for loop <br/>");
}

document.write("<h2>This is pattern</h2>");
var n = 4

for(var i = 1; i<=n; i++){
    for(var j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br/>");
}