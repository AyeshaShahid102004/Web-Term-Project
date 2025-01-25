// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function toggleAboutSection() {
    const aboutDetails = document.getElementById('about-details');
    const aboutSectionButton = document.getElementById('toggle-about');


    if (aboutDetails.classList.contains('hidden')) {
        aboutDetails.classList.remove('hidden');
        aboutDetails.classList.add('visible');
        aboutSectionButton.textContent = 'Show Less';
    } else {
        aboutDetails.classList.remove('visible');
        aboutDetails.classList.add('hidden');
        aboutSectionButton.textContent = 'About Us';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle-about').addEventListener('click', toggleAboutSection);

    document.getElementById('nav-about').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        toggleAboutSection();
    });

    document.getElementById("donateBtn").addEventListener("click", function () {
        window.open("donate.html", "_blank");
    });
    document.getElementById("findbtn").addEventListener("click", function () {
        window.open("find.html", "_blank");
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;


    alert(`Thank you, ${firstName} ${lastName}! We have received your message. We will contact you at ${email}.`);
});

document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    alert(`You searched for: ${query}`);
    // Add additional logic for handling the search here
});
// JavaScript function to open find.html
function openFindPage() {
    window.open('find.html', '_blank'); // Opens find.html in a new tab
}

document.addEventListener("DOMContentLoaded", () => {
    const donationForm = document.getElementById("donation-form");

    // Ensure the form is valid and prevent default form submission
    donationForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting traditionally

        // Get form values
        const amount = document.getElementById("donation-amount").value;
        const name = document.getElementById("donor-name").value;
        const email = document.getElementById("donor-email").value;
        const message = document.getElementById("message").value;

        // Validate input fields
        if (!amount || amount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }
        if (!name.trim()) {
            alert("Please enter your name.");
            return;
        }
        if (!email.trim() || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate a successful donation process
        alert(`Thank you, ${name}!
Your donation of £${amount} has been received.
A confirmation email has been sent to ${email}.`);

        // Optionally, clear form fields after submission
        donationForm.reset();
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
