import { Win, fileName } from './Win'

interface ExplorerProps {
  label: string
  title: string
  sub?: string
}

/** Section header styled as a file-explorer window with an address bar. */
export function Explorer({ label, title, sub }: ExplorerProps) {
  const path = fileName(title, '').replace(/\.$/, '')
  return (
    <Win title={`${label} — ${title.toLowerCase()}`} tone="violet" className="explorer">
      <div className="toolbar" aria-hidden="true">
        <span className="nav-sq">←</span>
        <span className="nav-sq">→</span>
        <div className="addr">portfolio://maikon/{path}</div>
      </div>
      <div className="explorer-head">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
      </div>
    </Win>
  )
}
