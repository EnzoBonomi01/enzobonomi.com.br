// O marcador "Você" anda pelo board quando ele entra na tela, uma vez.
document.querySelectorAll('.kb').forEach((kb) => {
  if (!kb.querySelector('.kb__voce')) return;
  if (!('IntersectionObserver' in window)) { kb.classList.add('is-andando'); return; }
  const io = new IntersectionObserver((itens) => {
    itens.forEach((it) => { if (it.isIntersecting) { kb.classList.add('is-andando'); io.disconnect(); } });
  }, { threshold: 0.2 });
  io.observe(kb);
});
