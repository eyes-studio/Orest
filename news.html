function initDrawer(){
  const burger = document.querySelector('.burger');
  const drawer = document.querySelector('.drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close');
  if(!burger || !drawer) return;

  function open(){
    drawer.classList.add('open');
    backdrop.classList.add('show');
    burger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    drawer.classList.remove('open');
    backdrop.classList.remove('show');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });
  backdrop.addEventListener('click', close);
  if(closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') close();
  });
}

function loadCompanyName(){
  fetch('nazv.txt')
    .then(res => res.ok ? res.text() : Promise.reject())
    .then(name => {
      name = name.trim();
      if(!name) return;
      document.querySelectorAll('[data-company-name]').forEach(el => {
        el.textContent = name;
      });
      document.title = document.title.replace('{{company}}', name);
    })
    .catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
  initDrawer();
  loadCompanyName();
});
