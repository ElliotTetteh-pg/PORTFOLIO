# Elliot Tetteh - Software Developer Portfolio

A premium, modern, responsive portfolio website showcasing my work as a software developer. Built with a sophisticated black and red color scheme, glassmorphism effects, and smooth animations.

## Features

- **Premium Design**: Matte black (#0D0D0D) and crimson red (#E63946) color palette
- **Glassmorphism**: Frosted glass effect with backdrop-filter blur
- **Responsive**: Works perfectly on desktop, tablet, and mobile (768px breakpoint)
- **Animations**: 
  - Smooth scroll reveals with Intersection Observer
  - Typing animation for job titles
  - Floating animated background shapes
  - Particle background system
  - Custom animated cursor (desktop only)
- **Performance**: 
  - Lazy loading for images
  - Optimized 60fps animations
  - Minimal DOM manipulation
  - Efficient scroll handlers
- **Accessibility**: Semantic HTML and proper ARIA labels
- **No Dependencies**: Built entirely with vanilla HTML, CSS, and JavaScript

## Tech Stack

- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Backdrop-filter, Custom properties)
- Vanilla JavaScript (ES6+)

## Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles with glassmorphism
│   ├── animations.css  # Animation definitions
│   └── responsive.css  # Media queries and mobile styles
├── js/
│   ├── main.js         # Core functionality
│   ├── animations.js   # Animation handlers
│   └── particles.js    # Particle background system
├── assets/
│   ├── images/         # Project screenshots and profile
│   └── icons/          # Icons and favicons
└── README.md
```

## Sections

1. **Hero** - Animated introduction with typing effect and profile
2. **About** - Professional background with animated statistics
3. **Skills** - Technology categories in glassmorphism cards
4. **Projects** - Filterable project showcase
5. **Experience** - Timeline-based work history
6. **Education** - Education and certifications
7. **Achievements** - Awards and accomplishments
8. **Testimonials** - Client testimonials carousel
9. **Contact** - Contact form and social links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started

Simply open `index.html` in your browser. No build tools or installation required.

## Customize

1. Replace placeholder images in `assets/images/` with your own
2. Update project information in `index.html`
3. Modify colors in `css/style.css` under `:root`
4. Add your own content and achievements
5. Update social media profile links

## License

MIT License