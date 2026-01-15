//Call the welcomeMessage function when the script is loaded
welcomeMessage();

function welcomeMessage() {
    //Prompt the user for their name
    let userResponse = prompt("Welcome! Please enter your name:");

    //If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    //Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Haikal's website.`;
}

//Placeholder for form validation function
function validateForm() {}