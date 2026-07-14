document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particlesContainer');
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.element = this.createElement();
        }

        createElement() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.cssText = `
                left: ${this.x}px;
                top: ${this.y}px;
                width: ${this.size}px;
                height: ${this.size}px;
                opacity: ${this.opacity};
            `;
            return particle;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > window.innerWidth) this.x = 0;
            if (this.x < 0) this.x = window.innerWidth;
            if (this.y > window.innerHeight) this.y = 0;
            if (this.y < 0) this.y = window.innerHeight;

            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
        }
    }

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = new Particle();
        particles.push(particle);
        particlesContainer.appendChild(particle.element);
    }

    function animateParticles() {
        particles.forEach(particle => particle.update());
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
        particles.forEach(particle => {
            if (particle.x > window.innerWidth) particle.x = window.innerWidth;
            if (particle.y > window.innerHeight) particle.y = window.innerHeight;
        });
    });
});