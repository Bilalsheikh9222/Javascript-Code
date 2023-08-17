document.write("<h1>Confirm Box</h1>");

var a = confirm("Do you like our website ?");

// ok true   , cancel false
// alert(a);

if(a){
    alert("Thanks");
}else{
    alert("Sorry");
}