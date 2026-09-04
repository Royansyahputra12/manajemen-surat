const notifications = [
  {
    icon: 'priority_high',
    iconBg: 'bg-error-container',
    iconText: 'text-on-error-container',
    title: 'Disposisi Mendesak',
    time: '10m lalu',
    desc: 'Bapak Direktur memberikan catatan khusus pada surat AGD/2023/1029.',
  },
  {
    icon: 'mark_email_read',
    iconBg: 'bg-secondary-container',
    iconText: 'text-on-secondary-container',
    title: 'Agenda Baru Masuk',
    time: '1j lalu',
    desc: 'Nomor agenda otomatis AGD/2023/1029 berhasil digenerate sistem.',
  },
  {
    icon: 'schedule',
    iconBg: 'bg-tertiary-fixed',
    iconText: 'text-on-tertiary-fixed',
    title: 'Tenggat Waktu Disposisi',
    time: '3j lalu',
    desc: 'Batas waktu tanggapan surat AGD/2023/1025 tersisa 24 jam.',
  },
]

export default function NotificationCenter() {
  return (
    <div className="col-span-12 lg:col-span-6 bg-surface-container-low rounded-xl p-space-xl shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between mb-space-lg">
        <h3 className="text-headline-sm text-on-surface flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary">notifications_active</span>
          Pusat Notifikasi & Peringatan
        </h3>
        <button className="text-body-sm text-primary hover:underline">Tandai Semua Dibaca</button>
      </div>
      <div className="space-y-space-md">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <div className={`w-8 h-8 rounded-full ${n.iconBg} ${n.iconText} flex items-center justify-center shrink-0`}>
              <span className="material-symbols-outlined text-[18px]">{n.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-on-surface">{n.title}</span>
                <span className="text-body-sm text-on-surface-variant">{n.time}</span>
              </div>
              <p className="text-body-md text-on-surface-variant truncate">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}