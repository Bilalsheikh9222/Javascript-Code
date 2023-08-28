document.write("<h1> You're Result </h1>");

var per = prompt("you're per is: ");
if(per >= 90 && per <= 100){
    document.write("merit");
}else if(per >= 80 && per < 90){
    document.write("You're first");
}else if(per >= 60 && per < 80){
    document.write("You're 2nd");
}else if(per >= 40 && per < 60){
    document.write("You're passed");
}else if(per >= 20 && per < 40){
    document.write("Promote");
}else if(per >= 5 && per < 20){
    document.write("Fail");
}else{
    document.write("Please enter the valid number...");
}