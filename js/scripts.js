window.addEventListener('scroll', function() {
  if (window.scrollY > 300) { // Ajuste o valor de 300 para a distância de rolagem desejada
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const iniciarChatBotao = document.getElementById('iniciar-chat');

  if (iniciarChatBotao) {
    iniciarChatBotao.addEventListener('click', function() {
      const nome = document.getElementById('nome').value;
      const sobrenome = document.getElementById('sobrenome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const assunto = document.getElementById('assunto').value;
      const captchaResponse = grecaptcha.getResponse(); // Obtém a resposta do captcha

      if (!captchaResponse) {
        alert('Por favor, complete o captcha.');
        return; // Impede a abertura do WhatsApp se o captcha não for completado
      }

      const mensagem = `Olá! Meu nome é ${nome} ${sobrenome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Assunto: ${assunto}`;
      const numeroWhatsApp = 'SEU_NUMERO_DE_WHATSAPP';
      const urlWhatsApp = `https://wa.me/<span class="math-inline">\{numeroWhatsApp\}?text\=</span>{encodeURIComponent(mensagem)}`;
      window.open(urlWhatsApp, '_blank');
    });
  }
});