// my javascript
console.log("script is working");

// greeting according to the time
var hour = new Date().getHours();

if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
} else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
} else {
    document.getElementById("greeting").innerHTML = "Good Evening!";
}

// check the contact form
function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill your name and email");
    } else {
        alert("Thank you " + name + "! Your message is sent :)");
    }
    return false;
}
