function checkAnswer() {  
    // Correct answer  
    const correctAnswer = "4"; // String value of the correct answer  
    
    // Retrieve the user's answer  
    const userAnswer = document.querySelector('input[name="quiz"]:checked');  
    
    // Check if an answer is selected  
    if (userAnswer) {  
        const selectedValue = userAnswer.value; // Get the value of the selected radio button  
        
        // Compare user's answer with the correct answer  
        if (selectedValue === correctAnswer) {  
            document.getElementById("feedback").textContent = "Correct! Well done.";  
        } else {  
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";  
        }  
    } else {  
        // If no answer is selected  
        document.getElementById("feedback").textContent = "Please select an answer.";  
    }  
}  

// Add an event listener to the submit button  
document.getElementById("submit-answer").addEventListener("click", checkAnswer); 