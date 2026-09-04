export default function Header() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl">
      <div className="flex items-center gap-space-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-[20px]">search</span>
        <span className="text-body-md">Cari surat, disposisi, atau arsip...</span>
      </div>
      <div className="flex items-center gap-space-lg">
        <button className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-error"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </header>
  )
}