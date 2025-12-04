/* main.js - interações do site (carrossel, lazyload, modal, menu) */

document.addEventListener('DOMContentLoaded', function(){

  // HERO CAROUSEL (simples)
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  let active = 0, heroTimer = null;

  function createDots(){
    slides.forEach((s,i)=>{
      const btn = document.createElement('button');
      if(i===0) btn.classList.add('active');
      btn.addEventListener('click', ()=> goTo(i));
      dotsWrap.appendChild(btn);
    });
  }

  function goTo(idx){
    const carousel = document.querySelector('.hero-carousel');
    carousel.style.transform = `translateX(-${idx*100}%)`;
    active = idx;
    updateDots();
    resetTimer();
  }

  function updateDots(){
    const dots = dotsWrap.querySelectorAll('button');
    dots.forEach((d,i)=> d.classList.toggle('active', i===active));
  }

  function nextSlide(){
    active = (active + 1) % slides.length;
    goTo(active);
  }

  function resetTimer(){
    if(heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide, 6000);
  }

  if(slides.length > 0){
    createDots();
    resetTimer();
  }

  // LAZY LOAD images (data-src)
  const lazyImgs = document.querySelectorAll('img.lazy');
  const io = ('IntersectionObserver' in window) ?
    new IntersectionObserver((entries, obs)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const img = e.target;
          img.src = img.getAttribute('data-src');
          img.classList.remove('lazy');
          obs.unobserve(img);
        }
      });
    }, {rootMargin:'200px'}) : null;

  lazyImgs.forEach(img => {
    if(io) io.observe(img);
    else img.src = img.getAttribute('data-src');
  });

  // MOBILE NAV
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  mobileToggle && mobileToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
  });

  // Account modal
  const openAccount = document.getElementById('openAccount');
  const accountModal = document.getElementById('accountModal');
  const closeAccount = document.getElementById('closeAccount');
  openAccount && openAccount.addEventListener('click', ()=> {
    accountModal.style.display = 'flex';
  });
  closeAccount && closeAccount.addEventListener('click', ()=> {
    accountModal.style.display = 'none';
  });
  // close modal on outside click
  accountModal && accountModal.addEventListener('click', (e)=>{
    if(e.target === accountModal) accountModal.style.display = 'none';
  });

  // Login submit (placeholder)
  const loginForm = document.getElementById('loginForm');
  loginForm && loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Login simulado — aqui implementaremos autenticação real (API) em seguida.');
    accountModal.style.display = 'none';
  });

});
