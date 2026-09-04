import { useState } from 'react'

export default function Sidebar({ active, onNavigate }) {
  const navItems = [
    { path: 'dasbor-eksekutif', label: 'Dasbor Eksekutif', icon: 'dashboard' },
    { path: 'surat-masuk', label: 'Surat Masuk', icon: 'inbox' },
    { path: 'surat-keluar', label: 'Surat Keluar', icon: 'send' },
    { path: 'arsip-&-dms', label: 'Arsip & DMS', icon: 'folder' },
    { path: 'pengaturan-/-keamanan', label: 'Pengaturan / Keamanan', icon: 'settings' },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col pt-space-xl pb-space-xl">
      <div className="px-space-xl mb-space-xl flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-primary text-[28px]">domain</span>
        <span className="text-headline-sm text-primary font-bold tracking-tight">E-Office Enterprise</span>
      </div>
      <nav className="flex-1 px-space-md space-y-space-xs">
        {navItems.map((item) => (
          <a
            key={item.path}
            aria-current={active === item.path ? 'page' : undefined}
            className={
              'flex items-center px-space-md py-space-sm rounded-xl transition-all cursor-pointer ' +
              (active === item.path
                ? 'bg-primary-container text-on-primary-container font-bold'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface')
            }
            data-path={item.path}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate?.(item.path)
            }}
          >
            <span className="material-symbols-outlined mr-space-md">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}