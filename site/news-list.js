(function(){
  const grid = document.querySelector('[data-news-list]');
  if(!grid) return;

  if(!NEWS_ITEMS.length){
    grid.outerHTML = `
      <div class="empty-state">
        <h2 class="serif">Новин поки немає</h2>
        <p>Щойно з\u2019являться новини \u2014 вони відображатимуться тут.</p>
      </div>`;
    return;
  }

  grid.innerHTML = NEWS_ITEMS.map((item, i) => `
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
