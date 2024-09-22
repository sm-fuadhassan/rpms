const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonialIndex = 0;

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    const translateX = -currentTestimonialIndex * 100 + '%'; // Calculate translateX value
    testimonialContainer.style.transform = `translateX(${translateX})`;
}

setInterval(nextTestimonial, 5000);

// ... other JavaScript code ...

// Get the modal
const loginPopup = document.getElementById("loginPopup");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// Get the "Login" link in the navbar
const loginLink = document.querySelector('nav a[href="#"]'); // Assuming the "Login" link has href="#"

// When the user clicks on the "Login" link, open the modal
loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    loginPopup.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', closePopup);

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == loginPopup) {
        closePopup();
    }
});

function closePopup() {
    loginPopup.style.display = "none";
}

// When the user clicks on the "Login" link, open the modal
loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginPopup.style.display = "block";
    setTimeout(() => { // Add a slight delay to allow the display change to take effect
        loginPopup.classList.add('show');
    }, 10); // 10ms delay
});

function closePopup() {
    loginPopup.classList.remove('show');
    setTimeout(() => { // Hide the popup after the animation completes
        loginPopup.style.display = "none";
    }, 300); // 300ms delay (match the transition duration)
}

// ... other JavaScript code ...

// Fetch username from the database (replace with your actual implementation)
fetch('/get-username') // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        const welcomeHeading = document.querySelector('.welcome h2');
        welcomeHeading.textContent = `Welcome, ${data.username}!`; 
    })
    .catch(error => {
        console.error('Error fetching username:', error);
        // Handle the error gracefully, e.g., display a default message
    });