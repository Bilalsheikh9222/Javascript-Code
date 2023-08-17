document.write("<h1> 36 - Delete - Modified </h1>");

// array index start from zero
var a = ["Owais", 18, "Male", "BCA"];

// a = [2];
a[1] = 20; // this is modified
document.write(a[1]);

delete a[1];
document.write(a[1]); // print undefined