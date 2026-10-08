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

// Visor de certificados: amplía la imagen en la misma página
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
document.querySelectorAll('.zoom').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    lbImg.src = link.getAttribute('href');
    lbCaption.textContent = link.closest('.cert').querySelector('h4').textContent;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
function cerrarVisor() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}
lb.addEventListener('click', (e) => { if (e.target !== lbImg) cerrarVisor(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarVisor(); });
