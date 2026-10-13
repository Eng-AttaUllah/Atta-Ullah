/** macOS-style window chrome: three dots + a mono title */
export default function WindowBar({
  title,
  variant = 'window',
}: {
  title: string
  variant?: 'window' | 'editor' | 'tframe' | 'project'
}) {
  if (variant === 'project') {
    return (
      <div className="project-card-bar">
        <div className="project-card-dots">
          <span className="card-dot card-dot--red" />
          <span className="card-dot card-dot--amber" />
          <span className="card-dot card-dot--green" />
        </div>
        <span className="project-card-title mono">{title}</span>
      </div>
    )
  }

  if (variant === 'editor') {
    return (
      <div className="editor-titlebar">
        <div className="editor-dots">
          <span className="editor-dot editor-dot--red" />
          <span className="editor-dot editor-dot--amber" />
          <span className="editor-dot editor-dot--green" />
        </div>
        <span className="editor-title mono">{title}</span>
      </div>
    )
  }

  if (variant === 'tframe') {
    return (
      <div className="tframe-bar">
        <div className="tframe-dots">
          <span className="tframe-dot" />
          <span className="tframe-dot" />
          <span className="tframe-dot" />
        </div>
        <span className="tframe-title mono">{title}</span>
      </div>
    )
  }

  return (
    <div className="window-bar">
      <div className="window-dots">
        <span className="window-dot window-dot--red" />
        <span className="window-dot window-dot--amber" />
        <span className="window-dot window-dot--green" />
      </div>
      <span className="window-title">{title}</span>
    </div>
  )
}
