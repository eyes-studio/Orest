:root{
  --bg:#ffffff;
  --ink:#1c1815;
  --ink-soft:#5a5347;
  --accent:#8b6b4a;
  --accent-dark:#6b4f34;
  --parchment:#f6f1e7;
  --parchment-line:#e4ddd0;
  --white:#ffffff;
  --shadow:0 24px 60px rgba(28,24,21,.16);
  --ease:cubic-bezier(.22,.61,.36,1);
}

*{box-sizing:border-box;margin:0;padding:0}

html{scroll-behavior:smooth}

body{
  background:var(--bg);
  color:var(--ink);
  font-family:'Work Sans',sans-serif;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;background:none;border:none}
img{display:block;max-width:100%}

.serif{font-family:'Playfair Display',serif}
.mono{font-family:'Special Elite',monospace}

:focus-visible{outline:2px solid var(--accent);outline-offset:3px}

/* ---------- Hamburger ---------- */
.burger{
  position:fixed;
  top:28px;
  left:28px;
  z-index:70;
  width:44px;
  height:36px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:6px;
}
.burger span{
  display:block;
  width:26px;
  height:2px;
  background:var(--white);
  transition:transform .35s var(--ease),opacity .35s var(--ease),background .35s var(--ease);
  filter:drop-shadow(0 1px 3px rgba(0,0,0,.35));
}
.burger.dark span{background:var(--ink);filter:none}
.burger.open span:nth-child(1){transform:translateY(8px) rotate(45deg)}
.burger.open span:nth-child(2){opacity:0}
.burger.open span:nth-child(3){transform:translateY(-8px) rotate(-45deg)}

/* ---------- Drawer ---------- */
.drawer-backdrop{
  position:fixed;inset:0;
  background:rgba(20,17,14,.4);
  opacity:0;pointer-events:none;
  transition:opacity .4s var(--ease);
  z-index:65;
}
.drawer-backdrop.show{opacity:1;pointer-events:auto}

.drawer{
  position:fixed;
  top:0;left:0;
  height:100%;
  width:min(380px,84vw);
  background:var(--ink);
  color:var(--white);
  transform:translateX(-100%);
  transition:transform .45s var(--ease);
  z-index:80;
  display:flex;
  flex-direction:column;
  padding:32px 36px;
}
.drawer.open{transform:translateX(0)}

.drawer-close{
  align-self:flex-end;
  width:36px;height:36px;
  position:relative;
}
.drawer-close span{
  position:absolute;top:50%;left:50%;
  width:22px;height:2px;
  background:var(--white);
}
.drawer-close span:first-child{transform:translate(-50%,-50%) rotate(45deg)}
.drawer-close span:last-child{transform:translate(-50%,-50%) rotate(-45deg)}

.drawer-brand{
  margin-top:34px;
  font-size:13px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:rgba(255,255,255,.5);
}

.drawer-nav{
  margin-top:56px;
  display:flex;
  flex-direction:column;
}
.drawer-nav a{
  display:flex;
  align-items:baseline;
  gap:18px;
  padding:22px 0;
  border-top:1px solid rgba(255,255,255,.16);
  font-size:clamp(28px,5vw,38px);
  transition:padding-left .3s var(--ease),color .3s var(--ease);
}
.drawer-nav a:last-child{border-bottom:1px solid rgba(255,255,255,.16)}
.drawer-nav a:hover{padding-left:10px;color:var(--accent)}
.drawer-nav .idx{
  font-size:13px;
  color:rgba(255,255,255,.4);
  font-family:'Special Elite',monospace;
}

.drawer-foot{
  margin-top:auto;
  padding-top:40px;
  font-size:13px;
  color:rgba(255,255,255,.4);
}
.drawer-foot a{border-bottom:1px solid rgba(255,255,255,.3)}

/* ---------- Hero ---------- */
.hero{
  position:relative;
  width:100%;
  height:100dvh;
  overflow:hidden;
  background:var(--ink);
}

.hero-logo{
  position:absolute;
  top:26px;left:50%;
  transform:translateX(-50%);
  z-index:40;
  width:52px;height:52px;
  opacity:.95;
}

.hero-slide{
  position:absolute;inset:0;
  background-size:cover;
  background-position:center;
  opacity:0;
  transition:opacity 1.1s var(--ease);
}
.hero-slide.active{opacity:1}

.hero-scrim{
  position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(15,12,10,.35) 0%,rgba(15,12,10,0) 32%,rgba(15,12,10,0) 55%,rgba(15,12,10,.72) 100%);
  z-index:2;
}

.hero-caption{
  position:absolute;
  left:clamp(24px,6vw,72px);
  bottom:clamp(96px,16vh,150px);
  right:24px;
  z-index:10;
  color:var(--white);
}
.hero-caption .eyebrow{
  font-family:'Special Elite',monospace;
  font-size:13px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:rgba(255,255,255,.75);
  margin-bottom:14px;
  opacity:0;
  transform:translateY(10px);
  transition:opacity .7s var(--ease) .15s,transform .7s var(--ease) .15s;
}
.hero-caption h1{
  font-size:clamp(34px,6vw,76px);
  line-height:1.04;
  font-weight:700;
  max-width:16ch;
  text-shadow:0 4px 30px rgba(0,0,0,.3);
  opacity:0;
  transform:translateY(16px);
  transition:opacity .7s var(--ease) .25s,transform .7s var(--ease) .25s;
}
.hero-caption.show .eyebrow{opacity:1;transform:none}
.hero-caption.show h1{opacity:1;transform:none}

.hero-arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  z-index:20;
  width:52px;height:52px;
  display:flex;align-items:center;justify-content:center;
  color:var(--white);
  transition:opacity .3s var(--ease);
  opacity:.75;
}
.hero-arrow:hover{opacity:1}
.hero-arrow svg{width:22px;height:22px}
.hero-arrow.prev{left:clamp(8px,2vw,28px)}
.hero-arrow.next{right:clamp(8px,2vw,28px)}

.hero-bottom{
  position:absolute;
  bottom:26px;
  left:0;right:0;
  z-index:20;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}
.hero-index{
  font-family:'Special Elite',monospace;
  font-size:11px;
  letter-spacing:.14em;
  color:rgba(255,255,255,.65);
}
.hero-dots{
  display:flex;
  gap:9px;
}
.hero-dots button{
  width:7px;height:7px;
  border-radius:50%;
  background:#a9a49a;
  transition:background .3s var(--ease),transform .3s var(--ease);
}
.hero-dots button.active{
  background:var(--white);
  transform:scale(1.35);
}

.scroll-cue{
  position:absolute;
  right:clamp(20px,4vw,40px);
  bottom:26px;
  z-index:20;
  color:rgba(255,255,255,.7);
  font-family:'Special Elite',monospace;
  font-size:11px;
  letter-spacing:.1em;
  writing-mode:vertical-rl;
  display:flex;align-items:center;gap:10px;
}
.scroll-cue::after{
  content:"";
  width:1px;height:34px;
  background:rgba(255,255,255,.5);
}

/* ---------- Sections (shared) ---------- */
.section{
  padding:110px clamp(24px,6vw,72px);
  max-width:1400px;
  margin:0 auto;
}
.section-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:24px;
  margin-bottom:56px;
  flex-wrap:wrap;
}
.section-eyebrow{
  font-family:'Special Elite',monospace;
  font-size:12px;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:var(--accent);
  margin-bottom:12px;
  display:block;
}
.section-head h2{
  font-size:clamp(32px,4vw,52px);
  font-weight:700;
  line-height:1.08;
}
.section-more{
  font-size:14px;
  border-bottom:1px solid var(--ink);
  padding-bottom:3px;
  white-space:nowrap;
}

/* ---------- News grid ---------- */
.news-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2px;
  background:var(--parchment-line);
}
.news-card{
  background:var(--parchment);
  display:flex;
  flex-direction:column;
}
.news-card figure{
  aspect-ratio:4/3;
  overflow:hidden;
  background:var(--ink);
}
.news-card img{
  width:100%;height:100%;
  object-fit:cover;
  transition:transform .6s var(--ease);
}
.news-card:hover img{transform:scale(1.05)}
.news-card-body{
  padding:26px 28px 32px;
}
.news-card .idx{
  font-family:'Special Elite',monospace;
  font-size:11px;
  color:var(--ink-soft);
  letter-spacing:.1em;
  margin-bottom:10px;
  display:block;
}
.news-card h3{
  font-size:22px;
  line-height:1.25;
  font-weight:700;
  margin-bottom:10px;
}
.news-card p{
  font-size:14.5px;
  color:var(--ink-soft);
  line-height:1.55;
}

.empty-state{
  padding:80px 24px;
  text-align:center;
  color:var(--ink-soft);
}
.empty-state h2{font-size:26px;margin-bottom:12px;color:var(--ink)}

/* ---------- Page header (inner pages) ---------- */
.page-hero{
  padding:170px clamp(24px,6vw,72px) 70px;
  max-width:1100px;
}
.page-hero .section-eyebrow{margin-bottom:20px}
.page-hero h1{
  font-size:clamp(40px,6vw,80px);
  font-weight:700;
  line-height:1.05;
  max-width:14ch;
}
.page-hero p{
  margin-top:26px;
  max-width:56ch;
  font-size:17px;
  line-height:1.7;
  color:var(--ink-soft);
}

/* ---------- Genealogy ---------- */
.gen-call{
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:0;
  background:var(--ink);
  color:var(--white);
  margin:0 clamp(24px,6vw,72px) 110px;
  overflow:hidden;
}
.gen-call-text{
  padding:70px clamp(32px,5vw,64px);
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.gen-call-text .section-eyebrow{color:rgba(255,255,255,.6)}
.gen-call-text h2{
  font-size:clamp(26px,3vw,36px);
  font-weight:700;
  line-height:1.2;
  margin-bottom:20px;
}
.gen-call-text p{
  color:rgba(255,255,255,.72);
  line-height:1.7;
  margin-bottom:34px;
  max-width:44ch;
}
.phone-plate{
  display:inline-flex;
  flex-direction:column;
  align-items:flex-start;
  gap:8px;
  padding:22px 28px;
  border:1px solid rgba(255,255,255,.28);
  transition:background .3s var(--ease),border-color .3s var(--ease);
  width:fit-content;
}
.phone-plate:hover{background:rgba(255,255,255,.06);border-color:var(--accent)}
.phone-plate .label{
  font-family:'Special Elite',monospace;
  font-size:11px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:rgba(255,255,255,.55);
}
.phone-plate .number{
  font-size:clamp(22px,2.6vw,30px);
  font-weight:600;
  font-family:'Playfair Display',serif;
}
.gen-call-photo{
  background-size:cover;
  background-position:center;
  min-height:340px;
}

.gen-steps{
  padding:0 clamp(24px,6vw,72px) 120px;
  max-width:1100px;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:36px;
}
.gen-step .idx{
  font-family:'Special Elite',monospace;
  color:var(--accent);
  font-size:13px;
  margin-bottom:14px;
  display:block;
}
.gen-step h3{font-size:19px;margin-bottom:10px;font-weight:700}
.gen-step p{font-size:14.5px;color:var(--ink-soft);line-height:1.65}

/* ---------- News item ---------- */
.article-photo{
  position:relative;
  width:100%;
  height:min(70vh,640px);
  margin-top:0;
  overflow:hidden;
  background:var(--ink);
}
.article-photo img{width:100%;height:100%;object-fit:cover}
.article-download{
  position:absolute;
  right:24px;bottom:24px;
  z-index:5;
  background:var(--white);
  color:var(--ink);
  font-size:13px;
  letter-spacing:.04em;
  padding:12px 20px;
  display:inline-flex;
  align-items:center;
  gap:8px;
  box-shadow:var(--shadow);
  transition:background .3s var(--ease),color .3s var(--ease);
}
.article-download:hover{background:var(--ink);color:var(--white)}

.article-body{
  max-width:760px;
  margin:0 auto;
  padding:60px clamp(24px,6vw,0px) 140px;
}
.article-body .section-eyebrow{margin-bottom:18px}
.article-body h1{
  font-size:clamp(32px,4.4vw,52px);
  font-weight:700;
  line-height:1.12;
  margin-bottom:34px;
}
.article-body .lead{
  font-size:19px;
  color:var(--ink-soft);
  line-height:1.7;
  margin-bottom:28px;
}
.article-body p{
  font-size:16.5px;
  line-height:1.85;
  color:var(--ink);
  margin-bottom:22px;
}
.article-back{
  display:inline-block;
  margin-top:10px;
  font-size:14px;
  border-bottom:1px solid var(--ink);
  padding-bottom:3px;
}

/* ---------- Footer ---------- */
.site-foot{
  border-top:1px solid var(--parchment-line);
  padding:34px clamp(24px,6vw,72px);
  display:flex;
  justify-content:space-between;
  gap:20px;
  flex-wrap:wrap;
  font-size:13px;
  color:var(--ink-soft);
}

/* ---------- Responsive ---------- */
@media (max-width:860px){
  .news-grid{grid-template-columns:1fr}
  .gen-call{grid-template-columns:1fr}
  .gen-call-photo{min-height:220px;order:-1}
  .gen-steps{grid-template-columns:1fr;gap:40px}
  .scroll-cue{display:none}
  .article-body{padding-left:24px;padding-right:24px}
}

@media (prefers-reduced-motion:reduce){
  *{transition:none !important;scroll-behavior:auto !important}
}
