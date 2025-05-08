// Aplica classe 'scrolled' ao body ao rolar a página
window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 300);
});

document.addEventListener('DOMContentLoaded', () => {
  // --- Botão de iniciar chat via WhatsApp ---
  const iniciarChatBotao = document.getElementById('iniciar-chat');

  if (iniciarChatBotao) {
    iniciarChatBotao.addEventListener('click', () => {
      const nome = document.getElementById('nome')?.value || '';
      const sobrenome = document.getElementById('sobrenome')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const telefone = document.getElementById('telefone')?.value || '';
      const assunto = document.getElementById('assunto')?.value || '';
      const captchaResponse = grecaptcha.getResponse();

      if (!captchaResponse) {
        alert('Por favor, complete o captcha.');
        return;
      }

      const mensagem = `Olá! Meu nome é ${nome} ${sobrenome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Assunto: ${assunto}`;
      const numeroWhatsApp = '557191150648';
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      window.open(urlWhatsApp, '_blank');
    });
  }

  // --- Botão "voltar ao topo" ---
  const backToTopButton = document.querySelector('.back-to-top-button');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      backToTopButton.classList.toggle('show', window.scrollY > 300);
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Carrossel de produtos ---
  const produtosCarousel = document.querySelector('.produtos-carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (produtosCarousel && prevBtn && nextBtn) {
    const cardWidth = 290;
    prevBtn.addEventListener('click', () => {
      produtosCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      produtosCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }

  // --- Slider de depoimentos ---
  const depoimentosSlider = document.querySelector('.depoimentos-slider');
  const dots = document.querySelectorAll('.depoimentos-dots .dot');

  if (depoimentosSlider && dots.length) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        document.querySelector('.dot.active')?.classList.remove('active');
        dot.classList.add('active');

        const card = depoimentosSlider.querySelector('.depoimento-card');
        const cardWidth = card ? card.offsetWidth + 30 : 0;
        depoimentosSlider.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      });
    });
  }

  // --- Animações ao rolar a página ---
  const animateOnScroll = () => {
    document.querySelectorAll('.sobre-content, .produto-card, .depoimento-card, .stat, .setor, .nivel, .compromisso-item, .atendimento-item')
      .forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
          element.classList.add('animate');
        }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executa ao carregar a página

  // --- Menu fixo no topo com efeito ao rolar ---
  const menuTopo = document.querySelector('.menu-topo');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      menuTopo?.classList.add('sticky');
      menuTopo?.classList.toggle('hidden', scrollTop > lastScrollTop); // Esconde se estiver descendo
    } else {
      menuTopo?.classList.remove('sticky', 'hidden');
    }

    lastScrollTop = scrollTop;
  });

  // --- Scroll suave para links internos ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Validação do formulário da newsletter ---
  const newsletterForm = document.querySelector('.footer-newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      const showMessage = (text, type = 'success') => {
        const message = document.createElement('p');
        message.textContent = text;
        message.className = `${type}-message`;
        this.appendChild(message);
        setTimeout(() => message.remove(), 3000);
      };

      if (validateEmail(email)) {
        showMessage('Email cadastrado com sucesso!', 'success');
        emailInput.value = '';
      } else {
        showMessage('Por favor, insira um email válido.', 'error');
      }
    });
  }

  // --- Função auxiliar para validar e-mail ---
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
