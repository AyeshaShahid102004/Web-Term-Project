
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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    
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


