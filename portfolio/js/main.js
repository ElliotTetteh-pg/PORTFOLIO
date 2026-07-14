document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollTopBtn = document.getElementById('scrollTop');
    const scrollProgress = document.getElementById('scrollProgress');
    const typingText = document.getElementById('typingText');
    const contactForm = document.getElementById('contactForm');

    const typingTexts = [
        'Software Developer',
        'Frontend Engineer',
        'Problem Solver',
        'UI/UX Enthusiast'
    ];
    let typingIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = typingTexts[typingIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % typingTexts.length;
        }

        setTimeout(type, isDeleting ? 80 : 120);
    }

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxHeight = document.body.scrollHeight - window.innerHeight;
        const width = (scrolled / maxHeight) * 100;
        
        const scrollProgressFill = document.querySelector('#scrollProgress .scroll-progress-fill');
        if (scrollProgressFill) {
            scrollProgressFill.style.width = width + '%';
        }

        if (scrolled > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
                statsAnimated = true;
            }
        });
    }, { threshold: 0.5 });

    document.querySelector('.about-stats')?.parentElement?.parentElement && 
        statsObserver.observe(document.querySelector('.about-stats').parentElement.parentElement);

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let count = 0;
            const increment = target / 50;

            const timer = setInterval(() => {
                count += increment;
                stat.textContent = Math.floor(count) + (stat.textContent.includes('+') ? '+' : '');

                if (count >= target) {
                    clearInterval(timer);
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                }
            }, 30);
        });
    }

    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('reveal');
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    type();
});