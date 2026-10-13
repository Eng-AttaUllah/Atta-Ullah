import type { ProjectStatus } from '../data/projects'

const styles: Record<ProjectStatus, { label: string; cls: string }> = {
  active: { label: 'active', cls: 'status-active' },
  shipped: { label: 'shipped', cls: 'status-shipped' },
  in_progress: { label: 'in_progress', cls: 'status-progress' },
}

export default function StatusBadge({
  status,
  label,
}: {
  status: ProjectStatus
  label?: string
}) {
  const style = styles[status] ?? styles.shipped
  return (
    <span className={`status-badge mono ${style.cls}`}>
      <span className="status-dot" />
      {label ?? style.label}
    </span>
  )
}
