const time = new Date().getHours();
if (time < 11 ) {
    timeDisplay = "Good Morning";
} else if (time < 18) {
    timeDisplay = "Good afternoon";
} else {
    timeDisplay = "Good evening";
}
document.getElementById("timeDisplay").innerHTML = timeDisplay;


const day = new Date().getDay();
switch (day) {   
    case 0:
        dayDisplay = "It's The Lords Day";
        break;
    case 1:
        dayDisplay = "It's Grody Monday";
        break;
    case 2:
        dayDisplay = "It's Tuesday";
        break;
    case 3:
        dayDisplay = "It's Hump Day";
        break;
    case 4:
        dayDisplay = "It's Thursday";
        break;
    case 5:
        dayDisplay = "It's Friday Friday Gotta Get Down On Friday";
        break;
    case 6:
        dayDisplay = "It's Saturday";
        break;
    default:
        dayDisplay = "We are screwed";   
}
document.getElementById("dayDisplay").innerHTML = dayDisplay;