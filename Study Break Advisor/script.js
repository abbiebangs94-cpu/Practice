const minutesInput = document.querySelector("#minutesInput");
const checkButton = document.querySelector("#checkButton");
const resultParagraph = document.querySelector("#result");

checkButton.addEventListener("click", function() {
    
    const minutes = Number(minutesInput.value);

    let message = "";

    if (minutesInput.value.trim() === "" || minutes < 0) {
        message = "Error: Please enter a valid non-negative number of minutes.";
    } 
    else if (minutes < 25) {
        message = "Under 25 minutes: Keep going!";
    } 
    else if (minutes >= 25 && minutes <= 49) {
        message = "25-49 minutes: Take a 5-minute break.";
    } 
    else if (minutes >= 50 && minutes <= 89) {
        message = "50-89 minutes: Take a 10-minute break.";
    } 
    else {
        message = "90 minutes or more: Take a longer break and recharge.";
    }

    resultParagraph.textContent = message;
});