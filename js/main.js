document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

function loadHeader() {
    const headerHTML = `
    <div class="container nav-container">
        <a href="index.html" class="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" fill="#F2B705"/>
            </svg>
            Shanthi Jeevan <span>Mission</span>
        </a>
        <div class="mobile-toggle" onclick="toggleMenu()">
            <i class="fas fa-bars"></i>
        </div>
        <nav>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About Us</a></li>
                <li><a href="ministries.html" class="nav-link">Ministries</a></li>
                <li><a href="mission-fields.html" class="nav-link">Missions</a></li>
                <li><a href="impact.html" class="nav-link">Impact</a></li>
                <li><a href="gallery.html" class="nav-link">Gallery</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
                <li><a href="get-involved.html" class="btn btn-primary" style="padding: 8px 20px; color: var(--color-primary-blue);">Donate</a></li>
            </ul>
        </nav>
    </div>
    `;
    
    document.querySelector('header').innerHTML = headerHTML;
    setActiveLink();
}

function loadFooter() {
    const footerHTML = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-col">
                <h3>Shanthi Jeevan</h3>
                <p>Bringing hope, healing, and holistic development to the marginalized communities through the love of Christ.</p>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="ministries.html">Our Ministries</a></li>
                    <li><a href="impact.html">Impact Stories</a></li>
                    <li><a href="resources.html">Resources</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contact Info</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> 123 Mission Road, City, Country</li>
                    <li><i class="fas fa-phone"></i> +91 98765 43210</li>
                    <li><i class="fas fa-envelope"></i> contact@shanthijeevan.org</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Shanthi Jeevan Evangelical Mission. All Rights Reserved.</p>
        </div>
    </div>
    `;
    
    document.querySelector('footer').innerHTML = footerHTML;
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
