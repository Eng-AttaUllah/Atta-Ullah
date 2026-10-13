import { useEffect, useState } from 'react'
import { bootLines } from '../data/site'
import { markBooted } from '../lib/boot'

/** One-time boot sequence shown before the home page */
export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisible(i + 1)
        if (i === bootLines.length - 1) setTimeout(onComplete, 400)
      }, line.delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const skip = () => {
    markBooted()
    onComplete()
  }

  return (
    <div className="boot mono" aria-hidden="true">
      {bootLines.slice(0, visible).map((line, i) => (
        <div
          key={line.text}
          className={`boot-line${i === bootLines.length - 1 ? ' boot-ready' : ''}`}
        >
          <span className="boot-prompt">$</span> {line.text}
        </div>
      ))}
      <button type="button" className="boot-skip-btn mono" onClick={skip}>
        [ skip → ]
      </button>
    </div>
  )
}
