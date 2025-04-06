let birthDate = new Date("2002-10-05");
let age = new Date() - birthDate;
function calculateAge(age) {
    return age / (1000 * 60 * 60 * 24 * 365);
}
let ageDiv = document.getElementById("ageDiv");
ageDiv.innerHTML = Math.floor(calculateAge(age));