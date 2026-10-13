import { useEffect, useState } from 'react'

/** Small digital clock used in the nav title bar */
export function CompactClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')

  return (
    <div className="bclock-compact mono" aria-label="live clock">
      <span>{hh}</span>
      <span className="bclock-colon">:</span>
      <span>{mm}</span>
      <span className="bclock-colon">:</span>
      <span className="bclock-sec">{ss}</span>
    </div>
  )
}

function BitRow({ value, bits, label }: { value: number; bits: number; label: string }) {
  const cells = Array.from({ length: bits }, (_, i) => (value >> (bits - 1 - i)) & 1)
  const padded = String(value).padStart(2, '0')
  return (
    <div className="bclock-row">
      <div className="bclock-bits">
        {cells.map((bit, i) => (
          <span key={i} className={`bclock-bit${bit ? ' on' : ''}`} />
        ))}
      </div>
      <span className="bclock-label">{label}</span>
      <span className="bclock-value">{padded}</span>
    </div>
  )
}

/** Binary clock used in the dashboard panel */
export function BinaryClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bclock" aria-label="live binary clock">
      <BitRow value={now.getHours()} bits={5} label="HH" />
      <BitRow value={now.getMinutes()} bits={6} label="MM" />
      <BitRow value={now.getSeconds()} bits={6} label="SS" />
    </div>
  )
}
