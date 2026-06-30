// ============================================
// CONFIG — Cambia estos valores con tus datos
// ============================================
const CONFIG = {
    whatsappNumber: '584146062297',      // Tu número con código de país, ej: 584121234567
    discordInvite: 'a8hfUAFCU7',        // Código de invite de Discord
    discordUser: '@bleed.x',         // Tu usuario de Discord
    email: 'pirelaelias2@email.com',     // Tu email

    // URLs de redes sociales y enlaces externos centralizados
    socials: {
        youtube: 'https://youtube.com/@seadeveloper?si=-EJITZ7Qt4kiKVBB',
      //  twitter: 'https://x.com/bleedx',
        discord: 'https://discord.gg/a8hfUAFCU7',
        whatsapp: 'https://wa.me/584146062297',
      //  twitch: 'https://www.twitch.tv/bleedx',
        tiktok: 'https://www.tiktok.com/@bleed.x',
      //  paypal: 'https://www.paypal.com/donate/?business=pirelaelias2@email.com&item_name=Support+bleed.x&currency_code=USD',
        spotify: 'https://open.spotify.com/user/312bf2gezlhrjpi67pjl5srwwtvm?si=l9QdEoHpTom8U-N43IWM0w',
        instagram: 'https://www.instagram.com/bleed.xc/',
        github: 'https://github.com/bleeddx',
        email: 'mailto:pirelaelias2@email.com'
    }
};

const TRANSLATIONS = {
    es: {
        'meta.title': 'bleed.x | Creador de Servidores Discord',
        'meta.description': 'bleed.x — Creador profesional de servidores de Discord. Diseño, configuración y bots personalizados. Contacta para tu proyecto.',
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.services': 'Servicios',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'menu.close': 'Cerrar menú',
        'menu.toggle': 'Abrir menú',
        'hero.bio': 'Creador de servidores de Discord · Manda mensaje para más información.',
        'hero.discordStatus': 'Jugando algo...',
        'hero.scroll': 'Scroll',
        'about.tag': 'Sobre Mí',
        'about.title': 'Creador de <span class="accent">Experiencias</span> en Discord',
        'about.text': 'Soy un creador profesional de servidores de Discord con experiencia en diseño, configuración avanzada, bots personalizados y sistemas de moderación. Transformo ideas en comunidades vibrantes y funcionales.',
        'about.status': 'Disponible',
        'services.tag': 'Servicios',
        'services.title': 'Lo Que <span class="accent">Ofrezco</span>',
        'services.priceFrom': 'Desde',
        'services.badgePopular': 'Popular',
        'projects.tag': 'Proyectos',
        'projects.filterAll': 'Todos',
        'projects.filterGaming': 'Gaming',
        'projects.filterCommunity': 'Comunidad',
        'projects.filterAnime': 'Anime',
        'projects.filterMusic': 'Música',
        'project.actionJoin': 'Unirse',
        'project.actionOrder': 'Pedir Similar',
        'contact.tag': 'Contacto',
        'contact.title': 'Haz Tu <span class="accent">Pedido</span>',
        'contact.ready': '¿Listo para tu servidor?',
        'contact.copy': 'Contáctame por cualquiera de estos medios y cuéntame tu idea. Te respondo en menos de 24 horas.',
        'contact.whatsappDetail': 'Respuesta rápida',
        'contact.emailDetail': 'Para presupuestos formales',
        'contact.trust1': 'Pago seguro',
        'contact.trust2': 'Entrega rápida',
        'contact.trust3': 'Soporte post-venta',
        'form.title': 'Formulario de Pedido',
        'form.nameLabel': 'Tu nombre',
        'form.namePlaceholder': '¿Cómo te llamo?',
        'form.contactTypeLabel': 'Contacto preferido',
        'form.contactTypeSelect': 'Seleccionar...',
        'form.contactValueLabel': 'Tu contacto',
        'form.contactValuePlaceholder': 'Número / Tag / Email',
        'form.serverTypeLabel': 'Tipo de servidor',
        'form.serverTypePlaceholder': '¿Qué tipo de servidor necesitas?',
        'form.serverTypeOptionGaming': '🎮 Gaming',
        'form.serverTypeOptionCommunity': '👥 Comunidad Social',
        'form.serverTypeOptionAnime': '🎌 Anime / Manga',
        'form.serverTypeOptionMusic': '🎵 Música',
        'form.serverTypeOptionBusiness': '💼 Negocio / Marca',
        'form.serverTypeOptionRoleplay': '🎭 Roleplay',
        'form.serverTypeOptionEducation': '📚 Educación',
        'form.serverTypeOptionOther': '✨ Otro',
        'form.serverNameLabel': 'Nombre del servidor',
        'form.serverNamePlaceholder': 'Nombre que deseas para tu servidor',
        'form.descriptionLabel': 'Describe tu idea',
        'form.descriptionPlaceholder': 'Cuéntame qué quieres para tu servidor: temática, canales especiales, bots, etc.',
        'form.extraLabel': 'Servicios adicionales',
        'form.budgetLabel': 'Presupuesto aproximado (USD)',
        'form.budgetSelect': 'Seleccionar rango...',
        'form.budgetOption1': '$5 - $15',
        'form.budgetOption2': '$15 - $30',
        'form.budgetOption3': '$30 - $50',
        'form.budgetOption4': '$50+',
        'form.budgetOption5': 'A convenir',
        'form.submit': 'Enviar Pedido',
        'form.sending': 'Enviando...',
        'form.note': 'Al enviar, se abrirá WhatsApp o Discord con tu pedido listo.',
        'footer.copy': '© 2025 bleed.x · Creador de Servidores Discord',
        'modal.title': 'Pedir Servidor Similar',
        'modal.reference': 'Referencia: ',
        'modal.nameLabel': 'Tu nombre',
        'modal.detailsLabel': '¿Qué cambios quieres?',
        'modal.whatsapp': 'Pedir por WhatsApp',
        'modal.discord': 'Pedir por Discord',
        'contact.methodWhatsApp': 'WhatsApp',
        'contact.methodDiscord': 'Discord',
        'contact.methodEmail': 'Email',
        'toast.success': '¡Pedido preparado!'
    },
    en: {
        'meta.title': 'bleed.x | Discord Server Creator',
        'meta.description': 'bleed.x — Professional Discord server creator. Design, customization and bots tailored for your project.',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'menu.close': 'Close menu',
        'menu.toggle': 'Open menu',
        'hero.bio': 'Discord server creator · DM for more information.',
        'hero.discordStatus': 'Playing something...',
        'hero.scroll': 'Scroll',
        'about.tag': 'About',
        'about.title': 'Creator of <span class="accent">Experiences</span> on Discord',
        'about.text': 'I am a professional Discord server creator with experience in design, advanced configuration, custom bots, and moderation systems. I turn ideas into vibrant, functional communities.',
        'about.status': 'Available',
        'services.tag': 'Services',
        'services.title': 'What I <span class="accent">Offer</span>',
        'services.priceFrom': 'From',
        'services.badgePopular': 'Popular',
        'projects.tag': 'Projects',
        'projects.filterAll': 'All',
        'projects.filterGaming': 'Gaming',
        'projects.filterCommunity': 'Community',
        'projects.filterAnime': 'Anime',
        'projects.filterMusic': 'Music',
        'project.actionJoin': 'Join',
        'project.actionOrder': 'Order Similar',
        'contact.tag': 'Contact',
        'contact.title': 'Make Your <span class="accent">Order</span>',
        'contact.ready': 'Ready for your server?',
        'contact.copy': 'Contact me through any of these channels and share your idea. I reply within 24 hours.',
        'contact.whatsappDetail': 'Quick response',
        'contact.emailDetail': 'For formal quotes',
        'contact.trust1': 'Secure payment',
        'contact.trust2': 'Fast delivery',
        'contact.trust3': 'Post-sale support',
        'form.title': 'Order Form',
        'form.nameLabel': 'Your name',
        'form.contactTypeLabel': 'Preferred contact',
        'form.contactTypeSelect': 'Choose...',
        'form.contactValueLabel': 'Your contact',
        'form.serverTypeLabel': 'Server type',
        'form.serverTypePlaceholder': 'What type of server do you need?',
        'form.serverTypeOptionGaming': '🎮 Gaming',
        'form.serverTypeOptionCommunity': '👥 Social Community',
        'form.serverTypeOptionAnime': '🎌 Anime / Manga',
        'form.serverTypeOptionMusic': '🎵 Music',
        'form.serverTypeOptionBusiness': '💼 Business / Brand',
        'form.serverTypeOptionRoleplay': '🎭 Roleplay',
        'form.serverTypeOptionEducation': '📚 Education',
        'form.serverTypeOptionOther': '✨ Other',
        'form.serverNameLabel': 'Server name',
        'form.serverNamePlaceholder': 'Name you want for your server',
        'form.descriptionLabel': 'Describe your idea',
        'form.descriptionPlaceholder': 'Tell me what you want for your server: theme, special channels, bots, etc.',
        'form.extraLabel': 'Additional services',
        'form.budgetLabel': 'Estimated budget (USD)',
        'form.budgetSelect': 'Choose a range...',
        'form.budgetOption1': '$5 - $15',
        'form.budgetOption2': '$15 - $30',
        'form.budgetOption3': '$30 - $50',
        'form.budgetOption4': '$50+',
        'form.budgetOption5': 'To agree',
        'form.submit': 'Send Order',
        'form.sending': 'Sending...',
        'form.note': 'On submit, WhatsApp or Discord will open with your order ready.',
        'footer.copy': '© 2025 bleed.x · Discord Server Creator',
        'modal.title': 'Order Similar Server',
        'modal.reference': 'Reference: ',
        'modal.nameLabel': 'Your name',
        'modal.detailsLabel': 'What changes do you want?',
        'modal.whatsapp': 'Order via WhatsApp',
        'modal.discord': 'Order via Discord',
        'contact.methodWhatsApp': 'WhatsApp',
        'contact.methodDiscord': 'Discord',
        'contact.methodEmail': 'Email',
        'toast.success': 'Order ready!'
    }
};

function getSavedLanguage() {
    const saved = localStorage.getItem('pageLanguage');
    if (saved && TRANSLATIONS[saved]) return saved;
    if (navigator.language && navigator.language.startsWith('en')) return 'en';
    return 'es';
}

function updateLangButtons(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === activeLang);
    });
}

function translatePage(lang) {
    const translations = TRANSLATIONS[lang] || TRANSLATIONS.es;
    document.documentElement.lang = lang;
    document.title = translations['meta.title'] || document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = translations['meta.description'] || metaDescription.content;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[key];
        if (!value) return;
        el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.dataset.i18nAria;
        const value = translations[key];
        if (value) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const value = translations[key];
        if (value) el.placeholder = value;
    });

    updateLangButtons(lang);
    localStorage.setItem('pageLanguage', lang);
}

function initLanguageSwitcher() {
    const defaultLang = getSavedLanguage();
    translatePage(defaultLang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang) translatePage(lang);
        });
    });
}

// ============================================
// Particle System
// ============================================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 18000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        const isDark = Math.random() < 0.2;
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            size: Math.random() * (isDark ? 3 : 2.5) + 1,
            speedX: (Math.random() - 0.5) * (isDark ? 0.15 : 0.35),
            speedY: (Math.random() - 0.5) * (isDark ? 0.15 : 0.35) - 0.12,
            opacity: Math.random() * 0.45 + (isDark ? 0.05 : 0.15),
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.005,
            colorType: isDark ? 'black' : 'orange'
        };
    }

    update() {
        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += p.pulseSpeed;

            if (p.x < -10) p.x = this.canvas.width + 10;
            if (p.x > this.canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = this.canvas.height + 10;
            if (p.y > this.canvas.height + 10) p.y = -10;

            const dx = p.x - this.mouseX;
            const dy = p.y - this.mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const force = (120 - dist) / 120 * 0.02;
                p.x += dx * force;
                p.y += dy * force;
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            const currentOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
            const isDark = p.colorType === 'black';
            const glowColor = isDark ? `rgba(20, 20, 20, ${currentOpacity * 0.55})` : `rgba(255, 107, 53, ${currentOpacity * 0.5})`;
            const dotColor = isDark ? `rgba(35, 35, 35, ${Math.max(0.18, currentOpacity)})` : `rgba(255, 140, 90, ${currentOpacity})`;
            const borderColor = isDark ? `rgba(255,255,255,${currentOpacity * 0.05})` : `rgba(255, 140, 90, ${currentOpacity * 0.75})`;

            this.ctx.beginPath();
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
            gradient.addColorStop(0, glowColor);
            gradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = gradient;
            this.ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.fillStyle = dotColor;
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.strokeStyle = borderColor;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
        });

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.06;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    setMouse(x, y) {
        this.mouseX = x;
        this.mouseY = y;
    }
}

// ============================================
// Scroll Reveal
// ============================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ============================================
// Stats Counter
// ============================================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(eased * target);
        
        if (target >= 1000) {
            el.textContent = (current / 1000).toFixed(1) + 'K';
        } else {
            el.textContent = current + '+';
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            if (target >= 1000) {
                el.textContent = (target / 1000).toFixed(target % 1000 === 0 ? 0 : 1) + 'K+';
            } else {
                el.textContent = target + '+';
            }
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// WhatsApp API Message Builder
// ============================================
function buildWhatsAppURL(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

function buildDiscordURL() {
    if (CONFIG.socials && CONFIG.socials.discord && CONFIG.socials.discord !== '#') {
        return CONFIG.socials.discord;
    }
    if (CONFIG.discordInvite && CONFIG.discordInvite !== 'TUINVITE') {
        return `https://discord.gg/${CONFIG.discordInvite}`;
    }
    return '#';
}

function buildEmailURL() {
    if (CONFIG.socials && CONFIG.socials.email && CONFIG.socials.email !== '#') {
        return CONFIG.socials.email;
    }
    if (CONFIG.email && CONFIG.email !== 'tu@email.com') {
        return `mailto:${CONFIG.email}`;
    }
    return '#';
}

function initContactLinks() {
    const defaultMessage = 'Hola bleed.x, me interesa un servidor de Discord. 🎮';
    const whatsappLink = document.getElementById('whatsappLink');
    const discordLink = document.getElementById('discordLink');
    const emailLink = document.getElementById('emailLink');
    const footerWhatsappLink = document.getElementById('footerWhatsappLink');
    const socialWhatsappLink = document.querySelector('.social-link.whatsapp');

    if (whatsappLink) {
        whatsappLink.href = buildWhatsAppURL(defaultMessage);
    }

    if (discordLink) {
        discordLink.href = buildDiscordURL();
    }

    if (emailLink) {
        emailLink.href = buildEmailURL();
    }

    if (footerWhatsappLink) {
        footerWhatsappLink.href = `https://wa.me/${CONFIG.whatsappNumber}`;
    }

    if (socialWhatsappLink) {
        socialWhatsappLink.href = buildWhatsAppURL(defaultMessage);
    }
}

function initSocialLinks() {
    const defaultMessage = 'Hola bleed.x, me interesa un servidor de Discord. 🎮';
    document.querySelectorAll('[data-social]').forEach(a => {
        const key = a.getAttribute('data-social');
        if (!key) return;

        switch (key) {
            case 'whatsapp':
                a.href = buildWhatsAppURL(defaultMessage);
                break;
            case 'discord':
                a.href = buildDiscordURL();
                break;
            case 'email':
                a.href = buildEmailURL();
                break;
            default:
                if (CONFIG.socials && CONFIG.socials[key]) {
                    a.href = CONFIG.socials[key];
                } else {
                    a.href = '#';
                }
        }
    });
}

// ============================================
// Order Modal
// ============================================
function openOrderModal(serverName) {
    const modal = document.getElementById('orderModal');
    const modalServerName = document.getElementById('modalServerName');
    modalServerName.textContent = serverName;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update modal links
    updateModalLinks(serverName);
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalLinks(serverName) {
    const name = document.getElementById('modalName').value || 'Cliente';
    const details = document.getElementById('modalDetails').value || 'Sin detalles adicionales';
    
    const message = `🛒 *PEDIDO DE SERVIDOR*\n\n` +
        `📋 *Referencia:* ${serverName}\n` +
        `👤 *Nombre:* ${name}\n` +
        `📝 *Personalizaciones:*\n${details}\n\n` +
        `Enviado desde el portfolio de bleed.x`;
    
    document.getElementById('modalWhatsApp').href = buildWhatsAppURL(message);
    document.getElementById('modalDiscord').href = buildDiscordURL();
}

// ============================================
// Order Form Submit
// ============================================
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = document.getElementById('orderForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Gather form data
    const clientName = document.getElementById('clientName').value;
    const contactType = document.getElementById('contactType').value;
    const contactValue = document.getElementById('contactValue').value;
    const serverType = document.getElementById('serverType').value;
    const serverName = document.getElementById('serverName').value || 'Por definir';
    const description = document.getElementById('description').value;
    const budget = document.getElementById('budget').value || 'A convenir';
    
    // Gather checkboxes
    const extras = [];
    document.querySelectorAll('.checkbox-item input:checked').forEach(cb => {
        extras.push(cb.value);
    });
    
    // Build message
    const message = `🎯 *NUEVO PEDIDO DE SERVIDOR*\n\n` +
        `👤 *Cliente:* ${clientName}\n` +
        `📱 *Contacto (${contactType}):* ${contactValue}\n` +
        `🎮 *Tipo:* ${serverType}\n` +
        `📛 *Nombre:* ${serverName}\n` +
        `📝 *Descripción:*\n${description}\n` +
        `✨ *Extras:* ${extras.length > 0 ? extras.join(', ') : 'Ninguno'}\n` +
        `💰 *Presupuesto:* ${budget}\n\n` +
        `Enviado desde el portfolio de bleed.x ✨`;
    
    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    
    setTimeout(() => {
        btnText.style.display = 'inline-flex';
        btnLoading.style.display = 'none';
        
        // Open WhatsApp or Discord based on contact preference
        if (contactType === 'whatsapp') {
            window.open(buildWhatsAppURL(message), '_blank');
        } else if (contactType === 'discord') {
            window.open(buildDiscordURL(), '_blank');
            // Copy message to clipboard for Discord
            navigator.clipboard.writeText(message.replace(/\*/g, '**')).then(() => {
                showToast('¡Mensaje copiado! Pégalo en Discord 📋');
            });
        } else {
            const subject = encodeURIComponent('Nuevo Pedido de Servidor Discord');
            const body = encodeURIComponent(message.replace(/\*/g, ''));
            window.open(`mailto:${CONFIG.email}?subject=${subject}&body=${body}`, '_blank');
        }
        
        showToast('¡Pedido preparado correctamente! 🚀');
    }, 1200);
}

// ============================================
// Toast
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// ============================================
// Project Filters
// ============================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease both';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ============================================
// Navbar
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Scroll state
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link based on scroll
        const sections = document.querySelectorAll('.section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close button inside mobile menu
    const navClose = document.getElementById('navClose');
    if (navClose) {
        navClose.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    // Close on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Particles
    const canvas = document.getElementById('particles');
    const particleSystem = new ParticleSystem(canvas);
    particleSystem.animate();

    // Cursor glow
    const cursorGlow = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.classList.add('active');
        particleSystem.setMouse(e.clientX, e.clientY);
    });
    document.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('active');
    });

    // Audio toggle using a hidden audio track from the same fondo.mp4 file
    const audioToggle = document.getElementById('audioToggle');
    const audioIcon = document.getElementById('audioIcon');
    const bgVideo = document.getElementById('bgVideo');
    const bgAudio = document.getElementById('bgAudio');

    bgVideo.loop = true;
    bgVideo.muted = false;
    bgVideo.playsInline = true;
    bgVideo.preload = 'auto';

    bgAudio.loop = true;
    bgAudio.autoplay = true;
    bgAudio.preload = 'auto';
    bgAudio.volume = 0.45;
    bgAudio.muted = false;

    let audioOn = true;
    audioToggle.classList.add('playing');
    audioIcon.className = 'fas fa-pause';
    audioToggle.setAttribute('aria-pressed', 'true');

    const startBackgroundAudio = () => {
        if (!audioOn || !bgAudio || !bgVideo) return;

        bgAudio.play().catch(() => {});
        bgVideo.play().catch(() => {});
    };

    const syncAudioState = () => {
        bgAudio.muted = !audioOn;
        bgVideo.muted = !audioOn;

        if (audioOn) {
            audioIcon.className = 'fas fa-pause';
            audioToggle.classList.add('playing');
            audioToggle.setAttribute('aria-pressed', 'true');
            startBackgroundAudio();
        } else {
            audioIcon.className = 'fas fa-play';
            audioToggle.classList.remove('playing');
            audioToggle.setAttribute('aria-pressed', 'false');
            bgAudio.pause();
            bgVideo.pause();
        }
    };

    bgAudio.addEventListener('ended', () => {
        if (audioOn) {
            bgAudio.currentTime = 0;
            bgAudio.play().catch(() => {});
        }
    });

    requestAnimationFrame(() => startBackgroundAudio());
    window.addEventListener('load', startBackgroundAudio, { once: true });
    startBackgroundAudio();

    const resumeAudioOnInteraction = () => {
        if (audioOn) {
            startBackgroundAudio();
        }
    };

    document.addEventListener('pointerdown', resumeAudioOnInteraction, { once: true, passive: true });
    document.addEventListener('touchstart', resumeAudioOnInteraction, { once: true, passive: true });
    document.addEventListener('keydown', resumeAudioOnInteraction, { once: true, passive: true });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && audioOn) {
            startBackgroundAudio();
        }
    });

    window.addEventListener('pageshow', () => {
        if (audioOn) {
            startBackgroundAudio();
        }
    });

    audioToggle.addEventListener('click', () => {
        audioOn = !audioOn;
        syncAudioState();
    });

    // View counter animation
    const viewCountEl = document.getElementById('viewCount');
    const targetCount = parseInt(viewCountEl.textContent);
    let currentCount = 0;
    const increment = Math.max(1, Math.floor(targetCount / 30));
    const countInterval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(countInterval);
        }
        viewCountEl.textContent = currentCount;
    }, 40);

    // Profile card tilt
    const profileCard = document.getElementById('profileCard');
    profileCard.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;
        profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });
    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = '';
    });

    // Bio typing effect
    const bio = document.querySelector('.bio');
    const originalText = bio.textContent;
    bio.textContent = '';
    bio.style.opacity = '1';
    let charIndex = 0;
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (charIndex < originalText.length) {
                bio.textContent += originalText[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
    }, 1200);

    // Video fallback
    const video = document.getElementById('bgVideo');
    video.addEventListener('error', () => {
        const videoBg = document.querySelector('.video-bg');
        videoBg.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a0a00 25%, #0d0d0d 50%, #0a0505 75%, #0a0a0a 100%)';
        videoBg.style.backgroundSize = '400% 400%';
        videoBg.style.animation = 'gradientShift 15s ease-in-out infinite';
        video.style.display = 'none';
    });

    // Discord status rotation
    const statuses = ['Playing something...', '🎮 Gaming', '🎵 Listening to Spotify', '💻 Creating servers', '🎨 Designing'];
    let statusIndex = 0;
    const discordTag = document.querySelector('.discord-tag');
    setInterval(() => {
        statusIndex = (statusIndex + 1) % statuses.length;
        discordTag.style.opacity = '0';
        discordTag.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            discordTag.textContent = statuses[statusIndex];
            discordTag.style.opacity = '1';
        }, 300);
    }, 5000);

    // Init modules
    initNavbar();
    initScrollReveal();
    initStatsCounter();
    initProjectFilters();
    initContactLinks();
    initSocialLinks();
    initLanguageSwitcher();

    // Order form
    document.getElementById('orderForm').addEventListener('submit', handleFormSubmit);

    // Modal
    document.getElementById('modalClose').addEventListener('click', closeOrderModal);
    document.getElementById('orderModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeOrderModal();
    });

    // Update modal links on input
    document.getElementById('modalName').addEventListener('input', () => {
        const serverName = document.getElementById('modalServerName').textContent;
        updateModalLinks(serverName);
    });
    document.getElementById('modalDetails').addEventListener('input', () => {
        const serverName = document.getElementById('modalServerName').textContent;
        updateModalLinks(serverName);
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeOrderModal();
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
