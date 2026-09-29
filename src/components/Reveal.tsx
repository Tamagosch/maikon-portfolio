import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

export function Reveal({ children }: { children: ReactNode }) {
  const [ref, seen] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal${seen ? ' in' : ''}`}>
      {children}
    </div>
  )
}
