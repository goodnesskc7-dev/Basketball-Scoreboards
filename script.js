// STARTING SCORES
let homeScore = 0;
let guestScore =0;
//ADD POINTS TO HOME 
function addHome(points) {
    homeScore = homeScore + points;
    document.getElementById("home-score").textContent = homeScore;
}
//ADD POINTS TO GUEST
function addGuest(points) {
    guestScore = guestScore + points;
    document.getElementById("guest-score").textContent = guestScore;
}
// RESET BOTH SCORES
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
}