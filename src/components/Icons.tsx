const ink = 'var(--ink)'

export function FolderIcon({ hot = true }: { hot?: boolean }) {
  return (
    <svg width="64" height="56" viewBox="0 0 64 56" fill="none" aria-hidden="true">
      <path d="M4 10h22l6 7h28v35H4z" style={{ fill: hot ? 'var(--magenta)' : 'var(--lav-2)' }} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

export function FloppyIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M6 6h40l8 8v40H6z" fill="#ffffff" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <rect x="15" y="6" width="22" height="14" style={{ fill: 'var(--violet)' }} stroke={ink} strokeWidth="3" />
      <rect x="12" y="32" width="36" height="22" style={{ fill: 'var(--pink-tint)' }} stroke={ink} strokeWidth="3" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="56" height="38" fill="#ffffff" stroke={ink} strokeWidth="3" />
      <path d="M4 8l28 22 28-22" style={{ fill: 'var(--magenta)' }} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <circle cx="30" cy="30" r="26" style={{ fill: 'var(--magenta)' }} stroke={ink} strokeWidth="3" />
      <ellipse cx="30" cy="30" rx="11" ry="26" stroke={ink} strokeWidth="3" />
      <path d="M4 30h52M9 17h42M9 43h42" stroke={ink} strokeWidth="3" />
    </svg>
  )
}
