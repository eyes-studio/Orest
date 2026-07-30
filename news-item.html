(function(){
  const track = document.querySelector('.hero-slides');
  const dotsWrap = document.querySelector('.hero-dots');
  const caption = document.querySelector('.hero-caption');
  const indexLabel = document.querySelector('.hero-index');
  const prevBtn = document.querySelector('.hero-arrow.prev');
  const nextBtn = document.querySelector('.hero-arrow.next');
  if(!track) return;

  let current = 0;
  const total = HERO_PHOTOS.length;

  HERO_PHOTOS.forEach((photo, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${photo.src}')`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Показати фото ' + (i + 1));
    if(i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll('.hero-slide');
  const dots = dotsWrap.querySelectorAll('button');

  function pad(n){ return String(n + 1).padStart(2, '0'); }

  function render(){
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    indexLabel.textContent = pad(current) + ' \u2014 ' + String(total).padStart(2, '0');
    caption.classList.remove('show');
    const photo = HERO_PHOTOS[current];
    void caption.offsetWidth;
    caption.querySelector('.eyebrow').textContent = photo.eyebrow;
    caption.querySelector('h1').textContent = photo.title;
    requestAnimationFrame(() => caption.classList.add('show'));
  }

  function goTo(i){
    current = (i + total) % total;
    render();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  document.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') goTo(current - 1);
    if(e.key === 'ArrowRight') goTo(current + 1);
  });

  render();
})();
