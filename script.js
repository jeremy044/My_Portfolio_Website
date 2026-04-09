const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

siteNav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement && siteNav.classList.contains('open')) {
    siteNav.classList.remove('open');
  }
});