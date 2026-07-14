document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const customCursor = document.getElementById('customCursor');
    const cursorFollower = document.getElementById('cursorFollower');
    const testimonialSlider = document.getElementById('testimonialSlider');

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            customCursor.style.left = x + 'px';
            customCursor.style.top = y + 'px';

            setTimeout(() => {
                cursorFollower.style.left = x + 'px';
                cursorFollower.style.top = y + 'px';
            }, 100);
        });

        const hoverElements = document.querySelectorAll('a, button, .skill-card, .project-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(0)';
            });
            el.addEventListener('mouseleave', () => {
                customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    document.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        document.querySelectorAll('.floating-shapes .shape').forEach((shape, index) => {
            const speed = (index + 1) * 0.03;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const testimonialDots = document.getElementById('testimonialDots');
    let currentSlide = 0;

    if (slides.length > 0 && testimonialDots) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showSlide(index));
            testimonialDots.appendChild(dot);
        });
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.testimonial-dot').forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        testimonialDots.children[index]?.classList.add('active');
        currentSlide = index;
    }

    prevBtn?.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn?.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    if (slides.length > 1) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    let loadProgress = 0;

    const interval = setInterval(() => {
        loadProgress += Math.random() * 10;
        loadingProgress.style.width = loadProgress + '%';

        if (loadProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
            }, 500);
        }
    }, 80);
});