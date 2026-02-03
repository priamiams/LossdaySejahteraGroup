/**
 * PT Lossday Sejahtera Group - Main JavaScript
 * Global functionality, navbar, WhatsApp integration
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initWhatsAppButtons();
    initSmoothScroll();
    initFormSubmission();
    initFAQ();
    initCounters();
    initPageTransition();
    initContactForm();
    
    // Set current year in footer
    document.querySelectorAll('.current-year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });
    
    // Initialize lazy loading for images
    initLazyLoading();
    
    // Add active class to current page in nav
    highlightCurrentPage();
});

// Navigation Toggle
function initNavbar() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle body scroll
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Sticky navbar on scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                return;
            }
            
            if (currentScroll > lastScroll) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            }
            
            lastScroll = currentScroll;
        });
    }
}

// WhatsApp Integration
function initWhatsAppButtons() {
    const phoneNumber = '+6289526907282';
    const defaultMessage = 'Halo PT Lossday Sejahtera Group,\nSaya tertarik dengan layanan Anda.\nMohon info lengkapnya.';
    
    // Format WhatsApp message
    function formatWhatsAppMessage(packageName = '') {
        let message = defaultMessage;
        if (packageName) {
            message = `Halo PT Lossday Sejahtera Group,\nSaya tertarik dengan paket ${packageName}.\nMohon info lengkapnya.`;
        }
        return encodeURIComponent(message);
    }
    
    // Handle all WhatsApp buttons
    document.querySelectorAll('[data-whatsapp]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const packageName = button.dataset.package || '';
            const url = `https://wa.me/${phoneNumber}?text=${formatWhatsAppMessage(packageName)}`;
            window.open(url, '_blank');
        });
    });
    
    // Handle package WhatsApp buttons
    document.querySelectorAll('.whatsapp-package').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const packageName = button.dataset.packageName || '';
            const message = `Halo PT Lossday Sejahtera Group,\nSaya tertarik dengan paket ${packageName}.\nMohon info lengkapnya.`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Submission Handler
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Create WhatsApp message
        const whatsappMessage = createWhatsAppMessage(data);
        const whatsappUrl = `https://wa.me/6289526907282?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification('Pesan berhasil dikirim! Silakan cek WhatsApp Anda.', 'success');
    });
    
    function validateForm(data) {
        if (!data.name || !data.phone || !data.message) {
            showNotification('Harap lengkapi semua field yang wajib diisi.', 'error');
            return false;
        }
        
        // Validate phone number
        const phoneRegex = /^[0-9+\-\s]+$/;
        if (!phoneRegex.test(data.phone)) {
            showNotification('Format nomor telepon tidak valid.', 'error');
            return false;
        }
        
        return true;
    }
    
    function createWhatsAppMessage(data) {
        const subjectMap = {
            'open-trip': 'Open Trip',
            'private-trip': 'Private Trip',
            'gathering': 'Gathering Perusahaan/Sekolah',
            'transport': 'Sewa Transportasi',
            'gear': 'Sewa Perlengkapan',
            'other': 'Lainnya'
        };
        
        const subject = subjectMap[data.subject] || data.subject;
        
        return `*PT LOSSDAY SEJAHTERA GROUP - KONSULTASI PERJALANAN*

*Data Diri:*
👤 Nama: ${data.name}
📞 WhatsApp: ${data.phone}
📧 Email: ${data.email || '-'}
🎯 Subjek: ${subject}

*Pesan:*
${data.message}

*Waktu Pengiriman:* ${new Date().toLocaleString('id-ID')}`;
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '!'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#F44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 2000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        max-width: 350px;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
        if (style.parentNode) {
            style.remove();
        }
    }, 3000);
}

// FAQ Accordion
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current item
            faqItem.classList.toggle('active', !isActive);
        });
    });
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    if (!counters.length) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Page Transition
function initPageTransition() {
    // Add page transition if not already loaded from cache
    if (!sessionStorage.getItem('pageLoaded')) {
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        transition.innerHTML = `
            <div class="page-transition-logo">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="#235abe" stroke-width="2"/>
                    <path d="M30 50L45 65L70 35" stroke="#fa961e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        `;
        
        document.body.appendChild(transition);
        
        // Remove after animation
        setTimeout(() => {
            if (transition.parentNode) {
                transition.remove();
            }
        }, 800);
        
        sessionStorage.setItem('pageLoaded', 'true');
    }
}

// Contact Form Handler (for kontak.html)
function initContactForm() {
    const messageForm = document.getElementById('messageForm');
    if (!messageForm) return;
    
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!data.name || !data.phone || !data.subject || !data.message) {
            showNotification('Harap lengkapi semua field yang wajib diisi.', 'error');
            return;
        }
        
        // Create WhatsApp message
        const subjectMap = {
            'open-trip': 'Open Trip',
            'private-trip': 'Private Trip',
            'gathering': 'Gathering Perusahaan/Sekolah',
            'transport': 'Sewa Transportasi',
            'gear': 'Sewa Perlengkapan',
            'other': 'Lainnya'
        };
        
        const subject = subjectMap[data.subject] || data.subject;
        
        const whatsappMessage = `*PT LOSSDAY SEJAHTERA GROUP - PESAN BARU*

*Data Pengirim:*
👤 Nama: ${data.name}
📞 WhatsApp: ${data.phone}
📧 Email: ${data.email || '-'}
🎯 Subjek: ${subject}

*Isi Pesan:*
${data.message}

*Waktu Pengiriman:* ${new Date().toLocaleString('id-ID')}

_Silahkan balas pesan ini untuk menanggapi permintaan konsultasi._`;
        
        const whatsappUrl = `https://wa.me/6289526907282?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        showNotification('Pesan berhasil dikirim! Silakan cek WhatsApp Anda.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// Highlight Current Page in Navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    
    backToTop.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #235abe;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 4px 15px rgba(35, 90, 190, 0.3);
        transition: all 0.3s ease;
        z-index: 998;
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
            setTimeout(() => {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'scale(1)';
            }, 10);
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'scale(0.8)';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    backToTop.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize when page fully loads
window.addEventListener('load', function() {
    // Add back to top button
    initBackToTop();
    
    // Add loading class removal
    document.body.classList.add('loaded');
    
    // Initialize any animations that depend on images being loaded
    setTimeout(initCounters, 500);
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.opacity = '0';
        e.target.onload = function() {
            this.style.opacity = '1';
        };
    }
}, true);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    });
}