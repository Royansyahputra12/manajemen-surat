const cards = [
  {
    label: 'Total Surat Masuk',
    value: '1,482',
    delta: '+12.4% bln lalu',
    trend: 'up',
    icon: 'inbox',
    iconBg: 'bg-primary-fixed',
    iconText: 'text-on-primary-fixed',
    blobBg: 'bg-primary/5',
  },
  {
    label: 'Surat Keluar',
    value: '934',
    delta: '+8.1% bln lalu',
    trend: 'up',
    icon: 'send',
    iconBg: 'bg-secondary-fixed',
    iconText: 'text-on-secondary-fixed',
    blobBg: 'bg-secondary/10',
  },
  {
    label: 'Pending Disposisi',
    value: '43',
    delta: '-3.2% bln lalu',
    trend: 'down',
    icon: 'pending_actions',
    iconBg: 'bg-tertiary-fixed',
    iconText: 'text-on-tertiary-fixed',
    blobBg: 'bg-tertiary-fixed/30',
  },
  {
    label: 'Selesai Diproses',
    value: '1,373',
    delta: '+15.3% bln lalu',
    trend: 'up',
    icon: 'task_alt',
    iconBg: 'bg-surface-container-highest',
    iconText: 'text-on-surface',
    blobBg: 'bg-surface-container-high',
  },
]

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-gutter">
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
        >
          <div
            className={`absolute -right-4 -bottom-4 w-24 h-24 ${c.blobBg} rounded-full group-hover:scale-125 transition-transform`}
          ></div>
          <div className="flex items-center justify-between mb-space-md">
            <span className="text-on-surface-variant font-label-md">{c.label}</span>
            <div
              className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center ${c.iconText}`}
            >
              <span className="material-symbols-outlined">{c.icon}</span>
            </div>
          </div>
          <div>
            <div className="text-headline-lg font-bold text-on-surface">{c.value}</div>
            <div
              className={`flex items-center gap-space-xs mt-space-xs ${
                c.trend === 'down' ? 'text-error' : 'text-secondary'
              } text-body-sm font-semibold`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {c.trend === 'down' ? 'trending_down' : 'trending_up'}
              </span>
              <span>{c.delta}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}