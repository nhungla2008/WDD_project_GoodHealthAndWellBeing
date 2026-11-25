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

//RIPPLE EFFECT IN ABOUT page i was just tryn have bit of funs

// (function createRipple(event) { leaving like this because it got it from reddit  https://www.reddit.com/r/webdev/comments/1kmajmv/mastering_the_ripple_effect_a_guide_to_building/
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight); //calculate ecircle size the max sizes.... depending on the size of the button itself 
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
