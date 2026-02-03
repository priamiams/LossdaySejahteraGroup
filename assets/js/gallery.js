/**
 * PT Lossday Sejahtera Group - Gallery JavaScript
 * Gallery, filtering, and lightbox functionality
 */

// Gallery Data
const galleryImages = [
    // Pulau Images (1-22)
    { id: 1, src: 'assets/img/dokumentasi/gambar1.jpg', category: 'pulau', title: 'Dokumentasi Pulau 1' },
    { id: 2, src: 'assets/img/dokumentasi/gambar2.jpg', category: 'pulau', title: 'Dokumentasi Pulau 2' },
    { id: 3, src: 'assets/img/dokumentasi/gambar3.jpg', category: 'pulau', title: 'Dokumentasi Pulau 3' },
    { id: 4, src: 'assets/img/dokumentasi/gambar4.jpg', category: 'pulau', title: 'Dokumentasi Pulau 4' },
    { id: 5, src: 'assets/img/dokumentasi/gambar5.jpg', category: 'pulau', title: 'Dokumentasi Pulau 5' },
    { id: 6, src: 'assets/img/dokumentasi/gambar6.jpg', category: 'pulau', title: 'Dokumentasi Pulau 6' },
    { id: 7, src: 'assets/img/dokumentasi/gambar7.jpg', category: 'pulau', title: 'Dokumentasi Pulau 7' },
    { id: 8, src: 'assets/img/dokumentasi/gambar8.jpg', category: 'pulau', title: 'Dokumentasi Pulau 8' },
    { id: 9, src: 'assets/img/dokumentasi/gambar9.jpg', category: 'pulau', title: 'Dokumentasi Pulau 9' },
    { id: 10, src: 'assets/img/dokumentasi/gambar10.jpg', category: 'pulau', title: 'Dokumentasi Pulau 10' },
    { id: 11, src: 'assets/img/dokumentasi/gambar11.jpg', category: 'pulau', title: 'Dokumentasi Pulau 11' },
    { id: 12, src: 'assets/img/dokumentasi/gambar12.jpg', category: 'pulau', title: 'Dokumentasi Pulau 12' },
    { id: 13, src: 'assets/img/dokumentasi/gambar13.jpg', category: 'pulau', title: 'Dokumentasi Pulau 13' },
    { id: 14, src: 'assets/img/dokumentasi/gambar14.jpg', category: 'pulau', title: 'Dokumentasi Pulau 14' },
    { id: 15, src: 'assets/img/dokumentasi/gambar15.jpg', category: 'pulau', title: 'Dokumentasi Pulau 15' },
    { id: 16, src: 'assets/img/dokumentasi/gambar16.jpg', category: 'pulau', title: 'Dokumentasi Pulau 16' },
    { id: 17, src: 'assets/img/dokumentasi/gambar17.jpg', category: 'pulau', title: 'Dokumentasi Pulau 17' },
    { id: 18, src: 'assets/img/dokumentasi/gambar18.jpg', category: 'pulau', title: 'Dokumentasi Pulau 18' },
    { id: 19, src: 'assets/img/dokumentasi/gambar19.jpg', category: 'pulau', title: 'Dokumentasi Pulau 19' },
    { id: 20, src: 'assets/img/dokumentasi/gambar20.jpg', category: 'pulau', title: 'Dokumentasi Pulau 20' },
    { id: 21, src: 'assets/img/dokumentasi/gambar21.jpg', category: 'pulau', title: 'Dokumentasi Pulau 21' },
    { id: 22, src: 'assets/img/dokumentasi/gambar22.jpg', category: 'pulau', title: 'Dokumentasi Pulau 22' },
    
    // Gunung Images (23-58)
    { id: 23, src: 'assets/img/dokumentasi/gambar23.jpg', category: 'gunung', title: 'Dokumentasi Gunung 23' },
    { id: 24, src: 'assets/img/dokumentasi/gambar24.jpg', category: 'gunung', title: 'Dokumentasi Gunung 24' },
    { id: 25, src: 'assets/img/dokumentasi/gambar25.jpg', category: 'gunung', title: 'Dokumentasi Gunung 25' },
    { id: 26, src: 'assets/img/dokumentasi/gambar26.jpg', category: 'gunung', title: 'Dokumentasi Gunung 26' },
    { id: 27, src: 'assets/img/dokumentasi/gambar27.jpg', category: 'gunung', title: 'Dokumentasi Gunung 27' },
    { id: 28, src: 'assets/img/dokumentasi/gambar28.jpg', category: 'gunung', title: 'Dokumentasi Gunung 28' },
    { id: 29, src: 'assets/img/dokumentasi/gambar29.jpg', category: 'gunung', title: 'Dokumentasi Gunung 29' },
    { id: 30, src: 'assets/img/dokumentasi/gambar30.jpg', category: 'gunung', title: 'Dokumentasi Gunung 30' },
    { id: 31, src: 'assets/img/dokumentasi/gambar31.jpg', category: 'gunung', title: 'Dokumentasi Gunung 31' },
    { id: 32, src: 'assets/img/dokumentasi/gambar32.jpg', category: 'gunung', title: 'Dokumentasi Gunung 32' },
    { id: 33, src: 'assets/img/dokumentasi/gambar33.jpg', category: 'gunung', title: 'Dokumentasi Gunung 33' },
    { id: 34, src: 'assets/img/dokumentasi/gambar34.jpg', category: 'gunung', title: 'Dokumentasi Gunung 34' },
    { id: 35, src: 'assets/img/dokumentasi/gambar35.jpg', category: 'gunung', title: 'Dokumentasi Gunung 35' },
    { id: 36, src: 'assets/img/dokumentasi/gambar36.jpg', category: 'gunung', title: 'Dokumentasi Gunung 36' },
    { id: 37, src: 'assets/img/dokumentasi/gambar37.jpg', category: 'gunung', title: 'Dokumentasi Gunung 37' },
    { id: 38, src: 'assets/img/dokumentasi/gambar38.jpg', category: 'gunung', title: 'Dokumentasi Gunung 38' },
    { id: 39, src: 'assets/img/dokumentasi/gambar39.jpg', category: 'gunung', title: 'Dokumentasi Gunung 39' },
    { id: 40, src: 'assets/img/dokumentasi/gambar40.jpg', category: 'gunung', title: 'Dokumentasi Gunung 40' },
    { id: 41, src: 'assets/img/dokumentasi/gambar41.jpg', category: 'gunung', title: 'Dokumentasi Gunung 41' },
    { id: 42, src: 'assets/img/dokumentasi/gambar42.jpg', category: 'gunung', title: 'Dokumentasi Gunung 42' },
    { id: 43, src: 'assets/img/dokumentasi/gambar43.jpg', category: 'gunung', title: 'Dokumentasi Gunung 43' },
    { id: 44, src: 'assets/img/dokumentasi/gambar44.jpg', category: 'gunung', title: 'Dokumentasi Gunung 44' },
    { id: 45, src: 'assets/img/dokumentasi/gambar45.jpg', category: 'gunung', title: 'Dokumentasi Gunung 45' },
    { id: 46, src: 'assets/img/dokumentasi/gambar46.jpg', category: 'gunung', title: 'Dokumentasi Gunung 46' },
    { id: 47, src: 'assets/img/dokumentasi/gambar47.jpg', category: 'gunung', title: 'Dokumentasi Gunung 47' },
    { id: 48, src: 'assets/img/dokumentasi/gambar48.jpg', category: 'gunung', title: 'Dokumentasi Gunung 48' },
    { id: 49, src: 'assets/img/dokumentasi/gambar49.jpg', category: 'gunung', title: 'Dokumentasi Gunung 49' },
    { id: 50, src: 'assets/img/dokumentasi/gambar50.jpg', category: 'gunung', title: 'Dokumentasi Gunung 50' },
    { id: 51, src: 'assets/img/dokumentasi/gambar51.jpg', category: 'gunung', title: 'Dokumentasi Gunung 51' },
    { id: 52, src: 'assets/img/dokumentasi/gambar52.jpg', category: 'gunung', title: 'Dokumentasi Gunung 52' },
    { id: 53, src: 'assets/img/dokumentasi/gambar53.jpg', category: 'gunung', title: 'Dokumentasi Gunung 53' },
    { id: 54, src: 'assets/img/dokumentasi/gambar54.jpg', category: 'gunung', title: 'Dokumentasi Gunung 54' },
    { id: 55, src: 'assets/img/dokumentasi/gambar55.jpg', category: 'gunung', title: 'Dokumentasi Gunung 55' },
    { id: 56, src: 'assets/img/dokumentasi/gambar56.jpg', category: 'gunung', title: 'Dokumentasi Gunung 56' },
    { id: 57, src: 'assets/img/dokumentasi/gambar57.jpg', category: 'gunung', title: 'Dokumentasi Gunung 57' },
    { id: 58, src: 'assets/img/dokumentasi/gambar58.jpg', category: 'gunung', title: 'Dokumentasi Gunung 58' },
    
    // Gathering Images (59-70)
    { id: 59, src: 'assets/img/dokumentasi/gambar59.jpg', category: 'gathering', title: 'Dokumentasi Gathering 59' },
    { id: 60, src: 'assets/img/dokumentasi/gambar60.jpg', category: 'gathering', title: 'Dokumentasi Gathering 60' },
    { id: 61, src: 'assets/img/dokumentasi/gambar61.jpg', category: 'gathering', title: 'Dokumentasi Gathering 61' },
    { id: 62, src: 'assets/img/dokumentasi/gambar62.jpg', category: 'gathering', title: 'Dokumentasi Gathering 62' },
    { id: 63, src: 'assets/img/dokumentasi/gambar63.jpg', category: 'gathering', title: 'Dokumentasi Gathering 63' },
    { id: 64, src: 'assets/img/dokumentasi/gambar64.jpg', category: 'gathering', title: 'Dokumentasi Gathering 64' },
    { id: 65, src: 'assets/img/dokumentasi/gambar65.jpg', category: 'gathering', title: 'Dokumentasi Gathering 65' },
    { id: 66, src: 'assets/img/dokumentasi/gambar66.jpg', category: 'gathering', title: 'Dokumentasi Gathering 66' },
    { id: 67, src: 'assets/img/dokumentasi/gambar67.jpg', category: 'gathering', title: 'Dokumentasi Gathering 67' },
    { id: 68, src: 'assets/img/dokumentasi/gambar68.jpg', category: 'gathering', title: 'Dokumentasi Gathering 68' },
    { id: 69, src: 'assets/img/dokumentasi/gambar69.jpg', category: 'gathering', title: 'Dokumentasi Gathering 69' },
    { id: 70, src: 'assets/img/dokumentasi/gambar70.jpg', category: 'gathering', title: 'Dokumentasi Gathering 70' }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');
    const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const galleryLoading = document.getElementById('galleryLoading');
    
    let currentImageIndex = 0;
    let currentFilter = 'all';
    let filteredImages = [...galleryImages];
    
    if (galleryContainer) {
        // Initial render
        renderGallery(filteredImages);
        
        // Setup filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update current filter
                currentFilter = filter;
                
                // Filter images
                if (filter === 'all') {
                    filteredImages = [...galleryImages];
                } else {
                    filteredImages = galleryImages.filter(img => img.category === filter);
                }
                
                // Show loading
                if (galleryLoading) {
                    galleryLoading.style.display = 'flex';
                    galleryContainer.innerHTML = '';
                }
                
                // Render with delay for loading effect
                setTimeout(() => {
                    renderGallery(filteredImages);
                    if (galleryLoading) {
                        galleryLoading.style.display = 'none';
                    }
                }, 300);
            });
        });
        
        // Setup lightbox
        if (lightbox && lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
            
            // Close lightbox when clicking outside image
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (lightbox.style.display === 'flex') {
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowLeft') showPrevImage();
                    if (e.key === 'ArrowRight') showNextImage();
                }
            });
            
            // Navigation buttons
            if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);
            if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
            
            // Touch/swipe support
            let touchStartX = 0;
            let touchEndX = 0;
            
            lightbox.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            lightbox.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next image
                        showNextImage();
                    } else {
                        // Swipe right - previous image
                        showPrevImage();
                    }
                }
            }
        }
        
        // Lazy load images
        initLazyLoadGallery();
    }
});

// Render gallery images
function renderGallery(images) {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (images.length === 0) {
        container.innerHTML = `
            <div class="no-images">
                <p>Tidak ada gambar yang ditemukan untuk kategori ini.</p>
            </div>
        `;
        return;
    }
    
    images.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        container.appendChild(galleryItem);
    });
    
    // Reinitialize animations
    setTimeout(() => {
        initGalleryAnimations();
    }, 100);
}

// Create gallery item element
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item stagger-item';
    item.dataset.category = image.category;
    item.dataset.index = index;
    
    // Get category icon
    const categoryIcon = getGalleryCategoryIcon(image.category);
    
    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}" loading="lazy" class="lazy-load">
        <div class="gallery-item-overlay">
            <div class="gallery-item-info">
                <div class="gallery-item-category">${categoryIcon} ${getGalleryCategoryName(image.category)}</div>
                <div class="gallery-item-title">${image.title}</div>
            </div>
        </div>
    `;
    
    // Add click event for lightbox
    item.addEventListener('click', () => {
        openLightbox(index);
    });
    
    return item;
}

// Open lightbox
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxCategory = document.getElementById('lightboxCategory');
    
    if (!lightbox || !lightboxImage || !filteredImages.length) return;
    
    // Update current index
    currentImageIndex = index;
    
    // Update image
    const image = filteredImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.title;
    
    // Update counter
    if (lightboxCounter) {
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
    }
    
    // Update category
    if (lightboxCategory) {
        lightboxCategory.textContent = `${getGalleryCategoryIcon(image.category)} ${getGalleryCategoryName(image.category)}`;
    }
    
    // Show lightbox
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Preload next and previous images
    preloadLightboxImages();
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Show previous image
function showPrevImage() {
    if (filteredImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightbox();
}

// Show next image
function showNextImage() {
    if (filteredImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightbox();
}

// Update lightbox content
function updateLightbox() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxCategory = document.getElementById('lightboxCategory');
    
    if (!lightboxImage || !filteredImages[currentImageIndex]) return;
    
    const image = filteredImages[currentImageIndex];
    
    // Add fade out effect
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.title;
        lightboxImage.style.opacity = '1';
        
        if (lightboxCounter) {
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
        }
        
        if (lightboxCategory) {
            lightboxCategory.textContent = `${getGalleryCategoryIcon(image.category)} ${getGalleryCategoryName(image.category)}`;
        }
        
        // Preload adjacent images
        preloadLightboxImages();
    }, 200);
}

// Preload images for lightbox
function preloadLightboxImages() {
    if (filteredImages.length < 3) return;
    
    const preloadIndices = [
        (currentImageIndex - 1 + filteredImages.length) % filteredImages.length,
        (currentImageIndex + 1) % filteredImages.length
    ];
    
    preloadIndices.forEach(index => {
        const img = new Image();
        img.src = filteredImages[index].src;
    });
}

// Initialize gallery animations
function initGalleryAnimations() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
        item.classList.add('stagger-item');
    });
}

// Initialize lazy loading for gallery
function initLazyLoadGallery() {
    const lazyImages = document.querySelectorAll('.gallery-item img.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src') || img.src;
                    
                    // Load image
                    img.src = src;
                    img.classList.add('loaded');
                    
                    // Remove data-src to prevent reloading
                    img.removeAttribute('data-src');
                    
                    // Stop observing
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        lazyImages.forEach(img => {
            // Store original src in data-src
            if (!img.hasAttribute('data-src')) {
                img.setAttribute('data-src', img.src);
                // Set placeholder or low quality src
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==';
            }
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src') || img.src;
            img.classList.add('loaded');
        });
    }
}

// Helper functions
function getGalleryCategoryIcon(category) {
    const icons = {
        'pulau': '🏝️',
        'gunung': '🏔️',
        'gathering': '👨‍👩‍👧‍👦'
    };
    return icons[category] || '📸';
}

function getGalleryCategoryName(category) {
    const names = {
        'pulau': 'Pulau',
        'gunung': 'Gunung',
        'gathering': 'Gathering'
    };
    return names[category] || 'Galeri';
}

// Update gallery stats counters
function updateGalleryStats() {
    const stats = {
        'pulau': galleryImages.filter(img => img.category === 'pulau').length,
        'gunung': galleryImages.filter(img => img.category === 'gunung').length,
        'gathering': galleryImages.filter(img => img.category === 'gathering').length,
        'total': galleryImages.length
    };
    
    // Update counter elements if they exist
    const totalCounter = document.querySelector('.stat-number[data-count="70"]');
    const gunungCounter = document.querySelector('.stat-number[data-count="36"]');
    const pulauCounter = document.querySelector('.stat-number[data-count="22"]');
    const gatheringCounter = document.querySelector('.stat-number[data-count="12"]');
    
    if (totalCounter) totalCounter.textContent = stats.total;
    if (gunungCounter) gunungCounter.textContent = stats.gunung;
    if (pulauCounter) pulauCounter.textContent = stats.pulau;
    if (gatheringCounter) gatheringCounter.textContent = stats.gathering;
}

// Initialize gallery stats
document.addEventListener('DOMContentLoaded', updateGalleryStats);

// Export for global access
window.GalleryManager = {
    galleryImages,
    openLightbox,
    closeLightbox,
    filterGallery: (category) => {
        if (category === 'all') {
            filteredImages = [...galleryImages];
        } else {
            filteredImages = galleryImages.filter(img => img.category === category);
        }
        renderGallery(filteredImages);
    }
};