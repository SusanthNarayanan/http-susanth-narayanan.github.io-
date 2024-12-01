// Animation Initialization
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
});

// Smooth Scroll Effect for Navbar
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Function to toggle the visibility of the menu with smooth effect
function toggleMenu() {
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("open");
    const toggleButton = document.querySelector('.toggle-btn');
    if (navbarLinks.classList.contains('open')) {
        toggleButton.innerHTML = '&times;';  // Change to close icon
    } else {
        toggleButton.innerHTML = '&#9776;';  // Change to hamburger icon
    }
}
