const STANDALONE_HTML=JSON.parse("\"<!DOCTYPE html>\\n<html lang=\\\"it\\\">\\n<head>\\n<meta charset=\\\"UTF-8\\\">\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\\\">\\n<title>Ciurma \\u2014 Pollo Diablo</title>\\n<link rel=\\\"manifest\\\" href=\\\"manifest.json\\\">\\n<meta name=\\\"theme-color\\\" content=\\\"#1c1712\\\">\\n<meta name=\\\"apple-mobile-web-app-capable\\\" content=\\\"yes\\\">\\n<meta name=\\\"apple-mobile-web-app-status-bar-style\\\" content=\\\"black-translucent\\\">\\n<style>\\n:root{\\n  --bg:#0d0b07;--surf:#1c1712;--surf2:#261f15;--surf3:#2e2418;\\n  --gold:#d4a84b;--red:#8b2020;--red2:#ff5555;\\n  --amber:#c47a20;--amber2:#f0a040;\\n  --green2:#3a7a3a;--green3:#6ecf6e;\\n  --txt:#f0ead8;--muted:#8a7d68;--muted2:#6a5d48;\\n  --bord:#3a2e1e;--bord2:#4a3a28;\\n  --r:12px;--rs:8px;--r2:16px\\n}\\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}\\nbody{background:var(--bg);color:var(--txt);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:100dvh;overflow:hidden;overscroll-behavior:none}\\n#app{height:100dvh;overflow:hidden}\\n.view{height:100dvh;display:flex;flex-direction:column;overflow:hidden}\\n\\n/* \\u2500\\u2500 Header \\u2500\\u2500 */\\n.hdr{background:var(--surf);padding:12px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--bord);flex-shrink:0;min-height:54px}\\n.logo{font-family:Georgia,serif;color:var(--gold);font-size:20px;flex:1}\\n.hdr-title{font-family:Georgia,serif;color:var(--gold);font-size:17px;flex:1}\\n.ico-btn{background:none;border:none;color:var(--muted);font-size:20px;cursor:pointer;padding:6px;border-radius:6px}\\n.ico-btn:active{background:var(--surf2)}\\n.confirm-btn{background:var(--gold);color:#1a1208;border:none;border-radius:var(--rs);padding:7px 16px;font-size:14px;font-weight:600;cursor:pointer}\\n.end-btn{background:transparent;color:var(--muted);border:1px solid var(--bord2);border-radius:var(--rs);font-size:13px;padding:5px 10px;cursor:pointer}\\n\\n/* \\u2500\\u2500 Session header \\u2500\\u2500 */\\n.sess-hdr{justify-content:space-between;padding:10px 14px;gap:8px}\\n.pool-wrap{display:flex;flex-direction:column;gap:3px}\\n.pool-dots{display:flex;gap:5px;flex-wrap:wrap;max-width:160px}\\n.pd{width:13px;height:13px;border-radius:50%;flex-shrink:0}\\n.pd-on{background:var(--gold)}.pd-off{background:var(--surf2);border:1px solid var(--bord)}\\n.pool-txt{font-size:11px;color:var(--muted)}\\n.pool-big{font-size:22px;font-weight:700;color:var(--gold)}\\n.pool-ctrl{display:flex;align-items:center;gap:5px}\\n\\n/* \\u2500\\u2500 Buttons \\u2500\\u2500 */\\n.step-btn{background:var(--surf2);border:1px solid var(--bord);color:var(--txt);width:36px;height:36px;border-radius:var(--rs);font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}\\n.step-btn:active{opacity:.7}\\n.btn{border:none;border-radius:var(--rs);cursor:pointer;font-size:15px;padding:12px 18px;font-weight:500;width:100%}\\n.btn:active{opacity:.8}\\n.btn-g{background:var(--gold);color:#1a1208}\\n.btn-s{background:var(--surf2);color:var(--txt);border:1px solid var(--bord)}\\n.btn-gh{background:transparent;color:var(--muted);border:1px solid var(--bord)}\\n.btn-d{background:var(--red);color:#fff}\\n.btn-dis{opacity:.35;pointer-events:none}\\n.btn-lg{padding:16px;font-size:17px;border-radius:var(--r);margin-top:4px}\\n.sm-btn{background:var(--surf2);color:var(--txt);border:1px solid var(--bord);border-radius:var(--rs);padding:8px 14px;font-size:13px;cursor:pointer;display:inline-flex;align-items:center;gap:6px}\\n.sm-btn:active{opacity:.7}\\n\\n/* \\u2500\\u2500 Bottom nav \\u2500\\u2500 */\\n.bot-nav{display:flex;background:var(--surf);border-top:1px solid var(--bord);flex-shrink:0}\\n.bot-btn{flex:1;background:none;border:none;color:var(--muted);padding:10px 0 14px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;transition:color .15s}\\n.bot-btn.active{color:var(--gold)}\\n.bot-btn-icon{font-size:22px;line-height:1}\\n.bot-btn-sess{color:var(--amber2)!important}\\n.bot-btn-sess.active{color:var(--gold)!important}\\n/* Session gets a warm amber top border to visually separate from Ciurma */\\n.sess-view .hdr{border-top:2px solid var(--amber);border-bottom-color:var(--amber)}\\n.sess-view .npc-list{background:var(--bg)}\\n\\n/* \\u2500\\u2500 Scroll body \\u2500\\u2500 */\\n.scroll-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;-webkit-overflow-scrolling:touch}\\n\\n/* \\u2500\\u2500 Home \\u2500\\u2500 */\\n/* \\u2500\\u2500 Home \\u2500\\u2500 */\\n.home-view{position:relative;overflow:hidden}\\n.home-hero-img{height:50dvh;flex-shrink:0;position:relative;overflow:hidden;background:var(--surf2)}\\n.home-hero-img img{width:100%;height:100%;object-fit:cover;object-position:center 60%;display:block}\\n.home-hero-img.hero-fallback{background:linear-gradient(160deg,#1a1208 0%,#2a1a08 50%,#0d0b07 100%)}\\n.home-hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.1) 0%,rgba(0,0,0,.6) 100%);display:flex;align-items:flex-end;padding:20px}\\n.home-hero-title{font-family:Georgia,serif;font-size:26px;font-weight:700;color:#fff;line-height:1.2;text-shadow:0 2px 8px rgba(0,0,0,.8)}\\n.home-actions-panel{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:var(--bg)}\\n.home-deck-row{background:var(--surf);border:1px solid var(--bord);border-radius:var(--r);padding:14px 16px;display:flex;align-items:center;gap:12px}\\n.home-deck-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\\n.home-deck-label{font-size:10px;text-transform:uppercase;letter-spacing:.7px;color:var(--muted)}\\n.home-deck-val{font-family:Georgia,serif;font-size:20px;color:var(--gold)}\\n.home-deck-sub{font-size:11px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\\n.home-pool-row{background:var(--surf);border:1px solid var(--bord);border-radius:var(--r);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px}\\n.home-sess-btn{width:100%}\\n.stepper-row{display:flex;align-items:center;gap:18px}\\n.stepper-val{font-size:32px;font-weight:700;color:var(--gold);min-width:36px;text-align:center}\\n.hint-txt{color:var(--muted);font-size:14px;text-align:center;padding:20px 0}\\n.sync-strip{display:flex;align-items:center;justify-content:space-between;background:var(--surf2);border-radius:var(--rs);padding:8px 12px;font-size:12px;color:var(--muted);gap:8px;margin-top:auto}\\n.sync-strip span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\\n\\n/* \\u2500\\u2500 Builder \\u2500\\u2500 */\\n.bldr-sub{padding:9px 16px;font-size:13px;color:var(--muted);background:var(--surf);border-bottom:1px solid var(--bord);flex-shrink:0}\\n.npc-grid{flex:1;overflow-y:auto;padding:10px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;align-content:start}\\n.npc-tile{background:var(--surf);border:2px solid var(--bord);border-radius:var(--rs);overflow:hidden;cursor:pointer;user-select:none;transition:border-color .15s;aspect-ratio:1/1;position:relative}\\n.npc-tile.sel{border-color:var(--gold)}\\n.npc-tile:active{opacity:.8}\\n.tile-img-wrap{position:absolute;inset:0;background:var(--surf2)}\\n.tile-img-wrap img{width:100%;height:100%;object-fit:cover;display:block}\\n.tile-img-ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:28px;color:var(--muted2);font-family:Georgia,serif}\\n.tile-name-ov{position:absolute;top:0;left:0;right:0;padding:5px 6px;background:linear-gradient(to bottom,rgba(0,0,0,.82) 0%,rgba(0,0,0,0) 100%);color:#fff;font-size:11px;font-weight:600;line-height:1.3;z-index:1;text-shadow:0 1px 3px rgba(0,0,0,.9)}\\n.tile-chk-ov{position:absolute;bottom:5px;right:5px;background:var(--gold);color:#1a1208;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;z-index:1}\\n.tile-body{padding:9px 10px 10px}\\n.tile-name{font-weight:600;font-size:13px;margin-bottom:2px;color:var(--txt)}\\n.tile-cls{font-size:10px;color:var(--muted);margin-bottom:6px;line-height:1.4}\\n.tile-stats{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:5px}\\n.tile-cnt{font-size:10px;color:var(--muted2)}\\n\\n/* \\u2500\\u2500 NPC row (shared between session + consulta) \\u2500\\u2500 */\\n.npc-list{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}\\n.npc-row{border-bottom:1px solid var(--bord)}\\n.npc-row.fuori .nr-name,.npc-row.morto .nr-name{color:var(--muted)}\\n.npc-row.morto{opacity:.5}\\n.nr-hdr{display:flex;align-items:center;padding:12px 14px;gap:10px;cursor:pointer;background:var(--surf);user-select:none}\\n.nr-hdr:active{background:var(--surf2)}\\n.nr-avatar{width:48px;height:48px;border-radius:9px;overflow:hidden;flex-shrink:0;background:var(--surf2);display:flex;align-items:center;justify-content:center;font-size:18px;font-family:Georgia,serif;color:var(--muted);border:1px solid var(--bord)}\\n.nr-avatar img{width:100%;height:100%;object-fit:cover;display:block}\\n.nr-info{flex:1;min-width:0}\\n.nr-row1{display:flex;align-items:center;gap:6px;margin-bottom:4px;flex-wrap:wrap}\\n.nr-star{color:var(--gold);font-size:14px}\\n.nr-name{font-weight:600;font-size:16px}\\n.nr-row2{display:flex;align-items:center;gap:5px;flex-wrap:wrap}\\n.ca-badge{font-size:11px;font-weight:700;background:var(--surf3);border:1px solid var(--bord2);border-radius:5px;padding:3px 8px;color:var(--gold);flex-shrink:0}\\n.ts-pill{font-size:10px;padding:2px 7px;border-radius:10px;white-space:nowrap}\\n.ts-forte{background:#0a200a;color:var(--green3);border:1px solid var(--green2)}\\n.ts-debole{background:#200a0a;color:#e06060;border:1px solid #5a1010}\\n.nr-right{display:flex;align-items:center;justify-content:center;flex-shrink:0}\\n.nr-expand-btn{width:100%;background:var(--surf2);border:none;border-top:1px solid var(--bord);color:var(--muted);font-size:11px;padding:5px;text-align:center;cursor:pointer;user-select:none}\\n.nr-expand-btn:active{background:var(--surf3)}\\n/* \\u2139 button */\\n.info-btn{background:var(--surf2);border:1px solid var(--bord2);color:var(--gold);font-size:18px;width:44px;height:44px;cursor:pointer;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}\\n.info-btn:active{background:var(--surf3)}\\n/* Wound bar */\\n.nr-wound-bar{display:flex;align-items:center;margin:8px 10px;padding:8px 12px;gap:10px;background:var(--surf2);border-radius:var(--rs);border:1px solid var(--bord)}\\n.wounds-row{display:flex;align-items:center;gap:5px;flex:1}\\n.wd{width:13px;height:13px;border-radius:50%;flex-shrink:0}\\n.wd-on{background:var(--red2)}.wd-off{background:var(--surf3);border:1px solid var(--bord2)}\\n.wd-btn{background:var(--red);color:#fff;border:none;border-radius:var(--rs);font-size:14px;font-weight:600;padding:10px 20px;cursor:pointer;white-space:nowrap;min-height:44px;flex-shrink:0}\\n.wd-btn:active{opacity:.8}\\n.wd-none{font-size:12px;color:var(--muted);font-style:italic}\\n\\n/* \\u2500\\u2500 Status chips \\u2500\\u2500 */\\n.chip{font-size:10px;font-weight:600;padding:2px 8px;border-radius:10px;white-space:nowrap}\\n.chip-indebolito{background:#2a1a00;color:var(--amber2);border:1px solid var(--amber)}\\n.chip-fuori{background:#2a0a0a;color:#ff7070;border:1px solid var(--red)}\\n.chip-morto{background:#1a0a0a;color:#aa5050;border:1px solid #3a1010}\\n\\n/* \\u2500\\u2500 Cards panel \\u2500\\u2500 */\\n.cards-panel{padding:8px 10px 10px;background:var(--bg);display:flex;flex-direction:column;gap:6px;animation:slide-down .2s ease}\\n.cards-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;padding:8px 10px 12px;background:var(--bg)}\\n.card-item{background:var(--surf);border:1px solid var(--bord);border-radius:var(--rs);padding:9px 10px;cursor:pointer;user-select:none;transition:opacity .15s;display:flex;flex-direction:column;gap:4px;min-height:72px}\\n.card-item:active{opacity:.7}\\n.card-item.star-free{border-color:var(--gold)}\\n.card-item.used{opacity:.42}\\n.card-item.no-pool{opacity:.38}\\n.card-item.locked{opacity:.25;pointer-events:none}\\n.ci-top{display:flex;justify-content:space-between;align-items:center}\\n.ci-title{font-size:13px;font-weight:500;line-height:1.3;flex:1;color:var(--txt)}\\n.ci-grade{margin-top:auto}\\n.ci-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}\\n.ci-meta{display:flex;align-items:center;gap:8px}\\n.use-cnt{font-size:10px;color:var(--muted)}\\n\\n/* \\u2500\\u2500 Consulta tabs \\u2500\\u2500 */\\n.consulta-tabs{display:flex;gap:0;border-bottom:1px solid var(--bord);background:var(--surf);flex-shrink:0}\\n.ctab{flex:1;background:none;border:none;color:var(--muted);font-size:13px;font-family:inherit;padding:10px;cursor:pointer;border-bottom:2px solid transparent;transition:all .15s}\\n.ctab-active{color:var(--gold);border-bottom-color:var(--gold)}\\n.ctab:active{background:var(--surf2)}\\n.almanac{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:10px;display:flex;flex-direction:column;gap:8px}\\n.alm-card{background:var(--surf);border:1px solid var(--bord);border-radius:var(--r)}\\n.alm-open{border-color:var(--bord2)}\\n.alm-top{display:grid;grid-template-columns:110px 1fr;align-items:start}\\n.alm-photo-wrap{width:110px;height:110px;background:var(--surf3);overflow:hidden;border-right:1px solid var(--bord)}\\n.alm-photo{width:110px;height:110px;object-fit:cover;display:block}\\n.alm-photo-ph{width:110px;height:110px;display:flex;align-items:center;justify-content:center;font-size:28px;font-family:Georgia,serif;color:var(--txt);font-weight:600}\\n.alm-info{padding:8px 12px 8px;display:flex;flex-direction:column;gap:4px;min-width:0}\\n.alm-name-row{display:flex;align-items:center;gap:5px}\\n.alm-star{color:var(--gold);font-size:13px;flex-shrink:0}\\n.alm-name{font-family:Georgia,serif;font-size:15px;font-weight:600;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}\\n.alm-wounds-top{display:none}\\n.alm-wound-bar{display:flex;gap:10px;margin-top:4px;height:18px}\\n.alm-wd,.alm-wd-on,.alm-wd-off{flex:1;height:18px;border-radius:4px;transition:background .15s}\\n.alm-wd-on,.alm-wd-off{cursor:pointer}\\n.alm-wd-on{background:var(--red2)}\\n.alm-wd-off{background:var(--surf3)}\\n.alm-wd-on:active,.alm-wd-off:active{opacity:.7}\\n.alm-classe{font-size:10px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\\n.alm-stats{display:flex;gap:4px;flex-wrap:wrap;align-items:center}\\n.alm-stat-row{display:flex;justify-content:space-between;border-top:1px solid var(--bord);padding:6px 8px}\\n.alm-stat-cell{display:flex;flex-direction:column;align-items:center;gap:1px;flex:1}\\n.alm-stat-icon{font-size:13px;line-height:1}\\n.alm-stat-name{font-size:8px;color:var(--muted);text-transform:uppercase;letter-spacing:.3px;white-space:nowrap}\\n.alm-stat-grade{font-size:13px;font-weight:700}\\n.alm-cards-btn{width:100%;background:var(--surf2);border:none;border-top:1px solid var(--bord);color:var(--muted);font-size:12px;padding:8px 14px;cursor:pointer;text-align:left;font-family:inherit}\\n.alm-cards-btn:active{background:var(--surf3)}\\n.alm-cards-drawer{background:var(--bg);border-top:1px solid var(--bord);padding:8px 10px;display:flex;flex-direction:column;gap:5px}\\n.alm-card-row{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--surf);border:1px solid var(--bord);border-radius:var(--rs);cursor:pointer}\\n.alm-card-row:active{opacity:.7}\\n.alm-card-title{font-size:13px;font-weight:500;flex:1;padding-right:8px;line-height:1.3}\\n.alm-card-right{display:flex;align-items:center;gap:6px;flex-shrink:0}\\n\\n/* \\u2500\\u2500 Summon row \\u2500\\u2500 */\\n.summon-row{border-bottom:1px solid var(--bord);border-left:3px solid var(--gold)}\\n.summon-row.anim-summon{animation:slide-down .35s ease}\\n.summon-hdr{display:flex;align-items:center;padding:10px 14px;gap:10px;cursor:pointer;background:var(--surf);user-select:none}\\n.summon-pool-ctrl{display:flex;gap:6px;margin-left:auto}\\n/* Pallini blu per punti evocazione */\\n.sp-dot{width:13px;height:13px;border-radius:50%;flex-shrink:0}\\n.sp-dot-on{background:#4a8fe0}.sp-dot-off{background:var(--surf3);border:1px solid var(--bord2)}\\n.sp-dots-row{display:flex;gap:4px;align-items:center}\\n/* Slider summon nel modal */\\n.summon-slider{display:flex;flex-direction:column;gap:10px;width:100%;padding:10px 0}\\n.summon-slider-ctrl{display:flex;align-items:center;gap:12px;justify-content:center}\\n.summon-slider-val{font-size:22px;font-weight:700;color:var(--gold);min-width:32px;text-align:center}\\n.summon-slider-effect{background:var(--surf2);border:1px solid var(--bord);border-radius:var(--rs);padding:10px 14px;font-size:13px;color:var(--txt);min-height:44px;text-align:center;line-height:1.5}\\n.sp{font-size:10px;padding:2px 6px;border-radius:8px;display:inline-flex;align-items:center;gap:2px;white-space:nowrap}\\n.g-ss{background:#3a2800;color:#ecc86a}\\n.g-s{background:#1a2e1a;color:#8ecf8e}\\n.g-a{background:#1a2040;color:#8ab0e0}\\n.g-b{background:#2a2520;color:#a09080}\\n.g-c,.g-d{background:transparent;color:#666;border:1px solid #333}\\n\\n/* \\u2500\\u2500 Cost badges \\u2500\\u2500 */\\n.badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:10px;white-space:nowrap;flex-shrink:0}\\n.b-free{background:#2a2200;color:var(--gold);border:1px solid var(--gold)}\\n.b-c1{background:var(--surf2);color:var(--txt);border:1px solid var(--bord)}\\n.b-c2{background:#2a1500;color:#e09040;border:1px solid #5a3010}\\n.b-c3{background:#2a0808;color:#e05050;border:1px solid #5a1010}\\n\\n/* \\u2500\\u2500 Modals \\u2500\\u2500 */\\n.mod-ov{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:100;padding:20px}\\n/* Card modal \\u2014 centrato come carta da gioco */\\n.mod-sheet{background:var(--surf);border-radius:14px;width:min(420px,100%);max-height:90dvh;overflow-y:auto;border:2px solid var(--gold);box-shadow:0 8px 40px rgba(0,0,0,.6)}\\n.mod-sheet.anim-card-flip{animation:card-flip .4s cubic-bezier(.2,.8,.3,1) both}\\n/* Info/dialog modal \\u2014 slide dal basso */\\n.mod-ov.mod-bottom{align-items:flex-end;padding:0}\\n.mod-sheet.mod-sheet-bottom{border-radius:var(--r2) var(--r2) 0 0;width:100%;border:none;border-top:2px solid var(--bord);box-shadow:none}\\n.mod-sheet.mod-sheet-bottom.anim-slide-up{animation:slide-up-sheet .28s ease}\\n\\n/* Drawer \\u2014 animazione solo su apertura esplicita */\\n.cards-panel{padding:8px 10px 10px;background:var(--bg);display:flex;flex-direction:column;gap:6px}\\n.cards-panel.anim-open{animation:slide-down .22s ease}\\n\\n/* Animazioni \\u2500\\u2500 */\\n@keyframes slide-down{\\n  from{opacity:0;transform:translateY(-6px)}\\n  to  {opacity:1;transform:translateY(0)}\\n}\\n@keyframes slide-up-sheet{\\n  from{opacity:0;transform:translateY(30px)}\\n  to  {opacity:1;transform:translateY(0)}\\n}\\n@keyframes slide-up-toast{\\n  0%  {opacity:0;transform:translateX(-50%) translateY(10px)}\\n  100%{opacity:1;transform:translateX(-50%) translateY(0)}\\n}\\n@keyframes wound-flash{\\n  0%  {background:rgba(220,50,50,0)}\\n  20% {background:rgba(220,50,50,.45)}\\n  100%{background:rgba(220,50,50,0)}\\n}\\n@keyframes shake{\\n  0%,100%{transform:translateX(0)}\\n  20%    {transform:translateX(-6px)}\\n  40%    {transform:translateX(6px)}\\n  60%    {transform:translateX(-4px)}\\n  80%    {transform:translateX(4px)}\\n}\\n@keyframes card-flip{\\n  0%  {opacity:0;transform:perspective(900px) rotateY(-90deg) scale(.9)}\\n  55% {opacity:1;transform:perspective(900px) rotateY(6deg) scale(1.02)}\\n  75% {transform:perspective(900px) rotateY(-2deg) scale(.99)}\\n  100%{opacity:1;transform:perspective(900px) rotateY(0deg) scale(1)}\\n}\\n\\n/* Card modal */\\n.mod-img-wrap{display:flex;justify-content:center;padding:22px 20px 0}\\n.mod-img{width:120px;height:120px;object-fit:cover;border-radius:12px;border:2px solid var(--gold);display:block}\\n.mod-img-ph{width:120px;height:120px;background:var(--surf2);border-radius:12px;border:2px solid var(--bord);display:flex;align-items:center;justify-content:center;font-size:38px;font-family:Georgia,serif;color:var(--muted2)}\\n.mod-body{padding:16px 20px 32px}\\n.mod-npc{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}\\n.mod-title{font-family:Georgia,serif;font-size:21px;color:var(--gold);margin-bottom:10px;line-height:1.2}\\n.mod-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}\\n.mod-free{font-size:12px;color:var(--gold);background:#2a2200;border:1px solid var(--gold);padding:3px 10px;border-radius:10px}\\n.mod-cost{font-size:13px;color:var(--muted)}\\n.mod-readonly{font-size:11px;color:var(--muted);background:var(--surf2);border:1px solid var(--bord);padding:2px 9px;border-radius:10px}\\n.mod-desc{font-size:15px;line-height:1.65;color:var(--txt);margin-bottom:12px}\\n.mod-rule{font-size:13px;color:var(--muted);font-style:italic;border-top:1px solid var(--bord);padding-top:10px;margin-bottom:10px;line-height:1.55}\\n.mod-flavor{font-size:13px;color:#8a7058;font-style:italic;border-top:1px solid var(--bord);padding-top:10px;margin-bottom:10px;line-height:1.55}\\n.mod-minion{font-size:12px;color:#5a9acf;background:#080f18;border:1px solid #1a3048;border-radius:6px;padding:8px 10px;margin-bottom:10px;line-height:1.5}\\n.mod-actions{display:flex;flex-direction:column;gap:10px;margin-top:16px}\\n\\n/* Info modal */\\n.info-img-wrap{display:flex;justify-content:center;padding:22px 20px 0}\\n.info-img{width:min(100%,380px);aspect-ratio:1/1;object-fit:cover;border-radius:14px;border:2px solid var(--gold);display:block}\\n.info-img-ph{width:min(100%,380px);aspect-ratio:1/1;background:var(--surf2);border-radius:14px;border:2px solid var(--bord);display:flex;align-items:center;justify-content:center;font-size:56px;font-family:Georgia,serif;color:var(--muted2)}\\n.info-body{padding:16px 20px 32px}\\n.info-name{font-family:Georgia,serif;font-size:22px;color:var(--gold);margin-bottom:2px}\\n.info-cls{font-size:12px;color:var(--muted);margin-bottom:14px}\\n.info-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px}\\n.info-section{margin-bottom:14px}\\n.info-lbl{font-size:10px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted2);margin-bottom:6px}\\n.info-stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:16px}\\n.info-stat{background:var(--surf2);border-radius:var(--rs);padding:8px;text-align:center}\\n.info-stat-icon{font-size:16px;display:block;margin-bottom:2px}\\n.info-stat-grade{font-size:14px;font-weight:700;display:block}\\n.info-stat-name{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block}\\n.wounds-ctrl{display:flex;align-items:center;gap:10px}\\n.wounds-dots-lg{display:flex;gap:7px}\\n.wd-lg{width:18px;height:18px;border-radius:50%}\\n.wd-lg-on{background:var(--red2)}.wd-lg-off{background:var(--surf2);border:2px solid var(--bord)}\\n\\n/* \\u2500\\u2500 Menu / overlay \\u2500\\u2500 */\\n.overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:200;display:flex;align-items:flex-end}\\n.menu-sheet{background:var(--surf);width:100%;border-radius:var(--r) var(--r) 0 0;padding:8px 0 28px;border-top:1px solid var(--bord)}\\n.menu-item{display:block;width:100%;background:none;border:none;color:var(--txt);font-size:16px;padding:16px 24px;cursor:pointer;text-align:left}\\n.menu-item:active{background:var(--surf2)}\\n.menu-cancel{color:var(--muted)}\\n.menu-sep{border:none;border-top:1px solid var(--bord);margin:4px 0}\\n\\n/* \\u2500\\u2500 Minion rules \\u2500\\u2500 */\\n.minion-body{padding:20px 20px 36px}\\n.minion-title{font-family:Georgia,serif;font-size:20px;color:var(--gold);margin-bottom:14px}\\n.mr{margin-bottom:10px;padding:10px 13px;background:var(--surf2);border-radius:var(--rs);border-left:3px solid var(--gold)}\\n.mr-t{font-size:13px;font-weight:600;color:var(--gold);margin-bottom:3px}\\n.mr-b{font-size:13px;color:var(--muted);line-height:1.6}\\n\\n/* \\u2500\\u2500 Dialog \\u2500\\u2500 */\\n.dlg-ov{position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;z-index:400;padding:20px}\\n.dlg-box{background:var(--surf);border:1px solid var(--bord);border-radius:var(--r2);padding:24px 20px;width:100%;max-width:320px}\\n.dlg-title{font-family:Georgia,serif;font-size:18px;color:var(--gold);margin-bottom:8px}\\n.dlg-msg{font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:20px}\\n.dlg-btns{display:flex;flex-direction:column;gap:10px}\\n\\n/* \\u2500\\u2500 Settings \\u2500\\u2500 */\\n.settings-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px}\\n.settings-section{background:var(--surf);border:1px solid var(--bord);border-radius:var(--r);padding:14px 16px;display:flex;flex-direction:column;gap:10px}\\n.settings-section-title{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--gold);font-weight:600}\\n.divider{border:none;border-top:1px solid var(--bord)}\\n.sync-info{font-size:12px;color:var(--muted);text-align:center}\\n.fld{display:flex;flex-direction:column;gap:6px}\\n.fld label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}\\n.fld input{background:var(--surf2);border:1px solid var(--bord);color:var(--txt);border-radius:var(--rs);padding:12px 14px;font-size:13px;outline:none;font-family:monospace}\\n.fld input:focus{border-color:var(--gold)}\\n.hint-box{background:var(--surf2);border:1px solid var(--bord);border-radius:var(--r);padding:16px;font-size:12px;color:var(--muted);line-height:2}\\n.hint-box strong{color:var(--txt);display:block}\\n.hint-box code{display:block;font-family:monospace;background:var(--bg);padding:5px 8px;border-radius:4px;margin:2px 0 8px;overflow-x:auto;white-space:nowrap;font-size:11px;color:#9a8a70}\\n\\n/* \\u2500\\u2500 Toast \\u2500\\u2500 */\\n.toast{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--surf2);color:var(--txt);padding:9px 20px;border-radius:20px;font-size:13px;border:1px solid var(--bord);z-index:500;white-space:nowrap;max-width:92vw;text-align:center;pointer-events:none;animation:slide-up-toast .25s ease}\\n.toast-err{background:#2a0a0a;border-color:var(--red);color:#ff9090}\\n\\n/* \\u2500\\u2500 Misc \\u2500\\u2500 */\\n.loading{text-align:center;padding:20px;color:var(--gold);font-size:14px}\\n.err-banner{background:#200a0a;border:1px solid var(--red);color:#ff9090;border-radius:var(--rs);padding:10px 14px;font-size:13px}\\n</style>\\n</head>\\n<body>\\n<div id=\\\"app\\\"></div>\\n<script>\\nconst enc      = s => encodeURIComponent(s||'');\\nconst dec      = s => {try{return decodeURIComponent(s||'')}catch{return s||''}};\\nconst gc       = g  => \\\\`g-\\\\${(g||'d').toLowerCase()}\\\\`;\\nconst initials = n  => (n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();\\n\\nfunction wounds(id){ return S.wounds[id]||0; }\\n\\n// Ferite subite durante la sessione corrente (0 se nessuna sessione attiva)\\nfunction sessionWounds(id){\\n  if(!S.session) return wounds(id);\\n  const atStart = S.session.woundsAtStart?.[id] || 0;\\n  return Math.max(0, wounds(id) - atStart);\\n}\\n\\nfunction status(npc){\\n  const w = wounds(npc.id), pf = npc.pf_max||1;\\n  if(w >= pf) return 'morto';\\n  // Fuori per carta (disable_if)\\n  if(S.session?.disabledBy?.[npc.id]) return 'fuori';\\n  // In sessione: stato basato sulle ferite subite durante la sessione\\n  const sw = S.session ? sessionWounds(npc.id) : w;\\n  if(npc.star){ if(sw >= 2) return 'fuori'; if(sw === 1) return 'indebolito'; }\\n  else         { if(sw >= 1) return 'fuori'; }\\n  return 'sano';\\n}\\nconst blocked  = npc => {\\n  if(npc.summoned){\\n    const summon=S.session?.summons?.[npc.id];\\n    return !summon || summon.pool<=0;\\n  }\\n  const s=status(npc); return s==='fuori'||s==='morto';\\n};\\nconst isFree   = (npc,card) => npc?.star && parseInt(card.cost)===1 && timesUsed(npc.id,card.title)===0;\\nconst effCost  = (npc,card) => isFree(npc,card)?0:parseInt(card.cost)||1;\\nconst timesUsed= (nId,t) => (S.session?.used||{})[cKey(nId,t)]||0;\\n\\n// Render TS sempre in ordine fisso Tempra \\u2192 Riflessi \\u2192 Volont\\u00e0\\nconst TS_ABBR = {'Tempra':'Tmp','Riflessi':'Rif','Volont\\u00e0':'Vol'};\\nfunction rTS(npc, large=false) {\\n  const ORDER = ['Tempra','Riflessi','Volont\\u00e0'];\\n  const forte  = new Set(npc.ts_forte||[]);\\n  const debole = new Set(npc.ts_debole||[]);\\n  const sz = large ? 'font-size:12px;padding:3px 10px' : '';\\n  const lbl = large ? t => t : t => TS_ABBR[t]||t;\\n  return ORDER.map(t => {\\n    if (forte.has(t))  return \\\\`<span class=\\\"ts-pill ts-forte\\\"  style=\\\"\\\\${sz}\\\">\\\\${lbl(t)}\\u2713</span>\\\\`;\\n    if (debole.has(t)) return \\\\`<span class=\\\"ts-pill ts-debole\\\" style=\\\"\\\\${sz}\\\">\\\\${lbl(t)}\\u2715</span>\\\\`;\\n    return '';\\n  }).join('');\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// SYNC\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nasync function syncGithub(){\\n  if(!S.rawUrl){toast('URL GitHub non configurato',true);return;}\\n  S.loading=true; S.error=null; render();\\n  try{\\n    const r=await fetch(S.rawUrl+'?t='+Date.now());\\n    if(!r.ok) throw new Error('HTTP '+r.status);\\n    const data=await r.json();\\n    if(!data.npcs?.length) throw new Error('\\\"npcs\\\" mancante o vuoto');\\n    if(!data.cards?.length) throw new Error('\\\"cards\\\" mancante o vuoto');\\n    S.npcs  = data.npcs.map(n=>({...n, star:['true','TRUE','1',true].includes(n.star), pf_max:parseInt(n.pf_max)||1}));\\n    S.cards = data.cards.map(c=>({...c, cost:parseInt(c.cost)||1}));\\n    S.syncTime = new Date().toISOString();\\n    LS.s('npcs',S.npcs); LS.s('cards',S.cards); LS.s('syncTime',S.syncTime);\\n    toast(\\\\`\\u2713 \\\\${S.npcs.length} PNG \\u00b7 \\\\${S.cards.length} carte\\\\`);\\n  }catch(e){\\n    S.error=e.message; toast('Errore: '+e.message,true);\\n  }finally{\\n    S.loading=false; render();\\n  }\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// ACTIONS\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nfunction startSession(){\\n  // Rimuovi dal mazzo PNG che non esistono pi\\u00f9 nel JSON\\n  S.deck = S.deck.filter(id => npcById(id));\\n  if(S.deck.length === 0){ toast('Nessun PNG valido nel mazzo!', true); return; }\\n  LS.s('deck', S.deck);\\n  // Snapshot ferite iniziali di ogni PNG nel mazzo\\n  const woundsAtStart = {};\\n  S.deck.forEach(id => { woundsAtStart[id] = wounds(id); });\\n  S.session={pool:S.maxPool, maxPool:S.maxPool, used:{}, woundsAtStart,\\n    disabledBy:{},\\n    summons:{},\\n    summonDeck:[]\\n  };\\n  LS.s('session',S.session);\\n  S.view='session'; S.expanded={}; render();\\n}\\nfunction endSession(){\\n  S.menuOpen=false;\\n  S.dialog={title:'Termina sessione',msg:'Le carte usate verranno azzerate. Le ferite persistono tra le sessioni.',confirmLabel:'Termina',danger:true,confirmAction:'do-end'};\\n  render();\\n}\\nfunction resetSession(){\\n  S.menuOpen=false;\\n  S.dialog={title:'Azzera sessione',msg:'Carte usate e pool verranno ripristinati. Le ferite persistono.',confirmLabel:'Azzera',danger:false,confirmAction:'do-reset'};\\n  render();\\n}\\nfunction adjPool(d){\\n  if(!S.session) return;\\n  S.session.pool=Math.max(0,Math.min(S.session.maxPool*2,S.session.pool+d));\\n  LS.s('session',S.session); render();\\n}\\nfunction adjMax(d){\\n  S.maxPool=Math.max(1,Math.min(20,S.maxPool+d));\\n  LS.s('maxPool',S.maxPool); render();\\n}\\nfunction playCard(npcId,cardTitle){\\n  if(!S.session) return;\\n  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);\\n  if(!npc||!card) return;\\n  if(blocked(npc)){toast('PNG fuori combattimento!',true);return;}\\n\\n  // Carte ombre \\u2014 usano summon pool invece del pool globale\\n  const isSummonCard = card.summon_cost;\\n  if(isSummonCard){\\n    const summon = S.session.summons?.[npcId];\\n    if(!summon||summon.pool<=0){toast('Punti evocazione esauriti!',true);return;}\\n    // Mostra selettore punti \\u2014 gestito da dialog dedicato\\n    S.dialog={\\n      title: card.title,\\n      msg: \\\\`Quanti \\\\${summon.pool_name||'PS'} vuoi spendere? (1-\\\\${summon.pool})\\\\`,\\n      confirmLabel: null,\\n      isSummonCost: true,\\n      summonNpcId: npcId,\\n      summonCardTitle: cardTitle,\\n      summonMax: summon.pool\\n    };\\n    render(); return;\\n  }\\n\\n  const cost=effCost(npc,card);\\n\\n  // disable_if: always \\u2014 fuori combattimento immediato\\n  if(card.disable_if?.condition==='always'){\\n    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}\\n    S.session.pool-=cost;\\n    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;\\n    S.session.disabledBy[npcId]=true;\\n    LS.s('session',S.session); S.openCard=null;\\n    toast(\\\\`\\\\${npc.name} esce dal combattimento\\\\`); render(); return;\\n  }\\n\\n  // disable_if: ask \\u2014 chiede conferma prima\\n  if(card.disable_if?.condition==='ask'){\\n    S.dialog={\\n      title: card.title,\\n      msg: card.disable_if.prompt||'Confermi effetto speciale?',\\n      confirmLabel: 'S\\u00ec \\u2014 applica',\\n      cancelLabel: 'No \\u2014 effetto normale',\\n      confirmAction: 'play-card-disable',\\n      cancelAction: 'play-card-normal',\\n      pendingNpc: npcId,\\n      pendingCard: cardTitle\\n    };\\n    render(); return;\\n  }\\n\\n  // summon: aggiunge PNG evocato al mazzo sessione\\n  if(card.summon){\\n    const sId = card.summon.npc_id;\\n    if(S.session.summonDeck?.includes(sId)){\\n      toast('Evocazione gi\\u00e0 attiva!',true); return;\\n    }\\n    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}\\n    S.session.pool-=cost;\\n    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;\\n    if(!S.session.summons) S.session.summons={};\\n    if(!S.session.summonDeck) S.session.summonDeck=[];\\n    S.session.summons[sId]={\\n      pool: card.summon.pool,\\n      maxPool: card.summon.pool,\\n      pool_name: card.summon.pool_name||'PS'\\n    };\\n    S.session.summonDeck.push(sId);\\n    LS.s('session',S.session); S.openCard=null;\\n    const sNpc=npcById(sId);\\n    toast(\\\\`\\u2726 \\\\${sNpc?.name||sId} evocate!\\\\`); render(); return;\\n  }\\n\\n  // Carta normale\\n  if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}\\n  S.session.pool-=cost;\\n  S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;\\n  LS.s('session',S.session); S.openCard=null;\\n  toast(cost===0?\\\\`\\u2605 \\\\${cardTitle} \\u2014 gratuita!\\\\`:\\\\`\\\\${cardTitle} \\u2014 \\\\${cost}pt\\\\`);\\n  render();\\n}\\nfunction undoCard(npcId,cardTitle){\\n  if(!S.session) return;\\n  const key=cKey(npcId,cardTitle), was=S.session.used[key]||0;\\n  if(!was) return;\\n  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);\\n  if(!npc||!card) return;\\n  const wasFree=npc.star&&parseInt(card.cost)===1&&was===1;\\n  S.session.pool=Math.min(S.session.maxPool,S.session.pool+(wasFree?0:parseInt(card.cost)||1));\\n  if(was===1) delete S.session.used[key]; else S.session.used[key]=was-1;\\n  LS.s('session',S.session); S.openCard=null; render();\\n}\\nfunction addWound(npcId){\\n  const npc=npcById(npcId); if(!npc) return;\\n  if(npc.summoned && S.session?.summons?.[npcId]){\\n    const summon=S.session.summons[npcId];\\n    summon.pool=Math.max(0,summon.pool-1);\\n    if(summon.pool<=0){\\n      S.session.summonDeck=(S.session.summonDeck||[]).filter(id=>id!==npcId);\\n      toast(\\\\`\\u2726 \\\\${npc.name} si dissolvono\\\\`,true);\\n    } else {\\n      toast(\\\\`\\u2726 \\\\${npc.name} \\u2014 \\\\${summon.pool}/\\\\${summon.maxPool} \\\\${summon.pool_name||'PS'}\\\\`);\\n    }\\n    flashWound();\\n    LS.s('session',S.session); render(); return;\\n  }\\n  const cur=wounds(npcId);\\n  if(cur>=npc.pf_max){toast('PNG gi\\u00e0 al massimo delle ferite!',true);return;}\\n  S.wounds[npcId]=cur+1; LS.s('wounds',S.wounds);\\n  flashWound();\\n  const st=status(npc);\\n  if(st==='morto')           toast(\\\\`\\u2620 \\\\${npc.name} \\u00e8 morto!\\\\`,true);\\n  else if(st==='fuori')      { toast(\\\\`\\u2715 \\\\${npc.name} \\u00e8 fuori combattimento\\\\`); shakeNpc(npcId); }\\n  else if(st==='indebolito') toast(\\\\`\\u26a0 \\\\${npc.name} \\u00e8 indebolito \\u2014 al prossimo colpo fuori\\\\`);\\n  render();\\n}\\nfunction flashWound(){\\n  const el=document.createElement('div');\\n  el.style.cssText='position:fixed;inset:0;z-index:9999;pointer-events:none;animation:wound-flash .5s ease forwards';\\n  document.body.appendChild(el);\\n  setTimeout(()=>el.remove(),520);\\n}\\nfunction shakeNpc(npcId){\\n  setTimeout(()=>{\\n    const row=document.querySelector(\\\\`[data-npc=\\\"\\\\${npcId}\\\"]\\\\`)?.closest('.npc-row');\\n    if(row){row.style.animation='shake .4s ease';setTimeout(()=>row.style.animation='',420);}\\n  },50);\\n}\\nfunction removeWound(npcId){\\n  const cur=wounds(npcId); if(cur<=0) return;\\n  S.wounds[npcId]=cur-1; LS.s('wounds',S.wounds);\\n  toast(\\\\`\\u2764 \\\\${npcById(npcId)?.name} guarisce una ferita\\\\`); render();\\n}\\nfunction toast(msg,err=false){\\n  S.toast={msg,err}; render();\\n  setTimeout(()=>{S.toast=null;render();},2800);\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// RENDER\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nlet _prevOpenCard = null;\\nlet _prevExpanded = {};\\nlet _prevSummonDeck = [];\\n\\nfunction render(){\\n  const scrollEl = document.querySelector('.almanac, .npc-list, .scroll-body, .settings-body');\\n  const scrollTop = scrollEl ? scrollEl.scrollTop : 0;\\n  const scrollId  = scrollEl ? (scrollEl.className.split(' ')[0]) : null;\\n\\n  // Traccia cosa era aperto prima del render\\n  const wasCardNew   = S.openCard && S.openCard !== _prevOpenCard;\\n  const prevExpanded = {..._prevExpanded};\\n  const prevSummons  = [..._prevSummonDeck];\\n\\n  const views={home:rHome,builder:rBuilder,session:rSession,settings:rSettings,consulta:rConsulta};\\n  document.getElementById('app').innerHTML=\\n    (views[S.view]||rHome)()+\\n    (S.dialog     ? rDialog()    :'')+\\n    (S.openCard   ? rCardModal() :'')+\\n    (S.openInfo   ? rInfoModal() :'')+\\n    (S.minionOpen ? rMinion()    :'')+\\n    (S.menuOpen   ? rMenu()      :'')+\\n    (S.toast?\\\\`<div class=\\\"toast\\\\${S.toast.err?' toast-err':''}\\\">\\\\${S.toast.msg}</div>\\\\`:'');\\n\\n  // Anima card modal solo se appena aperto\\n  if(wasCardNew){\\n    document.querySelector('.mod-sheet:not(.mod-sheet-bottom)')?.classList.add('anim-card-flip');\\n  }\\n  // Anima info/minion modal solo se appena aperto\\n  if(S.openInfo && !_prevOpenCard){\\n    document.querySelector('.mod-sheet-bottom')?.classList.add('anim-slide-up');\\n  }\\n  // Anima drawer solo se appena espanso (non su ogni re-render)\\n  Object.keys(S.expanded).forEach(id=>{\\n    if(S.expanded[id] && !prevExpanded[id]){\\n      const panel=document.querySelector(\\\\`.npc-row [data-npc=\\\"\\\\${id}\\\"] ~ * .cards-panel, .cards-panel\\\\`);\\n      // Trova il cards-panel del PNG appena espanso\\n      const row=document.querySelector(\\\\`[data-npc=\\\"\\\\${id}\\\"]\\\\`)?.closest('.npc-row, .summon-row');\\n      row?.querySelector('.cards-panel')?.classList.add('anim-open');\\n    }\\n  });\\n  // Anima summon row solo se appena aggiunto\\n  (S.session?.summonDeck||[]).forEach(id=>{\\n    if(!prevSummons.includes(id)){\\n      document.querySelector(\\\\`.summon-row [data-npc=\\\"\\\\${id}\\\"]\\\\`)?.closest('.summon-row')\\n        ?.classList.add('anim-summon');\\n    }\\n  });\\n\\n  // Aggiorna tracking\\n  _prevOpenCard = S.openCard;\\n  _prevExpanded = {...S.expanded};\\n  _prevSummonDeck = [...(S.session?.summonDeck||[])];\\n\\n  if(scrollId && !S.openCard && !S.openInfo && !S.dialog && !S.menuOpen && !S.minionOpen){\\n    const el = document.querySelector('.'+scrollId);\\n    if(el) el.scrollTop = scrollTop;\\n  }\\n}\\n\\n// \\u2500\\u2500 Summon card effect label \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction getSummonEffect(card, n){\\n  // Cerca la riga corrispondente a npo nella desc\\n  const lines = (card.desc||'').split(/[.\\u2014]/).map(s=>s.trim()).filter(Boolean);\\n  const match = lines.find(l=>l.startsWith(\\\\`\\\\${n}ps\\\\`)||l.startsWith(\\\\`\\\\${n} ps\\\\`));\\n  if(match) return match.replace(/^\\\\\\\\d+\\\\\\\\s*ps:?\\\\\\\\s*/i,'');\\n  // Fallback: danni per Assalto\\n  if(card.title.includes('Assalto')) return \\\\`\\\\${n*15} danni\\\\`;\\n  return \\\\`Effetto \\\\${n}\\\\`;\\n}\\n\\n// \\u2500\\u2500 Bottom nav \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rBotNav(active){\\n  const sess = S.session;\\n  return \\\\`<nav class=\\\"bot-nav\\\">\\n    <button class=\\\"bot-btn\\\\${active==='home'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"home\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\ud83c\\udfe0</span>Home\\n    </button>\\n    <button class=\\\"bot-btn\\\\${active==='consulta'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"consulta\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\ud83d\\udc65</span>Ciurma\\n    </button>\\n    \\\\${sess\\n      ?\\\\`<button class=\\\"bot-btn bot-btn-sess\\\\${active==='session'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"session\\\">\\n          <span class=\\\"bot-btn-icon\\\">\\u2694\\ufe0f</span>Sessione\\n        </button>\\\\`\\n      :''}\\n    <button class=\\\"bot-btn\\\\${active==='minion'?' active':''}\\\" data-action=\\\"open-minion-nav\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\ud83d\\udcd6</span>Regole\\n    </button>\\n    <button class=\\\"bot-btn\\\\${active==='settings'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"settings\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\u2699\\ufe0f</span>Opzioni\\n    </button>\\n  </nav>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Home \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rHome(){\\n  const deckTxt = S.deck.length\\n    ? S.deck.map(id=>npcById(id)?.name||id).join(', ')\\n    : null;\\n  const syncTxt = S.syncTime\\n    ? new Date(S.syncTime).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})\\n    : 'Mai';\\n  const activeCount = S.deck.filter(id=>{ const n=npcById(id); return n&&status(n)==='sano'; }).length;\\n\\n  return \\\\`<div class=\\\"view home-view\\\">\\n  \\\\${S.loading?'<div class=\\\"loading\\\" style=\\\"position:absolute;top:0;left:0;right:0;z-index:10\\\">Sincronizzazione...</div>':''}\\n  \\\\${S.error?\\\\`<div class=\\\"err-banner\\\" style=\\\"position:absolute;top:0;left:0;right:0;z-index:10\\\">\\u26a0 \\\\${S.error}</div>\\\\`:''}\\n\\n  <!-- Hero \\u2014 met\\u00e0 superiore -->\\n  <div class=\\\"home-hero-img\\\">\\n    <img src=\\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2017/05/pirate-ship-wallpapers-1080p.jpg\\\"\\n      alt=\\\"Pollo Diablo\\\" onerror=\\\"this.parentElement.classList.add('hero-fallback')\\\">\\n    <div class=\\\"home-hero-overlay\\\">\\n      <div class=\\\"home-hero-title\\\">\\u2693 Ciurma del<br>Pollo Diablo</div>\\n    </div>\\n  </div>\\n\\n  <!-- Azioni \\u2014 met\\u00e0 inferiore -->\\n  <div class=\\\"home-actions-panel\\\">\\n    <!-- Mazzo -->\\n    <div class=\\\"home-deck-row\\\">\\n      <div class=\\\"home-deck-info\\\">\\n        <span class=\\\"home-deck-label\\\">Mazzo</span>\\n        <span class=\\\"home-deck-val\\\">\\\\${S.deck.length ? S.deck.length+' PNG' : '\\u2014'}</span>\\n        \\\\${deckTxt?\\\\`<span class=\\\"home-deck-sub\\\">\\\\${deckTxt}</span>\\\\`:''}\\n      </div>\\n      <button class=\\\"sm-btn\\\" data-action=\\\"open-builder\\\">\\u270f\\ufe0f Modifica</button>\\n    </div>\\n\\n    \\\\${S.deck.length ? \\\\`\\n    <!-- Pool -->\\n    <div class=\\\"home-pool-row\\\">\\n      <span class=\\\"home-deck-label\\\">Pool punti</span>\\n      <div class=\\\"stepper-row\\\" style=\\\"margin:0\\\">\\n        <button class=\\\"step-btn\\\" data-action=\\\"adj-max\\\" data-d=\\\"-1\\\">\\u2212</button>\\n        <span class=\\\"stepper-val\\\">\\\\${S.maxPool}</span>\\n        <button class=\\\"step-btn\\\" data-action=\\\"adj-max\\\" data-d=\\\"1\\\">+</button>\\n      </div>\\n    </div>\\n    <!-- CTA sessione -->\\n    <button class=\\\"btn btn-g btn-lg home-sess-btn\\\" data-action=\\\"start-session\\\">\\u2694 Inizia sessione</button>\\n    \\\\` : \\\\`<p class=\\\"hint-txt\\\" style=\\\"margin:12px 0\\\">Aggiungi PNG al mazzo per iniziare.</p>\\\\`}\\n\\n    <!-- Sync strip -->\\n    <div class=\\\"sync-strip\\\">\\n      <span>Sync: \\\\${syncTxt} \\u00b7 \\\\${S.npcs.filter(n=>!n.summoned).length} PNG \\u00b7 \\\\${S.cards.length} carte</span>\\n      \\\\${S.rawUrl\\n        ?\\\\`<button class=\\\"sm-btn\\\" style=\\\"margin:0;padding:5px 10px\\\" data-action=\\\"sync\\\">\\ud83d\\udd04</button>\\\\`\\n        :\\\\`<button class=\\\"sm-btn\\\" style=\\\"margin:0;padding:5px 10px\\\" data-action=\\\"goto\\\" data-view=\\\"settings\\\">Configura</button>\\\\`}\\n    </div>\\n  </div>\\n\\n  \\\\${rBotNav('home')}</div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Builder \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rBuilder(){\\n  const bd=S.builderDeck||[];\\n  return \\\\`<div class=\\\"view\\\">\\n  <div class=\\\"hdr\\\">\\n    <button class=\\\"ico-btn\\\" data-action=\\\"cancel-builder\\\">\\u2190</button>\\n    <span class=\\\"hdr-title\\\">Modifica mazzo</span>\\n    <button class=\\\"confirm-btn\\\" data-action=\\\"confirm-builder\\\">\\u2713 Salva (\\\\${bd.length})</button>\\n  </div>\\n  <div class=\\\"bldr-sub\\\">Tocca un PNG per aggiungerlo o rimuoverlo</div>\\n  <div class=\\\"npc-grid\\\">\\n    \\\\${S.npcs.filter(npc=>!npc.summoned).map(npc=>{\\n      const sel=bd.includes(npc.id), w=wounds(npc.id), pf=npc.pf_max||1;\\n      const st=status(npc);\\n      return \\\\`<div class=\\\"npc-tile\\\\${sel?' sel':''}\\\" data-action=\\\"toggle-npc\\\" data-npc=\\\"\\\\${npc.id}\\\">\\n        <div class=\\\"tile-img-wrap\\\">\\n          <div class=\\\"tile-name-ov\\\">\\\\${npc.star?'\\u2605 ':''}\\\\${npc.name}</div>\\n          \\\\${npc.image_url?\\\\`<img src=\\\"\\\\${npc.image_url}\\\" alt=\\\"\\\\${npc.name}\\\" onerror=\\\"this.style.display='none'\\\">\\\\`:''}\\n          \\\\${!npc.image_url?\\\\`<div class=\\\"tile-img-ph\\\">\\\\${initials(npc.name)}</div>\\\\`:''}\\n          \\\\${sel?'<span class=\\\"tile-chk-ov\\\">\\u2713</span>':''}\\n        </div>\\n      </div>\\\\`;\\n    }).join('')}\\n  </div></div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Session \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rSession(){\\n  if(!S.session) return rHome();\\n  const {pool,maxPool}=S.session;\\n  const summonDeck = S.session.summonDeck||[];\\n  return \\\\`<div class=\\\"view sess-view\\\">\\n  <div class=\\\"hdr sess-hdr\\\">\\n    <div class=\\\"pool-wrap\\\">\\n      <div class=\\\"pool-dots\\\">\\\\${rDots(pool,maxPool)}</div>\\n      <div class=\\\"pool-txt\\\">\\\\${pool} / \\\\${maxPool} pt</div>\\n    </div>\\n    <div class=\\\"pool-ctrl\\\">\\n      <button class=\\\"step-btn\\\" style=\\\"width:32px;height:32px;font-size:18px\\\" data-action=\\\"adj-pool\\\" data-d=\\\"-1\\\">\\u2212</button>\\n      <button class=\\\"step-btn\\\" style=\\\"width:32px;height:32px;font-size:18px\\\" data-action=\\\"adj-pool\\\" data-d=\\\"1\\\">+</button>\\n      <button class=\\\"end-btn\\\" data-action=\\\"end-session\\\">Fine</button>\\n      <button class=\\\"ico-btn\\\" data-action=\\\"open-menu\\\">\\u22ee</button>\\n    </div>\\n  </div>\\n  <div class=\\\"npc-list\\\">\\n    \\\\${S.deck.map(id=>{\\n      const npc=npcById(id); if(!npc) return '';\\n      const st=status(npc), exp=S.expanded[id];\\n      return \\\\`<div class=\\\"npc-row \\\\${st}\\\">\\n        \\\\${rNpcRow(npc, st, exp, 'session')}\\n        \\\\${exp ? \\\\`<div class=\\\"cards-panel\\\">\\\\${rCardItems(npc)}</div>\\\\` : ''}\\n      </div>\\\\`;\\n    }).join('')}\\n    \\\\${summonDeck.map(id=>{\\n      const npc=npcById(id); if(!npc) return '';\\n      const summon=S.session.summons?.[id];\\n      const exp=S.expanded[id];\\n      const pool=summon?.pool||0, maxPool=summon?.maxPool||0;\\n      const isDead=pool<=0;\\n      const spDots = Array.from({length:maxPool},(_,i)=>\\n        \\\\`<span class=\\\"sp-dot \\\\${i<pool?'sp-dot-on':'sp-dot-off'}\\\"></span>\\\\`).join('');\\n      return \\\\`<div class=\\\"npc-row summon-row\\\\${isDead?' fuori':''}\\\">\\n        <div class=\\\"nr-hdr\\\" data-action=\\\"toggle-npc\\\" data-npc=\\\"\\\\${id}\\\">\\n          <div class=\\\"nr-avatar\\\" style=\\\"border:1px solid var(--gold)\\\">\\n            \\\\${npc.image_url\\n              ?\\\\`<img src=\\\"\\\\${npc.image_url}\\\" alt=\\\"\\\\${npc.name}\\\">\\\\`\\n              :\\\\`<span style=\\\"font-size:18px;color:var(--gold)\\\">\\u2726</span>\\\\`}\\n          </div>\\n          <div class=\\\"nr-info\\\">\\n            <div class=\\\"nr-row1\\\">\\n              <span class=\\\"nr-name\\\" style=\\\"color:var(--gold)\\\">\\\\${npc.name}</span>\\n            </div>\\n            <div class=\\\"nr-row2\\\">\\n              <span class=\\\"ca-badge\\\">CA \\\\${npc.ca||'?'}</span>\\n              \\\\${rTS(npc)}\\n            </div>\\n          </div>\\n          <button class=\\\"info-btn\\\" data-action=\\\"open-info\\\" data-npc=\\\"\\\\${id}\\\" data-stop>\\u2139</button>\\n        </div>\\n        <div class=\\\"nr-expand-btn\\\" data-action=\\\"toggle-npc\\\" data-npc=\\\"\\\\${id}\\\">\\n          \\\\${exp?'\\u25b2':'\\u25bc'}\\n        </div>\\n        \\\\${exp&&!isDead ? \\\\`<div class=\\\"cards-panel\\\">\\\\${rCardItems(npc, true)}</div>\\\\` : ''}\\n      </div>\\\\`;\\n    }).join('')}\\n  </div>\\n  \\\\${rBotNav('session')}</div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Consulta \\u2014 Almanacco \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rConsulta(){\\n  const showSummon = S.consultaTab === 'summon';\\n  const npcList = showSummon\\n    ? S.npcs.filter(npc=>npc.summoned)\\n    : S.npcs.filter(npc=>!npc.summoned);\\n\\n  return \\\\`<div class=\\\"view\\\">\\n  <div class=\\\"hdr\\\"><span class=\\\"hdr-title\\\">\\ud83e\\ude9d Pendagli da forca</span></div>\\n  <div class=\\\"consulta-tabs\\\">\\n    <button class=\\\"ctab\\\\${!showSummon?' ctab-active':''}\\\" data-action=\\\"consulta-tab\\\" data-tab=\\\"ciurma\\\">\\ud83d\\udc65 Ciurma</button>\\n    <button class=\\\"ctab\\\\${showSummon?' ctab-active':''}\\\" data-action=\\\"consulta-tab\\\" data-tab=\\\"summon\\\">\\u2726 Evocazioni</button>\\n  </div>\\n  <div class=\\\"almanac\\\">\\n    \\\\${npcList.length === 0\\n      ? \\\\`<div style=\\\"padding:30px;text-align:center;color:var(--muted);font-size:14px\\\">\\\\${showSummon?'Nessuna evocazione disponibile':'Nessun PNG'}</div>\\\\`\\n      : npcList.map(npc=>{\\n      const exp = S.consultaExp[npc.id];\\n      const cards = npcCards(npc.id);\\n      const w = wounds(npc.id), pf = npc.pf_max||1;\\n      const st = status(npc);\\n      const wdots = Array.from({length:pf},(_,i)=>\\n        \\\\`<span class=\\\"wd \\\\${i<w?'wd-on':'wd-off'}\\\"></span>\\\\`).join('');\\n      const statusChip = st==='sano' ? '' :\\n        st==='indebolito' ? \\\\`<span class=\\\"chip chip-indebolito\\\">\\u26a0 Indebolito</span>\\\\` :\\n        st==='fuori'      ? \\\\`<span class=\\\"chip chip-fuori\\\">\\u2715 Fuori</span>\\\\` :\\n                            \\\\`<span class=\\\"chip chip-morto\\\">\\u2620 Morto</span>\\\\`;\\n\\n      return \\\\`<div class=\\\"alm-card\\\\${exp?' alm-open':''}\\\">\\n        <div class=\\\"alm-top\\\">\\n          <div class=\\\"alm-photo-wrap\\\">\\n            \\\\${npc.image_url\\n              ? \\\\`<img class=\\\"alm-photo\\\" src=\\\"\\\\${npc.image_url}\\\" alt=\\\"\\\\${npc.name}\\\" onerror=\\\"this.style.display='none';this.parentElement.querySelector('.alm-photo-ph').style.display='flex'\\\">\\\\`+\\n                \\\\`<div class=\\\"alm-photo-ph\\\" style=\\\"display:none\\\">\\\\${initials(npc.name)}</div>\\\\`\\n              : \\\\`<div class=\\\"alm-photo-ph\\\">\\\\${initials(npc.name)}</div>\\\\`}\\n          </div>\\n          <div class=\\\"alm-info\\\">\\n            <div class=\\\"alm-name-row\\\">\\n              \\\\${npc.star?'<span class=\\\"alm-star\\\">\\u2605</span>':''}\\n              <span class=\\\"alm-name\\\">\\\\${npc.name}</span>\\n            </div>\\n            <div class=\\\"alm-classe\\\">\\\\${npc.classe||''}</div>\\n            <div class=\\\"alm-stats\\\">\\n              <span class=\\\"ca-badge\\\">CA \\\\${npc.ca||'?'}</span>\\n              \\\\${rTS(npc)}\\n            </div>\\n            <div class=\\\"alm-wound-bar\\\">\\n              \\\\${npc.summoned\\n                ? Array.from({length:npc.pf_max||4},(_,i)=>\\\\`\\n                    <span class=\\\"alm-wd\\\" style=\\\"background:#4a8fe0;cursor:default\\\"></span>\\\\`).join('')\\n                : Array.from({length:pf},(_,i)=>\\\\`\\n                    <span class=\\\"alm-wd \\\\${i<w?'alm-wd-on':'alm-wd-off'}\\\"\\n                      data-action=\\\"\\\\${i<w?'remove-wound-info':'add-wound'}\\\"\\n                      data-npc=\\\"\\\\${npc.id}\\\"\\n                      data-stop></span>\\\\`).join('')}\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"alm-stat-row\\\">\\n          \\\\${SK.map(k=>\\\\`<div class=\\\"alm-stat-cell\\\">\\n            <span class=\\\"alm-stat-icon\\\">\\\\${SI[k]}</span>\\n            <span class=\\\"alm-stat-name\\\">\\\\${SN[k]}</span>\\n            <span class=\\\"alm-stat-grade \\\\${gc(npc[k])}\\\">\\\\${npc[k]||'D'}</span>\\n          </div>\\\\`).join('')}\\n        </div>\\n        <button class=\\\"alm-cards-btn\\\" data-action=\\\"toggle-consulta\\\" data-npc=\\\"\\\\${npc.id}\\\">\\n          \\\\${exp ? '\\u25b2 Nascondi carte' : \\\\`\\u25bc Carte (\\\\${cards.length})\\\\`}\\n        </button>\\n        \\\\${exp ? \\\\`<div class=\\\"alm-cards-drawer\\\">\\n          \\\\${cards.map(card=>\\\\`\\n            <div class=\\\"alm-card-row\\\" data-action=\\\"open-card-consulta\\\" data-npc=\\\"\\\\${npc.id}\\\" data-card=\\\"\\\\${enc(card.title)}\\\">\\n              <span class=\\\"alm-card-title\\\">\\\\${card.title}</span>\\n              <div class=\\\"alm-card-right\\\">\\n                <span class=\\\"sp \\\\${gc(card.grade)}\\\">\\\\${SI[card.stat]||''} \\\\${card.grade||''}</span>\\n                \\\\${card.summon_cost\\n                  ? \\\\`<span class=\\\"badge\\\" style=\\\"background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090\\\">1\\u20134 PS</span>\\\\`\\n                  : \\\\`<span class=\\\"badge b-c\\\\${Math.min(parseInt(card.cost)||1,3)}\\\">\\\\${card.cost}pt</span>\\\\`}\\n              </div>\\n            </div>\\\\`).join('')}\\n        </div>\\\\` : ''}\\n      </div>\\\\`;\\n    }).join('')}\\n  </div>\\n  \\\\${rBotNav('consulta')}</div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Shared NPC row (session + consulta) \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rNpcRow(npc, st, exp, ctx){\\n  const w=wounds(npc.id), pf=npc.pf_max||1;\\n  const chip = st==='sano'  ? '' :\\n    st==='indebolito' ? \\\\`<span class=\\\"chip chip-indebolito\\\">\\u26a0 Indebolito</span>\\\\` :\\n    st==='fuori'      ? \\\\`<span class=\\\"chip chip-fuori\\\">\\u2715 Fuori</span>\\\\` :\\n                        \\\\`<span class=\\\"chip chip-morto\\\">\\u2620 Morto</span>\\\\`;\\n  const fb = initials(npc.name).replace(/'/g,\\\"\\\\\\\\\\\\\\\\'\\\");\\n  const toggleAction = ctx==='consulta' ? 'toggle-consulta' : 'toggle-npc';\\n\\n  return \\\\`\\n    <div class=\\\"nr-hdr\\\" data-action=\\\"\\\\${toggleAction}\\\" data-npc=\\\"\\\\${npc.id}\\\">\\n      <div class=\\\"nr-avatar\\\">\\n        \\\\${npc.image_url\\n          ?\\\\`<img src=\\\"\\\\${npc.image_url}\\\" alt=\\\"\\\\${npc.name}\\\" onerror=\\\"this.parentElement.innerHTML='\\\\${fb}'\\\">\\\\`\\n          :initials(npc.name)}\\n      </div>\\n      <div class=\\\"nr-info\\\">\\n        <div class=\\\"nr-row1\\\">\\n          \\\\${npc.star?'<span class=\\\"nr-star\\\">\\u2605</span>':''}\\n          <span class=\\\"nr-name\\\">\\\\${npc.name}</span>\\n          \\\\${chip}\\n        </div>\\n        <div class=\\\"nr-row2\\\">\\n          <span class=\\\"ca-badge\\\">CA \\\\${npc.ca||'?'}</span>\\n          \\\\${rTS(npc)}\\n        </div>\\n      </div>\\n      <button class=\\\"info-btn\\\" data-action=\\\"open-info\\\" data-npc=\\\"\\\\${npc.id}\\\" data-stop>\\u2139</button>\\n    </div>\\n    <div class=\\\"nr-expand-btn\\\" data-action=\\\"\\\\${toggleAction}\\\" data-npc=\\\"\\\\${npc.id}\\\">\\n      \\\\${exp?'\\u25b2':'\\u25bc'}\\n    </div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Card items grid (session + consulta) \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rCardItems(npc, readonly=false){\\n  const cards=npcCards(npc.id), bl=blocked(npc);\\n  const isSummon = npc.summoned;\\n  const summon = isSummon ? S.session?.summons?.[npc.id] : null;\\n\\n  // Barra superiore: ferite per normali, pallini blu per summon\\n  let topBar = '';\\n  if(isSummon){\\n    const pool=summon?.pool||0, maxPool=summon?.maxPool||0;\\n    const spDots=Array.from({length:maxPool},(_,i)=>\\n      \\\\`<span class=\\\"wd\\\" style=\\\"background:\\\\${i<pool?'#4a8fe0':'var(--surf3)'};border:\\\\${i<pool?'none':'1px solid var(--bord2)'}\\\"></span>\\\\`).join('');\\n    topBar=\\\\`<div class=\\\"nr-wound-bar\\\">\\n      <div class=\\\"wounds-row\\\">\\\\${spDots}</div>\\n      <button class=\\\"wd-btn\\\" data-action=\\\"add-wound\\\" data-npc=\\\"\\\\${npc.id}\\\">+ Ferita</button>\\n    </div>\\\\`;\\n  } else {\\n    const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);\\n    const isDead = st==='morto';\\n    const wdots=Array.from({length:pf},(_,i)=>\\n      \\\\`<span class=\\\"wd \\\\${i<w?'wd-on':'wd-off'}\\\"></span>\\\\`).join('');\\n    topBar=\\\\`<div class=\\\"nr-wound-bar\\\">\\n      <div class=\\\"wounds-row\\\">\\\\${wdots}</div>\\n      \\\\${!isDead\\n        ? \\\\`<button class=\\\"wd-btn\\\" data-action=\\\"add-wound\\\" data-npc=\\\"\\\\${npc.id}\\\">+ Ferita</button>\\\\`\\n        : \\\\`<span style=\\\"font-size:12px;color:var(--muted);padding:0 8px\\\">Morto</span>\\\\`}\\n    </div>\\\\`;\\n  }\\n\\n  if(!cards.length) return topBar+'<div style=\\\"padding:10px;font-size:13px;color:var(--muted)\\\">Nessuna carta</div>';\\n  const items = cards.map(card=>{\\n    const cost=parseInt(card.cost)||1;\\n    const free=!readonly && isFree(npc,card);\\n    const used=timesUsed(npc.id,card.title);\\n    const canAfford = card.summon_cost\\n      ? (summon?.pool||0)>0\\n      : free||(S.session?.pool>=cost);\\n    let costHtml, extra='';\\n    if(card.summon_cost){\\n      const maxPs = summon?.maxPool||4;\\n      const avail = summon?.pool||0;\\n      costHtml=\\\\`<span class=\\\"badge\\\" style=\\\"background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090\\\">1\\u2013\\\\${maxPs} PS</span>\\\\`;\\n      if(!canAfford) extra='no-pool';\\n    } else if(readonly){\\n      costHtml=\\\\`<span class=\\\"badge b-c\\\\${Math.min(cost,3)}\\\">\\\\${cost}pt</span>\\\\`;\\n    } else if(bl){\\n      costHtml=\\\\`<span class=\\\"badge b-c1\\\">\\\\${cost}pt</span>\\\\`; extra='locked';\\n    } else if(free){\\n      costHtml=\\\\`<span class=\\\"badge b-free\\\">\\u2605</span>\\\\`; extra='star-free';\\n    } else {\\n      costHtml=\\\\`<span class=\\\"badge b-c\\\\${Math.min(cost,3)}\\\">\\\\${cost}pt</span>\\\\`;\\n      if(!canAfford) extra='no-pool';\\n    }\\n    const isUsed = !readonly && used>0 && !(npc.star&&cost===1);\\n    const action = readonly ? 'open-card-consulta' : 'open-card';\\n    return \\\\`<div class=\\\"card-item\\\\${extra?' '+extra:''}\\\\${isUsed?' used':''}\\\"\\n      data-action=\\\"\\\\${action}\\\" data-npc=\\\"\\\\${npc.id}\\\" data-card=\\\"\\\\${enc(card.title)}\\\">\\n      <div class=\\\"ci-top\\\">\\n        \\\\${costHtml}\\n        \\\\${isUsed?\\\\`<span class=\\\"use-cnt\\\">\\\\${used}\\u00d7</span>\\\\`:''}\\n      </div>\\n      <div class=\\\"ci-title\\\">\\\\${card.title}</div>\\n      <div class=\\\"ci-grade\\\"><span class=\\\"sp \\\\${gc(card.grade)}\\\">\\\\${SI[card.stat]||''} \\\\${card.grade||''}</span></div>\\n    </div>\\\\`;\\n  }).join('');\\n  return topBar+\\\\`<div class=\\\"cards-grid\\\">\\\\${items}</div>\\\\`;\\n}\\n\\nfunction rDots(pool,max){\\n  if(max>12) return \\\\`<span class=\\\"pool-big\\\">\\\\${pool}</span>\\\\`;\\n  return Array.from({length:max},(_,i)=>\\\\`<span class=\\\"pd \\\\${i<pool?'pd-on':'pd-off'}\\\"></span>\\\\`).join('');\\n}\\n\\n// \\u2500\\u2500 Card Modal \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rCardModal(){\\n  const {npcId,cardTitle}=S.openCard;\\n  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);\\n  if(!npc||!card) return '';\\n  const isSummonCard = card.summon_cost;\\n  const summon = isSummonCard ? S.session?.summons?.[npcId] : null;\\n  const summonPool = summon?.pool||0;\\n  const cost=parseInt(card.cost)||1, free=isFree(npc,card), eff=effCost(npc,card);\\n  const canAfford = isSummonCard\\n    ? summonPool>0\\n    : free||(S.session?.pool>=cost);\\n  const used=timesUsed(npcId,cardTitle), bl=blocked(npc);\\n  const inSession=!!S.session;\\n  return \\\\`<div class=\\\"mod-ov\\\" data-action=\\\"close-modal\\\">\\n  <div class=\\\"mod-sheet\\\" data-stop>\\n    <div class=\\\"mod-img-wrap\\\">\\n      \\\\${npc.image_url\\n        ?\\\\`<img class=\\\"mod-img\\\" src=\\\"\\\\${npc.image_url}\\\" alt=\\\"\\\\${npc.name}\\\">\\\\`\\n        :\\\\`<div class=\\\"mod-img-ph\\\">\\\\${initials(npc.name)}</div>\\\\`}\\n    </div>\\n    <div class=\\\"mod-body\\\">\\n      <div class=\\\"mod-npc\\\">\\\\${npc.name}\\\\${npc.star?' \\u2605':''}</div>\\n      <div class=\\\"mod-title\\\">\\\\${card.title}</div>\\n      <div class=\\\"mod-meta\\\">\\n        <span class=\\\"sp \\\\${gc(card.grade)}\\\">\\\\${SI[card.stat]||''} \\\\${card.grade||''}</span>\\n        \\\\${!inSession\\n          ? \\\\`<span class=\\\"mod-readonly\\\">Sola lettura</span>\\\\`\\n          : bl\\n            ? \\\\`<span style=\\\"font-size:12px;color:var(--red2)\\\">PNG fuori combattimento</span>\\\\`\\n            : isSummonCard\\n              ? \\\\`<span class=\\\"mod-cost\\\" style=\\\"color:var(--gold)\\\">\\\\${summonPool} \\\\${summon?.pool_name||'PS'} disponibili</span>\\\\`\\n              : free\\n                ? \\\\`<span class=\\\"mod-free\\\">\\u2605 Prima attivazione gratuita</span>\\\\`\\n                : \\\\`<span class=\\\"mod-cost\\\">\\\\${eff}pt</span>\\\\`}\\n      </div>\\n      <div class=\\\"mod-desc\\\">\\\\${card.desc||''}</div>\\n      \\\\${card.rule?\\\\`<div class=\\\"mod-rule\\\">\\\\${card.rule}</div>\\\\`:''}\\n      \\\\${card.flavor?\\\\`<div class=\\\"mod-flavor\\\">\\\"\\\\${card.flavor}\\\"</div>\\\\`:''}\\n      \\\\${card.minion?\\\\`<div class=\\\"mod-minion\\\">\\u2693 \\\\${card.minion}</div>\\\\`:''}\\n      <div class=\\\"mod-actions\\\">\\n        \\\\${inSession&&!bl?\\\\`\\n          \\\\${isSummonCard\\n            ? (summonPool>0 ? \\\\`\\n              <div class=\\\"summon-slider\\\">\\n                <div class=\\\"summon-slider-ctrl\\\">\\n                  <button class=\\\"step-btn\\\" style=\\\"width:40px;height:40px;font-size:20px\\\"\\n                    data-action=\\\"summon-slider-adj\\\" data-npc=\\\"\\\\${npcId}\\\" data-card=\\\"\\\\${enc(cardTitle)}\\\" data-d=\\\"-1\\\">\\u2212</button>\\n                  <span class=\\\"summon-slider-val\\\" id=\\\"sslider-val\\\">\\\\${S.openCard.sliderVal||1}</span>\\n                  <button class=\\\"step-btn\\\" style=\\\"width:40px;height:40px;font-size:20px\\\"\\n                    data-action=\\\"summon-slider-adj\\\" data-npc=\\\"\\\\${npcId}\\\" data-card=\\\"\\\\${enc(cardTitle)}\\\" data-d=\\\"1\\\">+</button>\\n                </div>\\n                <div class=\\\"summon-slider-effect\\\">\\\\${getSummonEffect(card, S.openCard.sliderVal||1)}</div>\\n                <button class=\\\"btn btn-g\\\" data-action=\\\"play-summon-card\\\"\\n                  data-npc=\\\"\\\\${npcId}\\\" data-card=\\\"\\\\${enc(cardTitle)}\\\" data-cost=\\\"\\\\${S.openCard.sliderVal||1}\\\">\\n                  Gioca \\u2014 \\\\${S.openCard.sliderVal||1} \\\\${summon?.pool_name||'PS'}\\n                </button>\\n              </div>\\\\`\\n            : \\\\`<span style=\\\"font-size:13px;color:var(--muted)\\\">Evocazione esaurita</span>\\\\`)\\n            : \\\\`<button class=\\\"btn btn-g\\\\${canAfford?'':' btn-dis'}\\\" data-action=\\\"play-card\\\" data-npc=\\\"\\\\${npcId}\\\" data-card=\\\"\\\\${enc(cardTitle)}\\\">\\n                \\\\${free?'\\u2605 Attiva gratis':\\\\`Gioca (\\\\${eff}pt)\\\\`}\\n              </button>\\n              \\\\${used?\\\\`<button class=\\\"btn btn-s\\\" data-action=\\\"undo-card\\\" data-npc=\\\"\\\\${npcId}\\\" data-card=\\\"\\\\${enc(cardTitle)}\\\">\\u21a9 Annulla ultima</button>\\\\`:''}\\\\`\\n          }\\n        \\\\`:''}\\n        <button class=\\\"btn btn-gh\\\" data-action=\\\"close-modal\\\">Chiudi</button>\\n      </div>\\n    </div>\\n  </div></div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Info Modal \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rInfoModal(){\\n  const npc=npcById(S.openInfo); if(!npc) return '';\\n  const isSummon = npc.summoned && S.session?.summons?.[npc.id];\\n  const summon = isSummon ? S.session.summons[npc.id] : null;\\n  const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);\\n  const stLabel={sano:'\\ud83d\\udfe2 Sano',indebolito:'\\ud83d\\udfe1 Indebolito',fuori:'\\ud83d\\udd34 Fuori combattimento',morto:'\\u2620\\ufe0f Morto'}[st];\\n  const pool=summon?.pool||0, maxPool=summon?.maxPool||0;\\n  const poolName=summon?.pool_name||'PS';\\n  return \\\\`<div class=\\\"mod-ov mod-bottom\\\" data-action=\\\"close-info\\\">\\n  <div class=\\\"mod-sheet mod-sheet-bottom\\\" data-stop>\\n    <div class=\\\"info-img-wrap\\\">\\n      \\\\${npc.image_url\\n        ?\\\\`<img class=\\\"info-img\\\" src=\\\"\\\\${npc.image_url}\\\" alt=\\\"\\\\${npc.name}\\\">\\\\`\\n        :\\\\`<div class=\\\"info-img-ph\\\" style=\\\"\\\\${isSummon?'color:var(--gold)':''}\\\">\\\\${isSummon?'\\u2726':initials(npc.name)}</div>\\\\`}\\n    </div>\\n    <div class=\\\"info-body\\\">\\n      <div class=\\\"info-name\\\" style=\\\"\\\\${isSummon?'color:var(--gold)':''}\\\">\\\\${npc.name}</div>\\n      <div class=\\\"info-cls\\\">\\\\${npc.classe||''}</div>\\n      <div class=\\\"info-row\\\">\\n        <span class=\\\"ca-badge\\\" style=\\\"font-size:13px;padding:4px 10px\\\">CA \\\\${npc.ca||'?'}</span>\\n        \\\\${isSummon\\n          ? \\\\`<span style=\\\"font-size:13px;color:#4a8fe0\\\">\\u2726 Evocazione attiva</span>\\\\`\\n          : \\\\`<span style=\\\"font-size:13px;color:var(--muted)\\\">\\\\${stLabel}</span>\\\\`}\\n      </div>\\n      <div class=\\\"info-section\\\">\\n        <div class=\\\"info-lbl\\\">Tiri Salvezza</div>\\n        <div style=\\\"display:flex;gap:6px;flex-wrap:wrap\\\">\\\\${rTS(npc,true)}</div>\\n      </div>\\n      <div class=\\\"info-section\\\">\\n        \\\\${isSummon\\n          ? \\\\`<div class=\\\"info-lbl\\\">\\\\${poolName} \\u2014 \\\\${pool}/\\\\${maxPool}</div>\\n             <div class=\\\"wounds-ctrl\\\">\\n               <button class=\\\"step-btn\\\" data-action=\\\"adj-summon-pool\\\" data-npc=\\\"\\\\${npc.id}\\\" data-d=\\\"-1\\\">\\u2212</button>\\n               <div class=\\\"wounds-dots-lg\\\">\\n                 \\\\${Array.from({length:maxPool},(_,i)=>\\\\`<span class=\\\"wd-lg \\\\${i<pool?'':'wd-lg-off'}\\\" style=\\\"\\\\${i<pool?'background:#4a8fe0':''}\\\"></span>\\\\`).join('')}\\n               </div>\\n               <button class=\\\"step-btn\\\" data-action=\\\"adj-summon-pool\\\" data-npc=\\\"\\\\${npc.id}\\\" data-d=\\\"1\\\">+</button>\\n             </div>\\\\`\\n          : \\\\`<div class=\\\"info-lbl\\\">Ferite \\u2014 \\\\${w}/\\\\${pf}</div>\\n             <div class=\\\"wounds-ctrl\\\">\\n               <button class=\\\"step-btn\\\" data-action=\\\"remove-wound-info\\\" data-npc=\\\"\\\\${npc.id}\\\">\\u2212</button>\\n               <div class=\\\"wounds-dots-lg\\\">\\n                 \\\\${Array.from({length:pf},(_,i)=>\\\\`<span class=\\\"wd-lg \\\\${i<w?'wd-lg-on':'wd-lg-off'}\\\"></span>\\\\`).join('')}\\n               </div>\\n               <button class=\\\"step-btn\\\" data-action=\\\"add-wound-info\\\" data-npc=\\\"\\\\${npc.id}\\\">+</button>\\n             </div>\\\\`}\\n      </div>\\n      <div class=\\\"info-stat-grid\\\">\\n        \\\\${SK.map(k=>\\\\`<div class=\\\"info-stat\\\">\\n          <span class=\\\"info-stat-icon\\\">\\\\${SI[k]}</span>\\n          <span class=\\\"info-stat-grade \\\\${gc(npc[k])}\\\">\\\\${npc[k]||'D'}</span>\\n          <span class=\\\"info-stat-name\\\">\\\\${SN[k]}</span>\\n        </div>\\\\`).join('')}\\n      </div>\\n      <button class=\\\"btn btn-gh\\\" data-action=\\\"close-info\\\">Chiudi</button>\\n    </div>\\n  </div></div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Minion Rules \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rMinion(){\\n  const rules=[\\n    ['Colpire un minion',\\n     'Qualsiasi colpo andato a segno elimina il minion dalla battaglia corrente e gli infligge 1 ferita. Non importa l\\\\\\\\'entit\\u00e0 del danno: anche un colpo minimo \\u00e8 sufficiente.'],\\n    ['Punti ferita (PF)',\\n     'Ogni minion ha un numero di PF pari a 1 base pi\\u00f9 1 ogni 5 livelli. Quando le ferite accumulate raggiungono il massimo, il minion muore in modo permanente e non pu\\u00f2 essere resuscitato normalmente.'],\\n    ['Minion non stellati',\\n     'Ricevono 1 ferita \\u2192 vengono messi fuori combattimento. Le loro carte diventano inaccessibili e la scheda appare in grigio.'],\\n    ['Minion stellati \\u2605',\\n     'Ricevono 1 ferita \\u2192 diventano Indeboliti. Le carte funzionano normalmente ma il prossimo colpo li metter\\u00e0 fuori combattimento. Con 2 ferite totali \\u2192 fuori combattimento.'],\\n    ['Fuori combattimento',\\n     'Il personaggio non pu\\u00f2 usare carte n\\u00e9 partecipare attivamente al combattimento. Rimane presente in gioco ma inattivo fino a guarigione.'],\\n    ['Morte permanente',\\n     'Quando le ferite raggiungono il massimo, il personaggio muore. Rimane visibile nel mazzo con lo stato \\\"Morto\\\" come promemoria. Una resurrezione straordinaria \\u00e8 tecnicamente possibile ma richiede circostanze narrative eccezionali.'],\\n    ['Guarire una ferita',\\n     'Ogni ferita richiede una piccola quest dedicata per essere rimossa. Il DM gestisce la guarigione fuori dall\\\\\\\\'app e la registra manualmente nel pannello \\u2139 del personaggio.'],\\n    ['Proteggere un minion',\\n     'Un giocatore pu\\u00f2 dichiarare di interporsi tra un minion e un attacco in arrivo, prima che venga risolto. Il personaggio subisce l\\\\\\\\'attacco al posto del minion: tutti i danni e gli effetti si applicano al personaggio che protegge, come se l\\\\\\\\'attacco fosse stato diretto a lui. Costa 1 punto carta.'],\\n    ['Tiri salvezza',\\n     'I minion non tirano i dadi per i TS. Un TS classificato come Forte viene superato automaticamente. Un TS classificato come Debole viene fallito automaticamente. Non esistono altri TS intermedi per i minion.'],\\n  ];\\n  const summonRules=[\\n    ['Evocazioni',\\n     'Alcuni personaggi possono evocare PNG speciali durante il combattimento tramite carte apposite. Le evocazioni appaiono nel mazzo di sessione solo quando attivate.'],\\n    ['PS',\\n     'Le evocazioni non hanno ferite. Al posto delle ferite usano un pool di PS (Punti Summon) (blu). Ogni volta che vengono colpite perdono 1 PS.'],\\n    ['Esaurimento',\\n     'Quando i PS (Punti Summon) raggiungono 0, l\\\\\\\\'evocazione sparisce dal mazzo e non pu\\u00f2 essere riattivata finch\\u00e9 non si usa nuovamente la carta di evocazione (se le condizioni lo permettono).'],\\n    ['Carte delle Evocazioni',\\n     'Le carte di un\\\\\\\\'evocazione scalano con i PS (Punti Summon) spesi: spendere pi\\u00f9 punti produce effetti pi\\u00f9 potenti. Il costo \\u00e8 scelto al momento dell\\\\\\\\'attivazione con il selettore.'],\\n  ];\\n  return \\\\`<div class=\\\"mod-ov mod-bottom\\\" data-action=\\\"close-minion\\\">\\n  <div class=\\\"mod-sheet mod-sheet-bottom\\\" data-stop>\\n    <div class=\\\"minion-body\\\">\\n      <div class=\\\"minion-title\\\">\\u2693 Regole Minion</div>\\n      \\\\${rules.map(([t,b])=>\\\\`<div class=\\\"mr\\\"><div class=\\\"mr-t\\\">\\\\${t}</div><div class=\\\"mr-b\\\">\\\\${b}</div></div>\\\\`).join('')}\\n      <div class=\\\"minion-title\\\" style=\\\"margin-top:16px\\\">\\u2726 Evocazioni</div>\\n      \\\\${summonRules.map(([t,b])=>\\\\`<div class=\\\"mr\\\"><div class=\\\"mr-t\\\">\\\\${t}</div><div class=\\\"mr-b\\\">\\\\${b}</div></div>\\\\`).join('')}\\n      <button class=\\\"btn btn-gh\\\" style=\\\"margin-top:8px\\\" data-action=\\\"close-minion\\\">Chiudi</button>\\n    </div>\\n  </div></div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Session Menu \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rMenu(){\\n  return \\\\`<div class=\\\"overlay\\\" data-action=\\\"close-menu\\\">\\n  <div class=\\\"menu-sheet\\\" data-stop>\\n    <button class=\\\"menu-item\\\" data-action=\\\"open-minion\\\">\\ud83d\\udcd6 Regole minion</button>\\n    <hr class=\\\"menu-sep\\\">\\n    <button class=\\\"menu-item\\\" data-action=\\\"reset-session\\\">\\ud83d\\udd04 Azzera carte usate + pool</button>\\n    <button class=\\\"menu-item\\\" data-action=\\\"end-session\\\">\\u2715 Termina sessione</button>\\n    <hr class=\\\"menu-sep\\\">\\n    <button class=\\\"menu-item menu-cancel\\\" data-action=\\\"close-menu\\\">Annulla</button>\\n  </div></div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Dialog \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rDialog(){\\n  const{title,msg,confirmLabel,danger,confirmAction,cancelLabel,cancelAction}=S.dialog;\\n  return \\\\`<div class=\\\"dlg-ov\\\">\\n  <div class=\\\"dlg-box\\\" data-stop>\\n    <div class=\\\"dlg-title\\\">\\\\${title}</div>\\n    <div class=\\\"dlg-msg\\\">\\\\${msg}</div>\\n    <div class=\\\"dlg-btns\\\">\\n      \\\\${confirmLabel?\\\\`<button class=\\\"btn \\\\${danger?'btn-d':'btn-g'}\\\" data-action=\\\"\\\\${confirmAction}\\\">\\\\${confirmLabel}</button>\\\\`:''}\\n      \\\\${cancelLabel?\\\\`<button class=\\\"btn btn-s\\\" data-action=\\\"\\\\${cancelAction}\\\">\\\\${cancelLabel}</button>\\\\`:''}\\n      <button class=\\\"btn btn-gh\\\" data-action=\\\"close-dialog\\\">Annulla</button>\\n    </div>\\n  </div></div>\\\\`;\\n}\\n\\n// \\u2500\\u2500 Settings \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rSettings(){\\n  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT'):'\\u2014';\\n  const hasToken=!!(S.ghToken);\\n  return \\\\`<div class=\\\"view\\\">\\n  <div class=\\\"hdr\\\"><span class=\\\"hdr-title\\\">\\u2699\\ufe0f Impostazioni</span></div>\\n  <div class=\\\"settings-body\\\">\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\ud83d\\udd11 GitHub</div>\\n      <div class=\\\"fld\\\">\\n        <label>Personal Access Token</label>\\n        <input id=\\\"gh-token\\\" type=\\\"password\\\" value=\\\"\\\\${S.ghToken||''}\\\"\\n          placeholder=\\\"ghp_xxxxxxxxxxxxxxxxxxxx\\\"\\n          autocomplete=\\\"off\\\" spellcheck=\\\"false\\\">\\n        <span style=\\\"font-size:11px;color:var(--muted);margin-top:4px;display:block\\\">\\n          Salvato solo su questo dispositivo. Scope richiesto: <code>repo</code>\\n        </span>\\n      </div>\\n      <button class=\\\"btn btn-g\\\" data-action=\\\"save-token\\\">Salva token</button>\\n    </div>\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\ud83d\\ude80 Push su GitHub</div>\\n      <div style=\\\"font-size:12px;color:var(--muted);margin-bottom:10px\\\">\\n        BitNineStudio-Leo \\u00b7 branch main\\n      </div>\\n      <button class=\\\"btn btn-g\\\\${hasToken?'':' btn-dis'}\\\" data-action=\\\"push-app\\\"\\n        \\\\${hasToken?'':'title=\\\"Inserisci prima il token\\\"'}>\\n        \\ud83d\\udce6 Push app \\u2192 CiurmaPolloDiablo\\n      </button>\\n      <button class=\\\"btn btn-g\\\\${hasToken?'':' btn-dis'}\\\" data-action=\\\"push-data\\\"\\n        \\\\${hasToken?'':'title=\\\"Inserisci prima il token\\\"'}>\\n        \\ud83d\\udcc4 Push data \\u2192 CiurmaData\\n      </button>\\n      <div id=\\\"push-status\\\" style=\\\"font-size:12px;color:var(--muted);min-height:18px\\\"></div>\\n    </div>\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\ud83d\\udd04 Sincronizzazione dati</div>\\n      <div class=\\\"fld\\\">\\n        <label>URL GitHub raw (data.json)</label>\\n        <input id=\\\"rawurl\\\" type=\\\"url\\\" value=\\\"\\\\${S.rawUrl}\\\"\\n          placeholder=\\\"https://raw.githubusercontent.com/BitNineStudio-Leo/CiurmaData/main/data.json\\\">\\n      </div>\\n      <button class=\\\"btn btn-g\\\" data-action=\\\"save-url\\\">Salva e sincronizza</button>\\n      <div class=\\\"sync-info\\\">Ultimo sync: \\\\${syncTxt}</div>\\n      <button class=\\\"btn btn-s\\\" data-action=\\\"sync\\\">\\ud83d\\udd04 Risincronizza adesso</button>\\n    </div>\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\u26a0\\ufe0f Dati</div>\\n      <button class=\\\"btn btn-d\\\" data-action=\\\"clear-data\\\">\\ud83d\\uddd1 Ripristina dati integrati</button>\\n    </div>\\n\\n  </div>\\n  \\\\${rBotNav('settings')}</div>\\\\`;\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// EVENTS\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\ndocument.addEventListener('click',e=>{\\n  const el=e.target.closest('[data-action]');\\n  if(!el) return;\\n  const{action,view,d,npc,card}=el.dataset;\\n  switch(action){\\n    case 'goto':             S.view=view; render(); break;\\n    case 'sync':             syncGithub(); break;\\n    case 'open-builder':     S.builderDeck=[...S.deck]; S.view='builder'; render(); break;\\n    case 'cancel-builder':   S.builderDeck=null; S.view='home'; render(); break;\\n    case 'confirm-builder':\\n      S.deck=[...(S.builderDeck||[])]; LS.s('deck',S.deck);\\n      S.builderDeck=null; S.view='home'; render(); break;\\n    case 'toggle-npc':\\n      if(S.view==='builder'){\\n        const bd=S.builderDeck||[], i=bd.indexOf(npc);\\n        i>=0?bd.splice(i,1):bd.push(npc); S.builderDeck=[...bd]; render();\\n      }else{ S.expanded[npc]=!S.expanded[npc]; render(); }\\n      break;\\n    case 'toggle-consulta':      S.consultaExp[npc]=!S.consultaExp[npc]; render(); break;\\n    case 'consulta-tab':         S.consultaTab=el.dataset.tab; render(); break;\\n    case 'open-card':\\n    case 'open-card-consulta':   S.openCard={npcId:npc,cardTitle:dec(card)}; render(); break;\\n    case 'adj-max':              adjMax(parseInt(d)); break;\\n    case 'start-session':        if(S.deck.length) startSession(); break;\\n    case 'adj-pool':             adjPool(parseInt(d)); break;\\n    case 'open-menu':            S.menuOpen=true; render(); break;\\n    case 'close-menu':           S.menuOpen=false; render(); break;\\n    case 'open-minion':          S.menuOpen=false; S.minionOpen=true; render(); break;\\n    case 'open-minion-nav':      S.minionOpen=true; render(); break;\\n    case 'close-minion':         S.minionOpen=false; render(); break;\\n    case 'reset-session':        resetSession(); break;\\n    case 'end-session':          endSession(); break;\\n    case 'do-end':\\n      S.dialog=null; S.session=null; LS.s('session',null); S.view='home'; render(); break;\\n    case 'do-reset':\\n      S.dialog=null;\\n      if(S.session){S.session.used={}; S.session.pool=S.session.maxPool; LS.s('session',S.session);}\\n      render(); break;\\n    case 'close-dialog':         S.dialog=null; render(); break;\\n    case 'close-modal':          S.openCard=null; render(); break;\\n    case 'play-card':            playCard(npc,dec(card)); break;\\n    case 'undo-card':            undoCard(npc,dec(card)); break;\\n\\n    // Slider punti evocazione nel modal\\n    case 'summon-slider-adj': {\\n      if(!S.openCard) break;\\n      const summon=S.session?.summons?.[npc];\\n      const maxVal=summon?.pool||1;\\n      const cur=S.openCard.sliderVal||1;\\n      S.openCard.sliderVal=Math.max(1,Math.min(maxVal,cur+parseInt(el.dataset.d||0)));\\n      render(); break;\\n    }\\n\\n    // Carta con costo evocazione variabile\\n    case 'play-summon-card': {\\n      const cost=parseInt(el.dataset.cost)||1;\\n      const c=npcCards(npc).find(x=>x.title===dec(card));\\n      const summon=S.session?.summons?.[npc];\\n      if(!summon||summon.pool<cost){toast('Punti evocazione insufficienti!',true);break;}\\n      summon.pool-=cost;\\n      S.session.used[cKey(npc,dec(card))]=(S.session.used[cKey(npc,dec(card))]||0)+1;\\n      // Se pool a 0, rimuovi dal summonDeck\\n      if(summon.pool<=0){\\n        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);\\n        toast(\\\\`\\u2726 Le Ombre si dissolvono\\\\`, true);\\n      } else {\\n        toast(\\\\`\\u2726 \\\\${dec(card)} \\u2014 \\\\${cost} \\\\${summon.pool_name||'PS'} (rimasti: \\\\${summon.pool})\\\\`);\\n      }\\n      LS.s('session',S.session); S.openCard=null; render(); break;\\n    }\\n\\n    // disable_if ask \\u2014 confermato: applica e disabilita il caster\\n    case 'play-card-disable': {\\n      const dlg=S.dialog; S.dialog=null;\\n      if(!dlg) break;\\n      const {pendingNpc,pendingCard}=dlg;\\n      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);\\n      if(!pnpc||!pcard) break;\\n      const cost=effCost(pnpc,pcard);\\n      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}\\n      S.session.pool-=cost;\\n      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;\\n      S.session.disabledBy[pendingNpc]=true;\\n      LS.s('session',S.session); S.openCard=null;\\n      toast(\\\\`\\\\${pnpc.name} esce dal combattimento\\\\`); render(); break;\\n    }\\n\\n    // disable_if ask \\u2014 annullato: carta normale senza effetto disable\\n    case 'play-card-normal': {\\n      const dlg=S.dialog; S.dialog=null;\\n      if(!dlg) break;\\n      const {pendingNpc,pendingCard}=dlg;\\n      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);\\n      if(!pnpc||!pcard) break;\\n      const cost=effCost(pnpc,pcard);\\n      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}\\n      S.session.pool-=cost;\\n      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;\\n      LS.s('session',S.session); S.openCard=null;\\n      toast(\\\\`\\\\${pendingCard} \\u2014 \\\\${cost}pt\\\\`); render(); break;\\n    }\\n\\n    // Aggiusta pool evocazione manualmente\\n    case 'adj-summon-pool': {\\n      const delta=parseInt(el.dataset.d)||0;\\n      const summon=S.session?.summons?.[npc];\\n      if(!summon) break;\\n      summon.pool=Math.max(0,Math.min(summon.maxPool,summon.pool+delta));\\n      if(summon.pool<=0){\\n        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);\\n        toast('\\u2726 Evocazione esaurita');\\n      }\\n      LS.s('session',S.session); render(); break;\\n    }\\n\\n    case 'add-wound':\\n    case 'add-wound-info':       addWound(npc); break;\\n    case 'remove-wound-info':    removeWound(npc); break;\\n    case 'open-info':            S.openInfo=npc; render(); break;\\n    case 'close-info':           S.openInfo=null; render(); break;\\n    case 'save-url':             saveUrl(); break;\\n    case 'save-token':           saveToken(); break;\\n    case 'push-app':             pushApp(); break;\\n    case 'push-data':            pushData(); break;\\n    case 'clear-data':\\n      S.dialog={title:'Ripristina dati',msg:'I dati GitHub verranno rimossi e si torner\\u00e0 ai dati integrati.',confirmLabel:'Ripristina',danger:true,confirmAction:'do-clear'};\\n      render(); break;\\n    case 'do-clear':\\n      S.dialog=null;\\n      ['npcs','cards','rawUrl','syncTime'].forEach(k=>localStorage.removeItem(k));\\n      S.npcs=BUNDLED_NPCS; S.cards=BUNDLED_CARDS; S.rawUrl=''; S.syncTime=null; render(); break;\\n  }\\n});\\n\\ndocument.addEventListener('click',e=>{\\n  if(e.target.classList.contains('mod-ov')){S.openCard=null;S.openInfo=null;S.minionOpen=false;render();}\\n  if(e.target.classList.contains('overlay')){S.menuOpen=false;render();}\\n});\\n\\nfunction saveUrl(){\\n  const inp=document.getElementById('rawurl'); if(!inp) return;\\n  const url=inp.value.trim();\\n  if(!url.startsWith('http')){toast('URL non valido',true);return;}\\n  S.rawUrl=url; LS.s('rawUrl',url); syncGithub();\\n}\\n\\nfunction saveToken(){\\n  const inp=document.getElementById('gh-token'); if(!inp) return;\\n  const t=inp.value.trim();\\n  S.ghToken=t; LS.s('ghToken',t);\\n  toast(t?'Token salvato \\u2713':'Token rimosso'); render();\\n}\\n\\nasync function ghPush(repo, filePath, content, commitMsg){\\n  const token=S.ghToken;\\n  if(!token){toast('Token mancante!',true);return false;}\\n  const owner='BitNineStudio-Leo';\\n  const apiBase=\\\\`https://api.github.com/repos/\\\\${owner}/\\\\${repo}/contents/\\\\${filePath}\\\\`;\\n  const headers={'Authorization':\\\\`token \\\\${token}\\\\`,'Content-Type':'application/json','Accept':'application/vnd.github.v3+json'};\\n\\n  // Recupera SHA attuale del file (necessario per update)\\n  let sha=null;\\n  try{\\n    const r=await fetch(apiBase,{headers});\\n    if(r.ok){ const j=await r.json(); sha=j.sha; }\\n  }catch(e){}\\n\\n  const body={message:commitMsg,content:btoa(unescape(encodeURIComponent(content))),branch:'main'};\\n  if(sha) body.sha=sha;\\n\\n  const res=await fetch(apiBase,{method:'PUT',headers,body:JSON.stringify(body)});\\n  return res.ok;\\n}\\n\\nasync function pushApp(){\\n  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}\\n  setPushStatus('\\u23f3 Push app in corso...');\\n  const files=[\\n    ['index.html', null],\\n    ['app.js', null],\\n    ['sw.js', null],\\n  ];\\n  // Legge i file dal DOM \\u2014 l'app \\u00e8 standalone quindi usiamo i sorgenti bundled\\n  // Push solo sw.js e manifest (index.html+app.js sono il bundle)\\n  toast('\\u23f3 Invio in corso...'); \\n  try{\\n    // Per la PWA push il file standalone come index.html\\n    const html=document.documentElement.outerHTML;\\n    const ok=await ghPush('CiurmaPolloDiablo','index.html',html,'Update app da dispositivo');\\n    if(ok){ setPushStatus('\\u2705 App caricata!'); toast('\\u2705 CiurmaPolloDiablo aggiornato!'); }\\n    else  { setPushStatus('\\u274c Errore push'); toast('Errore push \\u2014 verifica token e permessi',true); }\\n  }catch(e){ setPushStatus('\\u274c '+e.message); toast('Errore: '+e.message,true); }\\n}\\n\\nasync function pushData(){\\n  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}\\n  setPushStatus('\\u23f3 Push data in corso...');\\n  try{\\n    const json=JSON.stringify({npcs:S.npcs,cards:S.cards},null,2);\\n    const ok=await ghPush('CiurmaData','data.json',json,'Update data.json da dispositivo');\\n    if(ok){ setPushStatus('\\u2705 Data caricato!'); toast('\\u2705 CiurmaData aggiornato!'); }\\n    else  { setPushStatus('\\u274c Errore push'); toast('Errore push \\u2014 verifica token e permessi',true); }\\n  }catch(e){ setPushStatus('\\u274c '+e.message); toast('Errore: '+e.message,true); }\\n}\\n\\nfunction setPushStatus(msg){\\n  const el=document.getElementById('push-status');\\n  if(el) el.textContent=msg;\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// INIT\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nif('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});\\n// Se c'\\u00e8 una sessione attiva al caricamento, va direttamente in sessione\\nif(S.session) S.view='session';\\nrender();\\n\\n</script>\\n</body>\\n</html>\\n`;\\n'use strict';\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// BUNDLED DATA \\u2014 aggiornato con CA formula, TS completi, Gatto titanico\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nconst BUNDLED_NPCS = [\\n  {\\n    \\\"id\\\": \\\"vieni_qua\\\",\\n    \\\"name\\\": \\\"Vieniqua\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 13 \\u00b7 Orco \\u00b7 Guerriero\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/vieniqua.jpg\\\",\\n    \\\"ca\\\": 26,\\n    \\\"pf_max\\\": 3,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"combat\\\": \\\"S\\\",\\n    \\\"magia\\\": \\\"D\\\",\\n    \\\"nav\\\": \\\"B\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"D\\\",\\n    \\\"furtivita\\\": \\\"D\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"saltarello\\\",\\n    \\\"name\\\": \\\"Saltarello\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 12 \\u00b7 Thri-Kreen \\u00b7 Mente Guerriera\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/saltarello.jpg\\\",\\n    \\\"ca\\\": 23,\\n    \\\"pf_max\\\": 3,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"combat\\\": \\\"A\\\",\\n    \\\"magia\\\": \\\"A\\\",\\n    \\\"nav\\\": \\\"B\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"D\\\",\\n    \\\"furtivita\\\": \\\"D\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"wedge\\\",\\n    \\\"name\\\": \\\"Wedge\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 13 \\u00b7 Umano \\u00b7 Esperto (marinaio)\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/wedge.jpg\\\",\\n    \\\"ca\\\": 20,\\n    \\\"pf_max\\\": 3,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Riflessi\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"combat\\\": \\\"C\\\",\\n    \\\"magia\\\": \\\"D\\\",\\n    \\\"nav\\\": \\\"S\\\",\\n    \\\"tech\\\": \\\"A\\\",\\n    \\\"cura\\\": \\\"C\\\",\\n    \\\"furtivita\\\": \\\"B\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"bigs\\\",\\n    \\\"name\\\": \\\"Biggs\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 13 \\u00b7 Umano \\u00b7 Esperto (marinaio)\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/biggs.jpg\\\",\\n    \\\"ca\\\": 20,\\n    \\\"pf_max\\\": 3,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Riflessi\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"combat\\\": \\\"C\\\",\\n    \\\"magia\\\": \\\"D\\\",\\n    \\\"nav\\\": \\\"S\\\",\\n    \\\"tech\\\": \\\"C\\\",\\n    \\\"cura\\\": \\\"A\\\",\\n    \\\"furtivita\\\": \\\"B\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"son_goku\\\",\\n    \\\"name\\\": \\\"Son Goku\\\",\\n    \\\"star\\\": true,\\n    \\\"classe\\\": \\\"Lv 18 \\u00b7 Umano \\u00b7 Monaco\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/viejo.jpg\\\",\\n    \\\"ca\\\": 27,\\n    \\\"pf_max\\\": 4,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"combat\\\": \\\"SS\\\",\\n    \\\"magia\\\": \\\"D\\\",\\n    \\\"nav\\\": \\\"A\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"B\\\",\\n    \\\"furtivita\\\": \\\"D\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"lady\\\",\\n    \\\"name\\\": \\\"Lady\\\",\\n    \\\"star\\\": true,\\n    \\\"classe\\\": \\\"Lv 18 \\u00b7 Umana \\u00b7 ???\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/lady.jpg\\\",\\n    \\\"ca\\\": 26,\\n    \\\"pf_max\\\": 4,\\n    \\\"ts_forte\\\": [\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"combat\\\": \\\"D\\\",\\n    \\\"magia\\\": \\\"S\\\",\\n    \\\"nav\\\": \\\"C\\\",\\n    \\\"tech\\\": \\\"C\\\",\\n    \\\"cura\\\": \\\"A\\\",\\n    \\\"furtivita\\\": \\\"A\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"quarantena\\\",\\n    \\\"name\\\": \\\"Quarantena\\\",\\n    \\\"star\\\": true,\\n    \\\"classe\\\": \\\"Lv 16 \\u00b7 Mezzelfa \\u00b7 Shadow Man\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/quarantena.jpg\\\",\\n    \\\"ca\\\": 27,\\n    \\\"pf_max\\\": 4,\\n    \\\"ts_forte\\\": [\\n      \\\"Riflessi\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Tempra\\\"\\n    ],\\n    \\\"combat\\\": \\\"D\\\",\\n    \\\"magia\\\": \\\"SS\\\",\\n    \\\"nav\\\": \\\"A\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"C\\\",\\n    \\\"furtivita\\\": \\\"A\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"stella\\\",\\n    \\\"name\\\": \\\"Stella\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 13 \\u00b7 Elfa Occhirosi \\u00b7 Crusader\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/stella.jpg\\\",\\n    \\\"ca\\\": 27,\\n    \\\"pf_max\\\": 3,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"combat\\\": \\\"A\\\",\\n    \\\"magia\\\": \\\"S\\\",\\n    \\\"nav\\\": \\\"D\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"A\\\",\\n    \\\"furtivita\\\": \\\"D\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"gurgo\\\",\\n    \\\"name\\\": \\\"Gurgo (Scorpion)\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 4 \\u00b7 Gnefro \\u00b7 Ladro\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/gurgo.jpg\\\",\\n    \\\"ca\\\": 13,\\n    \\\"pf_max\\\": 1,\\n    \\\"ts_forte\\\": [\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"combat\\\": \\\"C\\\",\\n    \\\"magia\\\": \\\"D\\\",\\n    \\\"nav\\\": \\\"B\\\",\\n    \\\"tech\\\": \\\"B\\\",\\n    \\\"cura\\\": \\\"D\\\",\\n    \\\"furtivita\\\": \\\"B\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"gatto\\\",\\n    \\\"name\\\": \\\"Gatto\\\",\\n    \\\"star\\\": true,\\n    \\\"classe\\\": \\\"Titano della Creativit\\u00e0 \\u00b7 Gatto Supremo\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/gatto.jpg\\\",\\n    \\\"ca\\\": 30,\\n    \\\"pf_max\\\": 5,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"combat\\\": \\\"B\\\",\\n    \\\"magia\\\": \\\"D\\\",\\n    \\\"nav\\\": \\\"D\\\",\\n    \\\"tech\\\": \\\"SS\\\",\\n    \\\"cura\\\": \\\"SS\\\",\\n    \\\"furtivita\\\": \\\"B\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"dorag\\\",\\n    \\\"name\\\": \\\"Dorag\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Drago di ottone adulto\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/dorag.jpg\\\",\\n    \\\"ca\\\": 26,\\n    \\\"pf_max\\\": 3,\\n    \\\"ts_forte\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"combat\\\": \\\"A\\\",\\n    \\\"magia\\\": \\\"B\\\",\\n    \\\"nav\\\": \\\"D\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"C\\\",\\n    \\\"furtivita\\\": \\\"C\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"murray\\\",\\n    \\\"name\\\": \\\"Murray\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Lv 5 \\u00b7 Teschio rianimato \\u00b7 Stregone\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/murray.jpg\\\",\\n    \\\"ca\\\": 12,\\n    \\\"pf_max\\\": 2,\\n    \\\"ts_forte\\\": [\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Tempra\\\",\\n      \\\"Riflessi\\\"\\n    ],\\n    \\\"combat\\\": \\\"D\\\",\\n    \\\"magia\\\": \\\"C\\\",\\n    \\\"nav\\\": \\\"D\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"D\\\",\\n    \\\"furtivita\\\": \\\"D\\\"\\n  },\\n  {\\n    \\\"id\\\": \\\"ombre\\\",\\n    \\\"name\\\": \\\"Le Ombre\\\",\\n    \\\"star\\\": false,\\n    \\\"classe\\\": \\\"Evocazione \\u00b7 Quarantena\\\",\\n    \\\"image_url\\\": \\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/ombre.jpg\\\",\\n    \\\"ca\\\": 26,\\n    \\\"pf_max\\\": 4,\\n    \\\"ts_forte\\\": [\\n      \\\"Riflessi\\\",\\n      \\\"Volont\\u00e0\\\"\\n    ],\\n    \\\"ts_debole\\\": [\\n      \\\"Tempra\\\"\\n    ],\\n    \\\"combat\\\": \\\"A\\\",\\n    \\\"magia\\\": \\\"A\\\",\\n    \\\"nav\\\": \\\"B\\\",\\n    \\\"tech\\\": \\\"D\\\",\\n    \\\"cura\\\": \\\"D\\\",\\n    \\\"furtivita\\\": \\\"B\\\",\\n    \\\"summoned\\\": true\\n  }\\n];\\n\\nconst BUNDLED_CARDS = [\\n  {\\n    \\\"npc_id\\\": \\\"vieni_qua\\\",\\n    \\\"title\\\": \\\"Ascia-mano\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Attacca con la protesi ascia. Infligge 30 danni. Se il bersaglio \\u00e8 taglia Media o inferiore, \\u00e8 anche Abbattuto per 1 round.\\\",\\n    \\\"rule\\\": \\\"Nessun tiro per colpire. Portata mischia.\\\",\\n    \\\"flavor\\\": \\\"Dopo il tradimento di x si fece impiantare un'ascia in un braccio. Bal gli ha insegnato come usarla.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"vieni_qua\\\",\\n    \\\"title\\\": \\\"Scudo vivente\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Si interpone tra un alleato adiacente e un attacco in arrivo, divenendone il bersaglio.\\\",\\n    \\\"rule\\\": \\\"Vieni Qua riporta la ferita al posto dell'alleato protetto.\\\",\\n    \\\"flavor\\\": \\\"La prima lezione che vieni qua abbia mai imparato: - mettere corpo davanti.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"vieni_qua\\\",\\n    \\\"title\\\": \\\"Ambizione dell'armatura\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Per 3 round: gli attacchi ignorano resistenze e riduzioni al danno, durante questi round ignora il primo danno subito.\\\",\\n    \\\"rule\\\": \\\"Usabile 1 volta per sessione. Non \\u00e8 magia \\u2014 \\u00e8 spirito puro.\\\",\\n    \\\"flavor\\\": \\\"- Come fai a reggere tutto questo?  -Non sapere. Maestro Bal chiamare questo \\\\\\\"ambizione\\\\\\\".\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"saltarello\\\",\\n    \\\"title\\\": \\\"Raffica di artigli\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Attacca due bersagli diversi nello stesso round infliggendo 25 danni a ciascuno.\\\",\\n    \\\"rule\\\": \\\"I due bersagli devono essere entro 3m tra loro.\\\",\\n    \\\"flavor\\\": \\\"Fra i Thri Kreen \\u00e8 quello che si definisce un \\u201csangue scuro\\u201d, le sue braccia sono segno di un progenitore Formian.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"saltarello\\\",\\n    \\\"title\\\": \\\"Balzo psionico\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Salta fino a 18m in qualsiasi direzione. Pu\\u00f2 atterrare su un nemico: 30 danni e Abbattuto per 1 round.\\\",\\n    \\\"rule\\\": \\\"Non provoca attacchi di opportunit\\u00e0 iniziando il salto.\\\",\\n    \\\"flavor\\\": \\\"La ciurma ha smesso di chiedersi come riesca ad arrivare tanto in alto.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"saltarello\\\",\\n    \\\"title\\\": \\\"Messaggio telepatico\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Invia un messaggio telepatico ad un qualsiasi membro della ciurma, ovunque si trovi. il contattato pu\\u00f2 rispondere.\\\",\\n    \\\"rule\\\": \\\"Funziona solo se il bersaglio si trova sullo stesso piano, limite di 30 parole.\\\",\\n    \\\"flavor\\\": \\\"Saltarello fu soldato presso un alveare che era in affari con il corsaro le Blanc. Scelse una nuova famiglia.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"wedge\\\",\\n    \\\"title\\\": \\\"Manovra esperta\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"nav\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Una prova di navigazione o manovra della nave riesce automaticamente.\\\",\\n    \\\"rule\\\": \\\"Dichiarare prima del tiro.\\\",\\n    \\\"flavor\\\": \\\"Testa cucita con una corda, timone in mano e vento in poppa. Una splendida giornata.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"wedge\\\",\\n    \\\"title\\\": \\\"Riparazione rapida\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"tech\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Ripara 30 PF strutturali della nave in 10 minuti.\\\",\\n    \\\"rule\\\": \\\"Non usabile in combattimento navale attivo.\\\",\\n    \\\"flavor\\\": \\\"- Come lavori con la testa cos\\u00ec? - Facendo attenzione a non girarmi di scatto.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"wedge\\\",\\n    \\\"title\\\": \\\"Tecnica rematoria\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"nav\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"La nave si muove al doppio della velocit\\u00e0 per 1 ora. \\\",\\n    \\\"rule\\\": \\\"Se anche Bigs usa la stessa carta nella stessa ora, la velocit\\u00e0 \\u00e8 triplicata.\\\",\\n    \\\"flavor\\\": \\\"La marina li cerca per tre dei sei mari. Non li ha mai raggiunti.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"bigs\\\",\\n    \\\"title\\\": \\\"Manovra esperta\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"nav\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Una prova di navigazione o manovra della nave riesce automaticamente.\\\",\\n    \\\"rule\\\": \\\"Dichiarare prima del tiro.\\\",\\n    \\\"flavor\\\": \\\"Biggs e Wedge non parlano molto. Non ne hanno bisogno per capirsi.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"bigs\\\",\\n    \\\"title\\\": \\\"Spuntino Rinvigorente\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"cura\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Stabilizza un personaggio a 0 PF e lo riporta a 20 PF, oppure cura una ferita ad un qualsiasi membro della ciurma e finisce fuori combattimento.\\\",\\n    \\\"rule\\\": \\\"Se Biggs cura un altro minion finisce fuori combattimento senza subire ferite.\\\",\\n    \\\"flavor\\\": \\\"- Hai un buco nello stomaco. - Lo so, ho sempre fame.\\\",\\n    \\\"minion\\\": \\\"\\\",\\n    \\\"disable_if\\\": {\\n      \\\"target\\\": \\\"self\\\",\\n      \\\"condition\\\": \\\"ask\\\",\\n      \\\"prompt\\\": \\\"Stai curando un minion?\\\"\\n    }\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"bigs\\\",\\n    \\\"title\\\": \\\"Tecnica rematoria\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"nav\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"La nave si muove al doppio della velocit\\u00e0 per 1 ora.\\\",\\n    \\\"rule\\\": \\\"Se anche Wedge usa la stessa carta nella stessa ora: velocit\\u00e0 triplicata.\\\",\\n    \\\"flavor\\\": \\\"Insieme, i due ex Marine, valgono pi\\u00f9 di qualsiasi vento.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"son_goku\\\",\\n    \\\"title\\\": \\\"Pugno del monaco\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Infligge 50 danni a un bersaglio senza tiro per colpire. Bersagli con meno di 12 DV: Abbattuto per 1 round.\\\",\\n    \\\"rule\\\": \\\"Portata 3m\\\",\\n    \\\"flavor\\\": \\\"L'ex-ammiraglio che fond\\u00f2 una citt\\u00e0, l'ex-prigioniero che si consegn\\u00f2 per difenderla. Una volont\\u00e0 che non smise mai di lottare.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma Re Kong non pu\\u00f2 ricevere ferite da attacchi normali.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"son_goku\\\",\\n    \\\"title\\\": \\\"Ambizione del re conquistatore\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Tutti i nemici con meno di 12 DV entro 18m cadono infermi per 1d4 round. Tutti gli altri sono comunque scossi per la stessa durata\\\",\\n    \\\"rule\\\": \\\"nessun tiro salvezza.\\\",\\n    \\\"flavor\\\": \\\"- Sai chi sono?  - S\\u00ec. - Allora sai gi\\u00e0 come finir\\u00e0.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma Re Kong non pu\\u00f2 ricevere ferite da attacchi normali.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"son_goku\\\",\\n    \\\"title\\\": \\\"Re Kong\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Trasformazione in gorilla gigante per 3 round: immune alle ferite normali, ogni round pu\\u00f2 infliggere un attacco da 40 danni, i nemici con meno di 12 DV sono spaventati.\\\",\\n    \\\"rule\\\": \\\"Portata 6 m, taglia mastodontica, utilizzabile 1 volta per sessione.\\\",\\n    \\\"flavor\\\": \\\"Mouga pensava di averlo spezzato. Aveva torto.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma Re Kong non pu\\u00f2 ricevere ferite da attacchi normali.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"son_goku\\\",\\n    \\\"title\\\": \\\"Re Kong scatenato\\\",\\n    \\\"cost\\\": 3,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Come Re Kong ma dura 5 round. Ogni attacco colpisce tutti i nemici entro 6m per 40 danni ciascuno.\\\",\\n    \\\"rule\\\": \\\"Usabile solo se Re Kong \\u00e8 gi\\u00e0 attivo. taglia colossale, 1 volta per sessione.\\\",\\n    \\\"flavor\\\": \\\"Re Kong non si inchina a nessuno. Nemmeno ai leviatani.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma Re Kong non pu\\u00f2 ricevere ferite da attacchi normali.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"lady\\\",\\n    \\\"title\\\": \\\"Lettura del destino\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Domanda s\\u00ec/no su un pericolo imminente. Il DM risponde onestamente. Non fallisce mai.\\\",\\n    \\\"rule\\\": \\\"Max 1 per sessione per giocatore.\\\",\\n    \\\"flavor\\\": \\\"Non predice il futuro, lo vede gi\\u00e0 successo.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"lady\\\",\\n    \\\"title\\\": \\\"Tisana della guaritrice\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"cura\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Cura 28 PF e rimuove maledizioni.\\\",\\n    \\\"rule\\\": \\\"Solo fuori combattimento, 30 minuti di preparazione.\\\",\\n    \\\"flavor\\\": \\\"Sa di erbe, di rum e di qualcosa che non ha nome. Funziona sempre.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"lady\\\",\\n    \\\"title\\\": \\\"Maledizione voodoo\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Un nemico scelto subisce svantaggio ai prossimi 4 tiri. Nessun tiro salvezza.\\\",\\n    \\\"rule\\\": \\\"Si pu\\u00f2 cumulare la durata con usi successivi.\\\",\\n    \\\"flavor\\\": \\\"Lady non odia nessuno. Ma ricorda tutto.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"lady\\\",\\n    \\\"title\\\": \\\"Oracolo del crocicchio\\\",\\n    \\\"cost\\\": 3,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Consulta gli spiriti. Il DM fornisce un indizio concreto su un mistero attivo: un nome, un luogo o una connessione nascosta, dopodich\\u00e9 Lady \\u00e8 fuori combattimento.\\\",\\n    \\\"rule\\\": \\\"Max 1 per sessione.\\\",\\n    \\\"flavor\\\": \\\"Al crocicchio si incontrano tutti i cammini. Anche quelli dei morti.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"quarantena\\\",\\n    \\\"title\\\": \\\"Lama del Dolore e della paura\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"A scelta: Infligge 32 danni da energia negativa - oppure infligge un livello negativo - oppure prende il controllo di un non morto entro 14 DV per 1 round.\\\",\\n    \\\"rule\\\": \\\"Un solo effetto per attivazione.\\\",\\n    \\\"flavor\\\": \\\"- E' forte come incantesimo? - mah, \\u00e8 medio. \\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"quarantena\\\",\\n    \\\"title\\\": \\\"Frutto Feel-Feel: Indifferenza\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Un alleato a scelta guadagna +5 a CA e a tutti i tiri salvezza per 1 round ed \\u00e8 immune a qualsiasi danno ed effetto per lo stesso round. Al termine del round, Quarantena viene rimossa dal combattimento anche se non ha subito ferite.\\\",\\n    \\\"rule\\\": \\\"Entrambi gli effetti sono simultanei e inscindibili. Quarantena esce dal combattimento a fine round indipendentemente dall'esito.\\\",\\n    \\\"flavor\\\": \\\"Si siede in mezzo al combattimento e apre la Smemo. Non le interessa.\\\",\\n    \\\"minion\\\": \\\"\\\",\\n    \\\"disable_if\\\": {\\n      \\\"target\\\": \\\"self\\\",\\n      \\\"condition\\\": \\\"always\\\"\\n    }\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"quarantena\\\",\\n    \\\"title\\\": \\\"Frutto Feel-Feel: Musica Deprimente\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Se \\u00e8 attiva musica bardica nelle vicinanze, tutti i neutrali che la sentono beneficiano di Ispirare Grandezza. Qualsiasi incantatore che tenti di lanciare un incantesimo con descrittore Bene o Male deve superare Concentrazione CD 35 o l'incantesimo fallisce.\\\",\\n    \\\"rule\\\": \\\"Entrambi gli effetti si attivano insieme finch\\u00e9 dura la musica. Non funziona in assenza di una fonte musicale attiva.\\\",\\n    \\\"flavor\\\": \\\"Quarantena trova la musica di Rock accettabile. Abbastanza da fargli da manager.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"quarantena\\\",\\n    \\\"title\\\": \\\"Shadow Man\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Evoca 4 Ombre obbedienti per 10 ore.\\\",\\n    \\\"rule\\\": \\\"Ogni Ombra conta come minion separato con proprie regole e ferite.\\\",\\n    \\\"flavor\\\": \\\"- Quanti ne puoi evocare? - Quanti ne vuoi?\\\",\\n    \\\"minion\\\": \\\"Ogni Ombra \\u00e8 un minion indipendente\\\",\\n    \\\"summon\\\": {\\n      \\\"npc_id\\\": \\\"ombre\\\",\\n      \\\"pool\\\": 4,\\n      \\\"pool_name\\\": \\\"PS\\\"\\n    }\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"stella\\\",\\n    \\\"title\\\": \\\"Arti marziali Occhirossi\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Attacca infliggendo 30 danni sacri. Contro non-morti o aberrazioni: 45 danni. Contro gli scorpioni 100.\\\",\\n    \\\"rule\\\": \\\"Nessun tiro per colpire.\\\",\\n    \\\"flavor\\\": \\\"L'astrosauro le ha parlato in sogno. Stella sa di essere la sua prescelta.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma astrosauro non pu\\u00f2 ricevere ferite da attacchi magici.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"stella\\\",\\n    \\\"title\\\": \\\"Tocco delle stelle\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"cura\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Cura 32 PF a un alleato. Pu\\u00f2 salvare un alleato che dovrebbe morire in questo round, riportandolo a 16 PF automaticamente.\\\",\\n    \\\"rule\\\": \\\"Contatto fisico richiesto. Pu\\u00f2 salvare anche un minion dalla morte prevenendo il danno che lo ucciderebbe.\\\",\\n    \\\"flavor\\\": \\\"I tessuti guariscono con la stessa forza vitale di un sole che brucia.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma astrosauro non pu\\u00f2 ricevere ferite da attacchi magici.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"stella\\\",\\n    \\\"title\\\": \\\"Passo delle stelle\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"Stance che genera aura divina per 2 round. Tutti gli alleati in 9m: +3 attacchi, +3 danni, riduzione danno 5/-.\\\",\\n    \\\"rule\\\": \\\"Bonus di morale.\\\",\\n    \\\"flavor\\\": \\\"- Da dove viene questa luce? - Dal cosmo che brucia dentro di me!\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma astrosauro non pu\\u00f2 ricevere ferite da attacchi magici.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"stella\\\",\\n    \\\"title\\\": \\\"Astrosauro\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"S\\\",\\n    \\\"desc\\\": \\\"linea di laser da 12 metri e 38 danni da fuoco, la velocit\\u00e0 aumenta a 15m, pu\\u00f2 spostarsi senza causare attacchi d'opportunit\\u00e0. Dura 3 round.\\\",\\n    \\\"rule\\\": \\\"Utilizzabile 1 volta per sessione.\\\",\\n    \\\"flavor\\\": \\\"Il grande Astrosauro non cammina su questa terra. Tranne quando decide di farlo.\\\",\\n    \\\"minion\\\": \\\"\\u2605 In forma astrosauro non pu\\u00f2 ricevere ferite da attacchi magici.\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gurgo\\\",\\n    \\\"title\\\": \\\"Borseggio / scassinare\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"furtivita\\\",\\n    \\\"grade\\\": \\\"B\\\",\\n    \\\"desc\\\": \\\"Ruba un oggetto specifico da un PNG o apre una serratura. CD Furtivit\\u00e0 14. Se il bersaglio non \\u00e8 allertato: riuscita automatica.\\\",\\n    \\\"rule\\\": \\\"Anche in combattimento.\\\",\\n    \\\"flavor\\\": \\\"Lo chiamavano \\\\\\\"Schifo\\\\\\\" perch\\u00e9 erano crudeli, ora si chiama Scorpion e gliela far\\u00e0 vedere!\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gurgo\\\",\\n    \\\"title\\\": \\\"Patetico\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"furtivita\\\",\\n    \\\"grade\\\": \\\"B\\\",\\n    \\\"desc\\\": \\\"Gurgo fa una scena tanto pietosa che un nemico perde la sua azione nel round successivo.\\\",\\n    \\\"rule\\\": \\\"Non funziona su non-morti, costrutti o creature con Int < 6.\\\",\\n    \\\"flavor\\\": \\\"Non \\u00e8 una tecnica, ma una vita intera di umiliazioni trasformata in arma.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gurgo\\\",\\n    \\\"title\\\": \\\"Sabotaggio gremlin\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"tech\\\",\\n    \\\"grade\\\": \\\"B\\\",\\n    \\\"desc\\\": \\\"Sabota un meccanismo nemico: cannone, trappola, serratura magica, gabbia. Effetto immediato e irreversibile senza riparazioni.\\\",\\n    \\\"rule\\\": \\\"Deve essere adiacente al meccanismo.\\\",\\n    \\\"flavor\\\": \\\"Si chiama anche \\\\\\\"Gurgo\\\\\\\" per non farsi trovare da Stella. Ma questo \\u00e8 un altro discorso.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gatto\\\",\\n    \\\"title\\\": \\\"Riparazione prodigiosa\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"tech\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Ripara istantaneamente qualsiasi oggetto meccanico o magico danneggiato. Nave: recupera 40 PF strutturali.\\\",\\n    \\\"rule\\\": \\\"Il DM tira 1d6 in segreto. Con 1-2: Gatto ripara qualcosa che nessuno aveva chiesto, o migliora l'oggetto in modo inaspettato con conseguenze narrative imprevedibili. Non usabile in combattimento navale attivo.\\\",\\n    \\\"flavor\\\": \\\"L'ordine in cui le cose si trovano \\u00e8 spesso sterile. Per questo le spingo gi\\u00f9 dal tavolo.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gatto\\\",\\n    \\\"title\\\": \\\"Cucina suprema\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"cura\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Fuori dal combattimento. Tutti i commensali recuperano 40 PF e beneficiano dell'effetto di ristorare minore.\\\",\\n    \\\"rule\\\": \\\"Il DM tira 1d6 in segreto. Con 1-2: il piatto ha un effetto aggiuntivo non richiesto - un commensale casuale acquisisce una capacit\\u00e0 bizzarra o tutti subiscono un effetto narrativo imprevedibile per 1 ora.\\\",\\n    \\\"flavor\\\": \\\"Ha buttato nella pentola tre chiodi arrugginiti, una vecchia pantofola e una crosta di pane. Ne ha tirato fuori un banchetto per 12 persone.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gatto\\\",\\n    \\\"title\\\": \\\"Costruzione titanica\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"tech\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"Il giocatore descrive un problema. Gatto costruisce in pochi minuti qualcosa che lo risolve. La forma della soluzione \\u00e8 a discrezione del DM, e si rompe comunque in breve tempo.\\\",\\n    \\\"rule\\\": \\\"Il DM tira 1d6 in segreto. Con 1-2: la costruzione risolve il problema ma ne crea uno nuovo di proporzioni simili altrove. Il giocatore descrive il problema - non la soluzione.\\\",\\n    \\\"flavor\\\": \\\"Quello che voglio fare \\u00e8 qualcosa che quel rottame non sa ancora di poter essere.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"gatto\\\",\\n    \\\"title\\\": \\\"Balzo della nave\\\",\\n    \\\"cost\\\": 3,\\n    \\\"stat\\\": \\\"tech\\\",\\n    \\\"grade\\\": \\\"SS\\\",\\n    \\\"desc\\\": \\\"La nave compie un balzo prodigioso fino a 1km, superando qualsiasi ostacolo fisico o navale.\\\",\\n    \\\"rule\\\": \\\"Il DM tira 1d6 in segreto. Con 1-2: la nave atterra sulla terra ferma. Richiede almeno un giorno di riparazioni e un modo per rimetterla in mare prima di poter ripartire. Gatto deve essere sveglio e a bordo. 1 volta per sessione.\\\",\\n    \\\"flavor\\\": \\\"Nessuno sa cosa ci sia dentro quei pedali. Nessuno ha il coraggio di cercare di scoprirlo.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"dorag\\\",\\n    \\\"title\\\": \\\"Soffio del drago\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"A scelta: soffio di fuoco (36 danni, cono 9m, CD Riflessi 25 dimezza) oppure soffio soporifero (1 bersaglio dorme 10 min, Tempra 25 nega).\\\",\\n    \\\"rule\\\": \\\"Una sola forma per attivazione.\\\",\\n    \\\"flavor\\\": \\\"\\u00c8 educato. \\u00c8 cordiale. Brucia le cose solo quando necessario.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"dorag\\\",\\n    \\\"title\\\": \\\"Contatto dell'Airone\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"B\\\",\\n    \\\"desc\\\": \\\"Chiama un contatto nella rete dell'Airone. Ottieni almeno 3 informazioni riservate e concrete su una fazione, PNG o luogo.\\\",\\n    \\\"rule\\\": \\\"Max 1 per sessione. Informazioni a discrezione del DM.\\\",\\n    \\\"flavor\\\": \\\"I draghi di ottone collezionano storie. Dorag ne conosce abbastanza da riempire una biblioteca.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"dorag\\\",\\n    \\\"title\\\": \\\"Maest\\u00e0 del drago\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Tutti i nemici entro 12m con meno di 10 DV sono spaventati per 2 round. Tutti gli altri sono comunque scossi.\\\",\\n    \\\"rule\\\": \\\"si pu\\u00f2 cumulare con pi\\u00f9 attivazioni\\\",\\n    \\\"flavor\\\": \\\"La sua stazza pu\\u00f2 diventare presto molto minacciosa.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"murray\\\",\\n    \\\"title\\\": \\\"Maledizione dello stregone\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"C\\\",\\n    \\\"desc\\\": \\\"Un nemico subisce -2 a tutti i tiri salvezza per 1 ora. Murray scaglia la maledizione nel modo pi\\u00f9 teatralmente minaccioso possibile.\\\",\\n    \\\"rule\\\": \\\"Non si cumula con Maledizione Voodoo di Lady.\\\",\\n    \\\"flavor\\\": \\\"Sono il pi\\u00f9 terrificante non-morto dell'area delle tre isole! ok, il pi\\u00f9 terrificante PEZZO di non morto.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"murray\\\",\\n    \\\"title\\\": \\\"Dardo incantato veramente spaventoso\\\",\\n    \\\"cost\\\": 1,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"C\\\",\\n    \\\"desc\\\": \\\"3 dardi magici automatici da 8 danni l'uno. Distribuibili su bersagli diversi.\\\",\\n    \\\"rule\\\": \\\"Non richiede tiro per colpire.\\\",\\n    \\\"flavor\\\": \\\"- Come fai a lanciare incantesimi senza mani? - Silenzio! Non distrarre la malignit\\u00e0 con le tue stupide domande!\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"murray\\\",\\n    \\\"title\\\": \\\"Trattativa con i morti\\\",\\n    \\\"cost\\\": 2,\\n    \\\"stat\\\": \\\"magia\\\",\\n    \\\"grade\\\": \\\"C\\\",\\n    \\\"desc\\\": \\\"Murray convince un non-morto non intelligente a ignorare la ciurma per 10 minuti grazie alla sua parlantina.\\\",\\n    \\\"rule\\\": \\\"Non funziona su non-morti intelligenti.\\\",\\n    \\\"flavor\\\": \\\"Varcheremo le porte dell'inferno reggendo le loro teste su una picca! beh ok tu varcherai e io rotoler\\u00f2.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"ombre\\\",\\n    \\\"title\\\": \\\"Armata delle tenebre\\\",\\n    \\\"cost\\\": 1,\\n    \\\"summon_cost\\\": true,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"Le Ombre attaccano tutti i nemici entro 1,5m da loro. 1ps: 15 danni. 2ps: 30 danni. 3ps: 45 danni. 4ps: 60 danni.\\\",\\n    \\\"rule\\\": \\\"Spendi 1-4 PS. I danni scalano con i punti spesi. Le Ombre devono essere entro 1,5m dai bersagli.\\\",\\n    \\\"flavor\\\": \\\"Era poco pi\\u00f9 che un'ombra poco fa, ma ora sono corpi fatti di ossa spezzate, carne rinsecchita e fauci affamate.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  },\\n  {\\n    \\\"npc_id\\\": \\\"ombre\\\",\\n    \\\"title\\\": \\\"Servitori non morti\\\",\\n    \\\"cost\\\": 1,\\n    \\\"summon_cost\\\": true,\\n    \\\"stat\\\": \\\"combat\\\",\\n    \\\"grade\\\": \\\"A\\\",\\n    \\\"desc\\\": \\\"1ps: fiancheggia un nemico \\u2014 vantaggio al primo attacco verso quel nemico. 2ps: due Ombre si sacrificano, assorbono la prossima ferita di un minion. 3ps: esplorano una zona, il DM fornisce un'informazione tattica. 4ps: bloccano un nemico per 1 round, non pu\\u00f2 agire.\\\",\\n    \\\"rule\\\": \\\"Spendi 1-4 PS. L'effetto corrisponde ai punti spesi. Le Ombre devono essere entro 1,5m dal bersaglio.\\\",\\n    \\\"flavor\\\": \\\"Lo ombre emergono dal crocicchio al richiamo dello shadow man.\\\",\\n    \\\"minion\\\": \\\"\\\"\\n  }\\n];\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// CONFIG\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nconst SI = {combat:'\\u2694\\ufe0f',magia:'\\u2721\\ufe0f',nav:'\\u2693',tech:'\\ud83d\\udd27',cura:'\\ud83c\\udf57',furtivita:'\\ud83c\\udfad'};\\nconst SK  = ['combat','magia','nav','tech','cura','furtivita'];\\nconst SN  = {combat:'Combattimento',magia:'Magia',nav:'Navigazione',tech:'Tecnica',cura:'Cura',furtivita:'Furtivit\\u00e0'};\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// STORE\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nconst LS = {\\n  g:(k,d)=>{try{const v=localStorage.getItem(k);return v!=null?JSON.parse(v):d}catch{return d}},\\n  s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}\\n};\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// STATE\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nlet S = {\\n  view:    'home',\\n  rawUrl:  LS.g('rawUrl',''),\\n  npcs:    LS.g('npcs', BUNDLED_NPCS),\\n  cards:   LS.g('cards', BUNDLED_CARDS),\\n  deck:    LS.g('deck', []),\\n  session: LS.g('session', null),\\n  maxPool: LS.g('maxPool', 6),\\n  wounds:  LS.g('wounds', {}),\\n  loading:false, error:null, toast:null, dialog:null,\\n  expanded:{}, consultaExp:{}, consultaTab:'ciurma', openCard:null, openInfo:null,\\n  menuOpen:false, minionOpen:false, builderDeck:null,\\n  syncTime: LS.g('syncTime', null),\\n  ghToken: LS.g('ghToken', ''),\\n};\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// HELPERS\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nconst npcCards = id => S.cards.filter(c=>c.npc_id===id);\\nconst npcById  = id => S.npcs.find(n=>n.id===id);\\nconst cKey     = (n,t) => `${n}::${t}`;\\nconst enc      = s => encodeURIComponent(s||'');\\nconst dec      = s => {try{return decodeURIComponent(s||'')}catch{return s||''}};\\nconst gc       = g  => `g-${(g||'d').toLowerCase()}`;\\nconst initials = n  => (n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();\\n\\nfunction wounds(id){ return S.wounds[id]||0; }\\n\\n// Ferite subite durante la sessione corrente (0 se nessuna sessione attiva)\\nfunction sessionWounds(id){\\n  if(!S.session) return wounds(id);\\n  const atStart = S.session.woundsAtStart?.[id] || 0;\\n  return Math.max(0, wounds(id) - atStart);\\n}\\n\\nfunction status(npc){\\n  const w = wounds(npc.id), pf = npc.pf_max||1;\\n  if(w >= pf) return 'morto';\\n  // Fuori per carta (disable_if)\\n  if(S.session?.disabledBy?.[npc.id]) return 'fuori';\\n  // In sessione: stato basato sulle ferite subite durante la sessione\\n  const sw = S.session ? sessionWounds(npc.id) : w;\\n  if(npc.star){ if(sw >= 2) return 'fuori'; if(sw === 1) return 'indebolito'; }\\n  else         { if(sw >= 1) return 'fuori'; }\\n  return 'sano';\\n}\\nconst blocked  = npc => {\\n  if(npc.summoned){\\n    const summon=S.session?.summons?.[npc.id];\\n    return !summon || summon.pool<=0;\\n  }\\n  const s=status(npc); return s==='fuori'||s==='morto';\\n};\\nconst isFree   = (npc,card) => npc?.star && parseInt(card.cost)===1 && timesUsed(npc.id,card.title)===0;\\nconst effCost  = (npc,card) => isFree(npc,card)?0:parseInt(card.cost)||1;\\nconst timesUsed= (nId,t) => (S.session?.used||{})[cKey(nId,t)]||0;\\n\\n// Render TS sempre in ordine fisso Tempra \\u2192 Riflessi \\u2192 Volont\\u00e0\\nconst TS_ABBR = {'Tempra':'Tmp','Riflessi':'Rif','Volont\\u00e0':'Vol'};\\nfunction rTS(npc, large=false) {\\n  const ORDER = ['Tempra','Riflessi','Volont\\u00e0'];\\n  const forte  = new Set(npc.ts_forte||[]);\\n  const debole = new Set(npc.ts_debole||[]);\\n  const sz = large ? 'font-size:12px;padding:3px 10px' : '';\\n  const lbl = large ? t => t : t => TS_ABBR[t]||t;\\n  return ORDER.map(t => {\\n    if (forte.has(t))  return `<span class=\\\"ts-pill ts-forte\\\"  style=\\\"${sz}\\\">${lbl(t)}\\u2713</span>`;\\n    if (debole.has(t)) return `<span class=\\\"ts-pill ts-debole\\\" style=\\\"${sz}\\\">${lbl(t)}\\u2715</span>`;\\n    return '';\\n  }).join('');\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// SYNC\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nasync function syncGithub(){\\n  if(!S.rawUrl){toast('URL GitHub non configurato',true);return;}\\n  S.loading=true; S.error=null; render();\\n  try{\\n    const r=await fetch(S.rawUrl+'?t='+Date.now());\\n    if(!r.ok) throw new Error('HTTP '+r.status);\\n    const data=await r.json();\\n    if(!data.npcs?.length) throw new Error('\\\"npcs\\\" mancante o vuoto');\\n    if(!data.cards?.length) throw new Error('\\\"cards\\\" mancante o vuoto');\\n    S.npcs  = data.npcs.map(n=>({...n, star:['true','TRUE','1',true].includes(n.star), pf_max:parseInt(n.pf_max)||1}));\\n    S.cards = data.cards.map(c=>({...c, cost:parseInt(c.cost)||1}));\\n    S.syncTime = new Date().toISOString();\\n    LS.s('npcs',S.npcs); LS.s('cards',S.cards); LS.s('syncTime',S.syncTime);\\n    toast(`\\u2713 ${S.npcs.length} PNG \\u00b7 ${S.cards.length} carte`);\\n  }catch(e){\\n    S.error=e.message; toast('Errore: '+e.message,true);\\n  }finally{\\n    S.loading=false; render();\\n  }\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// ACTIONS\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nfunction startSession(){\\n  // Rimuovi dal mazzo PNG che non esistono pi\\u00f9 nel JSON\\n  S.deck = S.deck.filter(id => npcById(id));\\n  if(S.deck.length === 0){ toast('Nessun PNG valido nel mazzo!', true); return; }\\n  LS.s('deck', S.deck);\\n  // Snapshot ferite iniziali di ogni PNG nel mazzo\\n  const woundsAtStart = {};\\n  S.deck.forEach(id => { woundsAtStart[id] = wounds(id); });\\n  S.session={pool:S.maxPool, maxPool:S.maxPool, used:{}, woundsAtStart,\\n    disabledBy:{},\\n    summons:{},\\n    summonDeck:[]\\n  };\\n  LS.s('session',S.session);\\n  S.view='session'; S.expanded={}; render();\\n}\\nfunction endSession(){\\n  S.menuOpen=false;\\n  S.dialog={title:'Termina sessione',msg:'Le carte usate verranno azzerate. Le ferite persistono tra le sessioni.',confirmLabel:'Termina',danger:true,confirmAction:'do-end'};\\n  render();\\n}\\nfunction resetSession(){\\n  S.menuOpen=false;\\n  S.dialog={title:'Azzera sessione',msg:'Carte usate e pool verranno ripristinati. Le ferite persistono.',confirmLabel:'Azzera',danger:false,confirmAction:'do-reset'};\\n  render();\\n}\\nfunction adjPool(d){\\n  if(!S.session) return;\\n  S.session.pool=Math.max(0,Math.min(S.session.maxPool*2,S.session.pool+d));\\n  LS.s('session',S.session); render();\\n}\\nfunction adjMax(d){\\n  S.maxPool=Math.max(1,Math.min(20,S.maxPool+d));\\n  LS.s('maxPool',S.maxPool); render();\\n}\\nfunction playCard(npcId,cardTitle){\\n  if(!S.session) return;\\n  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);\\n  if(!npc||!card) return;\\n  if(blocked(npc)){toast('PNG fuori combattimento!',true);return;}\\n\\n  // Carte ombre \\u2014 usano summon pool invece del pool globale\\n  const isSummonCard = card.summon_cost;\\n  if(isSummonCard){\\n    const summon = S.session.summons?.[npcId];\\n    if(!summon||summon.pool<=0){toast('Punti evocazione esauriti!',true);return;}\\n    // Mostra selettore punti \\u2014 gestito da dialog dedicato\\n    S.dialog={\\n      title: card.title,\\n      msg: `Quanti ${summon.pool_name||'PS'} vuoi spendere? (1-${summon.pool})`,\\n      confirmLabel: null,\\n      isSummonCost: true,\\n      summonNpcId: npcId,\\n      summonCardTitle: cardTitle,\\n      summonMax: summon.pool\\n    };\\n    render(); return;\\n  }\\n\\n  const cost=effCost(npc,card);\\n\\n  // disable_if: always \\u2014 fuori combattimento immediato\\n  if(card.disable_if?.condition==='always'){\\n    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}\\n    S.session.pool-=cost;\\n    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;\\n    S.session.disabledBy[npcId]=true;\\n    LS.s('session',S.session); S.openCard=null;\\n    toast(`${npc.name} esce dal combattimento`); render(); return;\\n  }\\n\\n  // disable_if: ask \\u2014 chiede conferma prima\\n  if(card.disable_if?.condition==='ask'){\\n    S.dialog={\\n      title: card.title,\\n      msg: card.disable_if.prompt||'Confermi effetto speciale?',\\n      confirmLabel: 'S\\u00ec \\u2014 applica',\\n      cancelLabel: 'No \\u2014 effetto normale',\\n      confirmAction: 'play-card-disable',\\n      cancelAction: 'play-card-normal',\\n      pendingNpc: npcId,\\n      pendingCard: cardTitle\\n    };\\n    render(); return;\\n  }\\n\\n  // summon: aggiunge PNG evocato al mazzo sessione\\n  if(card.summon){\\n    const sId = card.summon.npc_id;\\n    if(S.session.summonDeck?.includes(sId)){\\n      toast('Evocazione gi\\u00e0 attiva!',true); return;\\n    }\\n    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}\\n    S.session.pool-=cost;\\n    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;\\n    if(!S.session.summons) S.session.summons={};\\n    if(!S.session.summonDeck) S.session.summonDeck=[];\\n    S.session.summons[sId]={\\n      pool: card.summon.pool,\\n      maxPool: card.summon.pool,\\n      pool_name: card.summon.pool_name||'PS'\\n    };\\n    S.session.summonDeck.push(sId);\\n    LS.s('session',S.session); S.openCard=null;\\n    const sNpc=npcById(sId);\\n    toast(`\\u2726 ${sNpc?.name||sId} evocate!`); render(); return;\\n  }\\n\\n  // Carta normale\\n  if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}\\n  S.session.pool-=cost;\\n  S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;\\n  LS.s('session',S.session); S.openCard=null;\\n  toast(cost===0?`\\u2605 ${cardTitle} \\u2014 gratuita!`:`${cardTitle} \\u2014 ${cost}pt`);\\n  render();\\n}\\nfunction undoCard(npcId,cardTitle){\\n  if(!S.session) return;\\n  const key=cKey(npcId,cardTitle), was=S.session.used[key]||0;\\n  if(!was) return;\\n  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);\\n  if(!npc||!card) return;\\n  const wasFree=npc.star&&parseInt(card.cost)===1&&was===1;\\n  S.session.pool=Math.min(S.session.maxPool,S.session.pool+(wasFree?0:parseInt(card.cost)||1));\\n  if(was===1) delete S.session.used[key]; else S.session.used[key]=was-1;\\n  LS.s('session',S.session); S.openCard=null; render();\\n}\\nfunction addWound(npcId){\\n  const npc=npcById(npcId); if(!npc) return;\\n  if(npc.summoned && S.session?.summons?.[npcId]){\\n    const summon=S.session.summons[npcId];\\n    summon.pool=Math.max(0,summon.pool-1);\\n    if(summon.pool<=0){\\n      S.session.summonDeck=(S.session.summonDeck||[]).filter(id=>id!==npcId);\\n      toast(`\\u2726 ${npc.name} si dissolvono`,true);\\n    } else {\\n      toast(`\\u2726 ${npc.name} \\u2014 ${summon.pool}/${summon.maxPool} ${summon.pool_name||'PS'}`);\\n    }\\n    flashWound();\\n    LS.s('session',S.session); render(); return;\\n  }\\n  const cur=wounds(npcId);\\n  if(cur>=npc.pf_max){toast('PNG gi\\u00e0 al massimo delle ferite!',true);return;}\\n  S.wounds[npcId]=cur+1; LS.s('wounds',S.wounds);\\n  flashWound();\\n  const st=status(npc);\\n  if(st==='morto')           toast(`\\u2620 ${npc.name} \\u00e8 morto!`,true);\\n  else if(st==='fuori')      { toast(`\\u2715 ${npc.name} \\u00e8 fuori combattimento`); shakeNpc(npcId); }\\n  else if(st==='indebolito') toast(`\\u26a0 ${npc.name} \\u00e8 indebolito \\u2014 al prossimo colpo fuori`);\\n  render();\\n}\\nfunction flashWound(){\\n  const el=document.createElement('div');\\n  el.style.cssText='position:fixed;inset:0;z-index:9999;pointer-events:none;animation:wound-flash .5s ease forwards';\\n  document.body.appendChild(el);\\n  setTimeout(()=>el.remove(),520);\\n}\\nfunction shakeNpc(npcId){\\n  setTimeout(()=>{\\n    const row=document.querySelector(`[data-npc=\\\"${npcId}\\\"]`)?.closest('.npc-row');\\n    if(row){row.style.animation='shake .4s ease';setTimeout(()=>row.style.animation='',420);}\\n  },50);\\n}\\nfunction removeWound(npcId){\\n  const cur=wounds(npcId); if(cur<=0) return;\\n  S.wounds[npcId]=cur-1; LS.s('wounds',S.wounds);\\n  toast(`\\u2764 ${npcById(npcId)?.name} guarisce una ferita`); render();\\n}\\nfunction toast(msg,err=false){\\n  S.toast={msg,err}; render();\\n  setTimeout(()=>{S.toast=null;render();},2800);\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// RENDER\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nlet _prevOpenCard = null;\\nlet _prevExpanded = {};\\nlet _prevSummonDeck = [];\\n\\nfunction render(){\\n  const scrollEl = document.querySelector('.almanac, .npc-list, .scroll-body, .settings-body');\\n  const scrollTop = scrollEl ? scrollEl.scrollTop : 0;\\n  const scrollId  = scrollEl ? (scrollEl.className.split(' ')[0]) : null;\\n\\n  // Traccia cosa era aperto prima del render\\n  const wasCardNew   = S.openCard && S.openCard !== _prevOpenCard;\\n  const prevExpanded = {..._prevExpanded};\\n  const prevSummons  = [..._prevSummonDeck];\\n\\n  const views={home:rHome,builder:rBuilder,session:rSession,settings:rSettings,consulta:rConsulta};\\n  document.getElementById('app').innerHTML=\\n    (views[S.view]||rHome)()+\\n    (S.dialog     ? rDialog()    :'')+\\n    (S.openCard   ? rCardModal() :'')+\\n    (S.openInfo   ? rInfoModal() :'')+\\n    (S.minionOpen ? rMinion()    :'')+\\n    (S.menuOpen   ? rMenu()      :'')+\\n    (S.toast?`<div class=\\\"toast${S.toast.err?' toast-err':''}\\\">${S.toast.msg}</div>`:'');\\n\\n  // Anima card modal solo se appena aperto\\n  if(wasCardNew){\\n    document.querySelector('.mod-sheet:not(.mod-sheet-bottom)')?.classList.add('anim-card-flip');\\n  }\\n  // Anima info/minion modal solo se appena aperto\\n  if(S.openInfo && !_prevOpenCard){\\n    document.querySelector('.mod-sheet-bottom')?.classList.add('anim-slide-up');\\n  }\\n  // Anima drawer solo se appena espanso (non su ogni re-render)\\n  Object.keys(S.expanded).forEach(id=>{\\n    if(S.expanded[id] && !prevExpanded[id]){\\n      const panel=document.querySelector(`.npc-row [data-npc=\\\"${id}\\\"] ~ * .cards-panel, .cards-panel`);\\n      // Trova il cards-panel del PNG appena espanso\\n      const row=document.querySelector(`[data-npc=\\\"${id}\\\"]`)?.closest('.npc-row, .summon-row');\\n      row?.querySelector('.cards-panel')?.classList.add('anim-open');\\n    }\\n  });\\n  // Anima summon row solo se appena aggiunto\\n  (S.session?.summonDeck||[]).forEach(id=>{\\n    if(!prevSummons.includes(id)){\\n      document.querySelector(`.summon-row [data-npc=\\\"${id}\\\"]`)?.closest('.summon-row')\\n        ?.classList.add('anim-summon');\\n    }\\n  });\\n\\n  // Aggiorna tracking\\n  _prevOpenCard = S.openCard;\\n  _prevExpanded = {...S.expanded};\\n  _prevSummonDeck = [...(S.session?.summonDeck||[])];\\n\\n  if(scrollId && !S.openCard && !S.openInfo && !S.dialog && !S.menuOpen && !S.minionOpen){\\n    const el = document.querySelector('.'+scrollId);\\n    if(el) el.scrollTop = scrollTop;\\n  }\\n}\\n\\n// \\u2500\\u2500 Summon card effect label \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction getSummonEffect(card, n){\\n  // Cerca la riga corrispondente a npo nella desc\\n  const lines = (card.desc||'').split(/[.\\u2014]/).map(s=>s.trim()).filter(Boolean);\\n  const match = lines.find(l=>l.startsWith(`${n}ps`)||l.startsWith(`${n} ps`));\\n  if(match) return match.replace(/^\\\\d+\\\\s*ps:?\\\\s*/i,'');\\n  // Fallback: danni per Assalto\\n  if(card.title.includes('Assalto')) return `${n*15} danni`;\\n  return `Effetto ${n}`;\\n}\\n\\n// \\u2500\\u2500 Bottom nav \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rBotNav(active){\\n  const sess = S.session;\\n  return `<nav class=\\\"bot-nav\\\">\\n    <button class=\\\"bot-btn${active==='home'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"home\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\ud83c\\udfe0</span>Home\\n    </button>\\n    <button class=\\\"bot-btn${active==='consulta'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"consulta\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\ud83d\\udc65</span>Ciurma\\n    </button>\\n    ${sess\\n      ?`<button class=\\\"bot-btn bot-btn-sess${active==='session'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"session\\\">\\n          <span class=\\\"bot-btn-icon\\\">\\u2694\\ufe0f</span>Sessione\\n        </button>`\\n      :''}\\n    <button class=\\\"bot-btn${active==='minion'?' active':''}\\\" data-action=\\\"open-minion-nav\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\ud83d\\udcd6</span>Regole\\n    </button>\\n    <button class=\\\"bot-btn${active==='settings'?' active':''}\\\" data-action=\\\"goto\\\" data-view=\\\"settings\\\">\\n      <span class=\\\"bot-btn-icon\\\">\\u2699\\ufe0f</span>Opzioni\\n    </button>\\n  </nav>`;\\n}\\n\\n// \\u2500\\u2500 Home \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rHome(){\\n  const deckTxt = S.deck.length\\n    ? S.deck.map(id=>npcById(id)?.name||id).join(', ')\\n    : null;\\n  const syncTxt = S.syncTime\\n    ? new Date(S.syncTime).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})\\n    : 'Mai';\\n  const activeCount = S.deck.filter(id=>{ const n=npcById(id); return n&&status(n)==='sano'; }).length;\\n\\n  return `<div class=\\\"view home-view\\\">\\n  ${S.loading?'<div class=\\\"loading\\\" style=\\\"position:absolute;top:0;left:0;right:0;z-index:10\\\">Sincronizzazione...</div>':''}\\n  ${S.error?`<div class=\\\"err-banner\\\" style=\\\"position:absolute;top:0;left:0;right:0;z-index:10\\\">\\u26a0 ${S.error}</div>`:''}\\n\\n  <!-- Hero \\u2014 met\\u00e0 superiore -->\\n  <div class=\\\"home-hero-img\\\">\\n    <img src=\\\"https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2017/05/pirate-ship-wallpapers-1080p.jpg\\\"\\n      alt=\\\"Pollo Diablo\\\" onerror=\\\"this.parentElement.classList.add('hero-fallback')\\\">\\n    <div class=\\\"home-hero-overlay\\\">\\n      <div class=\\\"home-hero-title\\\">\\u2693 Ciurma del<br>Pollo Diablo</div>\\n    </div>\\n  </div>\\n\\n  <!-- Azioni \\u2014 met\\u00e0 inferiore -->\\n  <div class=\\\"home-actions-panel\\\">\\n    <!-- Mazzo -->\\n    <div class=\\\"home-deck-row\\\">\\n      <div class=\\\"home-deck-info\\\">\\n        <span class=\\\"home-deck-label\\\">Mazzo</span>\\n        <span class=\\\"home-deck-val\\\">${S.deck.length ? S.deck.length+' PNG' : '\\u2014'}</span>\\n        ${deckTxt?`<span class=\\\"home-deck-sub\\\">${deckTxt}</span>`:''}\\n      </div>\\n      <button class=\\\"sm-btn\\\" data-action=\\\"open-builder\\\">\\u270f\\ufe0f Modifica</button>\\n    </div>\\n\\n    ${S.deck.length ? `\\n    <!-- Pool -->\\n    <div class=\\\"home-pool-row\\\">\\n      <span class=\\\"home-deck-label\\\">Pool punti</span>\\n      <div class=\\\"stepper-row\\\" style=\\\"margin:0\\\">\\n        <button class=\\\"step-btn\\\" data-action=\\\"adj-max\\\" data-d=\\\"-1\\\">\\u2212</button>\\n        <span class=\\\"stepper-val\\\">${S.maxPool}</span>\\n        <button class=\\\"step-btn\\\" data-action=\\\"adj-max\\\" data-d=\\\"1\\\">+</button>\\n      </div>\\n    </div>\\n    <!-- CTA sessione -->\\n    <button class=\\\"btn btn-g btn-lg home-sess-btn\\\" data-action=\\\"start-session\\\">\\u2694 Inizia sessione</button>\\n    ` : `<p class=\\\"hint-txt\\\" style=\\\"margin:12px 0\\\">Aggiungi PNG al mazzo per iniziare.</p>`}\\n\\n    <!-- Sync strip -->\\n    <div class=\\\"sync-strip\\\">\\n      <span>Sync: ${syncTxt} \\u00b7 ${S.npcs.filter(n=>!n.summoned).length} PNG \\u00b7 ${S.cards.length} carte</span>\\n      ${S.rawUrl\\n        ?`<button class=\\\"sm-btn\\\" style=\\\"margin:0;padding:5px 10px\\\" data-action=\\\"sync\\\">\\ud83d\\udd04</button>`\\n        :`<button class=\\\"sm-btn\\\" style=\\\"margin:0;padding:5px 10px\\\" data-action=\\\"goto\\\" data-view=\\\"settings\\\">Configura</button>`}\\n    </div>\\n  </div>\\n\\n  ${rBotNav('home')}</div>`;\\n}\\n\\n// \\u2500\\u2500 Builder \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rBuilder(){\\n  const bd=S.builderDeck||[];\\n  return `<div class=\\\"view\\\">\\n  <div class=\\\"hdr\\\">\\n    <button class=\\\"ico-btn\\\" data-action=\\\"cancel-builder\\\">\\u2190</button>\\n    <span class=\\\"hdr-title\\\">Modifica mazzo</span>\\n    <button class=\\\"confirm-btn\\\" data-action=\\\"confirm-builder\\\">\\u2713 Salva (${bd.length})</button>\\n  </div>\\n  <div class=\\\"bldr-sub\\\">Tocca un PNG per aggiungerlo o rimuoverlo</div>\\n  <div class=\\\"npc-grid\\\">\\n    ${S.npcs.filter(npc=>!npc.summoned).map(npc=>{\\n      const sel=bd.includes(npc.id), w=wounds(npc.id), pf=npc.pf_max||1;\\n      const st=status(npc);\\n      return `<div class=\\\"npc-tile${sel?' sel':''}\\\" data-action=\\\"toggle-npc\\\" data-npc=\\\"${npc.id}\\\">\\n        <div class=\\\"tile-img-wrap\\\">\\n          <div class=\\\"tile-name-ov\\\">${npc.star?'\\u2605 ':''}${npc.name}</div>\\n          ${npc.image_url?`<img src=\\\"${npc.image_url}\\\" alt=\\\"${npc.name}\\\" onerror=\\\"this.style.display='none'\\\">`:''}\\n          ${!npc.image_url?`<div class=\\\"tile-img-ph\\\">${initials(npc.name)}</div>`:''}\\n          ${sel?'<span class=\\\"tile-chk-ov\\\">\\u2713</span>':''}\\n        </div>\\n      </div>`;\\n    }).join('')}\\n  </div></div>`;\\n}\\n\\n// \\u2500\\u2500 Session \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rSession(){\\n  if(!S.session) return rHome();\\n  const {pool,maxPool}=S.session;\\n  const summonDeck = S.session.summonDeck||[];\\n  return `<div class=\\\"view sess-view\\\">\\n  <div class=\\\"hdr sess-hdr\\\">\\n    <div class=\\\"pool-wrap\\\">\\n      <div class=\\\"pool-dots\\\">${rDots(pool,maxPool)}</div>\\n      <div class=\\\"pool-txt\\\">${pool} / ${maxPool} pt</div>\\n    </div>\\n    <div class=\\\"pool-ctrl\\\">\\n      <button class=\\\"step-btn\\\" style=\\\"width:32px;height:32px;font-size:18px\\\" data-action=\\\"adj-pool\\\" data-d=\\\"-1\\\">\\u2212</button>\\n      <button class=\\\"step-btn\\\" style=\\\"width:32px;height:32px;font-size:18px\\\" data-action=\\\"adj-pool\\\" data-d=\\\"1\\\">+</button>\\n      <button class=\\\"end-btn\\\" data-action=\\\"end-session\\\">Fine</button>\\n      <button class=\\\"ico-btn\\\" data-action=\\\"open-menu\\\">\\u22ee</button>\\n    </div>\\n  </div>\\n  <div class=\\\"npc-list\\\">\\n    ${S.deck.map(id=>{\\n      const npc=npcById(id); if(!npc) return '';\\n      const st=status(npc), exp=S.expanded[id];\\n      return `<div class=\\\"npc-row ${st}\\\">\\n        ${rNpcRow(npc, st, exp, 'session')}\\n        ${exp ? `<div class=\\\"cards-panel\\\">${rCardItems(npc)}</div>` : ''}\\n      </div>`;\\n    }).join('')}\\n    ${summonDeck.map(id=>{\\n      const npc=npcById(id); if(!npc) return '';\\n      const summon=S.session.summons?.[id];\\n      const exp=S.expanded[id];\\n      const pool=summon?.pool||0, maxPool=summon?.maxPool||0;\\n      const isDead=pool<=0;\\n      const spDots = Array.from({length:maxPool},(_,i)=>\\n        `<span class=\\\"sp-dot ${i<pool?'sp-dot-on':'sp-dot-off'}\\\"></span>`).join('');\\n      return `<div class=\\\"npc-row summon-row${isDead?' fuori':''}\\\">\\n        <div class=\\\"nr-hdr\\\" data-action=\\\"toggle-npc\\\" data-npc=\\\"${id}\\\">\\n          <div class=\\\"nr-avatar\\\" style=\\\"border:1px solid var(--gold)\\\">\\n            ${npc.image_url\\n              ?`<img src=\\\"${npc.image_url}\\\" alt=\\\"${npc.name}\\\">`\\n              :`<span style=\\\"font-size:18px;color:var(--gold)\\\">\\u2726</span>`}\\n          </div>\\n          <div class=\\\"nr-info\\\">\\n            <div class=\\\"nr-row1\\\">\\n              <span class=\\\"nr-name\\\" style=\\\"color:var(--gold)\\\">${npc.name}</span>\\n            </div>\\n            <div class=\\\"nr-row2\\\">\\n              <span class=\\\"ca-badge\\\">CA ${npc.ca||'?'}</span>\\n              ${rTS(npc)}\\n            </div>\\n          </div>\\n          <button class=\\\"info-btn\\\" data-action=\\\"open-info\\\" data-npc=\\\"${id}\\\" data-stop>\\u2139</button>\\n        </div>\\n        <div class=\\\"nr-expand-btn\\\" data-action=\\\"toggle-npc\\\" data-npc=\\\"${id}\\\">\\n          ${exp?'\\u25b2':'\\u25bc'}\\n        </div>\\n        ${exp&&!isDead ? `<div class=\\\"cards-panel\\\">${rCardItems(npc, true)}</div>` : ''}\\n      </div>`;\\n    }).join('')}\\n  </div>\\n  ${rBotNav('session')}</div>`;\\n}\\n\\n// \\u2500\\u2500 Consulta \\u2014 Almanacco \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rConsulta(){\\n  const showSummon = S.consultaTab === 'summon';\\n  const npcList = showSummon\\n    ? S.npcs.filter(npc=>npc.summoned)\\n    : S.npcs.filter(npc=>!npc.summoned);\\n\\n  return `<div class=\\\"view\\\">\\n  <div class=\\\"hdr\\\"><span class=\\\"hdr-title\\\">\\ud83e\\ude9d Pendagli da forca</span></div>\\n  <div class=\\\"consulta-tabs\\\">\\n    <button class=\\\"ctab${!showSummon?' ctab-active':''}\\\" data-action=\\\"consulta-tab\\\" data-tab=\\\"ciurma\\\">\\ud83d\\udc65 Ciurma</button>\\n    <button class=\\\"ctab${showSummon?' ctab-active':''}\\\" data-action=\\\"consulta-tab\\\" data-tab=\\\"summon\\\">\\u2726 Evocazioni</button>\\n  </div>\\n  <div class=\\\"almanac\\\">\\n    ${npcList.length === 0\\n      ? `<div style=\\\"padding:30px;text-align:center;color:var(--muted);font-size:14px\\\">${showSummon?'Nessuna evocazione disponibile':'Nessun PNG'}</div>`\\n      : npcList.map(npc=>{\\n      const exp = S.consultaExp[npc.id];\\n      const cards = npcCards(npc.id);\\n      const w = wounds(npc.id), pf = npc.pf_max||1;\\n      const st = status(npc);\\n      const wdots = Array.from({length:pf},(_,i)=>\\n        `<span class=\\\"wd ${i<w?'wd-on':'wd-off'}\\\"></span>`).join('');\\n      const statusChip = st==='sano' ? '' :\\n        st==='indebolito' ? `<span class=\\\"chip chip-indebolito\\\">\\u26a0 Indebolito</span>` :\\n        st==='fuori'      ? `<span class=\\\"chip chip-fuori\\\">\\u2715 Fuori</span>` :\\n                            `<span class=\\\"chip chip-morto\\\">\\u2620 Morto</span>`;\\n\\n      return `<div class=\\\"alm-card${exp?' alm-open':''}\\\">\\n        <div class=\\\"alm-top\\\">\\n          <div class=\\\"alm-photo-wrap\\\">\\n            ${npc.image_url\\n              ? `<img class=\\\"alm-photo\\\" src=\\\"${npc.image_url}\\\" alt=\\\"${npc.name}\\\" onerror=\\\"this.style.display='none';this.parentElement.querySelector('.alm-photo-ph').style.display='flex'\\\">`+\\n                `<div class=\\\"alm-photo-ph\\\" style=\\\"display:none\\\">${initials(npc.name)}</div>`\\n              : `<div class=\\\"alm-photo-ph\\\">${initials(npc.name)}</div>`}\\n          </div>\\n          <div class=\\\"alm-info\\\">\\n            <div class=\\\"alm-name-row\\\">\\n              ${npc.star?'<span class=\\\"alm-star\\\">\\u2605</span>':''}\\n              <span class=\\\"alm-name\\\">${npc.name}</span>\\n            </div>\\n            <div class=\\\"alm-classe\\\">${npc.classe||''}</div>\\n            <div class=\\\"alm-stats\\\">\\n              <span class=\\\"ca-badge\\\">CA ${npc.ca||'?'}</span>\\n              ${rTS(npc)}\\n            </div>\\n            <div class=\\\"alm-wound-bar\\\">\\n              ${npc.summoned\\n                ? Array.from({length:npc.pf_max||4},(_,i)=>`\\n                    <span class=\\\"alm-wd\\\" style=\\\"background:#4a8fe0;cursor:default\\\"></span>`).join('')\\n                : Array.from({length:pf},(_,i)=>`\\n                    <span class=\\\"alm-wd ${i<w?'alm-wd-on':'alm-wd-off'}\\\"\\n                      data-action=\\\"${i<w?'remove-wound-info':'add-wound'}\\\"\\n                      data-npc=\\\"${npc.id}\\\"\\n                      data-stop></span>`).join('')}\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"alm-stat-row\\\">\\n          ${SK.map(k=>`<div class=\\\"alm-stat-cell\\\">\\n            <span class=\\\"alm-stat-icon\\\">${SI[k]}</span>\\n            <span class=\\\"alm-stat-name\\\">${SN[k]}</span>\\n            <span class=\\\"alm-stat-grade ${gc(npc[k])}\\\">${npc[k]||'D'}</span>\\n          </div>`).join('')}\\n        </div>\\n        <button class=\\\"alm-cards-btn\\\" data-action=\\\"toggle-consulta\\\" data-npc=\\\"${npc.id}\\\">\\n          ${exp ? '\\u25b2 Nascondi carte' : `\\u25bc Carte (${cards.length})`}\\n        </button>\\n        ${exp ? `<div class=\\\"alm-cards-drawer\\\">\\n          ${cards.map(card=>`\\n            <div class=\\\"alm-card-row\\\" data-action=\\\"open-card-consulta\\\" data-npc=\\\"${npc.id}\\\" data-card=\\\"${enc(card.title)}\\\">\\n              <span class=\\\"alm-card-title\\\">${card.title}</span>\\n              <div class=\\\"alm-card-right\\\">\\n                <span class=\\\"sp ${gc(card.grade)}\\\">${SI[card.stat]||''} ${card.grade||''}</span>\\n                ${card.summon_cost\\n                  ? `<span class=\\\"badge\\\" style=\\\"background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090\\\">1\\u20134 PS</span>`\\n                  : `<span class=\\\"badge b-c${Math.min(parseInt(card.cost)||1,3)}\\\">${card.cost}pt</span>`}\\n              </div>\\n            </div>`).join('')}\\n        </div>` : ''}\\n      </div>`;\\n    }).join('')}\\n  </div>\\n  ${rBotNav('consulta')}</div>`;\\n}\\n\\n// \\u2500\\u2500 Shared NPC row (session + consulta) \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rNpcRow(npc, st, exp, ctx){\\n  const w=wounds(npc.id), pf=npc.pf_max||1;\\n  const chip = st==='sano'  ? '' :\\n    st==='indebolito' ? `<span class=\\\"chip chip-indebolito\\\">\\u26a0 Indebolito</span>` :\\n    st==='fuori'      ? `<span class=\\\"chip chip-fuori\\\">\\u2715 Fuori</span>` :\\n                        `<span class=\\\"chip chip-morto\\\">\\u2620 Morto</span>`;\\n  const fb = initials(npc.name).replace(/'/g,\\\"\\\\\\\\'\\\");\\n  const toggleAction = ctx==='consulta' ? 'toggle-consulta' : 'toggle-npc';\\n\\n  return `\\n    <div class=\\\"nr-hdr\\\" data-action=\\\"${toggleAction}\\\" data-npc=\\\"${npc.id}\\\">\\n      <div class=\\\"nr-avatar\\\">\\n        ${npc.image_url\\n          ?`<img src=\\\"${npc.image_url}\\\" alt=\\\"${npc.name}\\\" onerror=\\\"this.parentElement.innerHTML='${fb}'\\\">`\\n          :initials(npc.name)}\\n      </div>\\n      <div class=\\\"nr-info\\\">\\n        <div class=\\\"nr-row1\\\">\\n          ${npc.star?'<span class=\\\"nr-star\\\">\\u2605</span>':''}\\n          <span class=\\\"nr-name\\\">${npc.name}</span>\\n          ${chip}\\n        </div>\\n        <div class=\\\"nr-row2\\\">\\n          <span class=\\\"ca-badge\\\">CA ${npc.ca||'?'}</span>\\n          ${rTS(npc)}\\n        </div>\\n      </div>\\n      <button class=\\\"info-btn\\\" data-action=\\\"open-info\\\" data-npc=\\\"${npc.id}\\\" data-stop>\\u2139</button>\\n    </div>\\n    <div class=\\\"nr-expand-btn\\\" data-action=\\\"${toggleAction}\\\" data-npc=\\\"${npc.id}\\\">\\n      ${exp?'\\u25b2':'\\u25bc'}\\n    </div>`;\\n}\\n\\n// \\u2500\\u2500 Card items grid (session + consulta) \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rCardItems(npc, readonly=false){\\n  const cards=npcCards(npc.id), bl=blocked(npc);\\n  const isSummon = npc.summoned;\\n  const summon = isSummon ? S.session?.summons?.[npc.id] : null;\\n\\n  // Barra superiore: ferite per normali, pallini blu per summon\\n  let topBar = '';\\n  if(isSummon){\\n    const pool=summon?.pool||0, maxPool=summon?.maxPool||0;\\n    const spDots=Array.from({length:maxPool},(_,i)=>\\n      `<span class=\\\"wd\\\" style=\\\"background:${i<pool?'#4a8fe0':'var(--surf3)'};border:${i<pool?'none':'1px solid var(--bord2)'}\\\"></span>`).join('');\\n    topBar=`<div class=\\\"nr-wound-bar\\\">\\n      <div class=\\\"wounds-row\\\">${spDots}</div>\\n      <button class=\\\"wd-btn\\\" data-action=\\\"add-wound\\\" data-npc=\\\"${npc.id}\\\">+ Ferita</button>\\n    </div>`;\\n  } else {\\n    const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);\\n    const isDead = st==='morto';\\n    const wdots=Array.from({length:pf},(_,i)=>\\n      `<span class=\\\"wd ${i<w?'wd-on':'wd-off'}\\\"></span>`).join('');\\n    topBar=`<div class=\\\"nr-wound-bar\\\">\\n      <div class=\\\"wounds-row\\\">${wdots}</div>\\n      ${!isDead\\n        ? `<button class=\\\"wd-btn\\\" data-action=\\\"add-wound\\\" data-npc=\\\"${npc.id}\\\">+ Ferita</button>`\\n        : `<span style=\\\"font-size:12px;color:var(--muted);padding:0 8px\\\">Morto</span>`}\\n    </div>`;\\n  }\\n\\n  if(!cards.length) return topBar+'<div style=\\\"padding:10px;font-size:13px;color:var(--muted)\\\">Nessuna carta</div>';\\n  const items = cards.map(card=>{\\n    const cost=parseInt(card.cost)||1;\\n    const free=!readonly && isFree(npc,card);\\n    const used=timesUsed(npc.id,card.title);\\n    const canAfford = card.summon_cost\\n      ? (summon?.pool||0)>0\\n      : free||(S.session?.pool>=cost);\\n    let costHtml, extra='';\\n    if(card.summon_cost){\\n      const maxPs = summon?.maxPool||4;\\n      const avail = summon?.pool||0;\\n      costHtml=`<span class=\\\"badge\\\" style=\\\"background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090\\\">1\\u2013${maxPs} PS</span>`;\\n      if(!canAfford) extra='no-pool';\\n    } else if(readonly){\\n      costHtml=`<span class=\\\"badge b-c${Math.min(cost,3)}\\\">${cost}pt</span>`;\\n    } else if(bl){\\n      costHtml=`<span class=\\\"badge b-c1\\\">${cost}pt</span>`; extra='locked';\\n    } else if(free){\\n      costHtml=`<span class=\\\"badge b-free\\\">\\u2605</span>`; extra='star-free';\\n    } else {\\n      costHtml=`<span class=\\\"badge b-c${Math.min(cost,3)}\\\">${cost}pt</span>`;\\n      if(!canAfford) extra='no-pool';\\n    }\\n    const isUsed = !readonly && used>0 && !(npc.star&&cost===1);\\n    const action = readonly ? 'open-card-consulta' : 'open-card';\\n    return `<div class=\\\"card-item${extra?' '+extra:''}${isUsed?' used':''}\\\"\\n      data-action=\\\"${action}\\\" data-npc=\\\"${npc.id}\\\" data-card=\\\"${enc(card.title)}\\\">\\n      <div class=\\\"ci-top\\\">\\n        ${costHtml}\\n        ${isUsed?`<span class=\\\"use-cnt\\\">${used}\\u00d7</span>`:''}\\n      </div>\\n      <div class=\\\"ci-title\\\">${card.title}</div>\\n      <div class=\\\"ci-grade\\\"><span class=\\\"sp ${gc(card.grade)}\\\">${SI[card.stat]||''} ${card.grade||''}</span></div>\\n    </div>`;\\n  }).join('');\\n  return topBar+`<div class=\\\"cards-grid\\\">${items}</div>`;\\n}\\n\\nfunction rDots(pool,max){\\n  if(max>12) return `<span class=\\\"pool-big\\\">${pool}</span>`;\\n  return Array.from({length:max},(_,i)=>`<span class=\\\"pd ${i<pool?'pd-on':'pd-off'}\\\"></span>`).join('');\\n}\\n\\n// \\u2500\\u2500 Card Modal \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rCardModal(){\\n  const {npcId,cardTitle}=S.openCard;\\n  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);\\n  if(!npc||!card) return '';\\n  const isSummonCard = card.summon_cost;\\n  const summon = isSummonCard ? S.session?.summons?.[npcId] : null;\\n  const summonPool = summon?.pool||0;\\n  const cost=parseInt(card.cost)||1, free=isFree(npc,card), eff=effCost(npc,card);\\n  const canAfford = isSummonCard\\n    ? summonPool>0\\n    : free||(S.session?.pool>=cost);\\n  const used=timesUsed(npcId,cardTitle), bl=blocked(npc);\\n  const inSession=!!S.session;\\n  return `<div class=\\\"mod-ov\\\" data-action=\\\"close-modal\\\">\\n  <div class=\\\"mod-sheet\\\" data-stop>\\n    <div class=\\\"mod-img-wrap\\\">\\n      ${npc.image_url\\n        ?`<img class=\\\"mod-img\\\" src=\\\"${npc.image_url}\\\" alt=\\\"${npc.name}\\\">`\\n        :`<div class=\\\"mod-img-ph\\\">${initials(npc.name)}</div>`}\\n    </div>\\n    <div class=\\\"mod-body\\\">\\n      <div class=\\\"mod-npc\\\">${npc.name}${npc.star?' \\u2605':''}</div>\\n      <div class=\\\"mod-title\\\">${card.title}</div>\\n      <div class=\\\"mod-meta\\\">\\n        <span class=\\\"sp ${gc(card.grade)}\\\">${SI[card.stat]||''} ${card.grade||''}</span>\\n        ${!inSession\\n          ? `<span class=\\\"mod-readonly\\\">Sola lettura</span>`\\n          : bl\\n            ? `<span style=\\\"font-size:12px;color:var(--red2)\\\">PNG fuori combattimento</span>`\\n            : isSummonCard\\n              ? `<span class=\\\"mod-cost\\\" style=\\\"color:var(--gold)\\\">${summonPool} ${summon?.pool_name||'PS'} disponibili</span>`\\n              : free\\n                ? `<span class=\\\"mod-free\\\">\\u2605 Prima attivazione gratuita</span>`\\n                : `<span class=\\\"mod-cost\\\">${eff}pt</span>`}\\n      </div>\\n      <div class=\\\"mod-desc\\\">${card.desc||''}</div>\\n      ${card.rule?`<div class=\\\"mod-rule\\\">${card.rule}</div>`:''}\\n      ${card.flavor?`<div class=\\\"mod-flavor\\\">\\\"${card.flavor}\\\"</div>`:''}\\n      ${card.minion?`<div class=\\\"mod-minion\\\">\\u2693 ${card.minion}</div>`:''}\\n      <div class=\\\"mod-actions\\\">\\n        ${inSession&&!bl?`\\n          ${isSummonCard\\n            ? (summonPool>0 ? `\\n              <div class=\\\"summon-slider\\\">\\n                <div class=\\\"summon-slider-ctrl\\\">\\n                  <button class=\\\"step-btn\\\" style=\\\"width:40px;height:40px;font-size:20px\\\"\\n                    data-action=\\\"summon-slider-adj\\\" data-npc=\\\"${npcId}\\\" data-card=\\\"${enc(cardTitle)}\\\" data-d=\\\"-1\\\">\\u2212</button>\\n                  <span class=\\\"summon-slider-val\\\" id=\\\"sslider-val\\\">${S.openCard.sliderVal||1}</span>\\n                  <button class=\\\"step-btn\\\" style=\\\"width:40px;height:40px;font-size:20px\\\"\\n                    data-action=\\\"summon-slider-adj\\\" data-npc=\\\"${npcId}\\\" data-card=\\\"${enc(cardTitle)}\\\" data-d=\\\"1\\\">+</button>\\n                </div>\\n                <div class=\\\"summon-slider-effect\\\">${getSummonEffect(card, S.openCard.sliderVal||1)}</div>\\n                <button class=\\\"btn btn-g\\\" data-action=\\\"play-summon-card\\\"\\n                  data-npc=\\\"${npcId}\\\" data-card=\\\"${enc(cardTitle)}\\\" data-cost=\\\"${S.openCard.sliderVal||1}\\\">\\n                  Gioca \\u2014 ${S.openCard.sliderVal||1} ${summon?.pool_name||'PS'}\\n                </button>\\n              </div>`\\n            : `<span style=\\\"font-size:13px;color:var(--muted)\\\">Evocazione esaurita</span>`)\\n            : `<button class=\\\"btn btn-g${canAfford?'':' btn-dis'}\\\" data-action=\\\"play-card\\\" data-npc=\\\"${npcId}\\\" data-card=\\\"${enc(cardTitle)}\\\">\\n                ${free?'\\u2605 Attiva gratis':`Gioca (${eff}pt)`}\\n              </button>\\n              ${used?`<button class=\\\"btn btn-s\\\" data-action=\\\"undo-card\\\" data-npc=\\\"${npcId}\\\" data-card=\\\"${enc(cardTitle)}\\\">\\u21a9 Annulla ultima</button>`:''}`\\n          }\\n        `:''}\\n        <button class=\\\"btn btn-gh\\\" data-action=\\\"close-modal\\\">Chiudi</button>\\n      </div>\\n    </div>\\n  </div></div>`;\\n}\\n\\n// \\u2500\\u2500 Info Modal \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rInfoModal(){\\n  const npc=npcById(S.openInfo); if(!npc) return '';\\n  const isSummon = npc.summoned && S.session?.summons?.[npc.id];\\n  const summon = isSummon ? S.session.summons[npc.id] : null;\\n  const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);\\n  const stLabel={sano:'\\ud83d\\udfe2 Sano',indebolito:'\\ud83d\\udfe1 Indebolito',fuori:'\\ud83d\\udd34 Fuori combattimento',morto:'\\u2620\\ufe0f Morto'}[st];\\n  const pool=summon?.pool||0, maxPool=summon?.maxPool||0;\\n  const poolName=summon?.pool_name||'PS';\\n  return `<div class=\\\"mod-ov mod-bottom\\\" data-action=\\\"close-info\\\">\\n  <div class=\\\"mod-sheet mod-sheet-bottom\\\" data-stop>\\n    <div class=\\\"info-img-wrap\\\">\\n      ${npc.image_url\\n        ?`<img class=\\\"info-img\\\" src=\\\"${npc.image_url}\\\" alt=\\\"${npc.name}\\\">`\\n        :`<div class=\\\"info-img-ph\\\" style=\\\"${isSummon?'color:var(--gold)':''}\\\">${isSummon?'\\u2726':initials(npc.name)}</div>`}\\n    </div>\\n    <div class=\\\"info-body\\\">\\n      <div class=\\\"info-name\\\" style=\\\"${isSummon?'color:var(--gold)':''}\\\">${npc.name}</div>\\n      <div class=\\\"info-cls\\\">${npc.classe||''}</div>\\n      <div class=\\\"info-row\\\">\\n        <span class=\\\"ca-badge\\\" style=\\\"font-size:13px;padding:4px 10px\\\">CA ${npc.ca||'?'}</span>\\n        ${isSummon\\n          ? `<span style=\\\"font-size:13px;color:#4a8fe0\\\">\\u2726 Evocazione attiva</span>`\\n          : `<span style=\\\"font-size:13px;color:var(--muted)\\\">${stLabel}</span>`}\\n      </div>\\n      <div class=\\\"info-section\\\">\\n        <div class=\\\"info-lbl\\\">Tiri Salvezza</div>\\n        <div style=\\\"display:flex;gap:6px;flex-wrap:wrap\\\">${rTS(npc,true)}</div>\\n      </div>\\n      <div class=\\\"info-section\\\">\\n        ${isSummon\\n          ? `<div class=\\\"info-lbl\\\">${poolName} \\u2014 ${pool}/${maxPool}</div>\\n             <div class=\\\"wounds-ctrl\\\">\\n               <button class=\\\"step-btn\\\" data-action=\\\"adj-summon-pool\\\" data-npc=\\\"${npc.id}\\\" data-d=\\\"-1\\\">\\u2212</button>\\n               <div class=\\\"wounds-dots-lg\\\">\\n                 ${Array.from({length:maxPool},(_,i)=>`<span class=\\\"wd-lg ${i<pool?'':'wd-lg-off'}\\\" style=\\\"${i<pool?'background:#4a8fe0':''}\\\"></span>`).join('')}\\n               </div>\\n               <button class=\\\"step-btn\\\" data-action=\\\"adj-summon-pool\\\" data-npc=\\\"${npc.id}\\\" data-d=\\\"1\\\">+</button>\\n             </div>`\\n          : `<div class=\\\"info-lbl\\\">Ferite \\u2014 ${w}/${pf}</div>\\n             <div class=\\\"wounds-ctrl\\\">\\n               <button class=\\\"step-btn\\\" data-action=\\\"remove-wound-info\\\" data-npc=\\\"${npc.id}\\\">\\u2212</button>\\n               <div class=\\\"wounds-dots-lg\\\">\\n                 ${Array.from({length:pf},(_,i)=>`<span class=\\\"wd-lg ${i<w?'wd-lg-on':'wd-lg-off'}\\\"></span>`).join('')}\\n               </div>\\n               <button class=\\\"step-btn\\\" data-action=\\\"add-wound-info\\\" data-npc=\\\"${npc.id}\\\">+</button>\\n             </div>`}\\n      </div>\\n      <div class=\\\"info-stat-grid\\\">\\n        ${SK.map(k=>`<div class=\\\"info-stat\\\">\\n          <span class=\\\"info-stat-icon\\\">${SI[k]}</span>\\n          <span class=\\\"info-stat-grade ${gc(npc[k])}\\\">${npc[k]||'D'}</span>\\n          <span class=\\\"info-stat-name\\\">${SN[k]}</span>\\n        </div>`).join('')}\\n      </div>\\n      <button class=\\\"btn btn-gh\\\" data-action=\\\"close-info\\\">Chiudi</button>\\n    </div>\\n  </div></div>`;\\n}\\n\\n// \\u2500\\u2500 Minion Rules \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rMinion(){\\n  const rules=[\\n    ['Colpire un minion',\\n     'Qualsiasi colpo andato a segno elimina il minion dalla battaglia corrente e gli infligge 1 ferita. Non importa l\\\\'entit\\u00e0 del danno: anche un colpo minimo \\u00e8 sufficiente.'],\\n    ['Punti ferita (PF)',\\n     'Ogni minion ha un numero di PF pari a 1 base pi\\u00f9 1 ogni 5 livelli. Quando le ferite accumulate raggiungono il massimo, il minion muore in modo permanente e non pu\\u00f2 essere resuscitato normalmente.'],\\n    ['Minion non stellati',\\n     'Ricevono 1 ferita \\u2192 vengono messi fuori combattimento. Le loro carte diventano inaccessibili e la scheda appare in grigio.'],\\n    ['Minion stellati \\u2605',\\n     'Ricevono 1 ferita \\u2192 diventano Indeboliti. Le carte funzionano normalmente ma il prossimo colpo li metter\\u00e0 fuori combattimento. Con 2 ferite totali \\u2192 fuori combattimento.'],\\n    ['Fuori combattimento',\\n     'Il personaggio non pu\\u00f2 usare carte n\\u00e9 partecipare attivamente al combattimento. Rimane presente in gioco ma inattivo fino a guarigione.'],\\n    ['Morte permanente',\\n     'Quando le ferite raggiungono il massimo, il personaggio muore. Rimane visibile nel mazzo con lo stato \\\"Morto\\\" come promemoria. Una resurrezione straordinaria \\u00e8 tecnicamente possibile ma richiede circostanze narrative eccezionali.'],\\n    ['Guarire una ferita',\\n     'Ogni ferita richiede una piccola quest dedicata per essere rimossa. Il DM gestisce la guarigione fuori dall\\\\'app e la registra manualmente nel pannello \\u2139 del personaggio.'],\\n    ['Proteggere un minion',\\n     'Un giocatore pu\\u00f2 dichiarare di interporsi tra un minion e un attacco in arrivo, prima che venga risolto. Il personaggio subisce l\\\\'attacco al posto del minion: tutti i danni e gli effetti si applicano al personaggio che protegge, come se l\\\\'attacco fosse stato diretto a lui. Costa 1 punto carta.'],\\n    ['Tiri salvezza',\\n     'I minion non tirano i dadi per i TS. Un TS classificato come Forte viene superato automaticamente. Un TS classificato come Debole viene fallito automaticamente. Non esistono altri TS intermedi per i minion.'],\\n  ];\\n  const summonRules=[\\n    ['Evocazioni',\\n     'Alcuni personaggi possono evocare PNG speciali durante il combattimento tramite carte apposite. Le evocazioni appaiono nel mazzo di sessione solo quando attivate.'],\\n    ['PS',\\n     'Le evocazioni non hanno ferite. Al posto delle ferite usano un pool di PS (Punti Summon) (blu). Ogni volta che vengono colpite perdono 1 PS.'],\\n    ['Esaurimento',\\n     'Quando i PS (Punti Summon) raggiungono 0, l\\\\'evocazione sparisce dal mazzo e non pu\\u00f2 essere riattivata finch\\u00e9 non si usa nuovamente la carta di evocazione (se le condizioni lo permettono).'],\\n    ['Carte delle Evocazioni',\\n     'Le carte di un\\\\'evocazione scalano con i PS (Punti Summon) spesi: spendere pi\\u00f9 punti produce effetti pi\\u00f9 potenti. Il costo \\u00e8 scelto al momento dell\\\\'attivazione con il selettore.'],\\n  ];\\n  return `<div class=\\\"mod-ov mod-bottom\\\" data-action=\\\"close-minion\\\">\\n  <div class=\\\"mod-sheet mod-sheet-bottom\\\" data-stop>\\n    <div class=\\\"minion-body\\\">\\n      <div class=\\\"minion-title\\\">\\u2693 Regole Minion</div>\\n      ${rules.map(([t,b])=>`<div class=\\\"mr\\\"><div class=\\\"mr-t\\\">${t}</div><div class=\\\"mr-b\\\">${b}</div></div>`).join('')}\\n      <div class=\\\"minion-title\\\" style=\\\"margin-top:16px\\\">\\u2726 Evocazioni</div>\\n      ${summonRules.map(([t,b])=>`<div class=\\\"mr\\\"><div class=\\\"mr-t\\\">${t}</div><div class=\\\"mr-b\\\">${b}</div></div>`).join('')}\\n      <button class=\\\"btn btn-gh\\\" style=\\\"margin-top:8px\\\" data-action=\\\"close-minion\\\">Chiudi</button>\\n    </div>\\n  </div></div>`;\\n}\\n\\n// \\u2500\\u2500 Session Menu \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rMenu(){\\n  return `<div class=\\\"overlay\\\" data-action=\\\"close-menu\\\">\\n  <div class=\\\"menu-sheet\\\" data-stop>\\n    <button class=\\\"menu-item\\\" data-action=\\\"open-minion\\\">\\ud83d\\udcd6 Regole minion</button>\\n    <hr class=\\\"menu-sep\\\">\\n    <button class=\\\"menu-item\\\" data-action=\\\"reset-session\\\">\\ud83d\\udd04 Azzera carte usate + pool</button>\\n    <button class=\\\"menu-item\\\" data-action=\\\"end-session\\\">\\u2715 Termina sessione</button>\\n    <hr class=\\\"menu-sep\\\">\\n    <button class=\\\"menu-item menu-cancel\\\" data-action=\\\"close-menu\\\">Annulla</button>\\n  </div></div>`;\\n}\\n\\n// \\u2500\\u2500 Dialog \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rDialog(){\\n  const{title,msg,confirmLabel,danger,confirmAction,cancelLabel,cancelAction}=S.dialog;\\n  return `<div class=\\\"dlg-ov\\\">\\n  <div class=\\\"dlg-box\\\" data-stop>\\n    <div class=\\\"dlg-title\\\">${title}</div>\\n    <div class=\\\"dlg-msg\\\">${msg}</div>\\n    <div class=\\\"dlg-btns\\\">\\n      ${confirmLabel?`<button class=\\\"btn ${danger?'btn-d':'btn-g'}\\\" data-action=\\\"${confirmAction}\\\">${confirmLabel}</button>`:''}\\n      ${cancelLabel?`<button class=\\\"btn btn-s\\\" data-action=\\\"${cancelAction}\\\">${cancelLabel}</button>`:''}\\n      <button class=\\\"btn btn-gh\\\" data-action=\\\"close-dialog\\\">Annulla</button>\\n    </div>\\n  </div></div>`;\\n}\\n\\n// \\u2500\\u2500 Settings \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\nfunction rSettings(){\\n  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT'):'\\u2014';\\n  const hasToken=!!(S.ghToken);\\n  return `<div class=\\\"view\\\">\\n  <div class=\\\"hdr\\\"><span class=\\\"hdr-title\\\">\\u2699\\ufe0f Impostazioni</span></div>\\n  <div class=\\\"settings-body\\\">\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\ud83d\\udd11 GitHub</div>\\n      <div class=\\\"fld\\\">\\n        <label>Personal Access Token</label>\\n        <input id=\\\"gh-token\\\" type=\\\"password\\\" value=\\\"${S.ghToken||''}\\\"\\n          placeholder=\\\"ghp_xxxxxxxxxxxxxxxxxxxx\\\"\\n          autocomplete=\\\"off\\\" spellcheck=\\\"false\\\">\\n        <span style=\\\"font-size:11px;color:var(--muted);margin-top:4px;display:block\\\">\\n          Salvato solo su questo dispositivo. Scope richiesto: <code>repo</code>\\n        </span>\\n      </div>\\n      <button class=\\\"btn btn-g\\\" data-action=\\\"save-token\\\">Salva token</button>\\n    </div>\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\ud83d\\ude80 Push su GitHub</div>\\n      <div style=\\\"font-size:12px;color:var(--muted);margin-bottom:10px\\\">\\n        BitNineStudio-Leo \\u00b7 branch main\\n      </div>\\n      <button class=\\\"btn btn-g${hasToken?'':' btn-dis'}\\\" data-action=\\\"push-app\\\"\\n        ${hasToken?'':'title=\\\"Inserisci prima il token\\\"'}>\\n        \\ud83d\\udce6 Push app \\u2192 CiurmaPolloDiablo\\n      </button>\\n      <button class=\\\"btn btn-g${hasToken?'':' btn-dis'}\\\" data-action=\\\"push-data\\\"\\n        ${hasToken?'':'title=\\\"Inserisci prima il token\\\"'}>\\n        \\ud83d\\udcc4 Push data \\u2192 CiurmaData\\n      </button>\\n      <div id=\\\"push-status\\\" style=\\\"font-size:12px;color:var(--muted);min-height:18px\\\"></div>\\n    </div>\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\ud83d\\udd04 Sincronizzazione dati</div>\\n      <div class=\\\"fld\\\">\\n        <label>URL GitHub raw (data.json)</label>\\n        <input id=\\\"rawurl\\\" type=\\\"url\\\" value=\\\"${S.rawUrl}\\\"\\n          placeholder=\\\"https://raw.githubusercontent.com/BitNineStudio-Leo/CiurmaData/main/data.json\\\">\\n      </div>\\n      <button class=\\\"btn btn-g\\\" data-action=\\\"save-url\\\">Salva e sincronizza</button>\\n      <div class=\\\"sync-info\\\">Ultimo sync: ${syncTxt}</div>\\n      <button class=\\\"btn btn-s\\\" data-action=\\\"sync\\\">\\ud83d\\udd04 Risincronizza adesso</button>\\n    </div>\\n\\n    <div class=\\\"settings-section\\\">\\n      <div class=\\\"settings-section-title\\\">\\u26a0\\ufe0f Dati</div>\\n      <button class=\\\"btn btn-d\\\" data-action=\\\"clear-data\\\">\\ud83d\\uddd1 Ripristina dati integrati</button>\\n    </div>\\n\\n  </div>\\n  ${rBotNav('settings')}</div>`;\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// EVENTS\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\ndocument.addEventListener('click',e=>{\\n  const el=e.target.closest('[data-action]');\\n  if(!el) return;\\n  const{action,view,d,npc,card}=el.dataset;\\n  switch(action){\\n    case 'goto':             S.view=view; render(); break;\\n    case 'sync':             syncGithub(); break;\\n    case 'open-builder':     S.builderDeck=[...S.deck]; S.view='builder'; render(); break;\\n    case 'cancel-builder':   S.builderDeck=null; S.view='home'; render(); break;\\n    case 'confirm-builder':\\n      S.deck=[...(S.builderDeck||[])]; LS.s('deck',S.deck);\\n      S.builderDeck=null; S.view='home'; render(); break;\\n    case 'toggle-npc':\\n      if(S.view==='builder'){\\n        const bd=S.builderDeck||[], i=bd.indexOf(npc);\\n        i>=0?bd.splice(i,1):bd.push(npc); S.builderDeck=[...bd]; render();\\n      }else{ S.expanded[npc]=!S.expanded[npc]; render(); }\\n      break;\\n    case 'toggle-consulta':      S.consultaExp[npc]=!S.consultaExp[npc]; render(); break;\\n    case 'consulta-tab':         S.consultaTab=el.dataset.tab; render(); break;\\n    case 'open-card':\\n    case 'open-card-consulta':   S.openCard={npcId:npc,cardTitle:dec(card)}; render(); break;\\n    case 'adj-max':              adjMax(parseInt(d)); break;\\n    case 'start-session':        if(S.deck.length) startSession(); break;\\n    case 'adj-pool':             adjPool(parseInt(d)); break;\\n    case 'open-menu':            S.menuOpen=true; render(); break;\\n    case 'close-menu':           S.menuOpen=false; render(); break;\\n    case 'open-minion':          S.menuOpen=false; S.minionOpen=true; render(); break;\\n    case 'open-minion-nav':      S.minionOpen=true; render(); break;\\n    case 'close-minion':         S.minionOpen=false; render(); break;\\n    case 'reset-session':        resetSession(); break;\\n    case 'end-session':          endSession(); break;\\n    case 'do-end':\\n      S.dialog=null; S.session=null; LS.s('session',null); S.view='home'; render(); break;\\n    case 'do-reset':\\n      S.dialog=null;\\n      if(S.session){S.session.used={}; S.session.pool=S.session.maxPool; LS.s('session',S.session);}\\n      render(); break;\\n    case 'close-dialog':         S.dialog=null; render(); break;\\n    case 'close-modal':          S.openCard=null; render(); break;\\n    case 'play-card':            playCard(npc,dec(card)); break;\\n    case 'undo-card':            undoCard(npc,dec(card)); break;\\n\\n    // Slider punti evocazione nel modal\\n    case 'summon-slider-adj': {\\n      if(!S.openCard) break;\\n      const summon=S.session?.summons?.[npc];\\n      const maxVal=summon?.pool||1;\\n      const cur=S.openCard.sliderVal||1;\\n      S.openCard.sliderVal=Math.max(1,Math.min(maxVal,cur+parseInt(el.dataset.d||0)));\\n      render(); break;\\n    }\\n\\n    // Carta con costo evocazione variabile\\n    case 'play-summon-card': {\\n      const cost=parseInt(el.dataset.cost)||1;\\n      const c=npcCards(npc).find(x=>x.title===dec(card));\\n      const summon=S.session?.summons?.[npc];\\n      if(!summon||summon.pool<cost){toast('Punti evocazione insufficienti!',true);break;}\\n      summon.pool-=cost;\\n      S.session.used[cKey(npc,dec(card))]=(S.session.used[cKey(npc,dec(card))]||0)+1;\\n      // Se pool a 0, rimuovi dal summonDeck\\n      if(summon.pool<=0){\\n        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);\\n        toast(`\\u2726 Le Ombre si dissolvono`, true);\\n      } else {\\n        toast(`\\u2726 ${dec(card)} \\u2014 ${cost} ${summon.pool_name||'PS'} (rimasti: ${summon.pool})`);\\n      }\\n      LS.s('session',S.session); S.openCard=null; render(); break;\\n    }\\n\\n    // disable_if ask \\u2014 confermato: applica e disabilita il caster\\n    case 'play-card-disable': {\\n      const dlg=S.dialog; S.dialog=null;\\n      if(!dlg) break;\\n      const {pendingNpc,pendingCard}=dlg;\\n      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);\\n      if(!pnpc||!pcard) break;\\n      const cost=effCost(pnpc,pcard);\\n      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}\\n      S.session.pool-=cost;\\n      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;\\n      S.session.disabledBy[pendingNpc]=true;\\n      LS.s('session',S.session); S.openCard=null;\\n      toast(`${pnpc.name} esce dal combattimento`); render(); break;\\n    }\\n\\n    // disable_if ask \\u2014 annullato: carta normale senza effetto disable\\n    case 'play-card-normal': {\\n      const dlg=S.dialog; S.dialog=null;\\n      if(!dlg) break;\\n      const {pendingNpc,pendingCard}=dlg;\\n      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);\\n      if(!pnpc||!pcard) break;\\n      const cost=effCost(pnpc,pcard);\\n      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}\\n      S.session.pool-=cost;\\n      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;\\n      LS.s('session',S.session); S.openCard=null;\\n      toast(`${pendingCard} \\u2014 ${cost}pt`); render(); break;\\n    }\\n\\n    // Aggiusta pool evocazione manualmente\\n    case 'adj-summon-pool': {\\n      const delta=parseInt(el.dataset.d)||0;\\n      const summon=S.session?.summons?.[npc];\\n      if(!summon) break;\\n      summon.pool=Math.max(0,Math.min(summon.maxPool,summon.pool+delta));\\n      if(summon.pool<=0){\\n        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);\\n        toast('\\u2726 Evocazione esaurita');\\n      }\\n      LS.s('session',S.session); render(); break;\\n    }\\n\\n    case 'add-wound':\\n    case 'add-wound-info':       addWound(npc); break;\\n    case 'remove-wound-info':    removeWound(npc); break;\\n    case 'open-info':            S.openInfo=npc; render(); break;\\n    case 'close-info':           S.openInfo=null; render(); break;\\n    case 'save-url':             saveUrl(); break;\\n    case 'save-token':           saveToken(); break;\\n    case 'push-app':             pushApp(); break;\\n    case 'push-data':            pushData(); break;\\n    case 'clear-data':\\n      S.dialog={title:'Ripristina dati',msg:'I dati GitHub verranno rimossi e si torner\\u00e0 ai dati integrati.',confirmLabel:'Ripristina',danger:true,confirmAction:'do-clear'};\\n      render(); break;\\n    case 'do-clear':\\n      S.dialog=null;\\n      ['npcs','cards','rawUrl','syncTime'].forEach(k=>localStorage.removeItem(k));\\n      S.npcs=BUNDLED_NPCS; S.cards=BUNDLED_CARDS; S.rawUrl=''; S.syncTime=null; render(); break;\\n  }\\n});\\n\\ndocument.addEventListener('click',e=>{\\n  if(e.target.classList.contains('mod-ov')){S.openCard=null;S.openInfo=null;S.minionOpen=false;render();}\\n  if(e.target.classList.contains('overlay')){S.menuOpen=false;render();}\\n});\\n\\nfunction saveUrl(){\\n  const inp=document.getElementById('rawurl'); if(!inp) return;\\n  const url=inp.value.trim();\\n  if(!url.startsWith('http')){toast('URL non valido',true);return;}\\n  S.rawUrl=url; LS.s('rawUrl',url); syncGithub();\\n}\\n\\nfunction saveToken(){\\n  const inp=document.getElementById('gh-token'); if(!inp) return;\\n  const t=inp.value.trim();\\n  S.ghToken=t; LS.s('ghToken',t);\\n  toast(t?'Token salvato \\u2713':'Token rimosso'); render();\\n}\\n\\nasync function ghPush(repo, filePath, content, commitMsg){\\n  const token=S.ghToken;\\n  if(!token){toast('Token mancante!',true);return false;}\\n  const owner='BitNineStudio-Leo';\\n  const apiBase=`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;\\n  const headers={'Authorization':`token ${token}`,'Content-Type':'application/json','Accept':'application/vnd.github.v3+json'};\\n\\n  // Recupera SHA attuale del file (necessario per update)\\n  let sha=null;\\n  try{\\n    const r=await fetch(apiBase,{headers});\\n    if(r.ok){ const j=await r.json(); sha=j.sha; }\\n  }catch(e){}\\n\\n  const body={message:commitMsg,content:btoa(unescape(encodeURIComponent(content))),branch:'main'};\\n  if(sha) body.sha=sha;\\n\\n  const res=await fetch(apiBase,{method:'PUT',headers,body:JSON.stringify(body)});\\n  return res.ok;\\n}\\n\\nasync function pushApp(){\\n  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}\\n  setPushStatus('\\u23f3 Push app in corso...');\\n  toast('\\u23f3 Invio in corso...');\\n  try{\\n    const ok=await ghPush('CiurmaPolloDiablo','index.html',STANDALONE_HTML,'Update app v10 da dispositivo');\\n    if(ok){ setPushStatus('\\u2705 App caricata!'); toast('\\u2705 CiurmaPolloDiablo aggiornato!'); }\\n    else  { setPushStatus('\\u274c Errore push'); toast('Errore push \\u2014 verifica token e permessi',true); }\\n  }catch(e){ setPushStatus('\\u274c '+e.message); toast('Errore: '+e.message,true); }\\n}\\n\\nasync function pushData(){\\n  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}\\n  setPushStatus('\\u23f3 Push data in corso...');\\n  try{\\n    const json=JSON.stringify({npcs:S.npcs,cards:S.cards},null,2);\\n    const ok=await ghPush('CiurmaData','data.json',json,'Update data.json da dispositivo');\\n    if(ok){ setPushStatus('\\u2705 Data caricato!'); toast('\\u2705 CiurmaData aggiornato!'); }\\n    else  { setPushStatus('\\u274c Errore push'); toast('Errore push \\u2014 verifica token e permessi',true); }\\n  }catch(e){ setPushStatus('\\u274c '+e.message); toast('Errore: '+e.message,true); }\\n}\\n\\nfunction setPushStatus(msg){\\n  const el=document.getElementById('push-status');\\n  if(el) el.textContent=msg;\\n}\\n\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\n// INIT\\n// \\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\u2550\\nif('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});\\n// Se c'\\u00e8 una sessione attiva al caricamento, va direttamente in sessione\\nif(S.session) S.view='session';\\nrender();\\n\\n</script>\\n</body>\\n</html>\\n\"");
const enc      = s => encodeURIComponent(s||'');
const dec      = s => {try{return decodeURIComponent(s||'')}catch{return s||''}};
const gc       = g  => \`g-\${(g||'d').toLowerCase()}\`;
const initials = n  => (n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();

function wounds(id){ return S.wounds[id]||0; }

// Ferite subite durante la sessione corrente (0 se nessuna sessione attiva)
function sessionWounds(id){
  if(!S.session) return wounds(id);
  const atStart = S.session.woundsAtStart?.[id] || 0;
  return Math.max(0, wounds(id) - atStart);
}

function status(npc){
  const w = wounds(npc.id), pf = npc.pf_max||1;
  if(w >= pf) return 'morto';
  // Fuori per carta (disable_if)
  if(S.session?.disabledBy?.[npc.id]) return 'fuori';
  // In sessione: stato basato sulle ferite subite durante la sessione
  const sw = S.session ? sessionWounds(npc.id) : w;
  if(npc.star){ if(sw >= 2) return 'fuori'; if(sw === 1) return 'indebolito'; }
  else         { if(sw >= 1) return 'fuori'; }
  return 'sano';
}
const blocked  = npc => {
  if(npc.summoned){
    const summon=S.session?.summons?.[npc.id];
    return !summon || summon.pool<=0;
  }
  const s=status(npc); return s==='fuori'||s==='morto';
};
const isFree   = (npc,card) => npc?.star && parseInt(card.cost)===1 && timesUsed(npc.id,card.title)===0;
const effCost  = (npc,card) => isFree(npc,card)?0:parseInt(card.cost)||1;
const timesUsed= (nId,t) => (S.session?.used||{})[cKey(nId,t)]||0;

// Render TS sempre in ordine fisso Tempra → Riflessi → Volontà
const TS_ABBR = {'Tempra':'Tmp','Riflessi':'Rif','Volontà':'Vol'};
function rTS(npc, large=false) {
  const ORDER = ['Tempra','Riflessi','Volontà'];
  const forte  = new Set(npc.ts_forte||[]);
  const debole = new Set(npc.ts_debole||[]);
  const sz = large ? 'font-size:12px;padding:3px 10px' : '';
  const lbl = large ? t => t : t => TS_ABBR[t]||t;
  return ORDER.map(t => {
    if (forte.has(t))  return \`<span class="ts-pill ts-forte"  style="\${sz}">\${lbl(t)}✓</span>\`;
    if (debole.has(t)) return \`<span class="ts-pill ts-debole" style="\${sz}">\${lbl(t)}✕</span>\`;
    return '';
  }).join('');
}

// ══════════════════════════════════════════════════
// SYNC
// ══════════════════════════════════════════════════
async function syncGithub(){
  if(!S.rawUrl){toast('URL GitHub non configurato',true);return;}
  S.loading=true; S.error=null; render();
  try{
    const r=await fetch(S.rawUrl+'?t='+Date.now());
    if(!r.ok) throw new Error('HTTP '+r.status);
    const data=await r.json();
    if(!data.npcs?.length) throw new Error('"npcs" mancante o vuoto');
    if(!data.cards?.length) throw new Error('"cards" mancante o vuoto');
    S.npcs  = data.npcs.map(n=>({...n, star:['true','TRUE','1',true].includes(n.star), pf_max:parseInt(n.pf_max)||1}));
    S.cards = data.cards.map(c=>({...c, cost:parseInt(c.cost)||1}));
    S.syncTime = new Date().toISOString();
    LS.s('npcs',S.npcs); LS.s('cards',S.cards); LS.s('syncTime',S.syncTime);
    toast(\`✓ \${S.npcs.length} PNG · \${S.cards.length} carte\`);
  }catch(e){
    S.error=e.message; toast('Errore: '+e.message,true);
  }finally{
    S.loading=false; render();
  }
}

// ══════════════════════════════════════════════════
// ACTIONS
// ══════════════════════════════════════════════════
function startSession(){
  // Rimuovi dal mazzo PNG che non esistono più nel JSON
  S.deck = S.deck.filter(id => npcById(id));
  if(S.deck.length === 0){ toast('Nessun PNG valido nel mazzo!', true); return; }
  LS.s('deck', S.deck);
  // Snapshot ferite iniziali di ogni PNG nel mazzo
  const woundsAtStart = {};
  S.deck.forEach(id => { woundsAtStart[id] = wounds(id); });
  S.session={pool:S.maxPool, maxPool:S.maxPool, used:{}, woundsAtStart,
    disabledBy:{},
    summons:{},
    summonDeck:[]
  };
  LS.s('session',S.session);
  S.view='session'; S.expanded={}; render();
}
function endSession(){
  S.menuOpen=false;
  S.dialog={title:'Termina sessione',msg:'Le carte usate verranno azzerate. Le ferite persistono tra le sessioni.',confirmLabel:'Termina',danger:true,confirmAction:'do-end'};
  render();
}
function resetSession(){
  S.menuOpen=false;
  S.dialog={title:'Azzera sessione',msg:'Carte usate e pool verranno ripristinati. Le ferite persistono.',confirmLabel:'Azzera',danger:false,confirmAction:'do-reset'};
  render();
}
function adjPool(d){
  if(!S.session) return;
  S.session.pool=Math.max(0,Math.min(S.session.maxPool*2,S.session.pool+d));
  LS.s('session',S.session); render();
}
function adjMax(d){
  S.maxPool=Math.max(1,Math.min(20,S.maxPool+d));
  LS.s('maxPool',S.maxPool); render();
}
function playCard(npcId,cardTitle){
  if(!S.session) return;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return;
  if(blocked(npc)){toast('PNG fuori combattimento!',true);return;}

  // Carte ombre — usano summon pool invece del pool globale
  const isSummonCard = card.summon_cost;
  if(isSummonCard){
    const summon = S.session.summons?.[npcId];
    if(!summon||summon.pool<=0){toast('Punti evocazione esauriti!',true);return;}
    // Mostra selettore punti — gestito da dialog dedicato
    S.dialog={
      title: card.title,
      msg: \`Quanti \${summon.pool_name||'PS'} vuoi spendere? (1-\${summon.pool})\`,
      confirmLabel: null,
      isSummonCost: true,
      summonNpcId: npcId,
      summonCardTitle: cardTitle,
      summonMax: summon.pool
    };
    render(); return;
  }

  const cost=effCost(npc,card);

  // disable_if: always — fuori combattimento immediato
  if(card.disable_if?.condition==='always'){
    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
    S.session.pool-=cost;
    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
    S.session.disabledBy[npcId]=true;
    LS.s('session',S.session); S.openCard=null;
    toast(\`\${npc.name} esce dal combattimento\`); render(); return;
  }

  // disable_if: ask — chiede conferma prima
  if(card.disable_if?.condition==='ask'){
    S.dialog={
      title: card.title,
      msg: card.disable_if.prompt||'Confermi effetto speciale?',
      confirmLabel: 'Sì — applica',
      cancelLabel: 'No — effetto normale',
      confirmAction: 'play-card-disable',
      cancelAction: 'play-card-normal',
      pendingNpc: npcId,
      pendingCard: cardTitle
    };
    render(); return;
  }

  // summon: aggiunge PNG evocato al mazzo sessione
  if(card.summon){
    const sId = card.summon.npc_id;
    if(S.session.summonDeck?.includes(sId)){
      toast('Evocazione già attiva!',true); return;
    }
    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
    S.session.pool-=cost;
    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
    if(!S.session.summons) S.session.summons={};
    if(!S.session.summonDeck) S.session.summonDeck=[];
    S.session.summons[sId]={
      pool: card.summon.pool,
      maxPool: card.summon.pool,
      pool_name: card.summon.pool_name||'PS'
    };
    S.session.summonDeck.push(sId);
    LS.s('session',S.session); S.openCard=null;
    const sNpc=npcById(sId);
    toast(\`✦ \${sNpc?.name||sId} evocate!\`); render(); return;
  }

  // Carta normale
  if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
  S.session.pool-=cost;
  S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
  LS.s('session',S.session); S.openCard=null;
  toast(cost===0?\`★ \${cardTitle} — gratuita!\`:\`\${cardTitle} — \${cost}pt\`);
  render();
}
function undoCard(npcId,cardTitle){
  if(!S.session) return;
  const key=cKey(npcId,cardTitle), was=S.session.used[key]||0;
  if(!was) return;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return;
  const wasFree=npc.star&&parseInt(card.cost)===1&&was===1;
  S.session.pool=Math.min(S.session.maxPool,S.session.pool+(wasFree?0:parseInt(card.cost)||1));
  if(was===1) delete S.session.used[key]; else S.session.used[key]=was-1;
  LS.s('session',S.session); S.openCard=null; render();
}
function addWound(npcId){
  const npc=npcById(npcId); if(!npc) return;
  if(npc.summoned && S.session?.summons?.[npcId]){
    const summon=S.session.summons[npcId];
    summon.pool=Math.max(0,summon.pool-1);
    if(summon.pool<=0){
      S.session.summonDeck=(S.session.summonDeck||[]).filter(id=>id!==npcId);
      toast(\`✦ \${npc.name} si dissolvono\`,true);
    } else {
      toast(\`✦ \${npc.name} — \${summon.pool}/\${summon.maxPool} \${summon.pool_name||'PS'}\`);
    }
    flashWound();
    LS.s('session',S.session); render(); return;
  }
  const cur=wounds(npcId);
  if(cur>=npc.pf_max){toast('PNG già al massimo delle ferite!',true);return;}
  S.wounds[npcId]=cur+1; LS.s('wounds',S.wounds);
  flashWound();
  const st=status(npc);
  if(st==='morto')           toast(\`☠ \${npc.name} è morto!\`,true);
  else if(st==='fuori')      { toast(\`✕ \${npc.name} è fuori combattimento\`); shakeNpc(npcId); }
  else if(st==='indebolito') toast(\`⚠ \${npc.name} è indebolito — al prossimo colpo fuori\`);
  render();
}
function flashWound(){
  const el=document.createElement('div');
  el.style.cssText='position:fixed;inset:0;z-index:9999;pointer-events:none;animation:wound-flash .5s ease forwards';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),520);
}
function shakeNpc(npcId){
  setTimeout(()=>{
    const row=document.querySelector(\`[data-npc="\${npcId}"]\`)?.closest('.npc-row');
    if(row){row.style.animation='shake .4s ease';setTimeout(()=>row.style.animation='',420);}
  },50);
}
function removeWound(npcId){
  const cur=wounds(npcId); if(cur<=0) return;
  S.wounds[npcId]=cur-1; LS.s('wounds',S.wounds);
  toast(\`❤ \${npcById(npcId)?.name} guarisce una ferita\`); render();
}
function toast(msg,err=false){
  S.toast={msg,err}; render();
  setTimeout(()=>{S.toast=null;render();},2800);
}

// ══════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════
let _prevOpenCard = null;
let _prevExpanded = {};
let _prevSummonDeck = [];

function render(){
  const scrollEl = document.querySelector('.almanac, .npc-list, .scroll-body, .settings-body');
  const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
  const scrollId  = scrollEl ? (scrollEl.className.split(' ')[0]) : null;

  // Traccia cosa era aperto prima del render
  const wasCardNew   = S.openCard && S.openCard !== _prevOpenCard;
  const prevExpanded = {..._prevExpanded};
  const prevSummons  = [..._prevSummonDeck];

  const views={home:rHome,builder:rBuilder,session:rSession,settings:rSettings,consulta:rConsulta};
  document.getElementById('app').innerHTML=
    (views[S.view]||rHome)()+
    (S.dialog     ? rDialog()    :'')+
    (S.openCard   ? rCardModal() :'')+
    (S.openInfo   ? rInfoModal() :'')+
    (S.minionOpen ? rMinion()    :'')+
    (S.menuOpen   ? rMenu()      :'')+
    (S.toast?\`<div class="toast\${S.toast.err?' toast-err':''}">\${S.toast.msg}</div>\`:'');

  // Anima card modal solo se appena aperto
  if(wasCardNew){
    document.querySelector('.mod-sheet:not(.mod-sheet-bottom)')?.classList.add('anim-card-flip');
  }
  // Anima info/minion modal solo se appena aperto
  if(S.openInfo && !_prevOpenCard){
    document.querySelector('.mod-sheet-bottom')?.classList.add('anim-slide-up');
  }
  // Anima drawer solo se appena espanso (non su ogni re-render)
  Object.keys(S.expanded).forEach(id=>{
    if(S.expanded[id] && !prevExpanded[id]){
      const panel=document.querySelector(\`.npc-row [data-npc="\${id}"] ~ * .cards-panel, .cards-panel\`);
      // Trova il cards-panel del PNG appena espanso
      const row=document.querySelector(\`[data-npc="\${id}"]\`)?.closest('.npc-row, .summon-row');
      row?.querySelector('.cards-panel')?.classList.add('anim-open');
    }
  });
  // Anima summon row solo se appena aggiunto
  (S.session?.summonDeck||[]).forEach(id=>{
    if(!prevSummons.includes(id)){
      document.querySelector(\`.summon-row [data-npc="\${id}"]\`)?.closest('.summon-row')
        ?.classList.add('anim-summon');
    }
  });

  // Aggiorna tracking
  _prevOpenCard = S.openCard;
  _prevExpanded = {...S.expanded};
  _prevSummonDeck = [...(S.session?.summonDeck||[])];

  if(scrollId && !S.openCard && !S.openInfo && !S.dialog && !S.menuOpen && !S.minionOpen){
    const el = document.querySelector('.'+scrollId);
    if(el) el.scrollTop = scrollTop;
  }
}

// ── Summon card effect label ──────────────────────
function getSummonEffect(card, n){
  // Cerca la riga corrispondente a npo nella desc
  const lines = (card.desc||'').split(/[.—]/).map(s=>s.trim()).filter(Boolean);
  const match = lines.find(l=>l.startsWith(\`\${n}ps\`)||l.startsWith(\`\${n} ps\`));
  if(match) return match.replace(/^\\d+\\s*ps:?\\s*/i,'');
  // Fallback: danni per Assalto
  if(card.title.includes('Assalto')) return \`\${n*15} danni\`;
  return \`Effetto \${n}\`;
}

// ── Bottom nav ───────────────────────────────────
function rBotNav(active){
  const sess = S.session;
  return \`<nav class="bot-nav">
    <button class="bot-btn\${active==='home'?' active':''}" data-action="goto" data-view="home">
      <span class="bot-btn-icon">🏠</span>Home
    </button>
    <button class="bot-btn\${active==='consulta'?' active':''}" data-action="goto" data-view="consulta">
      <span class="bot-btn-icon">👥</span>Ciurma
    </button>
    \${sess
      ?\`<button class="bot-btn bot-btn-sess\${active==='session'?' active':''}" data-action="goto" data-view="session">
          <span class="bot-btn-icon">⚔️</span>Sessione
        </button>\`
      :''}
    <button class="bot-btn\${active==='minion'?' active':''}" data-action="open-minion-nav">
      <span class="bot-btn-icon">📖</span>Regole
    </button>
    <button class="bot-btn\${active==='settings'?' active':''}" data-action="goto" data-view="settings">
      <span class="bot-btn-icon">⚙️</span>Opzioni
    </button>
  </nav>\`;
}

// ── Home ────────────────────────────────────────
function rHome(){
  const deckTxt = S.deck.length
    ? S.deck.map(id=>npcById(id)?.name||id).join(', ')
    : null;
  const syncTxt = S.syncTime
    ? new Date(S.syncTime).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})
    : 'Mai';
  const activeCount = S.deck.filter(id=>{ const n=npcById(id); return n&&status(n)==='sano'; }).length;

  return \`<div class="view home-view">
  \${S.loading?'<div class="loading" style="position:absolute;top:0;left:0;right:0;z-index:10">Sincronizzazione...</div>':''}
  \${S.error?\`<div class="err-banner" style="position:absolute;top:0;left:0;right:0;z-index:10">⚠ \${S.error}</div>\`:''}

  <!-- Hero — metà superiore -->
  <div class="home-hero-img">
    <img src="https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2017/05/pirate-ship-wallpapers-1080p.jpg"
      alt="Pollo Diablo" onerror="this.parentElement.classList.add('hero-fallback')">
    <div class="home-hero-overlay">
      <div class="home-hero-title">⚓ Ciurma del<br>Pollo Diablo</div>
    </div>
  </div>

  <!-- Azioni — metà inferiore -->
  <div class="home-actions-panel">
    <!-- Mazzo -->
    <div class="home-deck-row">
      <div class="home-deck-info">
        <span class="home-deck-label">Mazzo</span>
        <span class="home-deck-val">\${S.deck.length ? S.deck.length+' PNG' : '—'}</span>
        \${deckTxt?\`<span class="home-deck-sub">\${deckTxt}</span>\`:''}
      </div>
      <button class="sm-btn" data-action="open-builder">✏️ Modifica</button>
    </div>

    \${S.deck.length ? \`
    <!-- Pool -->
    <div class="home-pool-row">
      <span class="home-deck-label">Pool punti</span>
      <div class="stepper-row" style="margin:0">
        <button class="step-btn" data-action="adj-max" data-d="-1">−</button>
        <span class="stepper-val">\${S.maxPool}</span>
        <button class="step-btn" data-action="adj-max" data-d="1">+</button>
      </div>
    </div>
    <!-- CTA sessione -->
    <button class="btn btn-g btn-lg home-sess-btn" data-action="start-session">⚔ Inizia sessione</button>
    \` : \`<p class="hint-txt" style="margin:12px 0">Aggiungi PNG al mazzo per iniziare.</p>\`}

    <!-- Sync strip -->
    <div class="sync-strip">
      <span>Sync: \${syncTxt} · \${S.npcs.filter(n=>!n.summoned).length} PNG · \${S.cards.length} carte</span>
      \${S.rawUrl
        ?\`<button class="sm-btn" style="margin:0;padding:5px 10px" data-action="sync">🔄</button>\`
        :\`<button class="sm-btn" style="margin:0;padding:5px 10px" data-action="goto" data-view="settings">Configura</button>\`}
    </div>
  </div>

  \${rBotNav('home')}</div>\`;
}

// ── Builder ─────────────────────────────────────
function rBuilder(){
  const bd=S.builderDeck||[];
  return \`<div class="view">
  <div class="hdr">
    <button class="ico-btn" data-action="cancel-builder">←</button>
    <span class="hdr-title">Modifica mazzo</span>
    <button class="confirm-btn" data-action="confirm-builder">✓ Salva (\${bd.length})</button>
  </div>
  <div class="bldr-sub">Tocca un PNG per aggiungerlo o rimuoverlo</div>
  <div class="npc-grid">
    \${S.npcs.filter(npc=>!npc.summoned).map(npc=>{
      const sel=bd.includes(npc.id), w=wounds(npc.id), pf=npc.pf_max||1;
      const st=status(npc);
      return \`<div class="npc-tile\${sel?' sel':''}" data-action="toggle-npc" data-npc="\${npc.id}">
        <div class="tile-img-wrap">
          <div class="tile-name-ov">\${npc.star?'★ ':''}\${npc.name}</div>
          \${npc.image_url?\`<img src="\${npc.image_url}" alt="\${npc.name}" onerror="this.style.display='none'">\`:''}
          \${!npc.image_url?\`<div class="tile-img-ph">\${initials(npc.name)}</div>\`:''}
          \${sel?'<span class="tile-chk-ov">✓</span>':''}
        </div>
      </div>\`;
    }).join('')}
  </div></div>\`;
}

// ── Session ─────────────────────────────────────
function rSession(){
  if(!S.session) return rHome();
  const {pool,maxPool}=S.session;
  const summonDeck = S.session.summonDeck||[];
  return \`<div class="view sess-view">
  <div class="hdr sess-hdr">
    <div class="pool-wrap">
      <div class="pool-dots">\${rDots(pool,maxPool)}</div>
      <div class="pool-txt">\${pool} / \${maxPool} pt</div>
    </div>
    <div class="pool-ctrl">
      <button class="step-btn" style="width:32px;height:32px;font-size:18px" data-action="adj-pool" data-d="-1">−</button>
      <button class="step-btn" style="width:32px;height:32px;font-size:18px" data-action="adj-pool" data-d="1">+</button>
      <button class="end-btn" data-action="end-session">Fine</button>
      <button class="ico-btn" data-action="open-menu">⋮</button>
    </div>
  </div>
  <div class="npc-list">
    \${S.deck.map(id=>{
      const npc=npcById(id); if(!npc) return '';
      const st=status(npc), exp=S.expanded[id];
      return \`<div class="npc-row \${st}">
        \${rNpcRow(npc, st, exp, 'session')}
        \${exp ? \`<div class="cards-panel">\${rCardItems(npc)}</div>\` : ''}
      </div>\`;
    }).join('')}
    \${summonDeck.map(id=>{
      const npc=npcById(id); if(!npc) return '';
      const summon=S.session.summons?.[id];
      const exp=S.expanded[id];
      const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
      const isDead=pool<=0;
      const spDots = Array.from({length:maxPool},(_,i)=>
        \`<span class="sp-dot \${i<pool?'sp-dot-on':'sp-dot-off'}"></span>\`).join('');
      return \`<div class="npc-row summon-row\${isDead?' fuori':''}">
        <div class="nr-hdr" data-action="toggle-npc" data-npc="\${id}">
          <div class="nr-avatar" style="border:1px solid var(--gold)">
            \${npc.image_url
              ?\`<img src="\${npc.image_url}" alt="\${npc.name}">\`
              :\`<span style="font-size:18px;color:var(--gold)">✦</span>\`}
          </div>
          <div class="nr-info">
            <div class="nr-row1">
              <span class="nr-name" style="color:var(--gold)">\${npc.name}</span>
            </div>
            <div class="nr-row2">
              <span class="ca-badge">CA \${npc.ca||'?'}</span>
              \${rTS(npc)}
            </div>
          </div>
          <button class="info-btn" data-action="open-info" data-npc="\${id}" data-stop>ℹ</button>
        </div>
        <div class="nr-expand-btn" data-action="toggle-npc" data-npc="\${id}">
          \${exp?'▲':'▼'}
        </div>
        \${exp&&!isDead ? \`<div class="cards-panel">\${rCardItems(npc, true)}</div>\` : ''}
      </div>\`;
    }).join('')}
  </div>
  \${rBotNav('session')}</div>\`;
}

// ── Consulta — Almanacco ─────────────────────────
function rConsulta(){
  const showSummon = S.consultaTab === 'summon';
  const npcList = showSummon
    ? S.npcs.filter(npc=>npc.summoned)
    : S.npcs.filter(npc=>!npc.summoned);

  return \`<div class="view">
  <div class="hdr"><span class="hdr-title">🪝 Pendagli da forca</span></div>
  <div class="consulta-tabs">
    <button class="ctab\${!showSummon?' ctab-active':''}" data-action="consulta-tab" data-tab="ciurma">👥 Ciurma</button>
    <button class="ctab\${showSummon?' ctab-active':''}" data-action="consulta-tab" data-tab="summon">✦ Evocazioni</button>
  </div>
  <div class="almanac">
    \${npcList.length === 0
      ? \`<div style="padding:30px;text-align:center;color:var(--muted);font-size:14px">\${showSummon?'Nessuna evocazione disponibile':'Nessun PNG'}</div>\`
      : npcList.map(npc=>{
      const exp = S.consultaExp[npc.id];
      const cards = npcCards(npc.id);
      const w = wounds(npc.id), pf = npc.pf_max||1;
      const st = status(npc);
      const wdots = Array.from({length:pf},(_,i)=>
        \`<span class="wd \${i<w?'wd-on':'wd-off'}"></span>\`).join('');
      const statusChip = st==='sano' ? '' :
        st==='indebolito' ? \`<span class="chip chip-indebolito">⚠ Indebolito</span>\` :
        st==='fuori'      ? \`<span class="chip chip-fuori">✕ Fuori</span>\` :
                            \`<span class="chip chip-morto">☠ Morto</span>\`;

      return \`<div class="alm-card\${exp?' alm-open':''}">
        <div class="alm-top">
          <div class="alm-photo-wrap">
            \${npc.image_url
              ? \`<img class="alm-photo" src="\${npc.image_url}" alt="\${npc.name}" onerror="this.style.display='none';this.parentElement.querySelector('.alm-photo-ph').style.display='flex'">\`+
                \`<div class="alm-photo-ph" style="display:none">\${initials(npc.name)}</div>\`
              : \`<div class="alm-photo-ph">\${initials(npc.name)}</div>\`}
          </div>
          <div class="alm-info">
            <div class="alm-name-row">
              \${npc.star?'<span class="alm-star">★</span>':''}
              <span class="alm-name">\${npc.name}</span>
            </div>
            <div class="alm-classe">\${npc.classe||''}</div>
            <div class="alm-stats">
              <span class="ca-badge">CA \${npc.ca||'?'}</span>
              \${rTS(npc)}
            </div>
            <div class="alm-wound-bar">
              \${npc.summoned
                ? Array.from({length:npc.pf_max||4},(_,i)=>\`
                    <span class="alm-wd" style="background:#4a8fe0;cursor:default"></span>\`).join('')
                : Array.from({length:pf},(_,i)=>\`
                    <span class="alm-wd \${i<w?'alm-wd-on':'alm-wd-off'}"
                      data-action="\${i<w?'remove-wound-info':'add-wound'}"
                      data-npc="\${npc.id}"
                      data-stop></span>\`).join('')}
            </div>
          </div>
        </div>
        <div class="alm-stat-row">
          \${SK.map(k=>\`<div class="alm-stat-cell">
            <span class="alm-stat-icon">\${SI[k]}</span>
            <span class="alm-stat-name">\${SN[k]}</span>
            <span class="alm-stat-grade \${gc(npc[k])}">\${npc[k]||'D'}</span>
          </div>\`).join('')}
        </div>
        <button class="alm-cards-btn" data-action="toggle-consulta" data-npc="\${npc.id}">
          \${exp ? '▲ Nascondi carte' : \`▼ Carte (\${cards.length})\`}
        </button>
        \${exp ? \`<div class="alm-cards-drawer">
          \${cards.map(card=>\`
            <div class="alm-card-row" data-action="open-card-consulta" data-npc="\${npc.id}" data-card="\${enc(card.title)}">
              <span class="alm-card-title">\${card.title}</span>
              <div class="alm-card-right">
                <span class="sp \${gc(card.grade)}">\${SI[card.stat]||''} \${card.grade||''}</span>
                \${card.summon_cost
                  ? \`<span class="badge" style="background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090">1–4 PS</span>\`
                  : \`<span class="badge b-c\${Math.min(parseInt(card.cost)||1,3)}">\${card.cost}pt</span>\`}
              </div>
            </div>\`).join('')}
        </div>\` : ''}
      </div>\`;
    }).join('')}
  </div>
  \${rBotNav('consulta')}</div>\`;
}

// ── Shared NPC row (session + consulta) ──────────
function rNpcRow(npc, st, exp, ctx){
  const w=wounds(npc.id), pf=npc.pf_max||1;
  const chip = st==='sano'  ? '' :
    st==='indebolito' ? \`<span class="chip chip-indebolito">⚠ Indebolito</span>\` :
    st==='fuori'      ? \`<span class="chip chip-fuori">✕ Fuori</span>\` :
                        \`<span class="chip chip-morto">☠ Morto</span>\`;
  const fb = initials(npc.name).replace(/'/g,"\\\\'");
  const toggleAction = ctx==='consulta' ? 'toggle-consulta' : 'toggle-npc';

  return \`
    <div class="nr-hdr" data-action="\${toggleAction}" data-npc="\${npc.id}">
      <div class="nr-avatar">
        \${npc.image_url
          ?\`<img src="\${npc.image_url}" alt="\${npc.name}" onerror="this.parentElement.innerHTML='\${fb}'">\`
          :initials(npc.name)}
      </div>
      <div class="nr-info">
        <div class="nr-row1">
          \${npc.star?'<span class="nr-star">★</span>':''}
          <span class="nr-name">\${npc.name}</span>
          \${chip}
        </div>
        <div class="nr-row2">
          <span class="ca-badge">CA \${npc.ca||'?'}</span>
          \${rTS(npc)}
        </div>
      </div>
      <button class="info-btn" data-action="open-info" data-npc="\${npc.id}" data-stop>ℹ</button>
    </div>
    <div class="nr-expand-btn" data-action="\${toggleAction}" data-npc="\${npc.id}">
      \${exp?'▲':'▼'}
    </div>\`;
}

// ── Card items grid (session + consulta) ─────────
function rCardItems(npc, readonly=false){
  const cards=npcCards(npc.id), bl=blocked(npc);
  const isSummon = npc.summoned;
  const summon = isSummon ? S.session?.summons?.[npc.id] : null;

  // Barra superiore: ferite per normali, pallini blu per summon
  let topBar = '';
  if(isSummon){
    const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
    const spDots=Array.from({length:maxPool},(_,i)=>
      \`<span class="wd" style="background:\${i<pool?'#4a8fe0':'var(--surf3)'};border:\${i<pool?'none':'1px solid var(--bord2)'}"></span>\`).join('');
    topBar=\`<div class="nr-wound-bar">
      <div class="wounds-row">\${spDots}</div>
      <button class="wd-btn" data-action="add-wound" data-npc="\${npc.id}">+ Ferita</button>
    </div>\`;
  } else {
    const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
    const isDead = st==='morto';
    const wdots=Array.from({length:pf},(_,i)=>
      \`<span class="wd \${i<w?'wd-on':'wd-off'}"></span>\`).join('');
    topBar=\`<div class="nr-wound-bar">
      <div class="wounds-row">\${wdots}</div>
      \${!isDead
        ? \`<button class="wd-btn" data-action="add-wound" data-npc="\${npc.id}">+ Ferita</button>\`
        : \`<span style="font-size:12px;color:var(--muted);padding:0 8px">Morto</span>\`}
    </div>\`;
  }

  if(!cards.length) return topBar+'<div style="padding:10px;font-size:13px;color:var(--muted)">Nessuna carta</div>';
  const items = cards.map(card=>{
    const cost=parseInt(card.cost)||1;
    const free=!readonly && isFree(npc,card);
    const used=timesUsed(npc.id,card.title);
    const canAfford = card.summon_cost
      ? (summon?.pool||0)>0
      : free||(S.session?.pool>=cost);
    let costHtml, extra='';
    if(card.summon_cost){
      const maxPs = summon?.maxPool||4;
      const avail = summon?.pool||0;
      costHtml=\`<span class="badge" style="background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090">1–\${maxPs} PS</span>\`;
      if(!canAfford) extra='no-pool';
    } else if(readonly){
      costHtml=\`<span class="badge b-c\${Math.min(cost,3)}">\${cost}pt</span>\`;
    } else if(bl){
      costHtml=\`<span class="badge b-c1">\${cost}pt</span>\`; extra='locked';
    } else if(free){
      costHtml=\`<span class="badge b-free">★</span>\`; extra='star-free';
    } else {
      costHtml=\`<span class="badge b-c\${Math.min(cost,3)}">\${cost}pt</span>\`;
      if(!canAfford) extra='no-pool';
    }
    const isUsed = !readonly && used>0 && !(npc.star&&cost===1);
    const action = readonly ? 'open-card-consulta' : 'open-card';
    return \`<div class="card-item\${extra?' '+extra:''}\${isUsed?' used':''}"
      data-action="\${action}" data-npc="\${npc.id}" data-card="\${enc(card.title)}">
      <div class="ci-top">
        \${costHtml}
        \${isUsed?\`<span class="use-cnt">\${used}×</span>\`:''}
      </div>
      <div class="ci-title">\${card.title}</div>
      <div class="ci-grade"><span class="sp \${gc(card.grade)}">\${SI[card.stat]||''} \${card.grade||''}</span></div>
    </div>\`;
  }).join('');
  return topBar+\`<div class="cards-grid">\${items}</div>\`;
}

function rDots(pool,max){
  if(max>12) return \`<span class="pool-big">\${pool}</span>\`;
  return Array.from({length:max},(_,i)=>\`<span class="pd \${i<pool?'pd-on':'pd-off'}"></span>\`).join('');
}

// ── Card Modal ──────────────────────────────────
function rCardModal(){
  const {npcId,cardTitle}=S.openCard;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return '';
  const isSummonCard = card.summon_cost;
  const summon = isSummonCard ? S.session?.summons?.[npcId] : null;
  const summonPool = summon?.pool||0;
  const cost=parseInt(card.cost)||1, free=isFree(npc,card), eff=effCost(npc,card);
  const canAfford = isSummonCard
    ? summonPool>0
    : free||(S.session?.pool>=cost);
  const used=timesUsed(npcId,cardTitle), bl=blocked(npc);
  const inSession=!!S.session;
  return \`<div class="mod-ov" data-action="close-modal">
  <div class="mod-sheet" data-stop>
    <div class="mod-img-wrap">
      \${npc.image_url
        ?\`<img class="mod-img" src="\${npc.image_url}" alt="\${npc.name}">\`
        :\`<div class="mod-img-ph">\${initials(npc.name)}</div>\`}
    </div>
    <div class="mod-body">
      <div class="mod-npc">\${npc.name}\${npc.star?' ★':''}</div>
      <div class="mod-title">\${card.title}</div>
      <div class="mod-meta">
        <span class="sp \${gc(card.grade)}">\${SI[card.stat]||''} \${card.grade||''}</span>
        \${!inSession
          ? \`<span class="mod-readonly">Sola lettura</span>\`
          : bl
            ? \`<span style="font-size:12px;color:var(--red2)">PNG fuori combattimento</span>\`
            : isSummonCard
              ? \`<span class="mod-cost" style="color:var(--gold)">\${summonPool} \${summon?.pool_name||'PS'} disponibili</span>\`
              : free
                ? \`<span class="mod-free">★ Prima attivazione gratuita</span>\`
                : \`<span class="mod-cost">\${eff}pt</span>\`}
      </div>
      <div class="mod-desc">\${card.desc||''}</div>
      \${card.rule?\`<div class="mod-rule">\${card.rule}</div>\`:''}
      \${card.flavor?\`<div class="mod-flavor">"\${card.flavor}"</div>\`:''}
      \${card.minion?\`<div class="mod-minion">⚓ \${card.minion}</div>\`:''}
      <div class="mod-actions">
        \${inSession&&!bl?\`
          \${isSummonCard
            ? (summonPool>0 ? \`
              <div class="summon-slider">
                <div class="summon-slider-ctrl">
                  <button class="step-btn" style="width:40px;height:40px;font-size:20px"
                    data-action="summon-slider-adj" data-npc="\${npcId}" data-card="\${enc(cardTitle)}" data-d="-1">−</button>
                  <span class="summon-slider-val" id="sslider-val">\${S.openCard.sliderVal||1}</span>
                  <button class="step-btn" style="width:40px;height:40px;font-size:20px"
                    data-action="summon-slider-adj" data-npc="\${npcId}" data-card="\${enc(cardTitle)}" data-d="1">+</button>
                </div>
                <div class="summon-slider-effect">\${getSummonEffect(card, S.openCard.sliderVal||1)}</div>
                <button class="btn btn-g" data-action="play-summon-card"
                  data-npc="\${npcId}" data-card="\${enc(cardTitle)}" data-cost="\${S.openCard.sliderVal||1}">
                  Gioca — \${S.openCard.sliderVal||1} \${summon?.pool_name||'PS'}
                </button>
              </div>\`
            : \`<span style="font-size:13px;color:var(--muted)">Evocazione esaurita</span>\`)
            : \`<button class="btn btn-g\${canAfford?'':' btn-dis'}" data-action="play-card" data-npc="\${npcId}" data-card="\${enc(cardTitle)}">
                \${free?'★ Attiva gratis':\`Gioca (\${eff}pt)\`}
              </button>
              \${used?\`<button class="btn btn-s" data-action="undo-card" data-npc="\${npcId}" data-card="\${enc(cardTitle)}">↩ Annulla ultima</button>\`:''}\`
          }
        \`:''}
        <button class="btn btn-gh" data-action="close-modal">Chiudi</button>
      </div>
    </div>
  </div></div>\`;
}

// ── Info Modal ──────────────────────────────────
function rInfoModal(){
  const npc=npcById(S.openInfo); if(!npc) return '';
  const isSummon = npc.summoned && S.session?.summons?.[npc.id];
  const summon = isSummon ? S.session.summons[npc.id] : null;
  const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
  const stLabel={sano:'🟢 Sano',indebolito:'🟡 Indebolito',fuori:'🔴 Fuori combattimento',morto:'☠️ Morto'}[st];
  const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
  const poolName=summon?.pool_name||'PS';
  return \`<div class="mod-ov mod-bottom" data-action="close-info">
  <div class="mod-sheet mod-sheet-bottom" data-stop>
    <div class="info-img-wrap">
      \${npc.image_url
        ?\`<img class="info-img" src="\${npc.image_url}" alt="\${npc.name}">\`
        :\`<div class="info-img-ph" style="\${isSummon?'color:var(--gold)':''}">\${isSummon?'✦':initials(npc.name)}</div>\`}
    </div>
    <div class="info-body">
      <div class="info-name" style="\${isSummon?'color:var(--gold)':''}">\${npc.name}</div>
      <div class="info-cls">\${npc.classe||''}</div>
      <div class="info-row">
        <span class="ca-badge" style="font-size:13px;padding:4px 10px">CA \${npc.ca||'?'}</span>
        \${isSummon
          ? \`<span style="font-size:13px;color:#4a8fe0">✦ Evocazione attiva</span>\`
          : \`<span style="font-size:13px;color:var(--muted)">\${stLabel}</span>\`}
      </div>
      <div class="info-section">
        <div class="info-lbl">Tiri Salvezza</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">\${rTS(npc,true)}</div>
      </div>
      <div class="info-section">
        \${isSummon
          ? \`<div class="info-lbl">\${poolName} — \${pool}/\${maxPool}</div>
             <div class="wounds-ctrl">
               <button class="step-btn" data-action="adj-summon-pool" data-npc="\${npc.id}" data-d="-1">−</button>
               <div class="wounds-dots-lg">
                 \${Array.from({length:maxPool},(_,i)=>\`<span class="wd-lg \${i<pool?'':'wd-lg-off'}" style="\${i<pool?'background:#4a8fe0':''}"></span>\`).join('')}
               </div>
               <button class="step-btn" data-action="adj-summon-pool" data-npc="\${npc.id}" data-d="1">+</button>
             </div>\`
          : \`<div class="info-lbl">Ferite — \${w}/\${pf}</div>
             <div class="wounds-ctrl">
               <button class="step-btn" data-action="remove-wound-info" data-npc="\${npc.id}">−</button>
               <div class="wounds-dots-lg">
                 \${Array.from({length:pf},(_,i)=>\`<span class="wd-lg \${i<w?'wd-lg-on':'wd-lg-off'}"></span>\`).join('')}
               </div>
               <button class="step-btn" data-action="add-wound-info" data-npc="\${npc.id}">+</button>
             </div>\`}
      </div>
      <div class="info-stat-grid">
        \${SK.map(k=>\`<div class="info-stat">
          <span class="info-stat-icon">\${SI[k]}</span>
          <span class="info-stat-grade \${gc(npc[k])}">\${npc[k]||'D'}</span>
          <span class="info-stat-name">\${SN[k]}</span>
        </div>\`).join('')}
      </div>
      <button class="btn btn-gh" data-action="close-info">Chiudi</button>
    </div>
  </div></div>\`;
}

// ── Minion Rules ─────────────────────────────────
function rMinion(){
  const rules=[
    ['Colpire un minion',
     'Qualsiasi colpo andato a segno elimina il minion dalla battaglia corrente e gli infligge 1 ferita. Non importa l\\'entità del danno: anche un colpo minimo è sufficiente.'],
    ['Punti ferita (PF)',
     'Ogni minion ha un numero di PF pari a 1 base più 1 ogni 5 livelli. Quando le ferite accumulate raggiungono il massimo, il minion muore in modo permanente e non può essere resuscitato normalmente.'],
    ['Minion non stellati',
     'Ricevono 1 ferita → vengono messi fuori combattimento. Le loro carte diventano inaccessibili e la scheda appare in grigio.'],
    ['Minion stellati ★',
     'Ricevono 1 ferita → diventano Indeboliti. Le carte funzionano normalmente ma il prossimo colpo li metterà fuori combattimento. Con 2 ferite totali → fuori combattimento.'],
    ['Fuori combattimento',
     'Il personaggio non può usare carte né partecipare attivamente al combattimento. Rimane presente in gioco ma inattivo fino a guarigione.'],
    ['Morte permanente',
     'Quando le ferite raggiungono il massimo, il personaggio muore. Rimane visibile nel mazzo con lo stato "Morto" come promemoria. Una resurrezione straordinaria è tecnicamente possibile ma richiede circostanze narrative eccezionali.'],
    ['Guarire una ferita',
     'Ogni ferita richiede una piccola quest dedicata per essere rimossa. Il DM gestisce la guarigione fuori dall\\'app e la registra manualmente nel pannello ℹ del personaggio.'],
    ['Proteggere un minion',
     'Un giocatore può dichiarare di interporsi tra un minion e un attacco in arrivo, prima che venga risolto. Il personaggio subisce l\\'attacco al posto del minion: tutti i danni e gli effetti si applicano al personaggio che protegge, come se l\\'attacco fosse stato diretto a lui. Costa 1 punto carta.'],
    ['Tiri salvezza',
     'I minion non tirano i dadi per i TS. Un TS classificato come Forte viene superato automaticamente. Un TS classificato come Debole viene fallito automaticamente. Non esistono altri TS intermedi per i minion.'],
  ];
  const summonRules=[
    ['Evocazioni',
     'Alcuni personaggi possono evocare PNG speciali durante il combattimento tramite carte apposite. Le evocazioni appaiono nel mazzo di sessione solo quando attivate.'],
    ['PS',
     'Le evocazioni non hanno ferite. Al posto delle ferite usano un pool di PS (Punti Summon) (blu). Ogni volta che vengono colpite perdono 1 PS.'],
    ['Esaurimento',
     'Quando i PS (Punti Summon) raggiungono 0, l\\'evocazione sparisce dal mazzo e non può essere riattivata finché non si usa nuovamente la carta di evocazione (se le condizioni lo permettono).'],
    ['Carte delle Evocazioni',
     'Le carte di un\\'evocazione scalano con i PS (Punti Summon) spesi: spendere più punti produce effetti più potenti. Il costo è scelto al momento dell\\'attivazione con il selettore.'],
  ];
  return \`<div class="mod-ov mod-bottom" data-action="close-minion">
  <div class="mod-sheet mod-sheet-bottom" data-stop>
    <div class="minion-body">
      <div class="minion-title">⚓ Regole Minion</div>
      \${rules.map(([t,b])=>\`<div class="mr"><div class="mr-t">\${t}</div><div class="mr-b">\${b}</div></div>\`).join('')}
      <div class="minion-title" style="margin-top:16px">✦ Evocazioni</div>
      \${summonRules.map(([t,b])=>\`<div class="mr"><div class="mr-t">\${t}</div><div class="mr-b">\${b}</div></div>\`).join('')}
      <button class="btn btn-gh" style="margin-top:8px" data-action="close-minion">Chiudi</button>
    </div>
  </div></div>\`;
}

// ── Session Menu ──────────────────────────────────
function rMenu(){
  return \`<div class="overlay" data-action="close-menu">
  <div class="menu-sheet" data-stop>
    <button class="menu-item" data-action="open-minion">📖 Regole minion</button>
    <hr class="menu-sep">
    <button class="menu-item" data-action="reset-session">🔄 Azzera carte usate + pool</button>
    <button class="menu-item" data-action="end-session">✕ Termina sessione</button>
    <hr class="menu-sep">
    <button class="menu-item menu-cancel" data-action="close-menu">Annulla</button>
  </div></div>\`;
}

// ── Dialog ────────────────────────────────────────
function rDialog(){
  const{title,msg,confirmLabel,danger,confirmAction,cancelLabel,cancelAction}=S.dialog;
  return \`<div class="dlg-ov">
  <div class="dlg-box" data-stop>
    <div class="dlg-title">\${title}</div>
    <div class="dlg-msg">\${msg}</div>
    <div class="dlg-btns">
      \${confirmLabel?\`<button class="btn \${danger?'btn-d':'btn-g'}" data-action="\${confirmAction}">\${confirmLabel}</button>\`:''}
      \${cancelLabel?\`<button class="btn btn-s" data-action="\${cancelAction}">\${cancelLabel}</button>\`:''}
      <button class="btn btn-gh" data-action="close-dialog">Annulla</button>
    </div>
  </div></div>\`;
}

// ── Settings ──────────────────────────────────────
function rSettings(){
  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT'):'—';
  const hasToken=!!(S.ghToken);
  return \`<div class="view">
  <div class="hdr"><span class="hdr-title">⚙️ Impostazioni</span></div>
  <div class="settings-body">

    <div class="settings-section">
      <div class="settings-section-title">🔑 GitHub</div>
      <div class="fld">
        <label>Personal Access Token</label>
        <input id="gh-token" type="password" value="\${S.ghToken||''}"
          placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
          autocomplete="off" spellcheck="false">
        <span style="font-size:11px;color:var(--muted);margin-top:4px;display:block">
          Salvato solo su questo dispositivo. Scope richiesto: <code>repo</code>
        </span>
      </div>
      <button class="btn btn-g" data-action="save-token">Salva token</button>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">🚀 Push su GitHub</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px">
        BitNineStudio-Leo · branch main
      </div>
      <button class="btn btn-g\${hasToken?'':' btn-dis'}" data-action="push-app"
        \${hasToken?'':'title="Inserisci prima il token"'}>
        📦 Push app → CiurmaPolloDiablo
      </button>
      <button class="btn btn-g\${hasToken?'':' btn-dis'}" data-action="push-data"
        \${hasToken?'':'title="Inserisci prima il token"'}>
        📄 Push data → CiurmaData
      </button>
      <div id="push-status" style="font-size:12px;color:var(--muted);min-height:18px"></div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">🔄 Sincronizzazione dati</div>
      <div class="fld">
        <label>URL GitHub raw (data.json)</label>
        <input id="rawurl" type="url" value="\${S.rawUrl}"
          placeholder="https://raw.githubusercontent.com/BitNineStudio-Leo/CiurmaData/main/data.json">
      </div>
      <button class="btn btn-g" data-action="save-url">Salva e sincronizza</button>
      <div class="sync-info">Ultimo sync: \${syncTxt}</div>
      <button class="btn btn-s" data-action="sync">🔄 Risincronizza adesso</button>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">⚠️ Dati</div>
      <button class="btn btn-d" data-action="clear-data">🗑 Ripristina dati integrati</button>
    </div>

  </div>
  \${rBotNav('settings')}</div>\`;
}

// ══════════════════════════════════════════════════
// EVENTS
// ══════════════════════════════════════════════════
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-action]');
  if(!el) return;
  const{action,view,d,npc,card}=el.dataset;
  switch(action){
    case 'goto':             S.view=view; render(); break;
    case 'sync':             syncGithub(); break;
    case 'open-builder':     S.builderDeck=[...S.deck]; S.view='builder'; render(); break;
    case 'cancel-builder':   S.builderDeck=null; S.view='home'; render(); break;
    case 'confirm-builder':
      S.deck=[...(S.builderDeck||[])]; LS.s('deck',S.deck);
      S.builderDeck=null; S.view='home'; render(); break;
    case 'toggle-npc':
      if(S.view==='builder'){
        const bd=S.builderDeck||[], i=bd.indexOf(npc);
        i>=0?bd.splice(i,1):bd.push(npc); S.builderDeck=[...bd]; render();
      }else{ S.expanded[npc]=!S.expanded[npc]; render(); }
      break;
    case 'toggle-consulta':      S.consultaExp[npc]=!S.consultaExp[npc]; render(); break;
    case 'consulta-tab':         S.consultaTab=el.dataset.tab; render(); break;
    case 'open-card':
    case 'open-card-consulta':   S.openCard={npcId:npc,cardTitle:dec(card)}; render(); break;
    case 'adj-max':              adjMax(parseInt(d)); break;
    case 'start-session':        if(S.deck.length) startSession(); break;
    case 'adj-pool':             adjPool(parseInt(d)); break;
    case 'open-menu':            S.menuOpen=true; render(); break;
    case 'close-menu':           S.menuOpen=false; render(); break;
    case 'open-minion':          S.menuOpen=false; S.minionOpen=true; render(); break;
    case 'open-minion-nav':      S.minionOpen=true; render(); break;
    case 'close-minion':         S.minionOpen=false; render(); break;
    case 'reset-session':        resetSession(); break;
    case 'end-session':          endSession(); break;
    case 'do-end':
      S.dialog=null; S.session=null; LS.s('session',null); S.view='home'; render(); break;
    case 'do-reset':
      S.dialog=null;
      if(S.session){S.session.used={}; S.session.pool=S.session.maxPool; LS.s('session',S.session);}
      render(); break;
    case 'close-dialog':         S.dialog=null; render(); break;
    case 'close-modal':          S.openCard=null; render(); break;
    case 'play-card':            playCard(npc,dec(card)); break;
    case 'undo-card':            undoCard(npc,dec(card)); break;

    // Slider punti evocazione nel modal
    case 'summon-slider-adj': {
      if(!S.openCard) break;
      const summon=S.session?.summons?.[npc];
      const maxVal=summon?.pool||1;
      const cur=S.openCard.sliderVal||1;
      S.openCard.sliderVal=Math.max(1,Math.min(maxVal,cur+parseInt(el.dataset.d||0)));
      render(); break;
    }

    // Carta con costo evocazione variabile
    case 'play-summon-card': {
      const cost=parseInt(el.dataset.cost)||1;
      const c=npcCards(npc).find(x=>x.title===dec(card));
      const summon=S.session?.summons?.[npc];
      if(!summon||summon.pool<cost){toast('Punti evocazione insufficienti!',true);break;}
      summon.pool-=cost;
      S.session.used[cKey(npc,dec(card))]=(S.session.used[cKey(npc,dec(card))]||0)+1;
      // Se pool a 0, rimuovi dal summonDeck
      if(summon.pool<=0){
        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);
        toast(\`✦ Le Ombre si dissolvono\`, true);
      } else {
        toast(\`✦ \${dec(card)} — \${cost} \${summon.pool_name||'PS'} (rimasti: \${summon.pool})\`);
      }
      LS.s('session',S.session); S.openCard=null; render(); break;
    }

    // disable_if ask — confermato: applica e disabilita il caster
    case 'play-card-disable': {
      const dlg=S.dialog; S.dialog=null;
      if(!dlg) break;
      const {pendingNpc,pendingCard}=dlg;
      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);
      if(!pnpc||!pcard) break;
      const cost=effCost(pnpc,pcard);
      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}
      S.session.pool-=cost;
      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;
      S.session.disabledBy[pendingNpc]=true;
      LS.s('session',S.session); S.openCard=null;
      toast(\`\${pnpc.name} esce dal combattimento\`); render(); break;
    }

    // disable_if ask — annullato: carta normale senza effetto disable
    case 'play-card-normal': {
      const dlg=S.dialog; S.dialog=null;
      if(!dlg) break;
      const {pendingNpc,pendingCard}=dlg;
      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);
      if(!pnpc||!pcard) break;
      const cost=effCost(pnpc,pcard);
      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}
      S.session.pool-=cost;
      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;
      LS.s('session',S.session); S.openCard=null;
      toast(\`\${pendingCard} — \${cost}pt\`); render(); break;
    }

    // Aggiusta pool evocazione manualmente
    case 'adj-summon-pool': {
      const delta=parseInt(el.dataset.d)||0;
      const summon=S.session?.summons?.[npc];
      if(!summon) break;
      summon.pool=Math.max(0,Math.min(summon.maxPool,summon.pool+delta));
      if(summon.pool<=0){
        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);
        toast('✦ Evocazione esaurita');
      }
      LS.s('session',S.session); render(); break;
    }

    case 'add-wound':
    case 'add-wound-info':       addWound(npc); break;
    case 'remove-wound-info':    removeWound(npc); break;
    case 'open-info':            S.openInfo=npc; render(); break;
    case 'close-info':           S.openInfo=null; render(); break;
    case 'save-url':             saveUrl(); break;
    case 'save-token':           saveToken(); break;
    case 'push-app':             pushApp(); break;
    case 'push-data':            pushData(); break;
    case 'clear-data':
      S.dialog={title:'Ripristina dati',msg:'I dati GitHub verranno rimossi e si tornerà ai dati integrati.',confirmLabel:'Ripristina',danger:true,confirmAction:'do-clear'};
      render(); break;
    case 'do-clear':
      S.dialog=null;
      ['npcs','cards','rawUrl','syncTime'].forEach(k=>localStorage.removeItem(k));
      S.npcs=BUNDLED_NPCS; S.cards=BUNDLED_CARDS; S.rawUrl=''; S.syncTime=null; render(); break;
  }
});

document.addEventListener('click',e=>{
  if(e.target.classList.contains('mod-ov')){S.openCard=null;S.openInfo=null;S.minionOpen=false;render();}
  if(e.target.classList.contains('overlay')){S.menuOpen=false;render();}
});

function saveUrl(){
  const inp=document.getElementById('rawurl'); if(!inp) return;
  const url=inp.value.trim();
  if(!url.startsWith('http')){toast('URL non valido',true);return;}
  S.rawUrl=url; LS.s('rawUrl',url); syncGithub();
}

function saveToken(){
  const inp=document.getElementById('gh-token'); if(!inp) return;
  const t=inp.value.trim();
  S.ghToken=t; LS.s('ghToken',t);
  toast(t?'Token salvato ✓':'Token rimosso'); render();
}

async function ghPush(repo, filePath, content, commitMsg){
  const token=S.ghToken;
  if(!token){toast('Token mancante!',true);return false;}
  const owner='BitNineStudio-Leo';
  const apiBase=\`https://api.github.com/repos/\${owner}/\${repo}/contents/\${filePath}\`;
  const headers={'Authorization':\`token \${token}\`,'Content-Type':'application/json','Accept':'application/vnd.github.v3+json'};

  // Recupera SHA attuale del file (necessario per update)
  let sha=null;
  try{
    const r=await fetch(apiBase,{headers});
    if(r.ok){ const j=await r.json(); sha=j.sha; }
  }catch(e){}

  const body={message:commitMsg,content:btoa(unescape(encodeURIComponent(content))),branch:'main'};
  if(sha) body.sha=sha;

  const res=await fetch(apiBase,{method:'PUT',headers,body:JSON.stringify(body)});
  return res.ok;
}

async function pushApp(){
  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}
  setPushStatus('⏳ Push app in corso...');
  const files=[
    ['index.html', null],
    ['app.js', null],
    ['sw.js', null],
  ];
  // Legge i file dal DOM — l'app è standalone quindi usiamo i sorgenti bundled
  // Push solo sw.js e manifest (index.html+app.js sono il bundle)
  toast('⏳ Invio in corso...'); 
  try{
    // Per la PWA push il file standalone come index.html
    const html=document.documentElement.outerHTML;
    const ok=await ghPush('CiurmaPolloDiablo','index.html',html,'Update app da dispositivo');
    if(ok){ setPushStatus('✅ App caricata!'); toast('✅ CiurmaPolloDiablo aggiornato!'); }
    else  { setPushStatus('❌ Errore push'); toast('Errore push — verifica token e permessi',true); }
  }catch(e){ setPushStatus('❌ '+e.message); toast('Errore: '+e.message,true); }
}

async function pushData(){
  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}
  setPushStatus('⏳ Push data in corso...');
  try{
    const json=JSON.stringify({npcs:S.npcs,cards:S.cards},null,2);
    const ok=await ghPush('CiurmaData','data.json',json,'Update data.json da dispositivo');
    if(ok){ setPushStatus('✅ Data caricato!'); toast('✅ CiurmaData aggiornato!'); }
    else  { setPushStatus('❌ Errore push'); toast('Errore push — verifica token e permessi',true); }
  }catch(e){ setPushStatus('❌ '+e.message); toast('Errore: '+e.message,true); }
}

function setPushStatus(msg){
  const el=document.getElementById('push-status');
  if(el) el.textContent=msg;
}

// ══════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
// Se c'è una sessione attiva al caricamento, va direttamente in sessione
if(S.session) S.view='session';
render();

</script>
</body>
</html>
`;
'use strict';

// ══════════════════════════════════════════════════
// BUNDLED DATA — aggiornato con CA formula, TS completi, Gatto titanico
// ══════════════════════════════════════════════════
const BUNDLED_NPCS = [
  {
    "id": "vieni_qua",
    "name": "Vieniqua",
    "star": false,
    "classe": "Lv 13 · Orco · Guerriero",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/vieniqua.jpg",
    "ca": 26,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "S",
    "magia": "D",
    "nav": "B",
    "tech": "D",
    "cura": "D",
    "furtivita": "D"
  },
  {
    "id": "saltarello",
    "name": "Saltarello",
    "star": false,
    "classe": "Lv 12 · Thri-Kreen · Mente Guerriera",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/saltarello.jpg",
    "ca": 23,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "A",
    "magia": "A",
    "nav": "B",
    "tech": "D",
    "cura": "D",
    "furtivita": "D"
  },
  {
    "id": "wedge",
    "name": "Wedge",
    "star": false,
    "classe": "Lv 13 · Umano · Esperto (marinaio)",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/wedge.jpg",
    "ca": 20,
    "pf_max": 3,
    "ts_forte": [
      "Tempra"
    ],
    "ts_debole": [
      "Riflessi",
      "Volontà"
    ],
    "combat": "C",
    "magia": "D",
    "nav": "S",
    "tech": "A",
    "cura": "C",
    "furtivita": "B"
  },
  {
    "id": "bigs",
    "name": "Biggs",
    "star": false,
    "classe": "Lv 13 · Umano · Esperto (marinaio)",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/biggs.jpg",
    "ca": 20,
    "pf_max": 3,
    "ts_forte": [
      "Tempra"
    ],
    "ts_debole": [
      "Riflessi",
      "Volontà"
    ],
    "combat": "C",
    "magia": "D",
    "nav": "S",
    "tech": "C",
    "cura": "A",
    "furtivita": "B"
  },
  {
    "id": "son_goku",
    "name": "Son Goku",
    "star": true,
    "classe": "Lv 18 · Umano · Monaco",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/viejo.jpg",
    "ca": 27,
    "pf_max": 4,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "SS",
    "magia": "D",
    "nav": "A",
    "tech": "D",
    "cura": "B",
    "furtivita": "D"
  },
  {
    "id": "lady",
    "name": "Lady",
    "star": true,
    "classe": "Lv 18 · Umana · ???",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/lady.jpg",
    "ca": 26,
    "pf_max": 4,
    "ts_forte": [
      "Volontà"
    ],
    "ts_debole": [
      "Tempra",
      "Riflessi"
    ],
    "combat": "D",
    "magia": "S",
    "nav": "C",
    "tech": "C",
    "cura": "A",
    "furtivita": "A"
  },
  {
    "id": "quarantena",
    "name": "Quarantena",
    "star": true,
    "classe": "Lv 16 · Mezzelfa · Shadow Man",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/quarantena.jpg",
    "ca": 27,
    "pf_max": 4,
    "ts_forte": [
      "Riflessi",
      "Volontà"
    ],
    "ts_debole": [
      "Tempra"
    ],
    "combat": "D",
    "magia": "SS",
    "nav": "A",
    "tech": "D",
    "cura": "C",
    "furtivita": "A"
  },
  {
    "id": "stella",
    "name": "Stella",
    "star": false,
    "classe": "Lv 13 · Elfa Occhirosi · Crusader",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/stella.jpg",
    "ca": 27,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "A",
    "magia": "S",
    "nav": "D",
    "tech": "D",
    "cura": "A",
    "furtivita": "D"
  },
  {
    "id": "gurgo",
    "name": "Gurgo (Scorpion)",
    "star": false,
    "classe": "Lv 4 · Gnefro · Ladro",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/gurgo.jpg",
    "ca": 13,
    "pf_max": 1,
    "ts_forte": [
      "Riflessi"
    ],
    "ts_debole": [
      "Tempra",
      "Volontà"
    ],
    "combat": "C",
    "magia": "D",
    "nav": "B",
    "tech": "B",
    "cura": "D",
    "furtivita": "B"
  },
  {
    "id": "gatto",
    "name": "Gatto",
    "star": true,
    "classe": "Titano della Creatività · Gatto Supremo",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/gatto.jpg",
    "ca": 30,
    "pf_max": 5,
    "ts_forte": [
      "Tempra",
      "Riflessi"
    ],
    "ts_debole": [
      "Volontà"
    ],
    "combat": "B",
    "magia": "D",
    "nav": "D",
    "tech": "SS",
    "cura": "SS",
    "furtivita": "B"
  },
  {
    "id": "dorag",
    "name": "Dorag",
    "star": false,
    "classe": "Drago di ottone adulto",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/dorag.jpg",
    "ca": 26,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Riflessi"
    ],
    "ts_debole": [
      "Volontà"
    ],
    "combat": "A",
    "magia": "B",
    "nav": "D",
    "tech": "D",
    "cura": "C",
    "furtivita": "C"
  },
  {
    "id": "murray",
    "name": "Murray",
    "star": false,
    "classe": "Lv 5 · Teschio rianimato · Stregone",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/murray.jpg",
    "ca": 12,
    "pf_max": 2,
    "ts_forte": [
      "Volontà"
    ],
    "ts_debole": [
      "Tempra",
      "Riflessi"
    ],
    "combat": "D",
    "magia": "C",
    "nav": "D",
    "tech": "D",
    "cura": "D",
    "furtivita": "D"
  },
  {
    "id": "ombre",
    "name": "Le Ombre",
    "star": false,
    "classe": "Evocazione · Quarantena",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/ombre.jpg",
    "ca": 26,
    "pf_max": 4,
    "ts_forte": [
      "Riflessi",
      "Volontà"
    ],
    "ts_debole": [
      "Tempra"
    ],
    "combat": "A",
    "magia": "A",
    "nav": "B",
    "tech": "D",
    "cura": "D",
    "furtivita": "B",
    "summoned": true
  }
];

const BUNDLED_CARDS = [
  {
    "npc_id": "vieni_qua",
    "title": "Ascia-mano",
    "cost": 1,
    "stat": "combat",
    "grade": "S",
    "desc": "Attacca con la protesi ascia. Infligge 30 danni. Se il bersaglio è taglia Media o inferiore, è anche Abbattuto per 1 round.",
    "rule": "Nessun tiro per colpire. Portata mischia.",
    "flavor": "Dopo il tradimento di x si fece impiantare un'ascia in un braccio. Bal gli ha insegnato come usarla.",
    "minion": ""
  },
  {
    "npc_id": "vieni_qua",
    "title": "Scudo vivente",
    "cost": 1,
    "stat": "combat",
    "grade": "S",
    "desc": "Si interpone tra un alleato adiacente e un attacco in arrivo, divenendone il bersaglio.",
    "rule": "Vieni Qua riporta la ferita al posto dell'alleato protetto.",
    "flavor": "La prima lezione che vieni qua abbia mai imparato: - mettere corpo davanti.",
    "minion": ""
  },
  {
    "npc_id": "vieni_qua",
    "title": "Ambizione dell'armatura",
    "cost": 2,
    "stat": "combat",
    "grade": "S",
    "desc": "Per 3 round: gli attacchi ignorano resistenze e riduzioni al danno, durante questi round ignora il primo danno subito.",
    "rule": "Usabile 1 volta per sessione. Non è magia — è spirito puro.",
    "flavor": "- Come fai a reggere tutto questo?  -Non sapere. Maestro Bal chiamare questo \"ambizione\".",
    "minion": ""
  },
  {
    "npc_id": "saltarello",
    "title": "Raffica di artigli",
    "cost": 1,
    "stat": "combat",
    "grade": "A",
    "desc": "Attacca due bersagli diversi nello stesso round infliggendo 25 danni a ciascuno.",
    "rule": "I due bersagli devono essere entro 3m tra loro.",
    "flavor": "Fra i Thri Kreen è quello che si definisce un “sangue scuro”, le sue braccia sono segno di un progenitore Formian.",
    "minion": ""
  },
  {
    "npc_id": "saltarello",
    "title": "Balzo psionico",
    "cost": 1,
    "stat": "magia",
    "grade": "A",
    "desc": "Salta fino a 18m in qualsiasi direzione. Può atterrare su un nemico: 30 danni e Abbattuto per 1 round.",
    "rule": "Non provoca attacchi di opportunità iniziando il salto.",
    "flavor": "La ciurma ha smesso di chiedersi come riesca ad arrivare tanto in alto.",
    "minion": ""
  },
  {
    "npc_id": "saltarello",
    "title": "Messaggio telepatico",
    "cost": 2,
    "stat": "magia",
    "grade": "A",
    "desc": "Invia un messaggio telepatico ad un qualsiasi membro della ciurma, ovunque si trovi. il contattato può rispondere.",
    "rule": "Funziona solo se il bersaglio si trova sullo stesso piano, limite di 30 parole.",
    "flavor": "Saltarello fu soldato presso un alveare che era in affari con il corsaro le Blanc. Scelse una nuova famiglia.",
    "minion": ""
  },
  {
    "npc_id": "wedge",
    "title": "Manovra esperta",
    "cost": 1,
    "stat": "nav",
    "grade": "S",
    "desc": "Una prova di navigazione o manovra della nave riesce automaticamente.",
    "rule": "Dichiarare prima del tiro.",
    "flavor": "Testa cucita con una corda, timone in mano e vento in poppa. Una splendida giornata.",
    "minion": ""
  },
  {
    "npc_id": "wedge",
    "title": "Riparazione rapida",
    "cost": 1,
    "stat": "tech",
    "grade": "A",
    "desc": "Ripara 30 PF strutturali della nave in 10 minuti.",
    "rule": "Non usabile in combattimento navale attivo.",
    "flavor": "- Come lavori con la testa così? - Facendo attenzione a non girarmi di scatto.",
    "minion": ""
  },
  {
    "npc_id": "wedge",
    "title": "Tecnica rematoria",
    "cost": 2,
    "stat": "nav",
    "grade": "S",
    "desc": "La nave si muove al doppio della velocità per 1 ora. ",
    "rule": "Se anche Bigs usa la stessa carta nella stessa ora, la velocità è triplicata.",
    "flavor": "La marina li cerca per tre dei sei mari. Non li ha mai raggiunti.",
    "minion": ""
  },
  {
    "npc_id": "bigs",
    "title": "Manovra esperta",
    "cost": 1,
    "stat": "nav",
    "grade": "S",
    "desc": "Una prova di navigazione o manovra della nave riesce automaticamente.",
    "rule": "Dichiarare prima del tiro.",
    "flavor": "Biggs e Wedge non parlano molto. Non ne hanno bisogno per capirsi.",
    "minion": ""
  },
  {
    "npc_id": "bigs",
    "title": "Spuntino Rinvigorente",
    "cost": 1,
    "stat": "cura",
    "grade": "A",
    "desc": "Stabilizza un personaggio a 0 PF e lo riporta a 20 PF, oppure cura una ferita ad un qualsiasi membro della ciurma e finisce fuori combattimento.",
    "rule": "Se Biggs cura un altro minion finisce fuori combattimento senza subire ferite.",
    "flavor": "- Hai un buco nello stomaco. - Lo so, ho sempre fame.",
    "minion": "",
    "disable_if": {
      "target": "self",
      "condition": "ask",
      "prompt": "Stai curando un minion?"
    }
  },
  {
    "npc_id": "bigs",
    "title": "Tecnica rematoria",
    "cost": 2,
    "stat": "nav",
    "grade": "S",
    "desc": "La nave si muove al doppio della velocità per 1 ora.",
    "rule": "Se anche Wedge usa la stessa carta nella stessa ora: velocità triplicata.",
    "flavor": "Insieme, i due ex Marine, valgono più di qualsiasi vento.",
    "minion": ""
  },
  {
    "npc_id": "son_goku",
    "title": "Pugno del monaco",
    "cost": 1,
    "stat": "combat",
    "grade": "SS",
    "desc": "Infligge 50 danni a un bersaglio senza tiro per colpire. Bersagli con meno di 12 DV: Abbattuto per 1 round.",
    "rule": "Portata 3m",
    "flavor": "L'ex-ammiraglio che fondò una città, l'ex-prigioniero che si consegnò per difenderla. Una volontà che non smise mai di lottare.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "son_goku",
    "title": "Ambizione del re conquistatore",
    "cost": 2,
    "stat": "combat",
    "grade": "SS",
    "desc": "Tutti i nemici con meno di 12 DV entro 18m cadono infermi per 1d4 round. Tutti gli altri sono comunque scossi per la stessa durata",
    "rule": "nessun tiro salvezza.",
    "flavor": "- Sai chi sono?  - Sì. - Allora sai già come finirà.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "son_goku",
    "title": "Re Kong",
    "cost": 2,
    "stat": "combat",
    "grade": "SS",
    "desc": "Trasformazione in gorilla gigante per 3 round: immune alle ferite normali, ogni round può infliggere un attacco da 40 danni, i nemici con meno di 12 DV sono spaventati.",
    "rule": "Portata 6 m, taglia mastodontica, utilizzabile 1 volta per sessione.",
    "flavor": "Mouga pensava di averlo spezzato. Aveva torto.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "son_goku",
    "title": "Re Kong scatenato",
    "cost": 3,
    "stat": "combat",
    "grade": "SS",
    "desc": "Come Re Kong ma dura 5 round. Ogni attacco colpisce tutti i nemici entro 6m per 40 danni ciascuno.",
    "rule": "Usabile solo se Re Kong è già attivo. taglia colossale, 1 volta per sessione.",
    "flavor": "Re Kong non si inchina a nessuno. Nemmeno ai leviatani.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "lady",
    "title": "Lettura del destino",
    "cost": 1,
    "stat": "magia",
    "grade": "S",
    "desc": "Domanda sì/no su un pericolo imminente. Il DM risponde onestamente. Non fallisce mai.",
    "rule": "Max 1 per sessione per giocatore.",
    "flavor": "Non predice il futuro, lo vede già successo.",
    "minion": ""
  },
  {
    "npc_id": "lady",
    "title": "Tisana della guaritrice",
    "cost": 1,
    "stat": "cura",
    "grade": "A",
    "desc": "Cura 28 PF e rimuove maledizioni.",
    "rule": "Solo fuori combattimento, 30 minuti di preparazione.",
    "flavor": "Sa di erbe, di rum e di qualcosa che non ha nome. Funziona sempre.",
    "minion": ""
  },
  {
    "npc_id": "lady",
    "title": "Maledizione voodoo",
    "cost": 2,
    "stat": "magia",
    "grade": "S",
    "desc": "Un nemico scelto subisce svantaggio ai prossimi 4 tiri. Nessun tiro salvezza.",
    "rule": "Si può cumulare la durata con usi successivi.",
    "flavor": "Lady non odia nessuno. Ma ricorda tutto.",
    "minion": ""
  },
  {
    "npc_id": "lady",
    "title": "Oracolo del crocicchio",
    "cost": 3,
    "stat": "magia",
    "grade": "S",
    "desc": "Consulta gli spiriti. Il DM fornisce un indizio concreto su un mistero attivo: un nome, un luogo o una connessione nascosta, dopodiché Lady è fuori combattimento.",
    "rule": "Max 1 per sessione.",
    "flavor": "Al crocicchio si incontrano tutti i cammini. Anche quelli dei morti.",
    "minion": ""
  },
  {
    "npc_id": "quarantena",
    "title": "Lama del Dolore e della paura",
    "cost": 1,
    "stat": "magia",
    "grade": "SS",
    "desc": "A scelta: Infligge 32 danni da energia negativa - oppure infligge un livello negativo - oppure prende il controllo di un non morto entro 14 DV per 1 round.",
    "rule": "Un solo effetto per attivazione.",
    "flavor": "- E' forte come incantesimo? - mah, è medio. ",
    "minion": ""
  },
  {
    "npc_id": "quarantena",
    "title": "Frutto Feel-Feel: Indifferenza",
    "cost": 2,
    "stat": "magia",
    "grade": "SS",
    "desc": "Un alleato a scelta guadagna +5 a CA e a tutti i tiri salvezza per 1 round ed è immune a qualsiasi danno ed effetto per lo stesso round. Al termine del round, Quarantena viene rimossa dal combattimento anche se non ha subito ferite.",
    "rule": "Entrambi gli effetti sono simultanei e inscindibili. Quarantena esce dal combattimento a fine round indipendentemente dall'esito.",
    "flavor": "Si siede in mezzo al combattimento e apre la Smemo. Non le interessa.",
    "minion": "",
    "disable_if": {
      "target": "self",
      "condition": "always"
    }
  },
  {
    "npc_id": "quarantena",
    "title": "Frutto Feel-Feel: Musica Deprimente",
    "cost": 1,
    "stat": "magia",
    "grade": "A",
    "desc": "Se è attiva musica bardica nelle vicinanze, tutti i neutrali che la sentono beneficiano di Ispirare Grandezza. Qualsiasi incantatore che tenti di lanciare un incantesimo con descrittore Bene o Male deve superare Concentrazione CD 35 o l'incantesimo fallisce.",
    "rule": "Entrambi gli effetti si attivano insieme finché dura la musica. Non funziona in assenza di una fonte musicale attiva.",
    "flavor": "Quarantena trova la musica di Rock accettabile. Abbastanza da fargli da manager.",
    "minion": ""
  },
  {
    "npc_id": "quarantena",
    "title": "Shadow Man",
    "cost": 2,
    "stat": "magia",
    "grade": "SS",
    "desc": "Evoca 4 Ombre obbedienti per 10 ore.",
    "rule": "Ogni Ombra conta come minion separato con proprie regole e ferite.",
    "flavor": "- Quanti ne puoi evocare? - Quanti ne vuoi?",
    "minion": "Ogni Ombra è un minion indipendente",
    "summon": {
      "npc_id": "ombre",
      "pool": 4,
      "pool_name": "PS"
    }
  },
  {
    "npc_id": "stella",
    "title": "Arti marziali Occhirossi",
    "cost": 1,
    "stat": "combat",
    "grade": "A",
    "desc": "Attacca infliggendo 30 danni sacri. Contro non-morti o aberrazioni: 45 danni. Contro gli scorpioni 100.",
    "rule": "Nessun tiro per colpire.",
    "flavor": "L'astrosauro le ha parlato in sogno. Stella sa di essere la sua prescelta.",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "stella",
    "title": "Tocco delle stelle",
    "cost": 2,
    "stat": "cura",
    "grade": "A",
    "desc": "Cura 32 PF a un alleato. Può salvare un alleato che dovrebbe morire in questo round, riportandolo a 16 PF automaticamente.",
    "rule": "Contatto fisico richiesto. Può salvare anche un minion dalla morte prevenendo il danno che lo ucciderebbe.",
    "flavor": "I tessuti guariscono con la stessa forza vitale di un sole che brucia.",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "stella",
    "title": "Passo delle stelle",
    "cost": 2,
    "stat": "magia",
    "grade": "S",
    "desc": "Stance che genera aura divina per 2 round. Tutti gli alleati in 9m: +3 attacchi, +3 danni, riduzione danno 5/-.",
    "rule": "Bonus di morale.",
    "flavor": "- Da dove viene questa luce? - Dal cosmo che brucia dentro di me!",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "stella",
    "title": "Astrosauro",
    "cost": 2,
    "stat": "magia",
    "grade": "S",
    "desc": "linea di laser da 12 metri e 38 danni da fuoco, la velocità aumenta a 15m, può spostarsi senza causare attacchi d'opportunità. Dura 3 round.",
    "rule": "Utilizzabile 1 volta per sessione.",
    "flavor": "Il grande Astrosauro non cammina su questa terra. Tranne quando decide di farlo.",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "gurgo",
    "title": "Borseggio / scassinare",
    "cost": 1,
    "stat": "furtivita",
    "grade": "B",
    "desc": "Ruba un oggetto specifico da un PNG o apre una serratura. CD Furtività 14. Se il bersaglio non è allertato: riuscita automatica.",
    "rule": "Anche in combattimento.",
    "flavor": "Lo chiamavano \"Schifo\" perché erano crudeli, ora si chiama Scorpion e gliela farà vedere!",
    "minion": ""
  },
  {
    "npc_id": "gurgo",
    "title": "Patetico",
    "cost": 1,
    "stat": "furtivita",
    "grade": "B",
    "desc": "Gurgo fa una scena tanto pietosa che un nemico perde la sua azione nel round successivo.",
    "rule": "Non funziona su non-morti, costrutti o creature con Int < 6.",
    "flavor": "Non è una tecnica, ma una vita intera di umiliazioni trasformata in arma.",
    "minion": ""
  },
  {
    "npc_id": "gurgo",
    "title": "Sabotaggio gremlin",
    "cost": 2,
    "stat": "tech",
    "grade": "B",
    "desc": "Sabota un meccanismo nemico: cannone, trappola, serratura magica, gabbia. Effetto immediato e irreversibile senza riparazioni.",
    "rule": "Deve essere adiacente al meccanismo.",
    "flavor": "Si chiama anche \"Gurgo\" per non farsi trovare da Stella. Ma questo è un altro discorso.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Riparazione prodigiosa",
    "cost": 1,
    "stat": "tech",
    "grade": "SS",
    "desc": "Ripara istantaneamente qualsiasi oggetto meccanico o magico danneggiato. Nave: recupera 40 PF strutturali.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: Gatto ripara qualcosa che nessuno aveva chiesto, o migliora l'oggetto in modo inaspettato con conseguenze narrative imprevedibili. Non usabile in combattimento navale attivo.",
    "flavor": "L'ordine in cui le cose si trovano è spesso sterile. Per questo le spingo giù dal tavolo.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Cucina suprema",
    "cost": 1,
    "stat": "cura",
    "grade": "SS",
    "desc": "Fuori dal combattimento. Tutti i commensali recuperano 40 PF e beneficiano dell'effetto di ristorare minore.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: il piatto ha un effetto aggiuntivo non richiesto - un commensale casuale acquisisce una capacità bizzarra o tutti subiscono un effetto narrativo imprevedibile per 1 ora.",
    "flavor": "Ha buttato nella pentola tre chiodi arrugginiti, una vecchia pantofola e una crosta di pane. Ne ha tirato fuori un banchetto per 12 persone.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Costruzione titanica",
    "cost": 2,
    "stat": "tech",
    "grade": "SS",
    "desc": "Il giocatore descrive un problema. Gatto costruisce in pochi minuti qualcosa che lo risolve. La forma della soluzione è a discrezione del DM, e si rompe comunque in breve tempo.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: la costruzione risolve il problema ma ne crea uno nuovo di proporzioni simili altrove. Il giocatore descrive il problema - non la soluzione.",
    "flavor": "Quello che voglio fare è qualcosa che quel rottame non sa ancora di poter essere.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Balzo della nave",
    "cost": 3,
    "stat": "tech",
    "grade": "SS",
    "desc": "La nave compie un balzo prodigioso fino a 1km, superando qualsiasi ostacolo fisico o navale.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: la nave atterra sulla terra ferma. Richiede almeno un giorno di riparazioni e un modo per rimetterla in mare prima di poter ripartire. Gatto deve essere sveglio e a bordo. 1 volta per sessione.",
    "flavor": "Nessuno sa cosa ci sia dentro quei pedali. Nessuno ha il coraggio di cercare di scoprirlo.",
    "minion": ""
  },
  {
    "npc_id": "dorag",
    "title": "Soffio del drago",
    "cost": 1,
    "stat": "combat",
    "grade": "A",
    "desc": "A scelta: soffio di fuoco (36 danni, cono 9m, CD Riflessi 25 dimezza) oppure soffio soporifero (1 bersaglio dorme 10 min, Tempra 25 nega).",
    "rule": "Una sola forma per attivazione.",
    "flavor": "È educato. È cordiale. Brucia le cose solo quando necessario.",
    "minion": ""
  },
  {
    "npc_id": "dorag",
    "title": "Contatto dell'Airone",
    "cost": 2,
    "stat": "magia",
    "grade": "B",
    "desc": "Chiama un contatto nella rete dell'Airone. Ottieni almeno 3 informazioni riservate e concrete su una fazione, PNG o luogo.",
    "rule": "Max 1 per sessione. Informazioni a discrezione del DM.",
    "flavor": "I draghi di ottone collezionano storie. Dorag ne conosce abbastanza da riempire una biblioteca.",
    "minion": ""
  },
  {
    "npc_id": "dorag",
    "title": "Maestà del drago",
    "cost": 2,
    "stat": "combat",
    "grade": "A",
    "desc": "Tutti i nemici entro 12m con meno di 10 DV sono spaventati per 2 round. Tutti gli altri sono comunque scossi.",
    "rule": "si può cumulare con più attivazioni",
    "flavor": "La sua stazza può diventare presto molto minacciosa.",
    "minion": ""
  },
  {
    "npc_id": "murray",
    "title": "Maledizione dello stregone",
    "cost": 1,
    "stat": "magia",
    "grade": "C",
    "desc": "Un nemico subisce -2 a tutti i tiri salvezza per 1 ora. Murray scaglia la maledizione nel modo più teatralmente minaccioso possibile.",
    "rule": "Non si cumula con Maledizione Voodoo di Lady.",
    "flavor": "Sono il più terrificante non-morto dell'area delle tre isole! ok, il più terrificante PEZZO di non morto.",
    "minion": ""
  },
  {
    "npc_id": "murray",
    "title": "Dardo incantato veramente spaventoso",
    "cost": 1,
    "stat": "magia",
    "grade": "C",
    "desc": "3 dardi magici automatici da 8 danni l'uno. Distribuibili su bersagli diversi.",
    "rule": "Non richiede tiro per colpire.",
    "flavor": "- Come fai a lanciare incantesimi senza mani? - Silenzio! Non distrarre la malignità con le tue stupide domande!",
    "minion": ""
  },
  {
    "npc_id": "murray",
    "title": "Trattativa con i morti",
    "cost": 2,
    "stat": "magia",
    "grade": "C",
    "desc": "Murray convince un non-morto non intelligente a ignorare la ciurma per 10 minuti grazie alla sua parlantina.",
    "rule": "Non funziona su non-morti intelligenti.",
    "flavor": "Varcheremo le porte dell'inferno reggendo le loro teste su una picca! beh ok tu varcherai e io rotolerò.",
    "minion": ""
  },
  {
    "npc_id": "ombre",
    "title": "Armata delle tenebre",
    "cost": 1,
    "summon_cost": true,
    "stat": "combat",
    "grade": "A",
    "desc": "Le Ombre attaccano tutti i nemici entro 1,5m da loro. 1ps: 15 danni. 2ps: 30 danni. 3ps: 45 danni. 4ps: 60 danni.",
    "rule": "Spendi 1-4 PS. I danni scalano con i punti spesi. Le Ombre devono essere entro 1,5m dai bersagli.",
    "flavor": "Era poco più che un'ombra poco fa, ma ora sono corpi fatti di ossa spezzate, carne rinsecchita e fauci affamate.",
    "minion": ""
  },
  {
    "npc_id": "ombre",
    "title": "Servitori non morti",
    "cost": 1,
    "summon_cost": true,
    "stat": "combat",
    "grade": "A",
    "desc": "1ps: fiancheggia un nemico — vantaggio al primo attacco verso quel nemico. 2ps: due Ombre si sacrificano, assorbono la prossima ferita di un minion. 3ps: esplorano una zona, il DM fornisce un'informazione tattica. 4ps: bloccano un nemico per 1 round, non può agire.",
    "rule": "Spendi 1-4 PS. L'effetto corrisponde ai punti spesi. Le Ombre devono essere entro 1,5m dal bersaglio.",
    "flavor": "Lo ombre emergono dal crocicchio al richiamo dello shadow man.",
    "minion": ""
  }
];

// ══════════════════════════════════════════════════
// CONFIG
// ══════════════════════════════════════════════════
const SI = {combat:'⚔️',magia:'✡️',nav:'⚓',tech:'🔧',cura:'🍗',furtivita:'🎭'};
const SK  = ['combat','magia','nav','tech','cura','furtivita'];
const SN  = {combat:'Combattimento',magia:'Magia',nav:'Navigazione',tech:'Tecnica',cura:'Cura',furtivita:'Furtività'};

// ══════════════════════════════════════════════════
// STORE
// ══════════════════════════════════════════════════
const LS = {
  g:(k,d)=>{try{const v=localStorage.getItem(k);return v!=null?JSON.parse(v):d}catch{return d}},
  s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}
};

// ══════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════
let S = {
  view:    'home',
  rawUrl:  LS.g('rawUrl',''),
  npcs:    LS.g('npcs', BUNDLED_NPCS),
  cards:   LS.g('cards', BUNDLED_CARDS),
  deck:    LS.g('deck', []),
  session: LS.g('session', null),
  maxPool: LS.g('maxPool', 6),
  wounds:  LS.g('wounds', {}),
  loading:false, error:null, toast:null, dialog:null,
  expanded:{}, consultaExp:{}, consultaTab:'ciurma', openCard:null, openInfo:null,
  menuOpen:false, minionOpen:false, builderDeck:null,
  syncTime: LS.g('syncTime', null),
  ghToken: LS.g('ghToken', ''),
};

// ══════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════
const npcCards = id => S.cards.filter(c=>c.npc_id===id);
const npcById  = id => S.npcs.find(n=>n.id===id);
const cKey     = (n,t) => `${n}::${t}`;
const enc      = s => encodeURIComponent(s||'');
const dec      = s => {try{return decodeURIComponent(s||'')}catch{return s||''}};
const gc       = g  => `g-${(g||'d').toLowerCase()}`;
const initials = n  => (n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();

function wounds(id){ return S.wounds[id]||0; }

// Ferite subite durante la sessione corrente (0 se nessuna sessione attiva)
function sessionWounds(id){
  if(!S.session) return wounds(id);
  const atStart = S.session.woundsAtStart?.[id] || 0;
  return Math.max(0, wounds(id) - atStart);
}

function status(npc){
  const w = wounds(npc.id), pf = npc.pf_max||1;
  if(w >= pf) return 'morto';
  // Fuori per carta (disable_if)
  if(S.session?.disabledBy?.[npc.id]) return 'fuori';
  // In sessione: stato basato sulle ferite subite durante la sessione
  const sw = S.session ? sessionWounds(npc.id) : w;
  if(npc.star){ if(sw >= 2) return 'fuori'; if(sw === 1) return 'indebolito'; }
  else         { if(sw >= 1) return 'fuori'; }
  return 'sano';
}
const blocked  = npc => {
  if(npc.summoned){
    const summon=S.session?.summons?.[npc.id];
    return !summon || summon.pool<=0;
  }
  const s=status(npc); return s==='fuori'||s==='morto';
};
const isFree   = (npc,card) => npc?.star && parseInt(card.cost)===1 && timesUsed(npc.id,card.title)===0;
const effCost  = (npc,card) => isFree(npc,card)?0:parseInt(card.cost)||1;
const timesUsed= (nId,t) => (S.session?.used||{})[cKey(nId,t)]||0;

// Render TS sempre in ordine fisso Tempra → Riflessi → Volontà
const TS_ABBR = {'Tempra':'Tmp','Riflessi':'Rif','Volontà':'Vol'};
function rTS(npc, large=false) {
  const ORDER = ['Tempra','Riflessi','Volontà'];
  const forte  = new Set(npc.ts_forte||[]);
  const debole = new Set(npc.ts_debole||[]);
  const sz = large ? 'font-size:12px;padding:3px 10px' : '';
  const lbl = large ? t => t : t => TS_ABBR[t]||t;
  return ORDER.map(t => {
    if (forte.has(t))  return `<span class="ts-pill ts-forte"  style="${sz}">${lbl(t)}✓</span>`;
    if (debole.has(t)) return `<span class="ts-pill ts-debole" style="${sz}">${lbl(t)}✕</span>`;
    return '';
  }).join('');
}

// ══════════════════════════════════════════════════
// SYNC
// ══════════════════════════════════════════════════
async function syncGithub(){
  if(!S.rawUrl){toast('URL GitHub non configurato',true);return;}
  S.loading=true; S.error=null; render();
  try{
    const r=await fetch(S.rawUrl+'?t='+Date.now());
    if(!r.ok) throw new Error('HTTP '+r.status);
    const data=await r.json();
    if(!data.npcs?.length) throw new Error('"npcs" mancante o vuoto');
    if(!data.cards?.length) throw new Error('"cards" mancante o vuoto');
    S.npcs  = data.npcs.map(n=>({...n, star:['true','TRUE','1',true].includes(n.star), pf_max:parseInt(n.pf_max)||1}));
    S.cards = data.cards.map(c=>({...c, cost:parseInt(c.cost)||1}));
    S.syncTime = new Date().toISOString();
    LS.s('npcs',S.npcs); LS.s('cards',S.cards); LS.s('syncTime',S.syncTime);
    toast(`✓ ${S.npcs.length} PNG · ${S.cards.length} carte`);
  }catch(e){
    S.error=e.message; toast('Errore: '+e.message,true);
  }finally{
    S.loading=false; render();
  }
}

// ══════════════════════════════════════════════════
// ACTIONS
// ══════════════════════════════════════════════════
function startSession(){
  // Rimuovi dal mazzo PNG che non esistono più nel JSON
  S.deck = S.deck.filter(id => npcById(id));
  if(S.deck.length === 0){ toast('Nessun PNG valido nel mazzo!', true); return; }
  LS.s('deck', S.deck);
  // Snapshot ferite iniziali di ogni PNG nel mazzo
  const woundsAtStart = {};
  S.deck.forEach(id => { woundsAtStart[id] = wounds(id); });
  S.session={pool:S.maxPool, maxPool:S.maxPool, used:{}, woundsAtStart,
    disabledBy:{},
    summons:{},
    summonDeck:[]
  };
  LS.s('session',S.session);
  S.view='session'; S.expanded={}; render();
}
function endSession(){
  S.menuOpen=false;
  S.dialog={title:'Termina sessione',msg:'Le carte usate verranno azzerate. Le ferite persistono tra le sessioni.',confirmLabel:'Termina',danger:true,confirmAction:'do-end'};
  render();
}
function resetSession(){
  S.menuOpen=false;
  S.dialog={title:'Azzera sessione',msg:'Carte usate e pool verranno ripristinati. Le ferite persistono.',confirmLabel:'Azzera',danger:false,confirmAction:'do-reset'};
  render();
}
function adjPool(d){
  if(!S.session) return;
  S.session.pool=Math.max(0,Math.min(S.session.maxPool*2,S.session.pool+d));
  LS.s('session',S.session); render();
}
function adjMax(d){
  S.maxPool=Math.max(1,Math.min(20,S.maxPool+d));
  LS.s('maxPool',S.maxPool); render();
}
function playCard(npcId,cardTitle){
  if(!S.session) return;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return;
  if(blocked(npc)){toast('PNG fuori combattimento!',true);return;}

  // Carte ombre — usano summon pool invece del pool globale
  const isSummonCard = card.summon_cost;
  if(isSummonCard){
    const summon = S.session.summons?.[npcId];
    if(!summon||summon.pool<=0){toast('Punti evocazione esauriti!',true);return;}
    // Mostra selettore punti — gestito da dialog dedicato
    S.dialog={
      title: card.title,
      msg: `Quanti ${summon.pool_name||'PS'} vuoi spendere? (1-${summon.pool})`,
      confirmLabel: null,
      isSummonCost: true,
      summonNpcId: npcId,
      summonCardTitle: cardTitle,
      summonMax: summon.pool
    };
    render(); return;
  }

  const cost=effCost(npc,card);

  // disable_if: always — fuori combattimento immediato
  if(card.disable_if?.condition==='always'){
    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
    S.session.pool-=cost;
    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
    S.session.disabledBy[npcId]=true;
    LS.s('session',S.session); S.openCard=null;
    toast(`${npc.name} esce dal combattimento`); render(); return;
  }

  // disable_if: ask — chiede conferma prima
  if(card.disable_if?.condition==='ask'){
    S.dialog={
      title: card.title,
      msg: card.disable_if.prompt||'Confermi effetto speciale?',
      confirmLabel: 'Sì — applica',
      cancelLabel: 'No — effetto normale',
      confirmAction: 'play-card-disable',
      cancelAction: 'play-card-normal',
      pendingNpc: npcId,
      pendingCard: cardTitle
    };
    render(); return;
  }

  // summon: aggiunge PNG evocato al mazzo sessione
  if(card.summon){
    const sId = card.summon.npc_id;
    if(S.session.summonDeck?.includes(sId)){
      toast('Evocazione già attiva!',true); return;
    }
    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
    S.session.pool-=cost;
    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
    if(!S.session.summons) S.session.summons={};
    if(!S.session.summonDeck) S.session.summonDeck=[];
    S.session.summons[sId]={
      pool: card.summon.pool,
      maxPool: card.summon.pool,
      pool_name: card.summon.pool_name||'PS'
    };
    S.session.summonDeck.push(sId);
    LS.s('session',S.session); S.openCard=null;
    const sNpc=npcById(sId);
    toast(`✦ ${sNpc?.name||sId} evocate!`); render(); return;
  }

  // Carta normale
  if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
  S.session.pool-=cost;
  S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
  LS.s('session',S.session); S.openCard=null;
  toast(cost===0?`★ ${cardTitle} — gratuita!`:`${cardTitle} — ${cost}pt`);
  render();
}
function undoCard(npcId,cardTitle){
  if(!S.session) return;
  const key=cKey(npcId,cardTitle), was=S.session.used[key]||0;
  if(!was) return;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return;
  const wasFree=npc.star&&parseInt(card.cost)===1&&was===1;
  S.session.pool=Math.min(S.session.maxPool,S.session.pool+(wasFree?0:parseInt(card.cost)||1));
  if(was===1) delete S.session.used[key]; else S.session.used[key]=was-1;
  LS.s('session',S.session); S.openCard=null; render();
}
function addWound(npcId){
  const npc=npcById(npcId); if(!npc) return;
  if(npc.summoned && S.session?.summons?.[npcId]){
    const summon=S.session.summons[npcId];
    summon.pool=Math.max(0,summon.pool-1);
    if(summon.pool<=0){
      S.session.summonDeck=(S.session.summonDeck||[]).filter(id=>id!==npcId);
      toast(`✦ ${npc.name} si dissolvono`,true);
    } else {
      toast(`✦ ${npc.name} — ${summon.pool}/${summon.maxPool} ${summon.pool_name||'PS'}`);
    }
    flashWound();
    LS.s('session',S.session); render(); return;
  }
  const cur=wounds(npcId);
  if(cur>=npc.pf_max){toast('PNG già al massimo delle ferite!',true);return;}
  S.wounds[npcId]=cur+1; LS.s('wounds',S.wounds);
  flashWound();
  const st=status(npc);
  if(st==='morto')           toast(`☠ ${npc.name} è morto!`,true);
  else if(st==='fuori')      { toast(`✕ ${npc.name} è fuori combattimento`); shakeNpc(npcId); }
  else if(st==='indebolito') toast(`⚠ ${npc.name} è indebolito — al prossimo colpo fuori`);
  render();
}
function flashWound(){
  const el=document.createElement('div');
  el.style.cssText='position:fixed;inset:0;z-index:9999;pointer-events:none;animation:wound-flash .5s ease forwards';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),520);
}
function shakeNpc(npcId){
  setTimeout(()=>{
    const row=document.querySelector(`[data-npc="${npcId}"]`)?.closest('.npc-row');
    if(row){row.style.animation='shake .4s ease';setTimeout(()=>row.style.animation='',420);}
  },50);
}
function removeWound(npcId){
  const cur=wounds(npcId); if(cur<=0) return;
  S.wounds[npcId]=cur-1; LS.s('wounds',S.wounds);
  toast(`❤ ${npcById(npcId)?.name} guarisce una ferita`); render();
}
function toast(msg,err=false){
  S.toast={msg,err}; render();
  setTimeout(()=>{S.toast=null;render();},2800);
}

// ══════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════
let _prevOpenCard = null;
let _prevExpanded = {};
let _prevSummonDeck = [];

function render(){
  const scrollEl = document.querySelector('.almanac, .npc-list, .scroll-body, .settings-body');
  const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
  const scrollId  = scrollEl ? (scrollEl.className.split(' ')[0]) : null;

  // Traccia cosa era aperto prima del render
  const wasCardNew   = S.openCard && S.openCard !== _prevOpenCard;
  const prevExpanded = {..._prevExpanded};
  const prevSummons  = [..._prevSummonDeck];

  const views={home:rHome,builder:rBuilder,session:rSession,settings:rSettings,consulta:rConsulta};
  document.getElementById('app').innerHTML=
    (views[S.view]||rHome)()+
    (S.dialog     ? rDialog()    :'')+
    (S.openCard   ? rCardModal() :'')+
    (S.openInfo   ? rInfoModal() :'')+
    (S.minionOpen ? rMinion()    :'')+
    (S.menuOpen   ? rMenu()      :'')+
    (S.toast?`<div class="toast${S.toast.err?' toast-err':''}">${S.toast.msg}</div>`:'');

  // Anima card modal solo se appena aperto
  if(wasCardNew){
    document.querySelector('.mod-sheet:not(.mod-sheet-bottom)')?.classList.add('anim-card-flip');
  }
  // Anima info/minion modal solo se appena aperto
  if(S.openInfo && !_prevOpenCard){
    document.querySelector('.mod-sheet-bottom')?.classList.add('anim-slide-up');
  }
  // Anima drawer solo se appena espanso (non su ogni re-render)
  Object.keys(S.expanded).forEach(id=>{
    if(S.expanded[id] && !prevExpanded[id]){
      const panel=document.querySelector(`.npc-row [data-npc="${id}"] ~ * .cards-panel, .cards-panel`);
      // Trova il cards-panel del PNG appena espanso
      const row=document.querySelector(`[data-npc="${id}"]`)?.closest('.npc-row, .summon-row');
      row?.querySelector('.cards-panel')?.classList.add('anim-open');
    }
  });
  // Anima summon row solo se appena aggiunto
  (S.session?.summonDeck||[]).forEach(id=>{
    if(!prevSummons.includes(id)){
      document.querySelector(`.summon-row [data-npc="${id}"]`)?.closest('.summon-row')
        ?.classList.add('anim-summon');
    }
  });

  // Aggiorna tracking
  _prevOpenCard = S.openCard;
  _prevExpanded = {...S.expanded};
  _prevSummonDeck = [...(S.session?.summonDeck||[])];

  if(scrollId && !S.openCard && !S.openInfo && !S.dialog && !S.menuOpen && !S.minionOpen){
    const el = document.querySelector('.'+scrollId);
    if(el) el.scrollTop = scrollTop;
  }
}

// ── Summon card effect label ──────────────────────
function getSummonEffect(card, n){
  // Cerca la riga corrispondente a npo nella desc
  const lines = (card.desc||'').split(/[.—]/).map(s=>s.trim()).filter(Boolean);
  const match = lines.find(l=>l.startsWith(`${n}ps`)||l.startsWith(`${n} ps`));
  if(match) return match.replace(/^\d+\s*ps:?\s*/i,'');
  // Fallback: danni per Assalto
  if(card.title.includes('Assalto')) return `${n*15} danni`;
  return `Effetto ${n}`;
}

// ── Bottom nav ───────────────────────────────────
function rBotNav(active){
  const sess = S.session;
  return `<nav class="bot-nav">
    <button class="bot-btn${active==='home'?' active':''}" data-action="goto" data-view="home">
      <span class="bot-btn-icon">🏠</span>Home
    </button>
    <button class="bot-btn${active==='consulta'?' active':''}" data-action="goto" data-view="consulta">
      <span class="bot-btn-icon">👥</span>Ciurma
    </button>
    ${sess
      ?`<button class="bot-btn bot-btn-sess${active==='session'?' active':''}" data-action="goto" data-view="session">
          <span class="bot-btn-icon">⚔️</span>Sessione
        </button>`
      :''}
    <button class="bot-btn${active==='minion'?' active':''}" data-action="open-minion-nav">
      <span class="bot-btn-icon">📖</span>Regole
    </button>
    <button class="bot-btn${active==='settings'?' active':''}" data-action="goto" data-view="settings">
      <span class="bot-btn-icon">⚙️</span>Opzioni
    </button>
  </nav>`;
}

// ── Home ────────────────────────────────────────
function rHome(){
  const deckTxt = S.deck.length
    ? S.deck.map(id=>npcById(id)?.name||id).join(', ')
    : null;
  const syncTxt = S.syncTime
    ? new Date(S.syncTime).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})
    : 'Mai';
  const activeCount = S.deck.filter(id=>{ const n=npcById(id); return n&&status(n)==='sano'; }).length;

  return `<div class="view home-view">
  ${S.loading?'<div class="loading" style="position:absolute;top:0;left:0;right:0;z-index:10">Sincronizzazione...</div>':''}
  ${S.error?`<div class="err-banner" style="position:absolute;top:0;left:0;right:0;z-index:10">⚠ ${S.error}</div>`:''}

  <!-- Hero — metà superiore -->
  <div class="home-hero-img">
    <img src="https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2017/05/pirate-ship-wallpapers-1080p.jpg"
      alt="Pollo Diablo" onerror="this.parentElement.classList.add('hero-fallback')">
    <div class="home-hero-overlay">
      <div class="home-hero-title">⚓ Ciurma del<br>Pollo Diablo</div>
    </div>
  </div>

  <!-- Azioni — metà inferiore -->
  <div class="home-actions-panel">
    <!-- Mazzo -->
    <div class="home-deck-row">
      <div class="home-deck-info">
        <span class="home-deck-label">Mazzo</span>
        <span class="home-deck-val">${S.deck.length ? S.deck.length+' PNG' : '—'}</span>
        ${deckTxt?`<span class="home-deck-sub">${deckTxt}</span>`:''}
      </div>
      <button class="sm-btn" data-action="open-builder">✏️ Modifica</button>
    </div>

    ${S.deck.length ? `
    <!-- Pool -->
    <div class="home-pool-row">
      <span class="home-deck-label">Pool punti</span>
      <div class="stepper-row" style="margin:0">
        <button class="step-btn" data-action="adj-max" data-d="-1">−</button>
        <span class="stepper-val">${S.maxPool}</span>
        <button class="step-btn" data-action="adj-max" data-d="1">+</button>
      </div>
    </div>
    <!-- CTA sessione -->
    <button class="btn btn-g btn-lg home-sess-btn" data-action="start-session">⚔ Inizia sessione</button>
    ` : `<p class="hint-txt" style="margin:12px 0">Aggiungi PNG al mazzo per iniziare.</p>`}

    <!-- Sync strip -->
    <div class="sync-strip">
      <span>Sync: ${syncTxt} · ${S.npcs.filter(n=>!n.summoned).length} PNG · ${S.cards.length} carte</span>
      ${S.rawUrl
        ?`<button class="sm-btn" style="margin:0;padding:5px 10px" data-action="sync">🔄</button>`
        :`<button class="sm-btn" style="margin:0;padding:5px 10px" data-action="goto" data-view="settings">Configura</button>`}
    </div>
  </div>

  ${rBotNav('home')}</div>`;
}

// ── Builder ─────────────────────────────────────
function rBuilder(){
  const bd=S.builderDeck||[];
  return `<div class="view">
  <div class="hdr">
    <button class="ico-btn" data-action="cancel-builder">←</button>
    <span class="hdr-title">Modifica mazzo</span>
    <button class="confirm-btn" data-action="confirm-builder">✓ Salva (${bd.length})</button>
  </div>
  <div class="bldr-sub">Tocca un PNG per aggiungerlo o rimuoverlo</div>
  <div class="npc-grid">
    ${S.npcs.filter(npc=>!npc.summoned).map(npc=>{
      const sel=bd.includes(npc.id), w=wounds(npc.id), pf=npc.pf_max||1;
      const st=status(npc);
      return `<div class="npc-tile${sel?' sel':''}" data-action="toggle-npc" data-npc="${npc.id}">
        <div class="tile-img-wrap">
          <div class="tile-name-ov">${npc.star?'★ ':''}${npc.name}</div>
          ${npc.image_url?`<img src="${npc.image_url}" alt="${npc.name}" onerror="this.style.display='none'">`:''}
          ${!npc.image_url?`<div class="tile-img-ph">${initials(npc.name)}</div>`:''}
          ${sel?'<span class="tile-chk-ov">✓</span>':''}
        </div>
      </div>`;
    }).join('')}
  </div></div>`;
}

// ── Session ─────────────────────────────────────
function rSession(){
  if(!S.session) return rHome();
  const {pool,maxPool}=S.session;
  const summonDeck = S.session.summonDeck||[];
  return `<div class="view sess-view">
  <div class="hdr sess-hdr">
    <div class="pool-wrap">
      <div class="pool-dots">${rDots(pool,maxPool)}</div>
      <div class="pool-txt">${pool} / ${maxPool} pt</div>
    </div>
    <div class="pool-ctrl">
      <button class="step-btn" style="width:32px;height:32px;font-size:18px" data-action="adj-pool" data-d="-1">−</button>
      <button class="step-btn" style="width:32px;height:32px;font-size:18px" data-action="adj-pool" data-d="1">+</button>
      <button class="end-btn" data-action="end-session">Fine</button>
      <button class="ico-btn" data-action="open-menu">⋮</button>
    </div>
  </div>
  <div class="npc-list">
    ${S.deck.map(id=>{
      const npc=npcById(id); if(!npc) return '';
      const st=status(npc), exp=S.expanded[id];
      return `<div class="npc-row ${st}">
        ${rNpcRow(npc, st, exp, 'session')}
        ${exp ? `<div class="cards-panel">${rCardItems(npc)}</div>` : ''}
      </div>`;
    }).join('')}
    ${summonDeck.map(id=>{
      const npc=npcById(id); if(!npc) return '';
      const summon=S.session.summons?.[id];
      const exp=S.expanded[id];
      const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
      const isDead=pool<=0;
      const spDots = Array.from({length:maxPool},(_,i)=>
        `<span class="sp-dot ${i<pool?'sp-dot-on':'sp-dot-off'}"></span>`).join('');
      return `<div class="npc-row summon-row${isDead?' fuori':''}">
        <div class="nr-hdr" data-action="toggle-npc" data-npc="${id}">
          <div class="nr-avatar" style="border:1px solid var(--gold)">
            ${npc.image_url
              ?`<img src="${npc.image_url}" alt="${npc.name}">`
              :`<span style="font-size:18px;color:var(--gold)">✦</span>`}
          </div>
          <div class="nr-info">
            <div class="nr-row1">
              <span class="nr-name" style="color:var(--gold)">${npc.name}</span>
            </div>
            <div class="nr-row2">
              <span class="ca-badge">CA ${npc.ca||'?'}</span>
              ${rTS(npc)}
            </div>
          </div>
          <button class="info-btn" data-action="open-info" data-npc="${id}" data-stop>ℹ</button>
        </div>
        <div class="nr-expand-btn" data-action="toggle-npc" data-npc="${id}">
          ${exp?'▲':'▼'}
        </div>
        ${exp&&!isDead ? `<div class="cards-panel">${rCardItems(npc, true)}</div>` : ''}
      </div>`;
    }).join('')}
  </div>
  ${rBotNav('session')}</div>`;
}

// ── Consulta — Almanacco ─────────────────────────
function rConsulta(){
  const showSummon = S.consultaTab === 'summon';
  const npcList = showSummon
    ? S.npcs.filter(npc=>npc.summoned)
    : S.npcs.filter(npc=>!npc.summoned);

  return `<div class="view">
  <div class="hdr"><span class="hdr-title">🪝 Pendagli da forca</span></div>
  <div class="consulta-tabs">
    <button class="ctab${!showSummon?' ctab-active':''}" data-action="consulta-tab" data-tab="ciurma">👥 Ciurma</button>
    <button class="ctab${showSummon?' ctab-active':''}" data-action="consulta-tab" data-tab="summon">✦ Evocazioni</button>
  </div>
  <div class="almanac">
    ${npcList.length === 0
      ? `<div style="padding:30px;text-align:center;color:var(--muted);font-size:14px">${showSummon?'Nessuna evocazione disponibile':'Nessun PNG'}</div>`
      : npcList.map(npc=>{
      const exp = S.consultaExp[npc.id];
      const cards = npcCards(npc.id);
      const w = wounds(npc.id), pf = npc.pf_max||1;
      const st = status(npc);
      const wdots = Array.from({length:pf},(_,i)=>
        `<span class="wd ${i<w?'wd-on':'wd-off'}"></span>`).join('');
      const statusChip = st==='sano' ? '' :
        st==='indebolito' ? `<span class="chip chip-indebolito">⚠ Indebolito</span>` :
        st==='fuori'      ? `<span class="chip chip-fuori">✕ Fuori</span>` :
                            `<span class="chip chip-morto">☠ Morto</span>`;

      return `<div class="alm-card${exp?' alm-open':''}">
        <div class="alm-top">
          <div class="alm-photo-wrap">
            ${npc.image_url
              ? `<img class="alm-photo" src="${npc.image_url}" alt="${npc.name}" onerror="this.style.display='none';this.parentElement.querySelector('.alm-photo-ph').style.display='flex'">`+
                `<div class="alm-photo-ph" style="display:none">${initials(npc.name)}</div>`
              : `<div class="alm-photo-ph">${initials(npc.name)}</div>`}
          </div>
          <div class="alm-info">
            <div class="alm-name-row">
              ${npc.star?'<span class="alm-star">★</span>':''}
              <span class="alm-name">${npc.name}</span>
            </div>
            <div class="alm-classe">${npc.classe||''}</div>
            <div class="alm-stats">
              <span class="ca-badge">CA ${npc.ca||'?'}</span>
              ${rTS(npc)}
            </div>
            <div class="alm-wound-bar">
              ${npc.summoned
                ? Array.from({length:npc.pf_max||4},(_,i)=>`
                    <span class="alm-wd" style="background:#4a8fe0;cursor:default"></span>`).join('')
                : Array.from({length:pf},(_,i)=>`
                    <span class="alm-wd ${i<w?'alm-wd-on':'alm-wd-off'}"
                      data-action="${i<w?'remove-wound-info':'add-wound'}"
                      data-npc="${npc.id}"
                      data-stop></span>`).join('')}
            </div>
          </div>
        </div>
        <div class="alm-stat-row">
          ${SK.map(k=>`<div class="alm-stat-cell">
            <span class="alm-stat-icon">${SI[k]}</span>
            <span class="alm-stat-name">${SN[k]}</span>
            <span class="alm-stat-grade ${gc(npc[k])}">${npc[k]||'D'}</span>
          </div>`).join('')}
        </div>
        <button class="alm-cards-btn" data-action="toggle-consulta" data-npc="${npc.id}">
          ${exp ? '▲ Nascondi carte' : `▼ Carte (${cards.length})`}
        </button>
        ${exp ? `<div class="alm-cards-drawer">
          ${cards.map(card=>`
            <div class="alm-card-row" data-action="open-card-consulta" data-npc="${npc.id}" data-card="${enc(card.title)}">
              <span class="alm-card-title">${card.title}</span>
              <div class="alm-card-right">
                <span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span>
                ${card.summon_cost
                  ? `<span class="badge" style="background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090">1–4 PS</span>`
                  : `<span class="badge b-c${Math.min(parseInt(card.cost)||1,3)}">${card.cost}pt</span>`}
              </div>
            </div>`).join('')}
        </div>` : ''}
      </div>`;
    }).join('')}
  </div>
  ${rBotNav('consulta')}</div>`;
}

// ── Shared NPC row (session + consulta) ──────────
function rNpcRow(npc, st, exp, ctx){
  const w=wounds(npc.id), pf=npc.pf_max||1;
  const chip = st==='sano'  ? '' :
    st==='indebolito' ? `<span class="chip chip-indebolito">⚠ Indebolito</span>` :
    st==='fuori'      ? `<span class="chip chip-fuori">✕ Fuori</span>` :
                        `<span class="chip chip-morto">☠ Morto</span>`;
  const fb = initials(npc.name).replace(/'/g,"\\'");
  const toggleAction = ctx==='consulta' ? 'toggle-consulta' : 'toggle-npc';

  return `
    <div class="nr-hdr" data-action="${toggleAction}" data-npc="${npc.id}">
      <div class="nr-avatar">
        ${npc.image_url
          ?`<img src="${npc.image_url}" alt="${npc.name}" onerror="this.parentElement.innerHTML='${fb}'">`
          :initials(npc.name)}
      </div>
      <div class="nr-info">
        <div class="nr-row1">
          ${npc.star?'<span class="nr-star">★</span>':''}
          <span class="nr-name">${npc.name}</span>
          ${chip}
        </div>
        <div class="nr-row2">
          <span class="ca-badge">CA ${npc.ca||'?'}</span>
          ${rTS(npc)}
        </div>
      </div>
      <button class="info-btn" data-action="open-info" data-npc="${npc.id}" data-stop>ℹ</button>
    </div>
    <div class="nr-expand-btn" data-action="${toggleAction}" data-npc="${npc.id}">
      ${exp?'▲':'▼'}
    </div>`;
}

// ── Card items grid (session + consulta) ─────────
function rCardItems(npc, readonly=false){
  const cards=npcCards(npc.id), bl=blocked(npc);
  const isSummon = npc.summoned;
  const summon = isSummon ? S.session?.summons?.[npc.id] : null;

  // Barra superiore: ferite per normali, pallini blu per summon
  let topBar = '';
  if(isSummon){
    const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
    const spDots=Array.from({length:maxPool},(_,i)=>
      `<span class="wd" style="background:${i<pool?'#4a8fe0':'var(--surf3)'};border:${i<pool?'none':'1px solid var(--bord2)'}"></span>`).join('');
    topBar=`<div class="nr-wound-bar">
      <div class="wounds-row">${spDots}</div>
      <button class="wd-btn" data-action="add-wound" data-npc="${npc.id}">+ Ferita</button>
    </div>`;
  } else {
    const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
    const isDead = st==='morto';
    const wdots=Array.from({length:pf},(_,i)=>
      `<span class="wd ${i<w?'wd-on':'wd-off'}"></span>`).join('');
    topBar=`<div class="nr-wound-bar">
      <div class="wounds-row">${wdots}</div>
      ${!isDead
        ? `<button class="wd-btn" data-action="add-wound" data-npc="${npc.id}">+ Ferita</button>`
        : `<span style="font-size:12px;color:var(--muted);padding:0 8px">Morto</span>`}
    </div>`;
  }

  if(!cards.length) return topBar+'<div style="padding:10px;font-size:13px;color:var(--muted)">Nessuna carta</div>';
  const items = cards.map(card=>{
    const cost=parseInt(card.cost)||1;
    const free=!readonly && isFree(npc,card);
    const used=timesUsed(npc.id,card.title);
    const canAfford = card.summon_cost
      ? (summon?.pool||0)>0
      : free||(S.session?.pool>=cost);
    let costHtml, extra='';
    if(card.summon_cost){
      const maxPs = summon?.maxPool||4;
      const avail = summon?.pool||0;
      costHtml=`<span class="badge" style="background:#0d1f3a;color:#4a8fe0;border:1px solid #2a5090">1–${maxPs} PS</span>`;
      if(!canAfford) extra='no-pool';
    } else if(readonly){
      costHtml=`<span class="badge b-c${Math.min(cost,3)}">${cost}pt</span>`;
    } else if(bl){
      costHtml=`<span class="badge b-c1">${cost}pt</span>`; extra='locked';
    } else if(free){
      costHtml=`<span class="badge b-free">★</span>`; extra='star-free';
    } else {
      costHtml=`<span class="badge b-c${Math.min(cost,3)}">${cost}pt</span>`;
      if(!canAfford) extra='no-pool';
    }
    const isUsed = !readonly && used>0 && !(npc.star&&cost===1);
    const action = readonly ? 'open-card-consulta' : 'open-card';
    return `<div class="card-item${extra?' '+extra:''}${isUsed?' used':''}"
      data-action="${action}" data-npc="${npc.id}" data-card="${enc(card.title)}">
      <div class="ci-top">
        ${costHtml}
        ${isUsed?`<span class="use-cnt">${used}×</span>`:''}
      </div>
      <div class="ci-title">${card.title}</div>
      <div class="ci-grade"><span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span></div>
    </div>`;
  }).join('');
  return topBar+`<div class="cards-grid">${items}</div>`;
}

function rDots(pool,max){
  if(max>12) return `<span class="pool-big">${pool}</span>`;
  return Array.from({length:max},(_,i)=>`<span class="pd ${i<pool?'pd-on':'pd-off'}"></span>`).join('');
}

// ── Card Modal ──────────────────────────────────
function rCardModal(){
  const {npcId,cardTitle}=S.openCard;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return '';
  const isSummonCard = card.summon_cost;
  const summon = isSummonCard ? S.session?.summons?.[npcId] : null;
  const summonPool = summon?.pool||0;
  const cost=parseInt(card.cost)||1, free=isFree(npc,card), eff=effCost(npc,card);
  const canAfford = isSummonCard
    ? summonPool>0
    : free||(S.session?.pool>=cost);
  const used=timesUsed(npcId,cardTitle), bl=blocked(npc);
  const inSession=!!S.session;
  return `<div class="mod-ov" data-action="close-modal">
  <div class="mod-sheet" data-stop>
    <div class="mod-img-wrap">
      ${npc.image_url
        ?`<img class="mod-img" src="${npc.image_url}" alt="${npc.name}">`
        :`<div class="mod-img-ph">${initials(npc.name)}</div>`}
    </div>
    <div class="mod-body">
      <div class="mod-npc">${npc.name}${npc.star?' ★':''}</div>
      <div class="mod-title">${card.title}</div>
      <div class="mod-meta">
        <span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span>
        ${!inSession
          ? `<span class="mod-readonly">Sola lettura</span>`
          : bl
            ? `<span style="font-size:12px;color:var(--red2)">PNG fuori combattimento</span>`
            : isSummonCard
              ? `<span class="mod-cost" style="color:var(--gold)">${summonPool} ${summon?.pool_name||'PS'} disponibili</span>`
              : free
                ? `<span class="mod-free">★ Prima attivazione gratuita</span>`
                : `<span class="mod-cost">${eff}pt</span>`}
      </div>
      <div class="mod-desc">${card.desc||''}</div>
      ${card.rule?`<div class="mod-rule">${card.rule}</div>`:''}
      ${card.flavor?`<div class="mod-flavor">"${card.flavor}"</div>`:''}
      ${card.minion?`<div class="mod-minion">⚓ ${card.minion}</div>`:''}
      <div class="mod-actions">
        ${inSession&&!bl?`
          ${isSummonCard
            ? (summonPool>0 ? `
              <div class="summon-slider">
                <div class="summon-slider-ctrl">
                  <button class="step-btn" style="width:40px;height:40px;font-size:20px"
                    data-action="summon-slider-adj" data-npc="${npcId}" data-card="${enc(cardTitle)}" data-d="-1">−</button>
                  <span class="summon-slider-val" id="sslider-val">${S.openCard.sliderVal||1}</span>
                  <button class="step-btn" style="width:40px;height:40px;font-size:20px"
                    data-action="summon-slider-adj" data-npc="${npcId}" data-card="${enc(cardTitle)}" data-d="1">+</button>
                </div>
                <div class="summon-slider-effect">${getSummonEffect(card, S.openCard.sliderVal||1)}</div>
                <button class="btn btn-g" data-action="play-summon-card"
                  data-npc="${npcId}" data-card="${enc(cardTitle)}" data-cost="${S.openCard.sliderVal||1}">
                  Gioca — ${S.openCard.sliderVal||1} ${summon?.pool_name||'PS'}
                </button>
              </div>`
            : `<span style="font-size:13px;color:var(--muted)">Evocazione esaurita</span>`)
            : `<button class="btn btn-g${canAfford?'':' btn-dis'}" data-action="play-card" data-npc="${npcId}" data-card="${enc(cardTitle)}">
                ${free?'★ Attiva gratis':`Gioca (${eff}pt)`}
              </button>
              ${used?`<button class="btn btn-s" data-action="undo-card" data-npc="${npcId}" data-card="${enc(cardTitle)}">↩ Annulla ultima</button>`:''}`
          }
        `:''}
        <button class="btn btn-gh" data-action="close-modal">Chiudi</button>
      </div>
    </div>
  </div></div>`;
}

// ── Info Modal ──────────────────────────────────
function rInfoModal(){
  const npc=npcById(S.openInfo); if(!npc) return '';
  const isSummon = npc.summoned && S.session?.summons?.[npc.id];
  const summon = isSummon ? S.session.summons[npc.id] : null;
  const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
  const stLabel={sano:'🟢 Sano',indebolito:'🟡 Indebolito',fuori:'🔴 Fuori combattimento',morto:'☠️ Morto'}[st];
  const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
  const poolName=summon?.pool_name||'PS';
  return `<div class="mod-ov mod-bottom" data-action="close-info">
  <div class="mod-sheet mod-sheet-bottom" data-stop>
    <div class="info-img-wrap">
      ${npc.image_url
        ?`<img class="info-img" src="${npc.image_url}" alt="${npc.name}">`
        :`<div class="info-img-ph" style="${isSummon?'color:var(--gold)':''}">${isSummon?'✦':initials(npc.name)}</div>`}
    </div>
    <div class="info-body">
      <div class="info-name" style="${isSummon?'color:var(--gold)':''}">${npc.name}</div>
      <div class="info-cls">${npc.classe||''}</div>
      <div class="info-row">
        <span class="ca-badge" style="font-size:13px;padding:4px 10px">CA ${npc.ca||'?'}</span>
        ${isSummon
          ? `<span style="font-size:13px;color:#4a8fe0">✦ Evocazione attiva</span>`
          : `<span style="font-size:13px;color:var(--muted)">${stLabel}</span>`}
      </div>
      <div class="info-section">
        <div class="info-lbl">Tiri Salvezza</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">${rTS(npc,true)}</div>
      </div>
      <div class="info-section">
        ${isSummon
          ? `<div class="info-lbl">${poolName} — ${pool}/${maxPool}</div>
             <div class="wounds-ctrl">
               <button class="step-btn" data-action="adj-summon-pool" data-npc="${npc.id}" data-d="-1">−</button>
               <div class="wounds-dots-lg">
                 ${Array.from({length:maxPool},(_,i)=>`<span class="wd-lg ${i<pool?'':'wd-lg-off'}" style="${i<pool?'background:#4a8fe0':''}"></span>`).join('')}
               </div>
               <button class="step-btn" data-action="adj-summon-pool" data-npc="${npc.id}" data-d="1">+</button>
             </div>`
          : `<div class="info-lbl">Ferite — ${w}/${pf}</div>
             <div class="wounds-ctrl">
               <button class="step-btn" data-action="remove-wound-info" data-npc="${npc.id}">−</button>
               <div class="wounds-dots-lg">
                 ${Array.from({length:pf},(_,i)=>`<span class="wd-lg ${i<w?'wd-lg-on':'wd-lg-off'}"></span>`).join('')}
               </div>
               <button class="step-btn" data-action="add-wound-info" data-npc="${npc.id}">+</button>
             </div>`}
      </div>
      <div class="info-stat-grid">
        ${SK.map(k=>`<div class="info-stat">
          <span class="info-stat-icon">${SI[k]}</span>
          <span class="info-stat-grade ${gc(npc[k])}">${npc[k]||'D'}</span>
          <span class="info-stat-name">${SN[k]}</span>
        </div>`).join('')}
      </div>
      <button class="btn btn-gh" data-action="close-info">Chiudi</button>
    </div>
  </div></div>`;
}

// ── Minion Rules ─────────────────────────────────
function rMinion(){
  const rules=[
    ['Colpire un minion',
     'Qualsiasi colpo andato a segno elimina il minion dalla battaglia corrente e gli infligge 1 ferita. Non importa l\'entità del danno: anche un colpo minimo è sufficiente.'],
    ['Punti ferita (PF)',
     'Ogni minion ha un numero di PF pari a 1 base più 1 ogni 5 livelli. Quando le ferite accumulate raggiungono il massimo, il minion muore in modo permanente e non può essere resuscitato normalmente.'],
    ['Minion non stellati',
     'Ricevono 1 ferita → vengono messi fuori combattimento. Le loro carte diventano inaccessibili e la scheda appare in grigio.'],
    ['Minion stellati ★',
     'Ricevono 1 ferita → diventano Indeboliti. Le carte funzionano normalmente ma il prossimo colpo li metterà fuori combattimento. Con 2 ferite totali → fuori combattimento.'],
    ['Fuori combattimento',
     'Il personaggio non può usare carte né partecipare attivamente al combattimento. Rimane presente in gioco ma inattivo fino a guarigione.'],
    ['Morte permanente',
     'Quando le ferite raggiungono il massimo, il personaggio muore. Rimane visibile nel mazzo con lo stato "Morto" come promemoria. Una resurrezione straordinaria è tecnicamente possibile ma richiede circostanze narrative eccezionali.'],
    ['Guarire una ferita',
     'Ogni ferita richiede una piccola quest dedicata per essere rimossa. Il DM gestisce la guarigione fuori dall\'app e la registra manualmente nel pannello ℹ del personaggio.'],
    ['Proteggere un minion',
     'Un giocatore può dichiarare di interporsi tra un minion e un attacco in arrivo, prima che venga risolto. Il personaggio subisce l\'attacco al posto del minion: tutti i danni e gli effetti si applicano al personaggio che protegge, come se l\'attacco fosse stato diretto a lui. Costa 1 punto carta.'],
    ['Tiri salvezza',
     'I minion non tirano i dadi per i TS. Un TS classificato come Forte viene superato automaticamente. Un TS classificato come Debole viene fallito automaticamente. Non esistono altri TS intermedi per i minion.'],
  ];
  const summonRules=[
    ['Evocazioni',
     'Alcuni personaggi possono evocare PNG speciali durante il combattimento tramite carte apposite. Le evocazioni appaiono nel mazzo di sessione solo quando attivate.'],
    ['PS',
     'Le evocazioni non hanno ferite. Al posto delle ferite usano un pool di PS (Punti Summon) (blu). Ogni volta che vengono colpite perdono 1 PS.'],
    ['Esaurimento',
     'Quando i PS (Punti Summon) raggiungono 0, l\'evocazione sparisce dal mazzo e non può essere riattivata finché non si usa nuovamente la carta di evocazione (se le condizioni lo permettono).'],
    ['Carte delle Evocazioni',
     'Le carte di un\'evocazione scalano con i PS (Punti Summon) spesi: spendere più punti produce effetti più potenti. Il costo è scelto al momento dell\'attivazione con il selettore.'],
  ];
  return `<div class="mod-ov mod-bottom" data-action="close-minion">
  <div class="mod-sheet mod-sheet-bottom" data-stop>
    <div class="minion-body">
      <div class="minion-title">⚓ Regole Minion</div>
      ${rules.map(([t,b])=>`<div class="mr"><div class="mr-t">${t}</div><div class="mr-b">${b}</div></div>`).join('')}
      <div class="minion-title" style="margin-top:16px">✦ Evocazioni</div>
      ${summonRules.map(([t,b])=>`<div class="mr"><div class="mr-t">${t}</div><div class="mr-b">${b}</div></div>`).join('')}
      <button class="btn btn-gh" style="margin-top:8px" data-action="close-minion">Chiudi</button>
    </div>
  </div></div>`;
}

// ── Session Menu ──────────────────────────────────
function rMenu(){
  return `<div class="overlay" data-action="close-menu">
  <div class="menu-sheet" data-stop>
    <button class="menu-item" data-action="open-minion">📖 Regole minion</button>
    <hr class="menu-sep">
    <button class="menu-item" data-action="reset-session">🔄 Azzera carte usate + pool</button>
    <button class="menu-item" data-action="end-session">✕ Termina sessione</button>
    <hr class="menu-sep">
    <button class="menu-item menu-cancel" data-action="close-menu">Annulla</button>
  </div></div>`;
}

// ── Dialog ────────────────────────────────────────
function rDialog(){
  const{title,msg,confirmLabel,danger,confirmAction,cancelLabel,cancelAction}=S.dialog;
  return `<div class="dlg-ov">
  <div class="dlg-box" data-stop>
    <div class="dlg-title">${title}</div>
    <div class="dlg-msg">${msg}</div>
    <div class="dlg-btns">
      ${confirmLabel?`<button class="btn ${danger?'btn-d':'btn-g'}" data-action="${confirmAction}">${confirmLabel}</button>`:''}
      ${cancelLabel?`<button class="btn btn-s" data-action="${cancelAction}">${cancelLabel}</button>`:''}
      <button class="btn btn-gh" data-action="close-dialog">Annulla</button>
    </div>
  </div></div>`;
}

// ── Settings ──────────────────────────────────────
function rSettings(){
  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT'):'—';
  const hasToken=!!(S.ghToken);
  return `<div class="view">
  <div class="hdr"><span class="hdr-title">⚙️ Impostazioni</span></div>
  <div class="settings-body">

    <div class="settings-section">
      <div class="settings-section-title">🔑 GitHub</div>
      <div class="fld">
        <label>Personal Access Token</label>
        <input id="gh-token" type="password" value="${S.ghToken||''}"
          placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
          autocomplete="off" spellcheck="false">
        <span style="font-size:11px;color:var(--muted);margin-top:4px;display:block">
          Salvato solo su questo dispositivo. Scope richiesto: <code>repo</code>
        </span>
      </div>
      <button class="btn btn-g" data-action="save-token">Salva token</button>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">🚀 Push su GitHub</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px">
        BitNineStudio-Leo · branch main
      </div>
      <button class="btn btn-g${hasToken?'':' btn-dis'}" data-action="push-app"
        ${hasToken?'':'title="Inserisci prima il token"'}>
        📦 Push app → CiurmaPolloDiablo
      </button>
      <button class="btn btn-g${hasToken?'':' btn-dis'}" data-action="push-data"
        ${hasToken?'':'title="Inserisci prima il token"'}>
        📄 Push data → CiurmaData
      </button>
      <div id="push-status" style="font-size:12px;color:var(--muted);min-height:18px"></div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">🔄 Sincronizzazione dati</div>
      <div class="fld">
        <label>URL GitHub raw (data.json)</label>
        <input id="rawurl" type="url" value="${S.rawUrl}"
          placeholder="https://raw.githubusercontent.com/BitNineStudio-Leo/CiurmaData/main/data.json">
      </div>
      <button class="btn btn-g" data-action="save-url">Salva e sincronizza</button>
      <div class="sync-info">Ultimo sync: ${syncTxt}</div>
      <button class="btn btn-s" data-action="sync">🔄 Risincronizza adesso</button>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">⚠️ Dati</div>
      <button class="btn btn-d" data-action="clear-data">🗑 Ripristina dati integrati</button>
    </div>

  </div>
  ${rBotNav('settings')}</div>`;
}

// ══════════════════════════════════════════════════
// EVENTS
// ══════════════════════════════════════════════════
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-action]');
  if(!el) return;
  const{action,view,d,npc,card}=el.dataset;
  switch(action){
    case 'goto':             S.view=view; render(); break;
    case 'sync':             syncGithub(); break;
    case 'open-builder':     S.builderDeck=[...S.deck]; S.view='builder'; render(); break;
    case 'cancel-builder':   S.builderDeck=null; S.view='home'; render(); break;
    case 'confirm-builder':
      S.deck=[...(S.builderDeck||[])]; LS.s('deck',S.deck);
      S.builderDeck=null; S.view='home'; render(); break;
    case 'toggle-npc':
      if(S.view==='builder'){
        const bd=S.builderDeck||[], i=bd.indexOf(npc);
        i>=0?bd.splice(i,1):bd.push(npc); S.builderDeck=[...bd]; render();
      }else{ S.expanded[npc]=!S.expanded[npc]; render(); }
      break;
    case 'toggle-consulta':      S.consultaExp[npc]=!S.consultaExp[npc]; render(); break;
    case 'consulta-tab':         S.consultaTab=el.dataset.tab; render(); break;
    case 'open-card':
    case 'open-card-consulta':   S.openCard={npcId:npc,cardTitle:dec(card)}; render(); break;
    case 'adj-max':              adjMax(parseInt(d)); break;
    case 'start-session':        if(S.deck.length) startSession(); break;
    case 'adj-pool':             adjPool(parseInt(d)); break;
    case 'open-menu':            S.menuOpen=true; render(); break;
    case 'close-menu':           S.menuOpen=false; render(); break;
    case 'open-minion':          S.menuOpen=false; S.minionOpen=true; render(); break;
    case 'open-minion-nav':      S.minionOpen=true; render(); break;
    case 'close-minion':         S.minionOpen=false; render(); break;
    case 'reset-session':        resetSession(); break;
    case 'end-session':          endSession(); break;
    case 'do-end':
      S.dialog=null; S.session=null; LS.s('session',null); S.view='home'; render(); break;
    case 'do-reset':
      S.dialog=null;
      if(S.session){S.session.used={}; S.session.pool=S.session.maxPool; LS.s('session',S.session);}
      render(); break;
    case 'close-dialog':         S.dialog=null; render(); break;
    case 'close-modal':          S.openCard=null; render(); break;
    case 'play-card':            playCard(npc,dec(card)); break;
    case 'undo-card':            undoCard(npc,dec(card)); break;

    // Slider punti evocazione nel modal
    case 'summon-slider-adj': {
      if(!S.openCard) break;
      const summon=S.session?.summons?.[npc];
      const maxVal=summon?.pool||1;
      const cur=S.openCard.sliderVal||1;
      S.openCard.sliderVal=Math.max(1,Math.min(maxVal,cur+parseInt(el.dataset.d||0)));
      render(); break;
    }

    // Carta con costo evocazione variabile
    case 'play-summon-card': {
      const cost=parseInt(el.dataset.cost)||1;
      const c=npcCards(npc).find(x=>x.title===dec(card));
      const summon=S.session?.summons?.[npc];
      if(!summon||summon.pool<cost){toast('Punti evocazione insufficienti!',true);break;}
      summon.pool-=cost;
      S.session.used[cKey(npc,dec(card))]=(S.session.used[cKey(npc,dec(card))]||0)+1;
      // Se pool a 0, rimuovi dal summonDeck
      if(summon.pool<=0){
        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);
        toast(`✦ Le Ombre si dissolvono`, true);
      } else {
        toast(`✦ ${dec(card)} — ${cost} ${summon.pool_name||'PS'} (rimasti: ${summon.pool})`);
      }
      LS.s('session',S.session); S.openCard=null; render(); break;
    }

    // disable_if ask — confermato: applica e disabilita il caster
    case 'play-card-disable': {
      const dlg=S.dialog; S.dialog=null;
      if(!dlg) break;
      const {pendingNpc,pendingCard}=dlg;
      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);
      if(!pnpc||!pcard) break;
      const cost=effCost(pnpc,pcard);
      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}
      S.session.pool-=cost;
      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;
      S.session.disabledBy[pendingNpc]=true;
      LS.s('session',S.session); S.openCard=null;
      toast(`${pnpc.name} esce dal combattimento`); render(); break;
    }

    // disable_if ask — annullato: carta normale senza effetto disable
    case 'play-card-normal': {
      const dlg=S.dialog; S.dialog=null;
      if(!dlg) break;
      const {pendingNpc,pendingCard}=dlg;
      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);
      if(!pnpc||!pcard) break;
      const cost=effCost(pnpc,pcard);
      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}
      S.session.pool-=cost;
      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;
      LS.s('session',S.session); S.openCard=null;
      toast(`${pendingCard} — ${cost}pt`); render(); break;
    }

    // Aggiusta pool evocazione manualmente
    case 'adj-summon-pool': {
      const delta=parseInt(el.dataset.d)||0;
      const summon=S.session?.summons?.[npc];
      if(!summon) break;
      summon.pool=Math.max(0,Math.min(summon.maxPool,summon.pool+delta));
      if(summon.pool<=0){
        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);
        toast('✦ Evocazione esaurita');
      }
      LS.s('session',S.session); render(); break;
    }

    case 'add-wound':
    case 'add-wound-info':       addWound(npc); break;
    case 'remove-wound-info':    removeWound(npc); break;
    case 'open-info':            S.openInfo=npc; render(); break;
    case 'close-info':           S.openInfo=null; render(); break;
    case 'save-url':             saveUrl(); break;
    case 'save-token':           saveToken(); break;
    case 'push-app':             pushApp(); break;
    case 'push-data':            pushData(); break;
    case 'clear-data':
      S.dialog={title:'Ripristina dati',msg:'I dati GitHub verranno rimossi e si tornerà ai dati integrati.',confirmLabel:'Ripristina',danger:true,confirmAction:'do-clear'};
      render(); break;
    case 'do-clear':
      S.dialog=null;
      ['npcs','cards','rawUrl','syncTime'].forEach(k=>localStorage.removeItem(k));
      S.npcs=BUNDLED_NPCS; S.cards=BUNDLED_CARDS; S.rawUrl=''; S.syncTime=null; render(); break;
  }
});

document.addEventListener('click',e=>{
  if(e.target.classList.contains('mod-ov')){S.openCard=null;S.openInfo=null;S.minionOpen=false;render();}
  if(e.target.classList.contains('overlay')){S.menuOpen=false;render();}
});

function saveUrl(){
  const inp=document.getElementById('rawurl'); if(!inp) return;
  const url=inp.value.trim();
  if(!url.startsWith('http')){toast('URL non valido',true);return;}
  S.rawUrl=url; LS.s('rawUrl',url); syncGithub();
}

function saveToken(){
  const inp=document.getElementById('gh-token'); if(!inp) return;
  const t=inp.value.trim();
  S.ghToken=t; LS.s('ghToken',t);
  toast(t?'Token salvato ✓':'Token rimosso'); render();
}

async function ghPush(repo, filePath, content, commitMsg){
  const token=S.ghToken;
  if(!token){toast('Token mancante!',true);return false;}
  const owner='BitNineStudio-Leo';
  const apiBase=`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
  const headers={'Authorization':`token ${token}`,'Content-Type':'application/json','Accept':'application/vnd.github.v3+json'};

  // Recupera SHA attuale del file (necessario per update)
  let sha=null;
  try{
    const r=await fetch(apiBase,{headers});
    if(r.ok){ const j=await r.json(); sha=j.sha; }
  }catch(e){}

  const body={message:commitMsg,content:btoa(unescape(encodeURIComponent(content))),branch:'main'};
  if(sha) body.sha=sha;

  const res=await fetch(apiBase,{method:'PUT',headers,body:JSON.stringify(body)});
  return res.ok;
}

async function pushApp(){
  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}
  setPushStatus('⏳ Push app in corso...');
  toast('⏳ Invio in corso...');
  try{
    const ok=await ghPush('CiurmaPolloDiablo','index.html',STANDALONE_HTML,'Update app v10 da dispositivo');
    if(ok){ setPushStatus('✅ App caricata!'); toast('✅ CiurmaPolloDiablo aggiornato!'); }
    else  { setPushStatus('❌ Errore push'); toast('Errore push — verifica token e permessi',true); }
  }catch(e){ setPushStatus('❌ '+e.message); toast('Errore: '+e.message,true); }
}

async function pushData(){
  if(!S.ghToken){toast('Inserisci prima il token!',true);return;}
  setPushStatus('⏳ Push data in corso...');
  try{
    const json=JSON.stringify({npcs:S.npcs,cards:S.cards},null,2);
    const ok=await ghPush('CiurmaData','data.json',json,'Update data.json da dispositivo');
    if(ok){ setPushStatus('✅ Data caricato!'); toast('✅ CiurmaData aggiornato!'); }
    else  { setPushStatus('❌ Errore push'); toast('Errore push — verifica token e permessi',true); }
  }catch(e){ setPushStatus('❌ '+e.message); toast('Errore: '+e.message,true); }
}

function setPushStatus(msg){
  const el=document.getElementById('push-status');
  if(el) el.textContent=msg;
}

// ══════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
// Se c'è una sessione attiva al caricamento, va direttamente in sessione
if(S.session) S.view='session';
render();
