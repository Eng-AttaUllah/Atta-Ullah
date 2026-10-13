import { neofetch, site } from '../data/site'
import { useUptime } from '../lib/hooks'

const LOGO = String.raw`
 ###  ##### #####  ### 
#   #   #     #   #   #
#####   #     #   #####
#   #   #     #   #   #
#   #   #     #   #   #

#   # #     #      ###  #   #
#   # #     #     #   # #   #
#   # #     #     ##### #####
#   # #     #     #   # #   #
 ###  ##### ##### #   # #   #
`.trim()

export default function Neofetch() {
  const uptime = useUptime()

  return (
    <div className="neofetch mono" aria-label="System Info (neofetch)">
      <div className="neofetch-logo">
        <pre>{LOGO}</pre>
      </div>
      <div className="neofetch-info">
        <div className="neofetch-user-host">
          <span className="neofetch-user">{site.handle}</span>
          <span className="neofetch-at">@</span>
          <span className="neofetch-host">{site.host}</span>
        </div>
        <div className="neofetch-separator">-----------------</div>
        {neofetch.map((row) => (
          <div className="neofetch-row" key={row.label}>
            <span className="neofetch-label">{row.label}</span> {row.value}
          </div>
        ))}
        <div className="neofetch-row">
          <span className="neofetch-label">Uptime:</span> {uptime}
        </div>
      </div>
    </div>
  )
}
