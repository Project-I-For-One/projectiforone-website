/* components.js — injects shared header and footer, sets active nav link */

async function loadComponent(id, url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    console.warn(`Could not load ${url}`, e);
  }
}

async function initComponents() {
  await Promise.all([
    loadComponent('header-placeholder', '/header.html'),
    loadComponent('footer-placeholder', '/footer.html'),
  ]);

  // Set active nav link based on current path
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (linkPath === path) {
      link.classList.add('active');
    }
  });

  // Wire up mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
}

document.addEventListener('DOMContentLoaded', initComponents);
