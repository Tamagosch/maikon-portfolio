import type { Extras, Project } from '../i18n/content'
import { DemoVideo } from './DemoVideo'
import { Win, fileName } from './Win'

interface Props {
  p: Project
  x: Extras
  reverse?: boolean
}

/** A flagship project: a browser window with the autoplaying demo, next to an info window. */
export function Showcase({ p, x, reverse }: Props) {
  return (
    <article className={`showcase${reverse ? ' reverse' : ''}`}>
      <Win title={p.link?.label ?? p.name} tone="violet" className="showcase-browser" bodyClassName="browser-body">
        <div className="browser-bar" aria-hidden="true">
          <span className="nav-sq">←</span>
          <span className="nav-sq">→</span>
          <div className="addr">{p.link?.href ?? ''}</div>
        </div>
        {p.demo && <DemoVideo src={p.demo} label={`${p.name} demo`} large />}
      </Win>
      <Win title={fileName(p.name, 'info')} tone="magenta" className="showcase-info" bodyClassName="info-body">
        <div className="showcase-head">
          {p.featured && <span className="rarity">{x.featured}</span>}
          <span className="tag">{p.tag}</span>
        </div>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        {p.highlights && (
          <ul className="bullets">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <div className="chips">
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        {p.link && (
          <a className="btn primary" href={p.link.href} target="_blank" rel="noreferrer">
            {p.link.label} ↗
          </a>
        )}
      </Win>
    </article>
  )
}
