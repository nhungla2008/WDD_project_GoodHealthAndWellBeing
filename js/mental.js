// List of positive reminders
const reminders = [
    "You are not alone. Someone is willing to listen.",
    "Asking for help is a sign of strength.",
    "You do not have to figure everything out today.",
    "Your feelings matter. Your voice matters.",
    "Small steps can lead to meaningful change.",
    "It is okay to not be okay."
];

// Select HTML elements
const reminderButton = document.getElementById("reminder-button");
const reminderText = document.getElementById("reminder-text");
const encouragement = document.getElementById("encouragement");

// When the button is clicked
reminderButton.addEventListener("click", function() {

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * reminders.length);

    // Change the paragraph
    reminderText.textContent = reminders[randomNumber];

    // Restart the animation
    encouragement.classList.remove("animate");
    void encouragement.offsetWidth;
    encouragement.classList.add("animate");

}); 