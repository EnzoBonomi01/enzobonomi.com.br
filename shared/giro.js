// "É pra ___": troca o cargo a cada 1,8 s, sem parar.
const CARGOS = ['BA', 'PM', 'PO', 'QA', 'marketing'];

document.querySelectorAll('[data-giro]').forEach((slot) => {
  const lista = slot.dataset.giro ? JSON.parse(slot.dataset.giro) : CARGOS;
  let i = Math.max(0, lista.indexOf(slot.textContent.trim()));
  setInterval(() => {
    i = (i + 1) % lista.length;
    slot.classList.remove('giro-entra');
    void slot.offsetWidth;
    slot.textContent = lista[i];
    slot.classList.add('giro-entra');
  }, 1800);
});
