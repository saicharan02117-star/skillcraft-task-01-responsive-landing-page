"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Resources", href: "#resources" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeStep, setActiveStep] = useState(0);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [track, setTrack] = useState("Data & AI");
  const [planReady, setPlanReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.16 },
    );
    const items = document.querySelectorAll(".reveal-3d");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlannerOpen(false);
    };
    document.body.style.overflow = plannerOpen ? "hidden" : "";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [plannerOpen]);

  const perspective = {
    "--pointer-x": pointer.x,
    "--pointer-y": pointer.y,
  } as CSSProperties;

  return (
    <main
      className="site-shell"
      style={perspective}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        setPointer({
          x: Number(((event.clientX / window.innerWidth - 0.5) * 2).toFixed(3)),
          y: Number(((event.clientY / window.innerHeight - 0.5) * 2).toFixed(3)),
        });
      }}
    >
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Orbit home">
          <span className="brand-orbit" aria-hidden="true"><i /></span>
          <span>ORBIT</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button className="nav-cta" type="button" onClick={() => setPlannerOpen(true)}>Start your orbit <span>↗</span></button>

        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>

        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <button type="button" onClick={() => { setMenuOpen(false); setPlannerOpen(true); }}>Start your orbit ↗</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy" id="main-content">
          <p className="eyebrow"><span>✦</span> Built for ambitious students</p>
          <h1>Turn ambition into a clear career path.</h1>
          <p className="hero-intro">
            Orbit maps your skills, projects, and opportunities into one focused plan—powered by responsible AI.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => setPlannerOpen(true)}>Build my roadmap <span>↗</span></button>
            <a className="button button-secondary" href="#how-it-works">See how it works <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Orbit user results">
            <div className="avatar-stack" aria-hidden="true">
              <i /><i /><i />
            </div>
            <strong>10,000+ learners</strong>
            <span className="proof-dot" />
            <strong>92% clearer next steps</strong>
          </div>
        </div>

        <div className="hero-visual" aria-label="Three-dimensional career roadmap from skills to opportunities">
          <div className="ambient-orb orb-one" aria-hidden="true" />
          <div className="ambient-orb orb-two" aria-hidden="true" />
          <div className="glass-hoop hoop-one" aria-hidden="true" />
          <div className="glass-hoop hoop-two" aria-hidden="true" />
          <div className="asset-shadow" aria-hidden="true" />
          <Image
            className="hero-asset"
            src="/orbit-hero-3d.png"
            alt="3D staircase showing career progress from skills to projects and opportunities"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 720px) 120vw, (max-width: 1050px) 760px, 56vw"
          />
          <div className="floating-chip chip-skills"><span>01</span> Skills <i>◆</i></div>
          <div className="floating-chip chip-projects"><span>02</span> Projects <i>●</i></div>
          <div className="floating-chip chip-opportunities"><span>03</span> Opportunities <i>★</i></div>
        </div>

        <div className="hero-rail" aria-hidden="true">
          <span>SKILLS</span><i /><span>PROJECTS</span><i /><span>OPPORTUNITIES</span>
        </div>
      </section>

      <section className="first-slice" id="product" aria-label="Orbit product introduction">
        <p>YOUR CAREER, IN MOTION</p>
        <h2>A plan that grows with you.</h2>
        <div className="slice-cards">
          {[
            ["01", "Map your strengths", "See the capabilities already moving you forward."],
            ["02", "Build proof", "Turn learning into projects that recruiters can understand."],
            ["03", "Find your next move", "Match your profile to the right opportunities."],
          ].map(([number, title, copy]) => (
            <article className="reveal-3d" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section" id="how-it-works">
        <div className="section-heading reveal-3d">
          <p>HOW ORBIT WORKS</p>
          <h2>Three moves.<br />One clear direction.</h2>
          <span>Explore each layer of your roadmap. Every choice updates the 3D path beside it.</span>
        </div>

        <div className="journey-grid">
          <div className="journey-steps reveal-3d" role="tablist" aria-label="Orbit roadmap steps">
            {[
              ["01", "Discover", "Orbit reads your goals, strengths and interests."],
              ["02", "Build", "You get focused projects and proof-of-skill milestones."],
              ["03", "Launch", "Match your evidence to internships and real opportunities."],
            ].map(([number, title, copy], index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeStep === index}
                className={activeStep === index ? "is-active" : ""}
                key={number}
                onClick={() => setActiveStep(index)}
              >
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <i>↗</i>
              </button>
            ))}
          </div>

          <div className={`roadmap-stage step-${activeStep + 1} reveal-3d`} aria-live="polite">
            <div className="stage-grid" aria-hidden="true" />
            <div className="stage-ring ring-a" aria-hidden="true" />
            <div className="stage-ring ring-b" aria-hidden="true" />
            <div className="roadmap-console">
              <header><span>YOUR ORBIT</span><i>LIVE ROADMAP</i></header>
              <div className="console-score">
                <div><small>CLARITY SCORE</small><strong>{[68, 81, 94][activeStep]}%</strong></div>
                <span className="score-orbit"><i /></span>
              </div>
              <div className="console-path">
                {["Skill map", "Portfolio proof", "Opportunity match"].map((label, index) => (
                  <div className={index <= activeStep ? "is-complete" : ""} key={label}>
                    <span>{index < activeStep ? "✓" : index + 1}</span>
                    <p>{label}<small>{index <= activeStep ? "In motion" : "Up next"}</small></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="stage-float float-a"><span>+12%</span> skill signal</div>
            <div className="stage-float float-b"><span>{[3, 6, 12][activeStep]}</span> next actions</div>
          </div>
        </div>
      </section>

      <section className="outcomes-section" id="outcomes">
        <div className="outcome-orbit outcome-orbit-one" aria-hidden="true"><i /></div>
        <div className="outcome-orbit outcome-orbit-two" aria-hidden="true"><i /></div>
        <div className="section-heading light reveal-3d">
          <p>OUTCOMES THAT MOVE</p>
          <h2>Confidence you<br />can measure.</h2>
          <span>Orbit turns uncertainty into visible momentum—from your first skill map to your next application.</span>
        </div>
        <div className="outcome-grid">
          {[
            ["92%", "clearer next steps", "after the first roadmap"],
            ["3.4×", "more portfolio proof", "completed per learner"],
            ["28h", "saved every month", "on scattered planning"],
            ["84%", "feel interview-ready", "before applications"],
          ].map(([value, label, detail], index) => (
            <article className="outcome-card reveal-3d" key={label} style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <span>0{index + 1}</span><strong>{value}</strong><h3>{label}</h3><p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-section" id="resources">
        <div className="resource-heading reveal-3d">
          <div><p>RESOURCES</p><h2>Everything you need<br />to keep moving.</h2></div>
          <p>Short, practical guides designed around the moments that matter most in your career journey.</p>
        </div>
        <div className="resource-deck">
          {[
            ["01", "The proof-first portfolio", "6 min read", "blue"],
            ["02", "Choose projects that signal skill", "8 min read", "coral"],
            ["03", "Your internship launch checklist", "5 min read", "sand"],
          ].map(([number, title, meta, color]) => (
            <a className={`resource-card ${color} reveal-3d`} href="#planner" onClick={(event) => { event.preventDefault(); setPlannerOpen(true); }} key={number}>
              <div className="resource-object" aria-hidden="true"><span /><i /><b /></div>
              <span>{number} / GUIDE</span>
              <div><h3>{title}</h3><p>{meta} <i>↗</i></p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="planner-cta" id="planner">
        <div className="cta-sphere" aria-hidden="true"><span /><i /><b /></div>
        <div className="cta-copy reveal-3d">
          <p>READY FOR YOUR NEXT MOVE?</p>
          <h2>Your future needs<br />a clearer orbit.</h2>
          <button className="button button-primary" type="button" onClick={() => setPlannerOpen(true)}>Build my roadmap <span>↗</span></button>
        </div>
        <div className="cta-note">Free prototype experience<br />No credit card required</div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-orbit" aria-hidden="true"><i /></span><span>ORBIT</span></a>
        <p>Career clarity, designed in motion.</p>
        <div><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href="#resources">Resources</a></div>
        <small>© 2026 Orbit. Internship prototype by Sai Charan.</small>
      </footer>

      {plannerOpen && (
        <div className="planner-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPlannerOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="planner-title">
            <button className="modal-close" type="button" aria-label="Close roadmap builder" onClick={() => setPlannerOpen(false)}>×</button>
            <div className="modal-orbit" aria-hidden="true"><i /></div>
            {!planReady ? (
              <>
                <p className="modal-kicker">QUICKSTART YOUR ORBIT</p>
                <h2 id="planner-title">What are you building toward?</h2>
                <p className="modal-intro">Choose a direction and Orbit will generate your first three focused moves.</p>
                <div className="track-options">
                  {["Data & AI", "Full-stack", "Product design"].map((item) => (
                    <button type="button" className={track === item ? "is-selected" : ""} onClick={() => setTrack(item)} key={item}><span>{item === "Data & AI" ? "✦" : item === "Full-stack" ? "⌘" : "◈"}</span>{item}<i>{track === item ? "✓" : "+"}</i></button>
                  ))}
                </div>
                <button className="button button-primary modal-submit" type="button" onClick={() => setPlanReady(true)}>Generate my first moves <span>↗</span></button>
              </>
            ) : (
              <div className="generated-plan">
                <p className="modal-kicker">YOUR {track.toUpperCase()} ORBIT</p>
                <h2 id="planner-title">Your first three moves are ready.</h2>
                <div className="generated-steps">
                  <article><span>01</span><div><h3>Signal your foundation</h3><p>Complete one focused skill assessment.</p></div></article>
                  <article><span>02</span><div><h3>Build visible proof</h3><p>Ship one recruiter-ready mini project.</p></div></article>
                  <article><span>03</span><div><h3>Launch with intent</h3><p>Match your new proof to five opportunities.</p></div></article>
                </div>
                <button className="button button-primary modal-submit" type="button" onClick={() => { setPlanReady(false); setPlannerOpen(false); }}>Save roadmap <span>✓</span></button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
