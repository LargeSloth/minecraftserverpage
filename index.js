
/* Displays hour of the day and outputs string to html */
function hour() {
    const hourDisplay = new Date().getHours();
    if (hourDisplay < 5) return "Go To Sleep"
    if (hourDisplay < 11) return "Good Morning"
    if (hourDisplay < 15) return "Good Afternoon"
    if (hourDisplay < 24) return "Good Evening"
}
document.getElementById("hourDisplay").innerHTML = hour();

/* Displays day of the week and outputs string to html */
function day() {
    const dayDisplay = new Date().getDay();
    if (dayDisplay === 0) return "It's The Lords Day"
    if (dayDisplay === 1) return "It's Grody Monday"
    if (dayDisplay === 2) return "It's Tuesday" 
    if (dayDisplay === 3) return "It's Hump Day"
    if (dayDisplay === 4) return "It's Thursday"
    if (dayDisplay === 5) return "It's Friday Friday Gotta Get Down On Friday"
    if (dayDisplay === 6) return "It's Saturday"
}
document.getElementById("dayDisplay").innerHTML = day();
