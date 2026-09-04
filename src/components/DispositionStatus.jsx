const items = [
  { name: 'Direksi Utama', done: 120, total: 141, color: 'bg-primary-container' },
  { name: 'Kepala Divisi', done: 92, total: 144, color: 'bg-secondary' },
  { name: 'Manajer Operasional', done: 48, total: 114, color: 'bg-tertiary-fixed-dim' },
]

export default function DispositionStatus() {
  return (
    <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
      <div>
        <h2 className="text-headline-sm text-on-surface font-bold">Status Disposisi Berjenjang</h2>
        <p className="text-body-sm text-on-surface-variant">Distribusi alur penanganan disposisi</p>
      </div>
      <div className="my-space-lg flex flex-col gap-space-md">
        {items.map((it) => {
          const pct = Math.round((it.done / it.total) * 100)
          return (
            <div key={it.name}>
              <div className="flex justify-between text-body-sm mb-space-xs">
                <span className="font-semibold text-on-surface">{it.name}</span>
                <span className="text-on-surface-variant">
                  {pct}% ({it.done}/{it.total})
                </span>
              </div>
              <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                <div className={`${it.color} h-full rounded-full`} style={{ width: `${pct}%` }}></div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between">
        <span className="text-body-sm text-on-surface-variant">Rata-rata Respon</span>
        <span className="text-headline-sm font-bold text-primary">3.4 Jam</span>
      </div>
    </div>
  )
}