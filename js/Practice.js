document.write("<h1>Practice</h1>");

var a = [10,20,30,40,50];
document.write(a + "<br/>");

var b = a.some(checkA);
document.write(b + "<br/>");

function checkA(a){
    return(a >= 20);
}