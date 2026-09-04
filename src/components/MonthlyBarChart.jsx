const months = [
  { label: 'Jan', masuk: 65, keluar: 45 },
  { label: 'Feb', masuk: 80, keluar: 55 },
  { label: 'Mar', masuk: 50, keluar: 35 },
  { label: 'Apr', masuk: 90, keluar: 70 },
  { label: 'Mei', masuk: 75, keluar: 60 },
  { label: 'Jun', masuk: 95, keluar: 85 },
  { label: 'Jul', masuk: 85, keluar: 70 },
]

export default function MonthlyBarChart() {
  return (
    <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-space-lg">
        <div>
          <h2 className="text-headline-sm text-on-surface font-bold">Statistik Arus Surat Bulanan</h2>
          <p className="text-body-sm text-on-surface-variant">
            Perbandingan volume surat masuk dan keluar tahun berjalan
          </p>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
            <span className="w-3 h-3 rounded-full bg-primary-container"></span> Masuk
          </span>
          <span className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
            <span className="w-3 h-3 rounded-full bg-secondary"></span> Keluar
          </span>
        </div>
      </div>

      <div className="w-full h-64 flex items-end justify-between gap-space-sm pt-space-xl px-space-sm">
        {months.map((m) => (
          <div key={m.label} className="flex-1 flex flex-col items-center gap-space-xs h-full justify-end group">
            <div className="w-full flex items-end justify-center gap-1 h-full">
              <div
                className="w-1/2 bg-primary-container rounded-t group-hover:opacity-90 transition-all"
                style={{ height: `${m.masuk}%` }}
              ></div>
              <div
                className="w-1/2 bg-secondary rounded-t group-hover:opacity-90 transition-all"
                style={{ height: `${m.keluar}%` }}
              ></div>
            </div>
            <span className="text-body-sm text-on-surface-variant">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}