// Welcome Message
window.onload = function () {
    alert("🎬 Welcome to Movie Ticket Booking System!");
};

// Booking Form Validation
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let movie = document.getElementById("movie").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let tickets = document.getElementById("tickets").value;
    let seat = document.getElementById("seat").value;

    if(name=="" || email=="" || mobile=="" || movie=="" ||
       date=="" || time=="" || tickets=="" || seat=="")
    {
        alert("Please fill all fields!");
        return false;
    }

    if(mobile.length != 10)
    {
        alert("Enter a valid 10-digit mobile number!");
        return false;
    }

    alert("🎉 Booking Successful!");

    return true;
}