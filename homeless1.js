document.querySelector('.dropdown > a').addEventListener('click', function(event) {
    event.preventDefault(); 
    const dropdown = this.parentElement; 
    dropdown.classList.toggle('active'); 
});

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


document.getElementById('toggle-about').addEventListener('click', toggleAboutSection);


document.getElementById('nav-about').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

    
    toggleAboutSection();
});

document.getElementById("donateBtn").addEventListener("click", function () {
    window.open("donate.html", "_blank"); 
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

   
    alert(`Thank you, ${firstName} ${lastName}! We have received your message. We will contact you at ${email}.`);
});



