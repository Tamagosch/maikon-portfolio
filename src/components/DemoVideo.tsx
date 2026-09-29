import { useEffect, useRef } from 'react'

interface Props {
  /** Path to the .webm source; an .mp4 sibling (for Safari) is derived from it. */
  src: string
  label: string
  large?: boolean
}

/** Autoplaying, muted, looping product demo. Only plays while visible to save CPU and battery. */
export function DemoVideo({ src, label, large }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video || !('IntersectionObserver' in window)) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduce) void video.play().catch(() => undefined)
        else video.pause()
      },
      { threshold: 0.25 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`demo${large ? ' demo-lg' : ''}`}>
      <video ref={ref} muted loop playsInline preload="metadata" aria-label={label}>
        <source src={src} type="video/webm" />
        <source src={src.replace(/\.webm$/, '.mp4')} type="video/mp4" />
      </video>
    </div>
  )
}
