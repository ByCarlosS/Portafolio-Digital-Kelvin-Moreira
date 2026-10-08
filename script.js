// Menú móvil
const menu = document.getElementById('menu');
document.getElementById('burger').addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Formulario: abre el correo del visitante con el mensaje preparado
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const asunto = 'Contacto desde el portafolio - ' + f.n.value;
  const cuerpo = f.m.value + '\n\n' + f.n.value + ' (' + f.e.value + ')';
  window.location.href = 'mailto:kelvinm2903@gmail.com?subject=' +
    encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
});
