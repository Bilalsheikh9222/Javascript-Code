document.write("<h1>31 - Nested-loop</h1>");

var a = 0;

for(var i = 1; i<=10; i++){
    for(var j=1; j<=10; j++){
        a++;
        document.write(a+" ");
    }
    document.write("<br/>");
}


document.write('<br/>');
for(var a = 1; a<=100; a+=10){
    for(var b = a; b < a+10; b++){
        document.write(b+" ");
    }
    document.write('<br/>');
}