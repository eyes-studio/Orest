(function(){
  const root = document.querySelector('[data-article]');
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const item = NEWS_ITEMS.find(n => n.id === id);

  if(!item){
    root.innerHTML = `
      <div class="empty-state">
        <h2 class="serif">Новину не знайдено</h2>
        <p>Можливо, її прибрали або посилання застаріле.</p>
        <p style="margin-top:18px"><a class="article-back" href="news.html">\u2190 До всіх новин</a></p>
      </div>`;
    document.title = 'Новину не знайдено';
    return;
  }

  document.title = item.title;

  document.querySelector('[data-article-photo]').innerHTML = `
    <img src="${item.cover}" alt="${item.title}">
    <a class="article-download" href="${item.cover}" download>Завантажити фото \u2193</a>
  `;

  document.querySelector('[data-article-body]').innerHTML = `
    <span class="section-eyebrow mono">Новини</span>
    <h1 class="serif">${item.title}</h1>
    <p class="lead">${item.excerpt}</p>
    ${item.text.map(p => `<p>${p}</p>`).join('')}
    <a class="article-back" href="news.html">\u2190 До всіх новин</a>
  `;
})();
