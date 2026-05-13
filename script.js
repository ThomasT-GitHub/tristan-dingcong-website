// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = mobileToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Hero parallax — throttled with RAF
const heroBg = document.querySelector('.hero-bg video');
let rafPending = false;
window.addEventListener('scroll', () => {
    if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            if (heroBg && scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
            }
            rafPending = false;
        });
    }
}, { passive: true });

// Intersection Observer — fade in work items and service boxes
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.work-item, .service-box').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.7s ease ${i * 0.05}s, transform 0.7s ease ${i * 0.05}s`;
    observer.observe(el);
});

// About content fade-in
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.about-content, .about-image').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.9s ease ${i * 0.15}s, transform 0.9s ease ${i * 0.15}s`;
    aboutObserver.observe(el);
});

// Header hide/show on scroll — passive listener
let lastScroll = 0;
const header = document.querySelector('.header');
header.style.transition = 'transform 0.35s ease';

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 120) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
}, { passive: true });

// Reel videos — stagger play so they don't all hit the network at once
const reelVideos = [...document.querySelectorAll('.reel-item video')];
reelVideos.forEach((v, i) => {
    setTimeout(() => {
        v.play().catch(() => {});
    }, i * 80);
});

// Section background videos — ensure they play
document.querySelectorAll('video').forEach(v => {
    if (!v.closest('.hero-bg') && !v.closest('.reel-item')) {
        v.play().catch(() => {});
    }
});

// Contact Form — Formspree
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-btn');
        btn.textContent = 'SENDING...';
        btn.disabled = true;

        try {
            const res = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                btn.textContent = 'MESSAGE SENT!';
                contactForm.reset();
                setTimeout(() => {
                    btn.textContent = 'SEND MESSAGE';
                    btn.disabled = false;
                }, 3000);
            } else {
                throw new Error();
            }
        } catch {
            btn.textContent = 'ERROR — TRY AGAIN';
            btn.disabled = false;
        }
    });
}
