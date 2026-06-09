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
        const count = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 25000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3 - 0.15,
            opacity: Math.random() * 0.4 + 0.1,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.005
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
            
            this.ctx.beginPath();
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
            gradient.addColorStop(0, `rgba(255, 107, 53, ${currentOpacity * 0.5})`);
            gradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = gradient;
            this.ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(255, 140, 90, ${currentOpacity})`;
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
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

    // Audio toggle using the video audio track
    const audioToggle = document.getElementById('audioToggle');
    const audioIcon = document.getElementById('audioIcon');
    const bgVideo = document.getElementById('bgVideo');
    bgVideo.loop = true;
    bgVideo.addEventListener('ended', () => {
        bgVideo.currentTime = 0;
        bgVideo.play().catch(() => {});
    });

    let videoAudioOn = false;
    audioToggle.addEventListener('click', () => {
        if (videoAudioOn) {
            bgVideo.muted = true;
            audioIcon.className = 'fas fa-volume-xmark';
            audioToggle.classList.remove('playing');
        } else {
            bgVideo.muted = false;
            audioIcon.className = 'fas fa-volume-high';
            audioToggle.classList.add('playing');
            bgVideo.play().catch(() => {});
        }
        videoAudioOn = !videoAudioOn;
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
