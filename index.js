const time = new Date().getHours();
if (time < 11 ) {
    greeting = "Good Morning";
} else if (time < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}
document.getElementById("timeDisplay").innerHTML = greeting;


const day = new Date().getDay();
switch (day) {
    
    case 0:
        greeting2 = "It's The Lords Day";
        break;

    case 1:
        greeting2 = "It's Grody Monday";
        break;

    case 2:
        greeting2 = "It's Tuesday";
        break;

    case 3:
        greeting2 = "It's Hump Day";
        break;

    case 4:
        greeting2 = "It's Thursday";
        break;

    case 5:
        greeting2 = "It's Friday Friday Gotta Get Down On Friday";
        break;

    case 6:
        greeting2 = "It's Saturday";
        break;

    default:
        greeting2 = "We are screwed";
    
}
document.getElementById("dayDisplay").innerHTML = greeting2;