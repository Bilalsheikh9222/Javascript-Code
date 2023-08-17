document.write("<h1>Global & local Variable</h1> <br/>");

var a = "Global Variable"; // This is global variable

// global variable function ke under and bahar work krta hai jabke (local variable work only in function) 
function gV(){
    document.write(a+"<br/>");
    var b = "local Variable";
    document.write(b+"<br/>");
}

gV(); // call function
document.write(a);
document.write(b); // local variable through an error check google console
