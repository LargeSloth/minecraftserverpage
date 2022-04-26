const time = new Date().getHours();

if (time < 12 ) {
    greeting = "Good Morning";
} else if (time < 13) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

document.getElementById("timeDisplay").innerHTML = greeting;