// Inscrição: monta a mensagem com as respostas e abre o WhatsApp do Enzo.
const WHATSAPP = '5544988114314';

const LABELS = {
  nome: 'Nome',
  whatsapp: 'WhatsApp',
  linkedin: 'LinkedIn',
  vaga: 'Vaga que quero lá fora',
  ingles: 'Meu inglês hoje',
  trava: 'O que mais me trava',
  oferta: 'Oferta que me interessa',
};

document.querySelectorAll('form[data-inscricao]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll('[required]').forEach((field) => {
      const error = form.querySelector(`#${field.id}-erro`);
      const empty = !field.value.trim();
      field.setAttribute('aria-invalid', empty ? 'true' : 'false');
      if (error) error.hidden = !empty;
      if (empty && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    const data = new FormData(form);
    const lines = ['Oi Enzo, quero me inscrever na mentoria.', ''];
    for (const [key, label] of Object.entries(LABELS)) {
      const value = String(data.get(key) || '').trim();
      if (value) lines.push(`${label}: ${value}`);
    }
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
});
