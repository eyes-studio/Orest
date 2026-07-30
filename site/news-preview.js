(function(){
  const grid = document.querySelector('[data-news-preview]');
  if(!grid) return;
  const items = NEWS_ITEMS.slice(0, 3);
  grid.innerHTML = items.map((item, i) => `
    <a class="news-card" href="news-item.html?id=${item.id}">
      <figure><img src="${item.cover}" alt="${item.title}" loading="lazy"></figure>
      <div class="news-card-body">
        <span class="idx mono">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="serif">${item.title}</h3>
        <p>${item.excerpt}</p>
      </div>
    </a>
  `).join('');
})();
