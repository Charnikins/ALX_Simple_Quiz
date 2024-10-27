// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // The correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Get the checked radio button

    // Select the feedback element
    const feedbackElement = document.getElementById('feedback'); 

    // Retrieve user's answer if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected option

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done."; // Correct feedback
            feedbackElement.style.color = "#28a745"; // Green color for correct feedback
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!"; // Incorrect feedback
            feedbackElement.style.color = "#dc3545"; // Red color for incorrect feedback
        }
    } else {
        feedbackElement.textContent = "Please select an answer."; // Prompt user to select an answer
        feedbackElement.style.color = "#dc3545"; // Red color for no selection feedback
    }
}

// Retrieve the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');

// Add event listener to the submit button
submitButton.addEventListener('click', checkAnswer);
