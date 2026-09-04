export default function Modal({ open, onClose, title, icon, children, size = 'max-w-2xl' }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-inverse-surface/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className={`bg-surface rounded-2xl w-full ${size} p-space-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto`}>
        <div className="flex items-center justify-between mb-space-xl">
          <h2 className="text-headline-md text-on-surface flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary">{icon}</span>
            {title}
          </h2>
          <button
            className="p-space-xs rounded-full hover:bg-surface-container-high text-on-surface-variant"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}