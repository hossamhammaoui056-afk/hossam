function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        // Close menu after clicking on a link (on mobile)
        const nav = document.querySelector('.nav-links');
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });
});
