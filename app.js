/* ══════════════════════════════════════════════════════════
   SMART APP LINKS — tap any "Find a Service / Become a Provider /
   Create Profile / Post a Request / Get it on Google Play" button:
   - if the app is installed, it opens directly to that screen
   - if not, it falls back to the Play Store listing

   ⚠️ PLACEHOLDER VALUES — Sanjay: replace these three with the real
   ones once the app package + deep link scheme are finalised.
   ══════════════════════════════════════════════════════════ */
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.servicebylocal.app'; // TODO: real Play Store URL
const APP_SCHEME      = 'servicebylocal';   // TODO: real custom URL scheme registered in the app
const DEEP_LINKS = {
  home:     APP_SCHEME + '://home',
  search:   APP_SCHEME + '://search',
  provider: APP_SCHEME + '://provider/create',
  request:  APP_SCHEME + '://request/new'
};

function openApp(e, screen){
  if(e) e.preventDefault();
  const target = DEEP_LINKS[screen] || DEEP_LINKS.home;
  const fallbackTimer = setTimeout(function(){
    window.location.href = PLAY_STORE_URL;
  }, 1200);
  window.addEventListener('blur', function onBlur(){
    clearTimeout(fallbackTimer);
    window.removeEventListener('blur', onBlur);
  });
  window.location.href = target;
}

function toggleMenu(){
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.nav-burger i');
  const isOpen = menu.classList.toggle('open');
  btn.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
