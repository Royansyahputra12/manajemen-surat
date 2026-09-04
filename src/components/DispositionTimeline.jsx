const timeline = [
  {
    color: 'bg-primary',
    ring: 'ring-primary-fixed/50',
    date: '24 Okt 2023 - 09:35 WIB',
    dateColor: 'text-primary',
    actor: 'Direktur Utama (Pimpinan)',
    desc: 'Surat diterima dan diverifikasi. Catatan: "Segera koordinasikan dengan tim terkait untuk tindak lanjut audit."',
  },
  {
    color: 'bg-secondary',
    ring: 'ring-secondary-fixed/50',
    date: '24 Okt 2023 - 10:15 WIB',
    dateColor: 'text-secondary',
    actor: 'Kepala Bagian Hukum (Penerima Disposisi 1)',
    desc: 'Diteruskan ke Kasubbag Perundang-undangan untuk penyusunan draf tanggapan.',
  },
  {
    color: 'bg-outline-variant',
    ring: '',
    date: 'Menunggu Aksi',
    dateColor: 'text-outline',
    actor: 'Kasubbag Perundang-undangan (Penerima Disposisi 2)',
    desc: 'Belum dibuka oleh penerima.',
    pending: true,
  },
]

export default function DispositionTimeline() {
  return (
    <div className="col-span-12 lg:col-span-6 bg-surface-container-low rounded-xl p-space-xl shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between mb-space-lg">
        <h3 className="text-headline-sm text-on-surface flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary">timeline</span>
          Lacak Disposisi Aktif (AGD/2023/1029)
        </h3>
        <span className="text-body-sm text-secondary font-label-sm">Real-time Tracker</span>
      </div>
      <div className="relative pl-6 space-y-space-xl before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/30">
        {timeline.map((t, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full ${t.color} ${t.ring ? `ring-4 ${t.ring}` : ''}`}></div>
            <div className={`text-label-sm ${t.dateColor} mb-1`}>{t.date}</div>
            <div className={`font-label-md ${t.pending ? 'text-on-surface-variant' : 'text-on-surface'}`}>
              {t.actor}
            </div>
            <p className={`text-${t.pending ? 'body-sm' : 'body-md'} ${t.pending ? 'text-outline' : 'text-on-surface-variant'} mt-1`}>
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}