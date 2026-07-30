<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Новини \u2014 {{company}}</title>
<link rel="icon" href="logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Work+Sans:wght@400;500;600&family=Special+Elite&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<button class="burger dark" aria-label="Відкрити меню">
  <span></span><span></span><span></span>
</button>

<div class="drawer-backdrop"></div>
<nav class="drawer">
  <button class="drawer-close" aria-label="Закрити меню"><span></span><span></span></button>
  <div class="drawer-brand" data-company-name>{{company}}</div>
  <div class="drawer-nav">
    <a href="index.html"><span class="idx">00</span>Головна</a>
    <a href="genealogy.html"><span class="idx">01</span>Генеалогія</a>
  </div>
  <div class="drawer-foot">
    <a href="tel:+380686016125">+380 68 601 61 25</a>
  </div>
</nav>

<header class="page-hero">
  <span class="section-eyebrow mono">Архів подій</span>
  <h1 class="serif">Новини</h1>
  <p>Все, що відбувається в нашому родинному архіві: нові оцифровані документи, історії родин і оновлення сервісу.</p>
</header>

<section class="section" style="padding-top:0">
  <div class="news-grid" data-news-list></div>
</section>

<footer class="site-foot">
  <span data-company-name>{{company}}</span>
  <a href="tel:+380686016125">+380 68 601 61 25</a>
</footer>

<script src="news-data.js"></script>
<script src="script.js"></script>
<script src="news-list.js"></script>
</body>
</html>
