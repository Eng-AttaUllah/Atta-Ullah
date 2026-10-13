const BOOT_KEY = 'boot_seen'

export function hasBooted() {
  return typeof window !== 'undefined' && sessionStorage.getItem(BOOT_KEY) === '1'
}

export function markBooted() {
  sessionStorage.setItem(BOOT_KEY, '1')
}
