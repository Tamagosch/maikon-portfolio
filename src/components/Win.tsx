import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

export type Tone = 'magenta' | 'violet'

interface WinProps {
  title: string
  tone?: Tone
  className?: string
  bodyClassName?: string
  children: ReactNode
}

/** A retro OS window: title bar with decorative controls plus a body. */
export function Win({ title, tone = 'magenta', className = '', bodyClassName = '', children }: WinProps) {
  const [ref, seen] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`win win-${tone}${seen ? ' in' : ''} ${className}`.trim()}>
      <div className="win-bar">
        <span className="win-title">{title}</span>
        <span className="win-ctl" aria-hidden="true">
          <i />
          <i />
          <i>×</i>
        </span>
      </div>
      <div className={`win-body ${bodyClassName}`.trim()}>{children}</div>
    </div>
  )
}

/** "Quarterly Report" → "quarterly_report.ext" — turns a name into a fake file name. */
export function fileName(name: string, ext: string) {
  const slug = name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 28)
  return `${slug}.${ext}`
}
