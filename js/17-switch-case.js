const day = 2;

switch(day){
    case 1: case 2: case 3:
         document.write("Today is Monday");
    break;
    // case 2: document.write("Today is Tuesday");
    // break;
    // case 3: document.write("Today is Wednesday");
    // break;
    case 4: document.write("Today is Thursday");
    break;
    case 5: document.write("Today is Friday");
    break;
    case 6: document.write("Today is Saturday");
    break;
    case 7: document.write("Today is Sunday");
    break;
    default: document.write("Please Enter the valid week day.");
}

document.write("<br/>");

const age = 31;

// true mean switch on
switch(true){
    case (age >= 18 && age <= 20):
        document.write("You're eligible");
        break;
    case (age >= 21 && age <= 30):
        document.write("You're not eligible");
        break;
    default: document.write("Please enter the valid age!");
}