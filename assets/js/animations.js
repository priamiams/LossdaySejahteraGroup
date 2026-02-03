/**
 * PT Lossday Sejahtera Group - Animations JavaScript
 * Scroll animations, stagger effects, and interactive animations
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initStaggerAnimations();
    initParallaxEffects();
    initHoverAnimations();
    initLoadingAnimations();
    initCounterAnimations();
    initScrollProgress();
    initRippleEffects();
    
    // Initialize animations after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            initPageLoadAnimations();
        }, 100);
    });
});

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Stagger Animations
function initStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('[data-stagger]');
    
    staggerContainers.forEach(container => {
        const staggerItems = container.querySelectorAll('.stagger-item');
        const delay = parseInt(container.dataset.staggerDelay) || 100;
        
        staggerItems.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
            item.classList.add('stagger-item');
        });
    });
    
    // Auto-detect and apply stagger to common patterns
    const autoStaggerSelectors = [
        '.services-grid',
        '.paket-grid',
        '.gallery-grid',
        '.nilai-grid',
        '.misi-cards',
        '.hours-grid',
        '.faq-grid',
        '.stats-grid',
        '.contact-grid',
        '.unit-grid',
        '.terms-content'
    ];
    
    autoStaggerSelectors.forEach(selector => {
        const containers = document.querySelectorAll(selector);
        containers.forEach((container, containerIndex) => {
            const items = container.children;
            Array.from(items).forEach((item, index) => {
                if (!item.classList.contains('stagger-item')) {
                    item.classList.add('stagger-item');
                    item.style.animationDelay = `${(containerIndex * 50) + (index * 100)}ms`;
                }
            });
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = element.dataset.parallaxRate || 0.5;
            const offset = scrolled * rate;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
}

// Hover Animations
function initHoverAnimations() {
    // Add hover class to interactive elements
    const hoverElements = document.querySelectorAll('.btn, .card, .service-card, .paket-card, .gallery-item');
    
    hoverElements.forEach(element => {
        element.classList.add('hover-lift');
    });
    
    // Special hover effects
    const specialHoverElements = document.querySelectorAll('.hover-scale, .hover-underline');
    
    specialHoverElements.forEach(element => {
        if (element.classList.contains('hover-scale')) {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.05)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
            });
        }
    });
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn-hover-effect');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Loading Animations
function initLoadingAnimations() {
    // Skeleton loading for dynamic content
    const skeletonContainers = document.querySelectorAll('[data-skeleton]');
    
    skeletonContainers.forEach(container => {
        const count = parseInt(container.dataset.skeleton) || 3;
        
        for (let i = 0; i < count; i++) {
            const skeleton = document.createElement('div');
            skeleton.className = 'skeleton skeleton-item';
            skeleton.innerHTML = `
                <div class="skeleton-image"></div>
                <div class="skeleton-title"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
            `;
            container.appendChild(skeleton);
        }
        
        // Remove skeletons when content loads
        const observer = new MutationObserver(() => {
            if (container.children.length > count) {
                const skeletons = container.querySelectorAll('.skeleton-item');
                skeletons.forEach(s => s.remove());
                observer.disconnect();
            }
        });
        
        observer.observe(container, { childList: true });
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter[data-count]');
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = parseInt(counter.dataset.duration) || 2000;
                const start = parseInt(counter.dataset.start) || 0;
                const increment = target / (duration / 16);
                let current = start;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = formatNumber(target);
                        clearInterval(timer);
                    } else {
                        counter.textContent = formatNumber(Math.floor(current));
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    counters.forEach(counter => {
        counter.textContent = '0';
        observer.observe(counter);
    });
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
}

// Scroll Progress Bar
function initScrollProgress() {
    // Create progress bar if not exists
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
}

// Ripple Effects
function initRippleEffects() {
    document.addEventListener('click', function(e) {
        const rippleElements = document.querySelectorAll('.ripple');
        
        rippleElements.forEach(element => {
            if (element.contains(e.target)) {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                element.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });
}

// Page Load Animations
function initPageLoadAnimations() {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in');
    });
    
    // Animate section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach((header, index) => {
        header.style.animationDelay = `${index * 0.1}s`;
        if (!header.classList.contains('fade-in')) {
            header.classList.add('fade-in');
        }
    });
    
    // Pulse attention elements
    const attentionElements = document.querySelectorAll('.attention-pulse, .attention-bounce');
    attentionElements.forEach(el => {
        setTimeout(() => {
            el.classList.add('attention-pulse');
        }, 1000);
    });
}

// Text Animation (Typewriter effect)
function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    element.style.borderRight = 'none';
                }
            }, 100);
        }, 500);
    });
}

// Floating Animation
function initFloatingAnimation() {
    const floatElements = document.querySelectorAll('.float-slow, .float-medium, .float-fast');
    
    floatElements.forEach(element => {
        if (element.classList.contains('float-slow')) {
            element.style.animation = 'float 6s ease-in-out infinite';
        } else if (element.classList.contains('float-medium')) {
            element.style.animation = 'float 4s ease-in-out infinite';
        } else if (element.classList.contains('float-fast')) {
            element.style.animation = 'float 2s ease-in-out infinite';
        }
    });
}

// Gradient Border Animation
function initGradientBorder() {
    const gradientBorders = document.querySelectorAll('.gradient-border');
    
    gradientBorders.forEach(border => {
        const angle = parseInt(border.dataset.angle) || 45;
        const colors = border.dataset.colors || '#235abe, #fa961e, #235abe';
        
        border.style.background = `linear-gradient(${angle}deg, ${colors})`;
        border.style.backgroundSize = '200% 200%';
        border.style.animation = 'gradientShift 3s ease infinite';
    });
}

// Rotating Elements
function initRotatingElements() {
    const rotatingElements = document.querySelectorAll('.rotate-slow, .rotate-medium, .rotate-fast');
    
    rotatingElements.forEach(element => {
        if (element.classList.contains('rotate-slow')) {
            element.style.animation = 'rotate 20s linear infinite';
        } else if (element.classList.contains('rotate-medium')) {
            element.style.animation = 'rotate 10s linear infinite';
        } else if (element.classList.contains('rotate-fast')) {
            element.style.animation = 'rotate 5s linear infinite';
        }
    });
}

// Wave Animation
function initWaveAnimation() {
    const waveElements = document.querySelectorAll('.wave');
    
    waveElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('wave');
    });
}

// Initialize all animations after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        initTypewriter();
        initFloatingAnimation();
        initGradientBorder();
        initRotatingElements();
        initWaveAnimation();
    }, 1000);
});

// Export animation functions
window.Animations = {
    initScrollAnimations,
    initStaggerAnimations,
    initParallaxEffects,
    initHoverAnimations,
    initLoadingAnimations,
    initCounterAnimations,
    initScrollProgress,
    initRippleEffects,
    initPageLoadAnimations,
    initTypewriter,
    initFloatingAnimation,
    initGradientBorder,
    initRotatingElements,
    initWaveAnimation
};

// Performance optimization for animations
let lastScrollTime = 0;
const SCROLL_THROTTLE = 16; // ~60fps

window.addEventListener('scroll', () => {
    const now = Date.now();
    
    if (now - lastScrollTime >= SCROLL_THROTTLE) {
        lastScrollTime = now;
        
        // Update parallax elements
        const parallaxElements = document.querySelectorAll('.parallax');
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = element.dataset.parallaxRate || 0.5;
            const offset = scrolled * rate;
            element.style.transform = `translateY(${offset}px)`;
        });
        
        // Update scroll progress
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledPercent = (winScroll / height) * 100;
            progressBar.style.width = scrolledPercent + '%';
        }
    }
}, { passive: true });

// Reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduced-motion');
    
    // Disable all animations
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Helper function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Initialize animations for elements already in viewport on load
function initInViewportAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animated');
        }
    });
}

// Initialize on load
window.addEventListener('load', initInViewportAnimations);