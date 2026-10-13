import { useEffect, useState } from 'react'

/** Session uptime counter (e.g. "3m 12s") */
export function useUptime() {
  const [uptime, setUptime] = useState('0m 0s')

  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const total = Math.floor((Date.now() - start) / 1000)
      setUptime(`${Math.floor(total / 60)}m ${total % 60}s`)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return uptime
}
