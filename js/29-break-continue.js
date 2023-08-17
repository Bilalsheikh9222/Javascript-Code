document.write("<h1>29 - Continue & Break</h1>");

document.write("<br/>");
document.write("<br/>");

document.write("<h2>This is Continue</h2>");

for(var i =1; i<=10; i++){
    if(i == 3){
        document.write("Hey : "+i+"<br/>");
        continue;
    }
    document.write("Number : "+i +"<br/>");
}

document.write("<h2>This is Break</h2>");

for(var j=1; j<=10; j++){
    if(j==3){
        document.write("Hey : "+j +"<br/>");
        break;
    }
    document.write("Number : "+j +"<br/>");
}