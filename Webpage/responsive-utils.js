/**
 * Responsive utilities for enhancing website performance on mobile devices
 */

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    // Only run if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        // Target all images that have a data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Add touch-friendly interactions for mobile
    const productCards = document.querySelectorAll('.product');
    productCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
    
    // Optimize sidebar for mobile
    const toggleSidebar = document.createElement('button');
    toggleSidebar.id = 'toggle-sidebar';
    toggleSidebar.textContent = '☰';
    toggleSidebar.classList.add('mobile-menu-toggle');
    
    if (window.innerWidth <= 768) {
        document.querySelector('header').appendChild(toggleSidebar);
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.add('mobile-hidden');
        
        toggleSidebar.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-visible');
        });
    }
});

// Handle responsive product detail view
function adjustProductDetail() {
    const productDetail = document.querySelector('.product-detail:target');
    if (productDetail && window.innerWidth <= 768) {
        window.scrollTo({
            top: productDetail.offsetTop - 10,
            behavior: 'smooth'
        });
    }
}

window.addEventListener('hashchange', adjustProductDetail);
window.addEventListener('load', adjustProductDetail);
