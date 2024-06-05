// JavaScript for buttons

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Adjust as needed
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typed.js initialization
    const typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Animation for skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-percentage');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
        bar.style.width = 0;
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 100);
    });

    // Smooth scrolling for 'More About Me' button
    const moreAboutMeBtn = document.querySelector('.btn-box');
    if (moreAboutMeBtn) {
        moreAboutMeBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const aboutSection = document.querySelector('.skills-section'); // Adjust as needed
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80; // Adjust as needed
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Download CV button
    // Replace 'your-cv-file.pdf' with your actual CV file path
    const downloadCVBtn = document.querySelector('.btn-download');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function(e) {
            // Add download functionality here if needed
        });
    }
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data to EmailJS
    emailjs.sendForm('service_3gytl1r', 'template_tyyckab', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again.');
        });
});

