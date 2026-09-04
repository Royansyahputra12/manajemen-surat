const rows = [
  {
    agenda: 'AGD/2023/1089',
    date: '24 Okt 2023',
    subject: 'Permohonan Audit Kepatuhan Sistem E-Office Triwulan IV',
    sender: 'Kementerian BUMN',
    sifat: { label: 'Rahasia', cls: 'bg-error-container text-on-error-container' },
    status: { label: 'Pending Disposisi', cls: 'bg-tertiary-fixed text-on-tertiary-fixed' },
    action: { label: 'Disposisi', icon: 'rule', cls: 'bg-primary-container text-on-primary-container' },
  },
  {
    agenda: 'AGD/2023/1088',
    date: '24 Okt 2023',
    subject: 'Undangan Rapat Koordinasi Nasional Integrasi Data Dokumen',
    sender: 'Sekretariat Negara',
    sifat: { label: 'Penting', cls: 'bg-primary-fixed text-on-primary-fixed' },
    status: { label: 'Sudah Didisposisi', cls: 'bg-secondary-fixed text-on-secondary-fixed' },
    action: { label: 'Ubah', icon: 'edit_note', cls: 'bg-surface-container-high text-on-surface' },
  },
  {
    agenda: 'AGD/2023/1087',
    date: '23 Okt 2023',
    subject: 'Laporan Bulanan Progres Infrastruktur Jaringan Cloud',
    sender: 'PT Telkom Indonesia',
    sifat: { label: 'Biasa', cls: 'bg-surface-container-highest text-on-surface-variant' },
    status: { label: 'Selesai', cls: 'bg-surface-container-high text-on-surface' },
    action: { label: 'Arsip', icon: 'folder_open', cls: 'bg-surface-container-high text-on-surface' },
  },
  {
    agenda: 'AGD/2023/1086',
    date: '22 Okt 2023',
    subject: 'Pemberitahuan Jadwal Pemeliharaan Server Pusat Data Nasional',
    sender: 'Diskominfo Pusat',
    sifat: { label: 'Penting', cls: 'bg-primary-fixed text-on-primary-fixed' },
    status: { label: 'Sudah Didisposisi', cls: 'bg-secondary-fixed text-on-secondary-fixed' },
    action: { label: 'Ubah', icon: 'edit_note', cls: 'bg-surface-container-high text-on-surface' },
  },
]

export default function RecentLettersTable() {
  return (
    <div className="bg-surface-container-low rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <h2 className="text-headline-sm text-on-surface font-bold">Surat Masuk Terbaru</h2>
          <p className="text-body-sm text-on-surface-variant">
            Daftar surat masuk yang memerlukan tindak lanjut segera
          </p>
        </div>
        <div className="flex items-center gap-space-sm">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-on-surface-variant">
              search
            </span>
            <input
              className="bg-surface pl-10 pr-space-md py-2 rounded-xl text-body-md text-on-surface outline-none border border-outline-variant/30 focus:border-secondary transition-all w-64"
              placeholder="Cari perihal / pengirim..."
              type="text"
            />
          </div>
          <button className="bg-surface text-on-surface px-space-md py-2 rounded-xl border border-outline-variant/30 text-body-md font-label-md flex items-center gap-space-xs hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant/10 text-on-surface-variant text-label-sm uppercase tracking-wider">
              <th className="py-space-md px-space-xl font-semibold">No. Agenda</th>
              <th className="py-space-md px-space-xl font-semibold">Tanggal</th>
              <th className="py-space-md px-space-xl font-semibold">Perihal</th>
              <th className="py-space-md px-space-xl font-semibold">Pengirim</th>
              <th className="py-space-md px-space-xl font-semibold">Sifat</th>
              <th className="py-space-md px-space-xl font-semibold">Status Disposisi</th>
              <th className="py-space-md px-space-xl font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10 text-body-md text-on-surface">
            {rows.map((r) => (
              <tr key={r.agenda} className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-xl font-code font-semibold text-primary">{r.agenda}</td>
                <td className="py-space-md px-space-xl text-on-surface-variant">{r.date}</td>
                <td className="py-space-md px-space-xl font-medium max-w-xs truncate">{r.subject}</td>
                <td className="py-space-md px-space-xl text-on-surface-variant">{r.sender}</td>
                <td className="py-space-md px-space-xl">
                  <span className={`px-space-sm py-0.5 rounded-full text-body-sm font-semibold ${r.sifat.cls}`}>
                    {r.sifat.label}
                  </span>
                </td>
                <td className="py-space-md px-space-xl">
                  <span className={`px-space-sm py-0.5 rounded-full text-body-sm font-semibold ${r.status.cls}`}>
                    {r.status.label}
                  </span>
                </td>
                <td className="py-space-md px-space-xl text-right">
                  <div className="flex items-center justify-end gap-space-xs">
                    <button
                      className="p-space-xs rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                      title="Lihat"
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
                    <button
                      className={`${r.action.cls} px-space-sm py-1 rounded-lg text-body-sm font-label-md flex items-center gap-1 hover:opacity-90 transition-all`}
                    >
                      <span className="material-symbols-outlined text-[16px]">{r.action.icon}</span>
                      {r.action.label}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-space-lg bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10 text-body-sm text-on-surface-variant">
        <span>Menampilkan 1-4 dari 1,482 surat masuk</span>
        <div className="flex items-center gap-space-xs">
          <button
            className="px-space-sm py-1 rounded border border-outline-variant/30 hover:bg-surface-container transition-all disabled:opacity-50"
            disabled
          >
            Sebelumnya
          </button>
          <button className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-semibold">
            1
          </button>
          <button className="px-space-sm py-1 rounded border border-outline-variant/30 hover:bg-surface-container transition-all">
            2
          </button>
          <button className="px-space-sm py-1 rounded border border-outline-variant/30 hover:bg-surface-container transition-all">
            3
          </button>
          <button className="px-space-sm py-1 rounded border border-outline-variant/30 hover:bg-surface-container transition-all">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  )
}