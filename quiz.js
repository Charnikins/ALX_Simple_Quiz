// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // The correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Get the checked radio button

    // Retrieve user's answer if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected option

        // Compare user's answer with the correct answer
        const feedbackElement = document.getElementById('feedback'); // Select feedback element
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done."; // Correct feedback
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!"; // Incorrect feedback
        }
    } else {
        // No option selected
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = "Please select an answer."; // Prompt user to select an answer
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
