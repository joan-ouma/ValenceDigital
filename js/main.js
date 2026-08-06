document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-nav a');

    if (mobileMenuBtn && mobileDrawer && drawerCloseBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });

        drawerCloseBtn.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });

        // Close drawer when clicking a link
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
            });
        });
    }

    // Hero Slider (Cross-fade & Zoom)
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change slide every 5 seconds
    }

    // Smooth Scroll for Anchor Links (Optional, CSS scroll-behavior usually handles this)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


