document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Display Today's Date
    const dateElement = document.getElementById('date');
    const today = new Date();
    dateElement.textContent = Today's date is: ${today.toDateString()};
});