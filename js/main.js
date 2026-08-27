/**
 * REVIVÁ CLÍNICA MÉDICA - Script Principal
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ícones Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Elementos Globais
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const appointmentForm = document.getElementById('appointment-form');

    // 3. Efeito de Scroll no Header (Encolhimento do Logo)
    const handleScroll = () => {
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 4. Menu Mobile Drawer
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('active');

            const menuIcon = document.getElementById('menu-icon');
            if (menuIcon && window.lucide) {
                menuIcon.setAttribute('data-lucide', isExpanded ? 'menu' : 'x');
                window.lucide.createIcons();
            }
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const menuIcon = document.getElementById('menu-icon');
                if (menuIcon && window.lucide) {
                    menuIcon.setAttribute('data-lucide', 'menu');
                    window.lucide.createIcons();
                }
            });
        });
    }

    // 5. Envio do Formulário para o WhatsApp
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const specialtySelect = document.getElementById('specialty');

            const name = nameInput ? nameInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const specialty = specialtySelect ? specialtySelect.value : '';

            if (!name || !phone) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const message = [
                'Olá! Gostaria de solicitar um agendamento na *Clínica Revivá*:',
                '',
                `👤 *Nome:* ${name}`,
                `📱 *Contato:* ${phone}`,
                `🩺 *Especialidade:* ${specialty}`,
                '',
                '_Mensagem enviada através do site oficial._'
            ].join('\n');

            const phoneClinic = '5517996471887';
            const whatsappUrl = `https://wa.me/${phoneClinic}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});