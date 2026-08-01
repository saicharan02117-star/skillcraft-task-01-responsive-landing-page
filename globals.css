:root {
  --ivory: #f5efe4;
  --paper: #fffaf1;
  --ink: #0b2759;
  --muted: #53627a;
  --blue: #255df5;
  --blue-dark: #1744cf;
  --coral: #ff6e60;
  --line: rgba(11, 39, 89, 0.14);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: var(--ivory);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
a { color: inherit; text-decoration: none; }
button, a { -webkit-tap-highlight-color: transparent; }
button { color: inherit; font: inherit; cursor: pointer; }

.site-shell { min-height: 100vh; overflow: clip; }
.skip-link {
  position: fixed; left: 16px; top: -80px; z-index: 100;
  padding: 12px 18px; background: var(--ink); color: white; border-radius: 12px;
}
.skip-link:focus { top: 16px; }

.site-header {
  position: fixed; inset: 0 0 auto; z-index: 50; height: 88px;
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
  padding: 0 clamp(24px, 5vw, 76px); border-bottom: 1px solid transparent;
  transition: height .35s ease, background .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.site-header.is-scrolled {
  height: 72px; background: rgba(255, 250, 241, .84); border-color: var(--line);
  box-shadow: 0 14px 50px rgba(34, 48, 78, .08); backdrop-filter: blur(20px);
}
.brand { display: inline-flex; align-items: center; gap: 14px; width: fit-content; font-size: 20px; font-weight: 800; letter-spacing: .27em; }
.brand-orbit { position: relative; width: 25px; height: 25px; border: 2px solid var(--ink); border-radius: 50%; transform: rotate(-25deg); }
.brand-orbit::before { content: ""; position: absolute; inset: 8px -7px; border: 2px solid var(--blue); border-radius: 50%; }
.brand-orbit i { position: absolute; width: 6px; height: 6px; right: -5px; top: 1px; border-radius: 50%; background: var(--coral); box-shadow: 0 0 0 3px var(--paper); }
.desktop-nav { display: flex; align-items: center; gap: clamp(24px, 3vw, 48px); }
.desktop-nav a { position: relative; padding: 14px 0; font-weight: 650; font-size: 14px; }
.desktop-nav a::after { content: ""; position: absolute; height: 2px; left: 50%; right: 50%; bottom: 7px; background: var(--blue); transition: left .25s ease, right .25s ease; }
.desktop-nav a:hover::after, .desktop-nav a:focus-visible::after { left: 0; right: 0; }
.nav-cta { justify-self: end; display: inline-flex; gap: 11px; align-items: center; padding: 11px 17px; border: 1px solid var(--line); border-radius: 999px; font-size: 13px; font-weight: 750; background: rgba(255,255,255,.35); transition: transform .25s ease, background .25s ease; }
.nav-cta:hover { transform: translateY(-3px) rotateX(5deg); background: white; }
.nav-cta span { color: var(--coral); }
.menu-button, .mobile-nav { display: none; }

.hero {
  position: relative; min-height: 940px; padding: 170px clamp(24px, 5vw, 76px) 88px;
  display: grid; grid-template-columns: minmax(420px, .92fr) minmax(520px, 1.08fr); align-items: center;
  gap: 34px; background:
    radial-gradient(circle at 77% 44%, rgba(60, 105, 255, .11), transparent 27%),
    radial-gradient(circle at 8% 28%, rgba(255, 110, 96, .08), transparent 23%),
    linear-gradient(135deg, #fffaf1 0%, #f5efe4 64%, #efe8dc 100%);
  perspective: 1400px;
}
.hero-grain { position: absolute; inset: 0; opacity: .22; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.10'/%3E%3C/svg%3E"); }
.hero-copy { position: relative; z-index: 4; max-width: 640px; transform: translateZ(40px); }
.eyebrow { display: inline-flex; align-items: center; gap: 10px; margin: 0 0 28px; padding: 9px 15px; border: 1px solid rgba(255,110,96,.65); border-radius: 999px; color: #ed6155; background: rgba(255,255,255,.35); font-size: 13px; font-weight: 750; box-shadow: 0 10px 30px rgba(255,110,96,.09); }
.eyebrow span { animation: sparkle 3s ease-in-out infinite; }
.hero h1 { margin: 0; max-width: 610px; font-family: Georgia, "Times New Roman", serif; font-size: clamp(64px, 6vw, 102px); font-weight: 500; line-height: .93; letter-spacing: -.058em; text-wrap: balance; }
.hero-intro { max-width: 555px; margin: 31px 0 0; color: #374c70; font-size: clamp(17px, 1.35vw, 21px); line-height: 1.55; }
.hero-actions { display: flex; gap: 16px; margin-top: 34px; }
.button { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 24px; min-height: 57px; padding: 0 24px; border: 0; border-radius: 14px; font-size: 15px; font-weight: 750; overflow: hidden; transition: transform .25s ease, box-shadow .25s ease, color .25s ease; transform-style: preserve-3d; }
.button span { transition: transform .25s ease; }
.button:hover span { transform: translate(3px, -3px); }
.button-primary { color: white; background: linear-gradient(145deg, #356bff, #174be4); box-shadow: 0 13px 0 #0e3cbd, 0 24px 32px rgba(37,93,245,.23); }
.button-primary:hover { transform: translateY(-4px) rotateX(5deg); box-shadow: 0 17px 0 #0e3cbd, 0 30px 42px rgba(37,93,245,.27); }
.button-primary:active { transform: translateY(6px); box-shadow: 0 7px 0 #0e3cbd, 0 16px 22px rgba(37,93,245,.19); }
.button-secondary { border: 1.5px solid var(--blue); color: var(--blue); background: rgba(255,255,255,.37); box-shadow: 0 10px 25px rgba(35,63,114,.08); }
.button-secondary:hover { transform: translateY(-4px) rotateX(5deg); background: white; box-shadow: 0 16px 30px rgba(35,63,114,.13); }
.hero-proof { display: flex; align-items: center; gap: 13px; margin-top: 48px; color: #183564; font-size: 13px; }
.avatar-stack { display: flex; padding-left: 10px; }
.avatar-stack i { width: 32px; height: 32px; margin-left: -10px; border: 3px solid var(--paper); border-radius: 50%; background: radial-gradient(circle at 50% 32%, #f4c8ab 0 22%, transparent 23%), linear-gradient(150deg, #89a7ff, #3c65f4); }
.avatar-stack i:nth-child(2) { background: radial-gradient(circle at 50% 32%, #d79b79 0 22%, transparent 23%), linear-gradient(150deg, #f7b5ad, #ff6e60); }
.avatar-stack i:nth-child(3) { background: radial-gradient(circle at 50% 32%, #e8b695 0 22%, transparent 23%), linear-gradient(150deg, #82daf3, #255df5); }
.proof-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--blue); }

.hero-visual { position: relative; z-index: 3; width: 100%; min-height: 650px; transform-style: preserve-3d; transform: rotateX(calc(var(--pointer-y) * -2deg)) rotateY(calc(var(--pointer-x) * 3deg)); transition: transform .18s ease-out; }
.hero-asset { position: absolute; z-index: 3; width: min(780px, 113%); height: auto; right: -2%; bottom: -1%; object-fit: contain; filter: drop-shadow(0 42px 35px rgba(47,64,95,.18)); animation: assetFloat 7s ease-in-out infinite; }
.asset-shadow { position: absolute; z-index: 1; width: 72%; height: 100px; right: 6%; bottom: 4%; background: rgba(37,53,81,.18); filter: blur(40px); border-radius: 50%; transform: rotateX(76deg); }
.ambient-orb { position: absolute; border-radius: 50%; filter: blur(1px); box-shadow: inset -16px -20px 30px rgba(11,39,89,.12), 0 22px 40px rgba(11,39,89,.12); }
.orb-one { width: 84px; height: 84px; right: 1%; top: 14%; background: radial-gradient(circle at 35% 25%, white, #a9bfff 47%, #4771f6); animation: orbFloat 6s ease-in-out infinite; }
.orb-two { width: 34px; height: 34px; left: 6%; top: 32%; background: radial-gradient(circle at 35% 25%, white, #ffb4aa 43%, var(--coral)); animation: orbFloat 4.5s 1s ease-in-out infinite reverse; }
.glass-hoop { position: absolute; border: 14px solid rgba(186,212,235,.42); border-left-color: rgba(255,255,255,.8); border-radius: 50%; box-shadow: inset 4px 0 7px white, 0 15px 25px rgba(50,71,104,.12); transform-style: preserve-3d; }
.hoop-one { width: 250px; height: 120px; right: 5%; top: 11%; transform: rotateX(62deg) rotateZ(-12deg); animation: hoopSpin 15s linear infinite; }
.hoop-two { width: 180px; height: 80px; left: 16%; bottom: 10%; transform: rotateX(68deg) rotateZ(25deg); animation: hoopSpin 12s linear infinite reverse; }
.floating-chip { position: absolute; z-index: 6; display: flex; align-items: center; gap: 10px; padding: 11px 13px; border: 1px solid rgba(255,255,255,.75); border-radius: 14px; color: var(--ink); background: rgba(255,255,255,.58); box-shadow: 0 14px 35px rgba(21,46,88,.13), inset 0 1px 0 white; backdrop-filter: blur(13px); font-size: 12px; font-weight: 780; animation: chipFloat 5s ease-in-out infinite; }
.floating-chip span { color: #6e7b91; font-size: 9px; letter-spacing: .08em; }
.floating-chip i { color: var(--coral); font-style: normal; }
.chip-skills { left: 4%; bottom: 26%; animation-delay: -.7s; }
.chip-projects { left: 28%; top: 27%; animation-delay: -2.2s; }
.chip-opportunities { right: 2%; top: 6%; animation-delay: -3.6s; }
.hero-rail { position: absolute; z-index: 5; left: clamp(24px, 5vw, 76px); right: clamp(24px, 5vw, 76px); bottom: 24px; display: flex; align-items: center; gap: 18px; color: rgba(11,39,89,.48); font-size: 9px; font-weight: 800; letter-spacing: .22em; }
.hero-rail i { height: 1px; flex: 1; background: var(--line); }

.first-slice { min-height: 720px; padding: 110px clamp(24px, 6vw, 94px); background: #0b2759; color: white; perspective: 1100px; }
.first-slice > p { margin: 0 0 17px; color: #9eb6ff; font-size: 11px; font-weight: 800; letter-spacing: .23em; }
.first-slice h2 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(44px, 5vw, 76px); font-weight: 500; letter-spacing: -.045em; }
.slice-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 74px; transform-style: preserve-3d; }
.slice-cards article { position: relative; min-height: 310px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(255,255,255,.16); border-radius: 28px; background: linear-gradient(145deg, rgba(255,255,255,.15), rgba(255,255,255,.045)); box-shadow: 0 26px 0 rgba(0,0,0,.10), 0 42px 60px rgba(0,0,0,.14); transform: rotateX(4deg) translateZ(0); transition: transform .4s ease, border-color .3s ease, background .3s ease; }
.slice-cards article:nth-child(2) { transform: translateY(-22px) rotateX(4deg); background: linear-gradient(145deg, #356bff, #1647da); }
.slice-cards article:hover { transform: translateY(-18px) rotateX(0) rotateY(-2deg) translateZ(30px); border-color: rgba(255,255,255,.5); }
.slice-cards article:nth-child(2):hover { transform: translateY(-38px) rotateX(0) rotateY(-2deg) translateZ(30px); }
.slice-cards article > span { color: #a8bbf4; font-size: 11px; font-weight: 800; letter-spacing: .18em; }
.slice-cards h3 { margin: 0 0 13px; font-size: 25px; }
.slice-cards p { margin: 0; color: #becbe4; line-height: 1.65; }
.slice-cards article:nth-child(2) p { color: #e3eaff; }
.slice-cards article > i { position: absolute; right: 26px; top: 24px; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: rgba(255,255,255,.12); font-style: normal; }

.reveal-3d { opacity: 0; transform: translateY(50px) rotateX(8deg); transform-origin: top; transition: opacity .8s ease, transform .9s cubic-bezier(.2,.8,.2,1); }
.reveal-3d.is-visible { opacity: 1; transform: none; }
.section-heading > p, .resource-heading > div > p { margin: 0 0 18px; color: var(--blue); font-size: 11px; font-weight: 850; letter-spacing: .22em; }
.section-heading h2, .resource-heading h2 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(48px, 5.2vw, 78px); font-weight: 500; line-height: 1; letter-spacing: -.05em; }
.section-heading > span { display: block; max-width: 540px; margin-top: 28px; color: var(--muted); font-size: 17px; line-height: 1.7; }

.journey-section { position: relative; padding: 120px clamp(24px, 6vw, 94px) 140px; background: linear-gradient(145deg, #fffaf1, #eee6da); overflow: hidden; perspective: 1300px; }
.journey-section::before { content: ""; position: absolute; width: 640px; height: 640px; right: -290px; top: -210px; border: 1px solid rgba(37,93,245,.15); border-radius: 50%; box-shadow: 0 0 0 70px rgba(37,93,245,.025), 0 0 0 140px rgba(37,93,245,.018); }
.journey-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(330px,.78fr) minmax(520px,1.22fr); gap: clamp(42px, 7vw, 110px); align-items: center; margin-top: 82px; }
.journey-steps { display: flex; flex-direction: column; gap: 16px; }
.journey-steps button { width: 100%; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 20px; padding: 24px 22px; border: 1px solid var(--line); border-radius: 20px; background: rgba(255,255,255,.45); text-align: left; box-shadow: 0 10px 0 rgba(30,54,95,.045), 0 20px 30px rgba(30,54,95,.035); transform-style: preserve-3d; transition: .35s cubic-bezier(.2,.8,.2,1); }
.journey-steps button:hover { transform: translateX(8px) rotateY(-2deg); background: white; }
.journey-steps button.is-active { color: white; border-color: transparent; background: linear-gradient(145deg, #356bff, #1648da); box-shadow: -8px 12px 0 #0e3bb5, 0 28px 45px rgba(37,93,245,.25); transform: translate(8px,-5px) rotateY(-2deg); }
.journey-steps button > span { color: #8691a6; font-size: 10px; font-weight: 900; letter-spacing: .12em; }
.journey-steps button.is-active > span { color: #d5dfff; }
.journey-steps h3 { margin: 0 0 6px; font-size: 20px; }
.journey-steps p { margin: 0; color: #6d7789; font-size: 13px; line-height: 1.55; }
.journey-steps button.is-active p { color: #d5dfff; }
.journey-steps button > i { font-style: normal; color: var(--coral); }

.roadmap-stage { position: relative; min-height: 630px; display: grid; place-items: center; border-radius: 44px; background: linear-gradient(150deg, #0b2759, #113d89 64%, #2255d6); box-shadow: 0 35px 0 #08204b, 0 60px 80px rgba(11,39,89,.24); transform-style: preserve-3d; overflow: hidden; transition: background .5s ease; }
.roadmap-stage.step-2 { background: linear-gradient(150deg, #102a59, #174bc4 65%, #ff6e60 150%); }
.roadmap-stage.step-3 { background: linear-gradient(150deg, #142b57, #245cf1 70%, #6187ff); }
.stage-grid { position: absolute; inset: 0; opacity: .22; background-image: linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px); background-size: 48px 48px; transform: perspective(600px) rotateX(63deg) scale(1.6) translateY(18%); transform-origin: bottom; }
.stage-ring { position: absolute; border: 17px solid rgba(178,209,255,.18); border-radius: 50%; box-shadow: inset 0 0 0 2px rgba(255,255,255,.25), 0 0 50px rgba(83,128,255,.18); }
.ring-a { width: 330px; height: 170px; right: -80px; top: -5px; transform: rotateX(62deg) rotateZ(15deg); animation: stageRing 13s linear infinite; }
.ring-b { width: 220px; height: 110px; left: -45px; bottom: 40px; transform: rotateX(65deg) rotateZ(-24deg); animation: stageRing 9s linear infinite reverse; }
.roadmap-console { position: relative; z-index: 4; width: min(470px, 72%); padding: 24px; border: 1px solid rgba(255,255,255,.35); border-radius: 30px; background: linear-gradient(145deg, rgba(255,255,255,.27), rgba(255,255,255,.09)); box-shadow: 0 24px 0 rgba(5,24,64,.20), 0 45px 70px rgba(5,24,64,.32), inset 0 1px 0 rgba(255,255,255,.6); backdrop-filter: blur(22px); transform: rotateX(5deg) rotateY(-7deg) translateZ(50px); transition: transform .5s ease; }
.roadmap-stage:hover .roadmap-console { transform: rotateX(1deg) rotateY(-2deg) translateZ(70px) translateY(-8px); }
.roadmap-console header { display: flex; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,.2); color: white; font-size: 10px; font-weight: 850; letter-spacing: .16em; }
.roadmap-console header i { color: #a9c1ff; font-style: normal; }
.console-score { display: flex; align-items: center; justify-content: space-between; padding: 30px 3px 24px; color: white; }
.console-score small { display: block; margin-bottom: 7px; color: #b9c9e8; font-size: 9px; font-weight: 800; letter-spacing: .16em; }
.console-score strong { font-family: Georgia, serif; font-size: 54px; font-weight: 500; }
.score-orbit { position: relative; width: 68px; height: 68px; border: 9px solid rgba(255,255,255,.17); border-left-color: #7aa0ff; border-radius: 50%; animation: spin 7s linear infinite; }
.score-orbit i { position: absolute; width: 13px; height: 13px; top: -8px; left: 8px; border-radius: 50%; background: var(--coral); box-shadow: 0 0 18px rgba(255,110,96,.75); }
.console-path { display: grid; gap: 11px; }
.console-path > div { display: flex; align-items: center; gap: 14px; padding: 13px; border: 1px solid rgba(255,255,255,.13); border-radius: 14px; color: #9db0d2; background: rgba(3,22,58,.20); transition: .4s ease; }
.console-path > div.is-complete { color: white; background: rgba(255,255,255,.13); transform: translateX(5px); }
.console-path > div > span { width: 29px; height: 29px; display: grid; place-items: center; border-radius: 50%; background: rgba(255,255,255,.11); font-size: 11px; font-weight: 850; }
.console-path > div.is-complete > span { color: #173b90; background: #dfe7ff; }
.console-path p { margin: 0; font-size: 12px; font-weight: 750; }
.console-path small { display: block; margin-top: 2px; color: #8fa6ce; font-size: 9px; font-weight: 600; }
.stage-float { position: absolute; z-index: 6; padding: 12px 15px; border: 1px solid rgba(255,255,255,.55); border-radius: 14px; color: #18315e; background: rgba(255,255,255,.82); box-shadow: 0 18px 35px rgba(2,19,51,.24); backdrop-filter: blur(16px); font-size: 10px; font-weight: 760; animation: chipFloat 5s ease-in-out infinite; }
.stage-float span { display: block; color: var(--blue); font-size: 20px; }
.float-a { left: 5%; top: 19%; }
.float-b { right: 4%; bottom: 16%; animation-delay: -2.5s; }

.outcomes-section { position: relative; min-height: 900px; padding: 125px clamp(24px,6vw,94px); color: white; background: linear-gradient(145deg, #081e47, #0b2b69 62%, #123b89); overflow: hidden; perspective: 1200px; }
.section-heading.light > p { color: #ff9187; }
.section-heading.light > span { color: #b7c7e4; }
.outcome-grid { position: relative; z-index: 4; display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-top: 75px; }
.outcome-card { min-height: 330px; padding: 28px; border: 1px solid rgba(255,255,255,.16); border-radius: 28px; background: linear-gradient(145deg, rgba(255,255,255,.14), rgba(255,255,255,.045)); box-shadow: 0 25px 0 rgba(0,0,0,.10), 0 45px 60px rgba(0,0,0,.14); transform-style: preserve-3d; transition-delay: var(--delay); }
.outcome-card:hover { transform: translateY(-18px) rotateX(3deg) rotateY(-3deg) !important; background: rgba(255,255,255,.15); }
.outcome-card > span { color: #8aa6df; font-size: 10px; font-weight: 850; letter-spacing: .16em; }
.outcome-card strong { display: block; margin-top: 65px; font-family: Georgia, serif; font-size: clamp(52px,5vw,76px); font-weight: 500; letter-spacing: -.06em; }
.outcome-card h3 { margin: 12px 0 5px; font-size: 17px; }
.outcome-card p { margin: 0; color: #9db1d4; font-size: 12px; }
.outcome-orbit { position: absolute; border: 1px solid rgba(255,255,255,.13); border-radius: 50%; animation: spin 18s linear infinite; }
.outcome-orbit::before, .outcome-orbit::after { content: ""; position: absolute; inset: 15%; border: 1px solid rgba(255,255,255,.11); border-radius: 50%; }
.outcome-orbit::after { inset: 32%; }
.outcome-orbit i { position: absolute; width: 24px; height: 24px; border-radius: 50%; background: radial-gradient(circle at 30% 25%, #fff, #ff6e60 40%, #c94237); box-shadow: 0 0 35px rgba(255,110,96,.7); }
.outcome-orbit-one { width: 510px; height: 510px; right: -180px; top: -180px; }
.outcome-orbit-one i { top: 52%; left: -11px; }
.outcome-orbit-two { width: 250px; height: 250px; left: -100px; bottom: -70px; animation-direction: reverse; }
.outcome-orbit-two i { right: 8%; top: 7%; }

.resources-section { padding: 125px clamp(24px,6vw,94px) 150px; background: #f5efe4; perspective: 1200px; }
.resource-heading { display: grid; grid-template-columns: 1.2fr .8fr; gap: 60px; align-items: end; }
.resource-heading > p { max-width: 430px; margin: 0 0 5px; color: var(--muted); font-size: 17px; line-height: 1.7; }
.resource-deck { display: grid; grid-template-columns: repeat(3,1fr); gap: 25px; margin-top: 76px; }
.resource-card { position: relative; min-height: 510px; padding: 27px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(11,39,89,.12); border-radius: 30px; background: #fffaf1; box-shadow: 0 24px 0 rgba(11,39,89,.07), 0 48px 60px rgba(11,39,89,.10); overflow: hidden; transform-style: preserve-3d; }
.resource-card:hover { transform: translateY(-16px) rotateX(2deg) rotateY(-2deg); }
.resource-card > span { position: relative; z-index: 3; font-size: 10px; font-weight: 850; letter-spacing: .16em; }
.resource-card h3 { max-width: 340px; margin: 0 0 16px; font-family: Georgia, serif; font-size: 34px; font-weight: 500; line-height: 1.05; letter-spacing: -.04em; }
.resource-card > div:last-child { position: relative; z-index: 4; }
.resource-card > div:last-child p { display: flex; justify-content: space-between; margin: 0; padding-top: 18px; border-top: 1px solid rgba(11,39,89,.13); color: var(--muted); font-size: 11px; font-weight: 750; }
.resource-card > div:last-child i { color: var(--coral); font-style: normal; }
.resource-object { position: absolute; width: 260px; height: 260px; right: -26px; top: 50px; transform-style: preserve-3d; animation: objectFloat 7s ease-in-out infinite; }
.resource-object > span { position: absolute; width: 150px; height: 150px; right: 35px; top: 30px; border-radius: 32px; background: linear-gradient(145deg, #4c78ff, #2052e2); box-shadow: 18px 25px 0 #143cae, 30px 45px 45px rgba(11,39,89,.22); transform: rotate(24deg) skewY(-8deg); }
.resource-object > i { position: absolute; width: 105px; height: 105px; left: 8px; top: 108px; border: 15px solid rgba(188,215,237,.65); border-radius: 50%; box-shadow: inset 5px 2px 5px white, 0 16px 25px rgba(11,39,89,.13); }
.resource-object > b { position: absolute; width: 42px; height: 42px; right: 20px; bottom: 15px; border-radius: 50%; background: var(--coral); box-shadow: inset -7px -9px 14px rgba(141,46,38,.22), 0 17px 25px rgba(255,110,96,.24); }
.resource-card.coral .resource-object > span { background: linear-gradient(145deg, #ff8e82, #ec5c50); box-shadow: 18px 25px 0 #b63d34, 30px 45px 45px rgba(109,43,43,.2); }
.resource-card.coral .resource-object > b { background: var(--blue); }
.resource-card.sand .resource-object > span { background: linear-gradient(145deg, #eed8ba, #cfb68f); box-shadow: 18px 25px 0 #ae9267, 30px 45px 45px rgba(87,62,27,.15); }
.resource-card.sand .resource-object > b { background: #7fa0ff; }

.planner-cta { position: relative; min-height: 760px; display: flex; align-items: center; justify-content: center; padding: 110px 24px; color: white; background: linear-gradient(145deg, #245df2, #153fc2); overflow: hidden; perspective: 1200px; }
.planner-cta::before { content: ""; position: absolute; inset: -20%; background: repeating-radial-gradient(circle at 50% 55%, transparent 0 92px, rgba(255,255,255,.08) 94px 95px); transform: rotateX(63deg) scale(1.4); }
.cta-copy { position: relative; z-index: 5; text-align: center; }
.cta-copy > p { margin: 0 0 22px; color: #cfdbff; font-size: 11px; font-weight: 850; letter-spacing: .22em; }
.cta-copy h2 { margin: 0 0 48px; font-family: Georgia, serif; font-size: clamp(58px,7vw,104px); font-weight: 500; line-height: .92; letter-spacing: -.055em; }
.cta-copy .button-primary { color: var(--ink); background: #fffaf1; box-shadow: 0 14px 0 #c4cee8, 0 28px 40px rgba(5,27,89,.24); }
.cta-sphere { position: absolute; width: 470px; height: 470px; right: -170px; top: -120px; border: 40px solid rgba(197,218,255,.20); border-radius: 50%; box-shadow: inset 12px 0 20px rgba(255,255,255,.3), 0 40px 70px rgba(6,30,98,.2); animation: spin 20s linear infinite; }
.cta-sphere span, .cta-sphere i, .cta-sphere b { position: absolute; border-radius: 50%; }
.cta-sphere span { width: 68px; height: 68px; left: -45px; top: 48%; background: radial-gradient(circle at 30% 25%,white,#ff8176 45%,#d14439); }
.cta-sphere i { width: 32px; height: 32px; right: 4%; bottom: 6%; background: #fff; }
.cta-sphere b { width: 18px; height: 18px; left: 32%; top: -30px; background: #8fb0ff; }
.cta-note { position: absolute; right: 45px; bottom: 35px; color: #bfd0ff; font-size: 10px; line-height: 1.6; text-align: right; letter-spacing: .1em; }

footer { min-height: 250px; padding: 60px clamp(24px,6vw,94px) 32px; display: grid; grid-template-columns: 1fr 1fr; align-items: start; gap: 24px; color: white; background: #071b41; }
.footer-brand { color: white; }
.footer-brand .brand-orbit { border-color: white; }
footer > p { justify-self: end; margin: 5px 0; color: #9fb0ce; }
footer > div { display: flex; gap: 28px; align-self: end; }
footer > div a { color: #c6d1e5; font-size: 12px; }
footer > div a:hover { color: white; }
footer > small { justify-self: end; align-self: end; color: #778cab; font-size: 10px; }

.planner-modal { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 20px; background: rgba(5,19,48,.64); backdrop-filter: blur(16px); animation: modalIn .3s ease; }
.planner-modal > section { position: relative; width: min(620px, 100%); max-height: 90vh; overflow-x: hidden; overflow-y: auto; padding: 48px; border: 1px solid rgba(255,255,255,.7); border-radius: 34px; background: linear-gradient(145deg, #fffaf1, #eee6da); box-shadow: 0 35px 0 rgba(5,19,48,.25), 0 60px 100px rgba(5,19,48,.38); transform: rotateX(2deg); animation: modalCard .45s cubic-bezier(.2,.8,.2,1); }
.modal-close { position: absolute; z-index: 5; right: 20px; top: 20px; width: 42px; height: 42px; border: 1px solid var(--line); border-radius: 50%; background: rgba(255,255,255,.55); font-size: 24px; line-height: 1; }
.modal-kicker { margin: 0 0 16px; color: var(--blue); font-size: 10px; font-weight: 850; letter-spacing: .19em; }
.planner-modal h2 { position: relative; z-index: 2; max-width: 480px; margin: 0; font-family: Georgia, serif; font-size: clamp(40px,5vw,58px); font-weight: 500; line-height: 1; letter-spacing: -.045em; }
.modal-intro { position: relative; z-index: 2; max-width: 440px; color: var(--muted); line-height: 1.65; }
.modal-orbit { position: absolute; width: 180px; height: 180px; right: -50px; top: -60px; border: 18px solid rgba(37,93,245,.12); border-radius: 50%; animation: spin 12s linear infinite; }
.modal-orbit i { position: absolute; width: 22px; height: 22px; left: -19px; top: 45%; border-radius: 50%; background: var(--coral); }
.track-options { position: relative; z-index: 2; display: grid; gap: 11px; margin-top: 30px; }
.track-options button { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px; padding: 16px; border: 1px solid var(--line); border-radius: 16px; background: rgba(255,255,255,.5); text-align: left; font-weight: 750; transition: .25s ease; }
.track-options button:hover { transform: translateX(5px); background: white; }
.track-options button.is-selected { color: white; border-color: transparent; background: var(--blue); box-shadow: -6px 8px 0 #133fbf; transform: translate(5px,-3px); }
.track-options button > span { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 11px; color: var(--blue); background: #e7edff; }
.track-options button > i { font-style: normal; }
.modal-submit { width: 100%; margin-top: 30px; }
.generated-steps { display: grid; gap: 12px; margin-top: 28px; }
.generated-steps article { display: grid; grid-template-columns: auto 1fr; gap: 16px; padding: 17px; border: 1px solid var(--line); border-radius: 17px; background: rgba(255,255,255,.55); box-shadow: 0 10px 0 rgba(11,39,89,.045); }
.generated-steps article > span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 12px; color: white; background: var(--blue); font-size: 10px; font-weight: 850; }
.generated-steps h3 { margin: 0 0 4px; font-size: 15px; }
.generated-steps p { margin: 0; color: var(--muted); font-size: 12px; }

@keyframes sparkle { 50% { transform: rotate(180deg) scale(1.35); } }
@keyframes assetFloat { 50% { transform: translateY(-12px) rotateZ(.3deg); } }
@keyframes orbFloat { 50% { transform: translate3d(10px,-18px,30px) rotate(18deg); } }
@keyframes chipFloat { 50% { transform: translateY(-9px) rotateX(5deg); } }
@keyframes hoopSpin { to { transform: rotateX(62deg) rotateZ(348deg); } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes stageRing { to { transform: rotateX(62deg) rotateZ(375deg); } }
@keyframes objectFloat { 50% { transform: translateY(-13px) rotateY(4deg); } }
@keyframes modalIn { from { opacity: 0; } }
@keyframes modalCard { from { opacity: 0; transform: translateY(40px) rotateX(12deg) scale(.96); } }

@media (max-width: 1050px) {
  .desktop-nav, .nav-cta { display: none; }
  .site-header { grid-template-columns: 1fr auto; }
  .menu-button { justify-self: end; display: grid; place-content: center; gap: 7px; width: 45px; height: 45px; border: 1px solid var(--line); border-radius: 50%; background: rgba(255,255,255,.55); }
  .menu-button span { width: 20px; height: 2px; background: var(--ink); transition: transform .25s ease; }
  .menu-button.is-open span:first-child { transform: translateY(4.5px) rotate(45deg); }
  .menu-button.is-open span:last-child { transform: translateY(-4.5px) rotate(-45deg); }
  .mobile-nav { position: absolute; left: 20px; right: 20px; top: 76px; display: flex; flex-direction: column; padding: 18px; border: 1px solid var(--line); border-radius: 22px; background: rgba(255,250,241,.94); box-shadow: 0 24px 50px rgba(24,42,75,.15); backdrop-filter: blur(18px); opacity: 0; pointer-events: none; transform: translateY(-10px) rotateX(-8deg); transform-origin: top; transition: .25s ease; }
  .mobile-nav.is-open { opacity: 1; pointer-events: auto; transform: none; }
  .mobile-nav a, .mobile-nav button { padding: 14px; border: 0; border-bottom: 1px solid var(--line); background: transparent; font-weight: 700; text-align: left; }
  .mobile-nav button:last-child { margin-top: 8px; border: 0; border-radius: 13px; color: white; background: var(--blue); text-align: center; }
  .hero { min-height: auto; padding-top: 142px; grid-template-columns: 1fr; }
  .hero-copy { max-width: 760px; }
  .hero h1 { max-width: 730px; }
  .hero-visual { min-height: 620px; max-width: 760px; margin: -40px auto 0; }
  .hero-rail { display: none; }
  .journey-grid { grid-template-columns: 1fr; }
  .roadmap-stage { min-height: 610px; }
  .outcome-grid { grid-template-columns: repeat(2,1fr); }
  .resource-heading { grid-template-columns: 1fr; }
  .resource-deck { grid-template-columns: repeat(2,1fr); }
  .resource-card:last-child { grid-column: span 2; }
}

@media (max-width: 720px) {
  .site-header { height: 72px; padding: 0 20px; }
  .brand { font-size: 17px; }
  .hero { padding: 126px 20px 64px; }
  .eyebrow { margin-bottom: 23px; }
  .hero h1 { font-size: clamp(54px, 16vw, 78px); }
  .hero-intro { font-size: 17px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-proof { flex-wrap: wrap; row-gap: 7px; margin-top: 40px; }
  .hero-visual { min-height: 440px; margin-top: 12px; }
  .hero-asset { width: 120%; right: -10%; }
  .floating-chip { transform: scale(.8); }
  .chip-skills { left: -4%; }
  .chip-projects { left: 20%; top: 20%; }
  .chip-opportunities { right: -7%; }
  .orb-one { width: 56px; height: 56px; }
  .first-slice { padding: 82px 20px; }
  .slice-cards { grid-template-columns: 1fr; margin-top: 50px; }
  .slice-cards article, .slice-cards article:nth-child(2) { min-height: 245px; transform: none; }
  .slice-cards article:hover, .slice-cards article:nth-child(2):hover { transform: translateY(-8px) rotateX(1deg); }
  .journey-section, .outcomes-section, .resources-section { padding: 84px 20px 100px; }
  .journey-grid { margin-top: 50px; }
  .journey-steps button.is-active { transform: translateY(-4px); }
  .roadmap-stage { min-height: 520px; border-radius: 28px; box-shadow: 0 22px 0 #08204b, 0 45px 60px rgba(11,39,89,.2); }
  .roadmap-console { width: 82%; padding: 18px; transform: rotateX(3deg) rotateY(-3deg); }
  .console-score strong { font-size: 44px; }
  .stage-float { transform: scale(.86); }
  .float-a { left: 2%; top: 10%; }
  .float-b { right: 1%; bottom: 8%; }
  .outcome-grid, .resource-deck { grid-template-columns: 1fr; }
  .outcome-card { min-height: 280px; }
  .outcome-card strong { margin-top: 45px; }
  .resource-card, .resource-card:last-child { min-height: 460px; grid-column: auto; }
  .resource-heading { gap: 28px; }
  .planner-cta { min-height: 660px; }
  .cta-note { display: none; }
  footer { grid-template-columns: 1fr; }
  footer > p, footer > small { justify-self: start; }
  footer > div { flex-wrap: wrap; }
  .planner-modal > section { padding: 40px 22px 28px; border-radius: 26px; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
  .hero-visual { transform: none; }
}
