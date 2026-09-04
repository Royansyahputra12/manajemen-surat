const rows = [
  {
    agenda: 'AGD/2023/1029',
    noSurat: 'SRT-0912/KEMEN-PAN/X/2023',
    tanggal: '24 Okt 2023',
    jam: '09:30 WIB',
    pengirim: 'KemenPAN-RB Republik Indonesia',
    perihal: 'Evaluasi Akuntabilitas Kinerja Instansi Pemerintah Tahun 2023',
    kerahasiaan: { label: 'Rahasia', cls: 'bg-error-container text-on-error-container' },
    status: {
      label: 'Diteruskan ke Kabag Hukum',
      cls: 'bg-secondary-container text-on-secondary-container',
      dot: 'bg-secondary',
    },
  },
  {
    agenda: 'AGD/2023/1028',
    noSurat: 'B-441/OJK/SKIV/2023',
    tanggal: '24 Okt 2023',
    jam: '08:15 WIB',
    pengirim: 'Otoritas Jasa Keuangan (OJK)',
    perihal: 'Sosialisasi Ketentuan Pelaporan Keuangan Terintegrasi Korporasi',
    kerahasiaan: { label: 'Penting', cls: 'bg-tertiary-fixed text-on-tertiary-fixed' },
    status: {
      label: 'Menunggu Pimpinan',
      cls: 'bg-surface-container-highest text-on-surface',
      dot: 'bg-outline',
    },
  },
  {
    agenda: 'AGD/2023/1027',
    noSurat: '002/PT-NUSA/X/2023',
    tanggal: '23 Okt 2023',
    jam: '14:00 WIB',
    pengirim: 'PT Nusantara Solusi Digital',
    perihal: 'Penawaran Upgrade Infrastruktur Keamanan Server E-Office',
    kerahasiaan: {
      label: 'Biasa',
      cls: 'bg-surface-container-high text-on-surface-variant',
    },
    status: {
      label: 'Selesai / Diarsipkan',
      cls: 'bg-primary-fixed text-on-primary-fixed',
      dot: 'bg-primary',
    },
  },
]

export default function SuratMasukTable({ onDisposition, onDetail }) {
  return (
    <div className="bg-surface-container-low rounded-xl shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] overflow-hidden mb-space-2xl">
      <div className="px-space-xl py-space-lg flex items-center justify-between">
        <h3 className="text-headline-sm text-on-surface">Daftar Agenda Surat Masuk</h3>
        <div className="flex items-center gap-space-sm">
          <span className="text-body-sm text-on-surface-variant">
            Menampilkan 1-3 dari 1,248 surat
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container text-on-surface-variant text-label-sm uppercase tracking-wider">
              <th className="py-space-md px-space-lg">No. Agenda / Surat</th>
              <th className="py-space-md px-space-lg">Tanggal Terima</th>
              <th className="py-space-md px-space-lg">Pengirim & Perihal</th>
              <th className="py-space-md px-space-lg">Kerahasiaan</th>
              <th className="py-space-md px-space-lg">Status Disposisi</th>
              <th className="py-space-md px-space-lg text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20 text-body-md text-on-surface">
            {rows.map((r) => (
              <tr key={r.agenda} className="hover:bg-surface-container-high/50 transition-colors">
                <td className="py-space-md px-space-lg">
                  <div className="font-headline-sm text-primary">{r.agenda}</div>
                  <div className="text-body-sm text-on-surface-variant">{r.noSurat}</div>
                </td>
                <td className="py-space-md px-space-lg">
                  <div>{r.tanggal}</div>
                  <div className="text-body-sm text-on-surface-variant">{r.jam}</div>
                </td>
                <td className="py-space-md px-space-lg">
                  <div className="font-label-md">{r.pengirim}</div>
                  <div className="text-body-sm text-on-surface-variant truncate max-w-xs">
                    {r.perihal}
                  </div>
                </td>
                <td className="py-space-md px-space-lg">
                  <span
                    className={`inline-flex items-center px-space-sm py-space-xs rounded-full text-body-sm font-label-sm ${r.kerahasiaan.cls}`}
                  >
                    {r.kerahasiaan.label}
                  </span>
                </td>
                <td className="py-space-md px-space-lg">
                  <span
                    className={`inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full text-body-sm font-label-sm ${r.status.cls}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${r.status.dot}`}></span>
                    {r.status.label}
                  </span>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <div className="flex items-center justify-end gap-space-xs">
                    <button
                      onClick={() => onDisposition?.(r.agenda)}
                      className="p-space-sm rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"
                      title="Kelola Disposisi"
                    >
                      <span className="material-symbols-outlined text-[20px]">account_tree</span>
                    </button>
                    <button
                      onClick={() => onDetail?.()}
                      className="p-space-sm rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"
                      title="Lihat Detail & Dokumen"
                    >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-space-xl py-space-md bg-surface-container flex items-center justify-between border-t border-outline-variant/10">
        <button className="px-space-lg py-space-xs rounded-xl bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container-high transition-all">
          Sebelumnya
        </button>
        <div className="flex items-center gap-space-xs">
          <button className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center text-label-sm">
            1
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface flex items-center justify-center text-label-sm">
            2
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface flex items-center justify-center text-label-sm">
            3
          </button>
        </div>
        <button className="px-space-lg py-space-xs rounded-xl bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container-high transition-all">
          Berikutnya
        </button>
      </div>
    </div>
  )
}