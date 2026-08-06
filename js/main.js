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
