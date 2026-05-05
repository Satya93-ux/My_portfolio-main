// ============================================
// DOM Content Loaded - Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initCustomCursor();
    initNavigation();
    initSmoothScroll();
    initHeroAnimations();
    initStatsCounter();
    initSkillBars();
    initProjectFilters();
    initTestimonialsSlider();
    initContactForm();
    initBackToTop();
    initRevealAnimations();
    initParallaxEffects();
    initTypingEffect();
    initTiltEffect();
    initLazyLoading();
});

// ============================================
// Preloader
// ============================================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    if (!preloader) return;
    
    // Disable scroll during loading
    document.body.classList.add('no-scroll');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
            
            // Trigger hero animations after preloader
            triggerHeroAnimations();
        }, 1800);
    });
    
    // Fallback if already loaded
    if (document.readyState === 'complete') {
        setTimeout(function() {
            preloader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
            triggerHeroAnimations();
        }, 1800);
    }
}

function triggerHeroAnimations() {
    document.body.classList.add('loaded');
}

// ============================================
// Custom Cursor
// ============================================
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update dot position immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Animate outline with lag
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, .project-card, .skill-card, .video-card, .filter-btn, .nav-toggle'
    );
    
    interactiveElements.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cursorDot.classList.add('active');
            cursorOutline.classList.add('active');
        });
        
        el.addEventListener('mouseleave', function() {
            cursorDot.classList.remove('active');
            cursorOutline.classList.remove('active');
        });
    });
    
    // Click effects
    document.addEventListener('mousedown', function() {
        cursorDot.classList.add('clicking');
        cursorOutline.classList.add('clicking');
    });
    
    document.addEventListener('mouseup', function() {
        cursorDot.classList.remove('clicking');
        cursorOutline.classList.remove('clicking');
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    let lastScroll = 0;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close menu on link click
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Update active nav link based on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 150;
        
        sections.forEach(function(section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Hero Animations
// ============================================
function initHeroAnimations() {
    // Animations are handled by CSS
    // This function can be extended for more complex animations
}

// ============================================
// Stats Counter
// ============================================
function initStatsCounter() {
    const statValues = document.querySelectorAll('.stat-value');
    
    if (statValues.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statValues.forEach(function(stat) {
        observer.observe(stat);
    });
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-value')) || 0;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        function updateCounter() {
            current += step;
            
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
}

// ============================================
// Skill Bars Animation
// ============================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.level-fill');
    
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level') || 0;
                entry.target.style.width = level + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(function(bar) {
        observer.observe(bar);
    });
}

// ============================================
// Project Filters
// ============================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    if (filterBtns.length === 0 || projects.length === 0) return;
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            
            projects.forEach(function(project, index) {
                const category = project.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    project.classList.remove('hidden');
                    project.style.animation = 'none';
                    project.offsetHeight; // Trigger reflow
                    project.style.animation = 'fadeInUp 0.5s ease forwards';
                    project.style.animationDelay = (index * 0.1) + 's';
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
}

// ============================================
// Testimonials Slider
// ============================================
function initTestimonialsSlider() {
    const slider = document.getElementById('testimonialSlider');
    const track = slider ? slider.querySelector('.testimonials-track') : null;
    const items = slider ? slider.querySelectorAll('.testimonial-item') : [];
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsContainer = document.getElementById('testimonialDots');
    
    if (!track || items.length === 0) return;
    
    let currentIndex = 0;
    let autoplayInterval;
    const totalItems = items.length;
    
    // Create dots
    if (dotsContainer) {
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    
    function updateSlider() {
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
        
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoplay();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetAutoplay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetAutoplay();
        });
    }
    
    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    }, { passive: true });
    
    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Start autoplay
    startAutoplay();
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) return;
        
        // Get submit button
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="btn-text">Sending...</span><span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(function() {
            // Show success message
            if (formSuccess) {
                formSuccess.classList.add('show');
            }
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide success message after delay
            setTimeout(function() {
                if (formSuccess) {
                    formSuccess.classList.remove('show');
                }
            }, 4000);
            
        }, 2000);
    });
    
    function validateForm() {
        const inputs = form.querySelectorAll('.form-input[required]');
        let isValid = true;
        
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                showInputError(input);
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                showInputError(input);
            } else {
                clearInputError(input);
            }
        });
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showInputError(input) {
        input.style.borderColor = 'var(--secondary)';
        input.style.animation = 'shake 0.5s ease';
        setTimeout(function() {
            input.style.animation = '';
        }, 500);
    }
    
    function clearInputError(input) {
        input.style.borderColor = '';
    }
    
    // Clear error on input
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            clearInputError(this);
        });
    });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Reveal Animations on Scroll
// ============================================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.section-label, .section-title, .about-content, .skill-card, ' +
        '.project-card, .video-card, .contact-content, .footer-content'
    );
    
    if (revealElements.length === 0) return;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(function(el) {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ============================================
// Parallax Effects
// ============================================
function initParallaxEffects() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (orbs.length === 0) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrollY = window.pageYOffset;
                
                orbs.forEach(function(orb, index) {
                    const speed = (index + 1) * 0.03;
                    orb.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// Typing Effect
// ============================================
function initTypingEffect() {
    const roleText = document.getElementById('roleText');
    
    if (!roleText) return;
    
    const roles = [
        'Flutter Development',
        'Mobile App Design',
        'UI/UX Design',
        'Cross-Platform Apps'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            roleText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// ============================================
// Tilt Effect for Cards
// ============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    if (cards.length === 0 || window.matchMedia('(hover: none)').matches) return;
    
    cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ============================================
// Lazy Loading Images
// ============================================
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        lazyImages.forEach(function(img) {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        });
    } else {
        // Fallback for older browsers
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(function(img) {
            observer.observe(img);
        });
    }
}

// ============================================
// Utility Functions
// ============================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(this, args);
        }, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

// ============================================
// Add shake animation keyframes dynamically
// ============================================
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(shakeStyle);

// ============================================
// Window Resize Handler
// ============================================
window.addEventListener('resize', debounce(function() {
    // Handle any resize-specific logic here
}, 250));

// ============================================
// Page Visibility Handler
// ============================================
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c🚀 Welcome to Aman Kumar Singh\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #00f0ff;');
console.log('%cBuilt with passion and Flutter expertise.', 'font-size: 14px; color: #ff00aa;');
console.log('%cLooking for a Flutter developer? Let\'s connect!', 'font-size: 12px; color: #a0a0b0;');