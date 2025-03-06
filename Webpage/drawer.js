document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const drawerToggle = document.getElementById('drawer-toggle');
    const drawerClose = document.getElementById('drawer-close');
    const body = document.body;
    const overlay = document.querySelector('.mobile-overlay');
    
    // Toggle drawer when button is clicked
    drawerToggle.addEventListener('click', function() {
        body.classList.toggle('drawer-open');
    });
    
    // Close drawer when close button is clicked
    drawerClose.addEventListener('click', function() {
        body.classList.remove('drawer-open');
    });
    
    // Close drawer when clicking on overlay
    overlay.addEventListener('click', function() {
        body.classList.remove('drawer-open');
    });
    
    // Close drawer when clicking on a nav link
    const drawerLinks = document.querySelectorAll('.drawer-nav a, .drawer-actions a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', function() {
            body.classList.remove('drawer-open');
        });
    });
    
    // Close drawer when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            body.classList.remove('drawer-open');
        }
    });
});
