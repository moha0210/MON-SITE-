// script.js — petite interactivité
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Formulaire — message après envoi si Formspree n'est pas configuré
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    if (form.action.includes('VOTRE_ENDPOINT')) {
      e.preventDefault();
      alert('Formulaire en mode démo. Remplacez VOTRE_ENDPOINT Formspree/Netlify pour activer l’envoi.');
    }
  });
}
