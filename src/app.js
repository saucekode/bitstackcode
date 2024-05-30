document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
});