const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();


// Galerias por categoria, sem dependências externas.
const categoryButtons = Array.from(document.querySelectorAll('[data-gallery]'));
const galleryPanels = Array.from(document.querySelectorAll('[data-gallery-panel]'));
categoryButtons.forEach(btn => btn.addEventListener('click', () => {
  const selected = btn.dataset.gallery;
  categoryButtons.forEach(b => {
    const active = b.dataset.gallery === selected;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  galleryPanels.forEach(panel => { panel.hidden = panel.dataset.galleryPanel !== selected; });
  if (window.innerWidth < 700) {
    document.getElementById('galeria-conteudo').scrollIntoView({behavior:'smooth', block:'start'});
  }
}));

const lightbox = document.querySelector('#lightbox');
const lbImage = lightbox.querySelector('.lightbox-image');
const lbCaption = lightbox.querySelector('.lightbox-caption');
const lbClose = lightbox.querySelector('.lightbox-close');
let lastFocused = null;
document.querySelectorAll('.photo-tile').forEach(tile => tile.addEventListener('click', () => {
  lastFocused = document.activeElement;
  lbImage.src = tile.dataset.full;
  lbImage.alt = tile.dataset.caption;
  lbCaption.textContent = tile.dataset.caption;
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  lbClose.focus();
}));
function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
  lbImage.removeAttribute('src');
  if (lastFocused) lastFocused.focus();
}
lightbox.querySelectorAll('[data-close], .lightbox-close').forEach(el => el.addEventListener('click', closeLightbox));
document.addEventListener('keydown', (e) => {if(e.key === 'Escape' && !lightbox.hidden) closeLightbox();});
