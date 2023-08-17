var per = 120;

if(per >= 90 && per <= 100){
    document.write("You're in Merit");
}else if(per >= 70 && per < 90){
    document.write("you're in 2nd Divison");
}else if(per >= 50 && per < 70){
    document.write("you're in 3rd");
}else if(per >= 30 && per < 50){
    document.write("You're passed");
}else if(per < 30){
    document.write("you're fail");
}else{
    document.write("please enter a valid number");
}