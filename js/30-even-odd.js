document.write("<h1>30 - Even - Odd</h1>");

document.write("<h2>Thi is for Even number</h2>");
for(var i = 1; i<=10; i++){
    if(i % 2 == 0){
        document.write(i+" Even-Numbers<br/>")
    }
}


document.write("<h2>This is for Odd number</h2>");
for(var j = 1; j<=10; j++){
    if(j % 2 != 0){
        document.write(j+" Odd-Number <br/>")
    }
}