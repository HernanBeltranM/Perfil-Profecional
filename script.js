// ========================================
// Variables Globales
// ========================================
const typingTexts = [
    'Backend Developer',
    'Java Specialist',
    'SQL Expert',
    'Frontend Developer',
    'Lifelong Learner'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

// ========================================
// Efecto de escritura (Typing Effect)
// ========================================
function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pausa al final
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

// ========================================
// Navegación Móvil
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// Scroll Suave y Cambio de Color en Navbar
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
});

// ========================================
// Animación de Barras de Habilidades
// ========================================
const skillsSection = document.querySelector('.skills-section');
let skillsAnimated = false;

const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
};

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateSkills();
            skillsAnimated = true;
        }
    });
}, observerOptions);

if (skillsSection) {
    observer.observe(skillsSection);
}

// ========================================
// Animación de Entrada para Elementos
// ========================================
const observeElements = () => {
    const elements = document.querySelectorAll('.skill-category, .timeline-item, .education-card, .project-card, .article-card, .testimonial-card, .contact-item');

    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        elementObserver.observe(element);
    });
};

// ========================================
// Linternas Japonesas de Fondo Animadas
// ========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20; // Menos linternas para mejor rendimiento

    for (let i = 0; i < particleCount; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'japanese-lantern';

        const size = Math.random() * 30 + 40; // Tamaño entre 40-70px
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 15 + 20; // Movimiento más lento
        const delay = Math.random() * 5;
        const rotation = Math.random() * 20 - 10; // Rotación entre -10 y 10 grados

        lantern.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 1.3}px;
            left: ${posX}%;
            top: ${posY}%;
            animation: float-lantern ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
            transform: rotate(${rotation}deg);
            opacity: 0.7;
        `;

        // Crear estructura de linterna japonesa con divs
        lantern.innerHTML = `
            <div class="lantern-top"></div>
            <div class="lantern-body"></div>
            <div class="lantern-bottom"></div>
            <div class="lantern-light"></div>
        `;

        particlesContainer.appendChild(lantern);
    }

    // Agregar estilos de animación y estructura de linternas
    const style = document.createElement('style');
    style.textContent = `
        .japanese-lantern {
            filter: drop-shadow(0 0 10px rgba(255, 100, 50, 0.4));
        }

        .lantern-top {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 15%;
            background: linear-gradient(to bottom, #8B4513, #A0522D);
            border-radius: 50% 50% 0 0;
        }

        .lantern-body {
            position: absolute;
            top: 12%;
            left: 10%;
            width: 80%;
            height: 70%;
            background: linear-gradient(135deg, #ff6347 0%, #ff4500 50%, #dc143c 100%);
            border-radius: 5px;
            box-shadow: inset 0 0 20px rgba(255, 255, 100, 0.3);
        }

        .lantern-body::before {
            content: '';
            position: absolute;
            top: 10%;
            left: 10%;
            right: 10%;
            height: 25%;
            background: rgba(139, 69, 19, 0.3);
            border-radius: 2px;
        }

        .lantern-body::after {
            content: '';
            position: absolute;
            bottom: 10%;
            left: 10%;
            right: 10%;
            height: 25%;
            background: rgba(139, 69, 19, 0.3);
            border-radius: 2px;
        }

        .lantern-bottom {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 18%;
            background: linear-gradient(to top, #8B4513, #A0522D);
            border-radius: 0 0 50% 50%;
        }

        .lantern-light {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60%;
            height: 60%;
            background: radial-gradient(circle, rgba(255, 255, 150, 0.5) 0%, transparent 70%);
            border-radius: 50%;
            animation: lantern-glow 3s ease-in-out infinite;
        }

        @keyframes lantern-glow {
            0%, 100% {
                opacity: 0.4;
                transform: translate(-50%, -50%) scale(1);
            }
            50% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(1.1);
            }
        }

        @keyframes float-lantern {
            0%, 100% {
                transform: translate(0, 0) rotate(var(--rotation, 0deg));
                opacity: 0.7;
            }
            25% {
                transform: translate(15px, -25px) rotate(calc(var(--rotation, 0deg) + 5deg));
                opacity: 0.9;
            }
            50% {
                transform: translate(-15px, 10px) rotate(calc(var(--rotation, 0deg) - 3deg));
                opacity: 0.6;
            }
            75% {
                transform: translate(10px, 20px) rotate(calc(var(--rotation, 0deg) + 4deg));
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// Highlighting del Link Activo en la Navegación
// ========================================
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ========================================
// Efecto de Parallax Suave (ajustado para evitar corte)
// ========================================
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.profile-image-wrapper');

    parallaxElements.forEach(element => {
        // Reducir el efecto parallax para evitar que la imagen se salga
        const speed = 0.15; // Reducido de 0.5 a 0.15
        const maxScroll = 300; // Limitar el efecto después de cierto scroll
        const effectiveScroll = Math.min(scrolled, maxScroll);
        element.style.transform = `translateY(${effectiveScroll * speed}px)`;
    });
}

window.addEventListener('scroll', parallaxEffect);

// ========================================
// Contador de Estadísticas (si se agregan más adelante)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// Smooth Scroll para Safari
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Efecto de Hover en Cards
// ========================================
function addCardEffects() {
    const cards = document.querySelectorAll('.skill-category, .education-card, .project-card, .article-card, .testimonial-card, .timeline-content');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ========================================
// Preloader (opcional)
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Fade in effect
    const fadeElements = document.querySelectorAll('.hero-content, .section');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 100);
    });
});

// ========================================
// Cursor personalizado (efecto extra)
// ========================================
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #f4a261;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Expandir cursor en hover sobre elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(244, 162, 97, 0.2)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}

// ========================================
// Protección básica anti-copia (disuasiva)
// ========================================
function hardenFrontendAccess() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        const ctrlOrMeta = event.ctrlKey || event.metaKey;

        // Bloquea atajos comunes para copiar/ver código.
        if (
            key === 'f12' ||
            (ctrlOrMeta && event.shiftKey && ['i', 'j', 'c'].includes(key)) ||
            (ctrlOrMeta && ['u', 's', 'c', 'x'].includes(key))
        ) {
            event.preventDefault();
        }
    });

    // Heurística básica para detectar apertura de DevTools.
    setInterval(() => {
        const widthGap = window.outerWidth - window.innerWidth;
        const heightGap = window.outerHeight - window.innerHeight;

        if (widthGap > 160 || heightGap > 160) {
            document.body.innerHTML = '<div style="font-family: sans-serif; padding: 2rem; text-align: center;">Acceso restringido.</div>';
        }
    }, 1000);
}

// ========================================
// Testimonios: un comentario por navegador (cookie)
// ========================================
const TESTIMONIAL_COOKIE_NAME = 'hb_testimonial_user';
const TESTIMONIAL_STORAGE_KEY = 'hb_testimonial_data';

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    const cookies = document.cookie ? document.cookie.split('; ') : [];
    for (let i = 0; i < cookies.length; i++) {
        const [key, ...rest] = cookies[i].split('=');
        if (key === name) {
            return decodeURIComponent(rest.join('='));
        }
    }
    return null;
}

function generateUserId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID();
    }
    return `u_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function safeParseJSON(value) {
    try {
        return JSON.parse(value);
    } catch (_error) {
        return null;
    }
}

function getStoredTestimonials() {
    const raw = localStorage.getItem(TESTIMONIAL_STORAGE_KEY);
    const parsed = raw ? safeParseJSON(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
}

function saveStoredTestimonials(testimonials) {
    localStorage.setItem(TESTIMONIAL_STORAGE_KEY, JSON.stringify(testimonials));
}

function upsertTestimonialData(userId, name, comment) {
    const testimonials = getStoredTestimonials();
    const existingIndex = testimonials.findIndex(item => item.userId === userId);
    const payload = {
        userId,
        name,
        comment,
        updatedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
        testimonials[existingIndex] = payload;
    } else {
        testimonials.push(payload);
    }
    saveStoredTestimonials(testimonials);
}

function getTestimonialByUserId(userId) {
    const testimonials = getStoredTestimonials();
    return testimonials.find(item => item.userId === userId) || null;
}

function renderUserTestimonial(testimonial, userId) {
    if (!testimonial) {
        return;
    }

    const grid = document.querySelector('.testimonials-grid');
    if (!grid) {
        return;
    }

    const existingCard = grid.querySelector(`[data-user-id="${userId}"]`);
    const card = existingCard || document.createElement('article');
    card.className = 'testimonial-card testimonial-card--mine';
    card.setAttribute('data-user-id', userId);
    card.innerHTML = `
        <p class="testimonial-text">"${testimonial.comment}"</p>
        <h3 class="testimonial-author">${testimonial.name} (Tu comentario)</h3>
    `;

    if (!existingCard) {
        grid.appendChild(card);
    }
}

function updateFormMode(hasComment) {
    const submitBtn = document.getElementById('testimonialSubmitBtn');
    const help = document.getElementById('testimonialFormHelp');

    if (!submitBtn || !help) {
        return;
    }

    if (hasComment) {
        submitBtn.innerHTML = '<i class="fas fa-pen"></i> Actualizar comentario';
        help.textContent = 'Ya tienes un comentario en este navegador. Solo puedes editar ese mismo comentario.';
    } else {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Publicar comentario';
        help.textContent = 'Puedes publicar un solo comentario desde este navegador y luego editarlo cuando quieras.';
    }
}

function setFeedback(message, type) {
    const feedback = document.getElementById('testimonialFeedback');
    if (!feedback) {
        return;
    }

    feedback.textContent = message;
    feedback.classList.remove('success', 'error');
    if (type) {
        feedback.classList.add(type);
    }
}

function initTestimonialsForm() {
    const form = document.getElementById('testimonialForm');
    const nameInput = document.getElementById('testimonialName');
    const commentInput = document.getElementById('testimonialComment');

    if (!form || !nameInput || !commentInput) {
        return;
    }

    const userId = getCookie(TESTIMONIAL_COOKIE_NAME);
    const existing = userId ? getTestimonialByUserId(userId) : null;

    if (existing) {
        nameInput.value = existing.name;
        commentInput.value = existing.comment;
        renderUserTestimonial(existing, userId);
    }

    updateFormMode(Boolean(existing));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (!name || !comment) {
            setFeedback('Completa nombre y comentario antes de enviar.', 'error');
            return;
        }

        const normalizedUserId = getCookie(TESTIMONIAL_COOKIE_NAME) || generateUserId();
        if (!getCookie(TESTIMONIAL_COOKIE_NAME)) {
            setCookie(TESTIMONIAL_COOKIE_NAME, normalizedUserId, 365);
        }

        const payload = { userId: normalizedUserId, name, comment };
        upsertTestimonialData(payload.userId, payload.name, payload.comment);
        renderUserTestimonial(payload, payload.userId);
        updateFormMode(true);
        setFeedback('Tu comentario fue guardado. Desde este navegador solo podrás editar este mismo comentario.', 'success');
    });
}

// ========================================
// Inicialización
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    observeElements();
    createParticles();
    addCardEffects();
    initTestimonialsForm();
    hardenFrontendAccess();
    // createCustomCursor(); // Descomentar si se desea cursor personalizado

    console.log('%c¡Hola! 👋', 'color: #f4a261; font-size: 24px; font-weight: bold;');
    console.log('%cGracias por visitar mi CV', 'color: #2a9d8f; font-size: 16px;');
    console.log('%c- Hernán Beltrán', 'color: #8fa1b5; font-size: 14px; font-style: italic;');
});

// ========================================
// Efecto de escritura en consola
// ========================================
setTimeout(() => {
    console.log('%cTecnologías: Java | SQL | HTML | CSS | Bootstrap', 'color: #f4a261; font-size: 12px;');
}, 1000);
