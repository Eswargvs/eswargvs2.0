// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

function toggleMenu() {
    if (mobileNav.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
}

// Close menu when clicking outside
if (mobileNav) {
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && 
            !mobileNav.contains(e.target) && 
            mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when clicking on a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default link behavior if it's an internal link
            if (e.target.href.includes('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            closeMenu();
        });
    });

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        if (mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when pressing escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Initialize menu state
if (mobileNav) {
    mobileNav.style.display = 'block';
    mobileNav.style.visibility = 'hidden';
    mobileNav.style.opacity = '0';
    
    // Add a small timeout to ensure styles are applied
    setTimeout(() => {
        mobileNav.style.visibility = 'visible';
        mobileNav.style.opacity = '1';
    }, 100);
}
