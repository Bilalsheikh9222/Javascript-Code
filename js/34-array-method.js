document.write("<h1>34 - Array-Method</h1>");

var array = new Array();

for(var i = 0; i<3; i++){
    array[i] = prompt("Enter the values :")
}

for(var j = 0; j<3; j++){
    document.write(array[j]+"<br/>");
}