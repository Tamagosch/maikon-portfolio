import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { content, EMAIL, LINKEDIN, type Extras, type Lang, type Project } from './i18n/content'
import { Reveal } from './components/Reveal'
import { Showcase } from './components/Showcase'
import { CountUp } from './components/CountUp'
import { Win, fileName, type Tone } from './components/Win'
import { Explorer } from './components/Explorer'
import { FloppyIcon, FolderIcon, GlobeIcon, MailIcon } from './components/Icons'

const sections = ['about', 'projects', 'experience', 'skills', 'contact'] as const
const jobTones: Tone[] = ['magenta', 'violet', 'violet', 'magenta']

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

/** Scroll progress (0..1) drives the thin reading-progress bar at the top. */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return progress
}

/** Highlights the menu entry of the section currently in the middle of the screen. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    const onScroll = () => {
      if (window.scrollY < 300) setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])
  return active
}

function OtherProject({ p, index, x }: { p: Project; index: number; x: Extras }) {
  return (
    <Win title={fileName(p.name, 'exe')} tone={index % 2 === 0 ? 'magenta' : 'violet'} className="other" bodyClassName="other-body">
      <div className="quest">
        {x.project} {String(index + 1).padStart(2, '0')}
      </div>
      <h3>{p.name}</h3>
      <div className="tag">{p.tag}</div>
      <p>{p.description}</p>
      <div className="chips">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </Win>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const t = content[lang]
  const x = t.extras
  const progress = useScrollProgress()
  const active = useActiveSection(sections)
  const [switching, setSwitching] = useState(false)
  const switchTimer = useRef<number>(0)
  const changeLang = () => {
    setLang((l) => (l === 'pt' ? 'en' : 'pt'))
    setSwitching(true)
    window.clearTimeout(switchTimer.current)
    switchTimer.current = window.setTimeout(() => setSwitching(false), 550)
  }
  useEffect(() => () => window.clearTimeout(switchTimer.current), [])
  const featuredProjects = t.projects.items.filter((p) => p.demo)
  const otherProjects = t.projects.items.filter((p) => !p.demo)
  const nameParts = t.hero.name.split(' ')
  const lastName = nameParts[nameParts.length - 1]
  const firstNames = nameParts.slice(0, -1).join(' ')

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return (
    <div className={`app${switching ? ' switching' : ''}`}>
      <div className="progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <header className="menubar">
        <div className="container bar-inner">
          <a href="#top" className="logo">
            MCG<span>_</span>
          </a>
          <nav className="menu" aria-label="Menu">
            {sections.map((s) => (
              <a key={s} href={`#${s}`} className={`menu-btn${active === s ? ' active' : ''}`} aria-current={active === s ? 'true' : undefined}>
                {t.nav[s]}
              </a>
            ))}
          </nav>
          <button className="lang" onClick={changeLang} aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}>
            <span className={lang === 'pt' ? 'on' : ''}>PT</span> · <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <nav className="icons" aria-label="Shortcuts">
            <a href="#projects" className="icon">
              <FolderIcon />
              <span>{t.nav.projects.toLowerCase()}</span>
            </a>
            <a href={x.resumeHref} download className="icon hot">
              <FloppyIcon />
              <span>{x.files.resume}</span>
            </a>
            <a href="#contact" className="icon">
              <MailIcon />
              <span>{t.nav.contact.toLowerCase()}</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="icon">
              <GlobeIcon />
              <span>linkedin</span>
            </a>
          </nav>

          <div className="hero-main">
            <Win title="maikon_camilo_gosch.exe" tone="magenta" className="hero-win" bodyClassName="hero-body">
              <div className="status">
                <i /> {t.hero.badge}
              </div>
              <p className="greeting">{t.hero.greeting}</p>
              <h1>
                {firstNames}
                <br />
                {lastName}
              </h1>
              <div className="role">{t.hero.role}</div>
              <p className="lead">{t.hero.intro}</p>
              <div className="actions">
                <a className="btn primary" href="#projects">
                  {t.hero.cta}
                </a>
                <a className="btn" href="#contact">
                  {t.hero.ctaSecondary}
                </a>
                <a className="btn" href={x.resumeHref} download>
                  ↓ {x.resumeLabel}
                </a>
              </div>
            </Win>

            <Win title={x.files.loading} tone="magenta" className="win-loading" bodyClassName="loading-body">
              <div className="loading-text">{x.loading}</div>
              <div className="seg" aria-hidden="true">
                <i />
              </div>
              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Next.js</span>
              </div>
              <a className="btn small" href="#skills">
                {x.viewSkills}
              </a>
            </Win>
          </div>

          <div className="hero-side">
            <Win title="foto.jpg" tone="violet" className="photo-win" bodyClassName="photo-body">
              <img src="/photo.webp" alt="Maikon Camilo Gosch" />
              <div className="photo-foot">
                <span>{x.location}</span>
                <span className="pill">{t.hero.role}</span>
              </div>
            </Win>
            <Win title={x.files.stats} tone="magenta" className="stats-win" bodyClassName="stats-body">
              {t.stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong>
                    <CountUp value={s.value} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </Win>
          </div>
        </section>

        <section id="about" className="section container">
            <Explorer label={x.explorer} title={t.about.title} />
            <div className="about-grid">
              <Win title={x.files.about} tone="magenta" bodyClassName="text-body">
                {t.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Win>
              <Win title={x.files.interests} tone="violet" bodyClassName="text-body">
                <h3>{t.about.interestsTitle}</h3>
                <p>{t.about.interests}</p>
              </Win>
            </div>
            <Win title={x.files.highlights} tone="magenta" className="highlights-win" bodyClassName="highlights-body">
              <div className="highlights-head">
                <h3>{x.highlightsTitle}</h3>
                <p>{x.highlightsSub}</p>
              </div>
              <div className="highlights-grid">
                {x.highlights.map((h, i) => (
                  <div key={h.title} className="highlight" style={{ '--i': i } as CSSProperties}>
                    <span className="num">{i + 1}</span>
                    <div>
                      <strong>{h.title}</strong>
                      <span>{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Win>
        </section>

        <section id="projects" className="section container">
            <Explorer label={x.explorer} title={t.projects.title} sub={t.projects.subtitle} />
            <div className="showcases">
              {featuredProjects.map((p, i) => (
                <Showcase key={p.name} p={p} x={x} reverse={i % 2 === 1} />
              ))}
            </div>

          {otherProjects.length > 0 && (
            <>
              <Reveal>
                <div className="tab-title">
                  <h3>{x.moreTitle}</h3>
                  <p>{x.moreSub}</p>
                </div>
              </Reveal>
              <div className="others">
                {otherProjects.map((p, i) => (
                  <OtherProject key={p.name} p={p} index={i} x={x} />
                ))}
              </div>
            </>
          )}
        </section>

        <section id="experience" className="section container">
            <Explorer label={x.explorer} title={t.experience.title} />
            <div className="jobs">
              {t.experience.jobs.map((j, i) => (
                <Win key={j.company} title={fileName(j.company, 'exe')} tone={jobTones[i % jobTones.length]} className="job" bodyClassName="job-body">
                  <div className="job-period">{j.period}</div>
                  <h3>
                    {j.role} <span>@ {j.company}</span>
                  </h3>
                  <div className="place">{j.place}</div>
                  <ul className="bullets">
                    {j.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Win>
              ))}
            </div>
            <Win title={x.files.education} tone="violet" className="education" bodyClassName="edu-body">
              <div className="label">{t.experience.education.title}</div>
              <strong>{t.experience.education.course}</strong>
              <span>
                {t.experience.education.school} · {t.experience.education.period}
              </span>
            </Win>
        </section>

        <section id="skills" className="section container">
            <Explorer label={x.explorer} title={t.skills.title} sub={x.skillsSub} />
            <Win title={x.files.skills} tone="magenta" className="skills-win" bodyClassName="skills-body">
              {t.skills.groups.map((g) => (
                <div key={g.name} className="skill-col">
                  <h3>
                    <FolderIcon />
                    {g.name}
                  </h3>
                  {g.items.map((i, n) => (
                    <div key={i} className="file" style={{ '--i': n } as CSSProperties}>
                      {i}
                    </div>
                  ))}
                </div>
              ))}
              <div className="skill-col">
                <h3>
                  <FolderIcon />
                  {t.skills.languagesTitle}
                </h3>
                {t.skills.languages.map((l, n) => (
                  <div key={l} className="file" style={{ '--i': n } as CSSProperties}>
                    {l}
                  </div>
                ))}
              </div>
            </Win>
        </section>

        <section id="contact" className="section container">
            <Win title={x.files.message} tone="magenta" className="message" bodyClassName="message-body">
              <MailIcon />
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <div className="actions center">
                <a className="btn primary" href={`mailto:${EMAIL}`}>
                  {t.contact.email}
                </a>
                <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
              <div className="email">{EMAIL}</div>
            </Win>
        </section>
      </main>

      <footer className="taskbar">
        <div className="container task-inner">
          <span>© {new Date().getFullYear()} Maikon Camilo Gosch</span>
        </div>
      </footer>
    </div>
  )
}
