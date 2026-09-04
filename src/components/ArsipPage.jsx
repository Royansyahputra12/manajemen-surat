import { useState } from 'react'

const metricCards = [
  {
    label: 'Total Arsip Aktif',
    value: '42,850',
    delta: '+3.2% bulan ini',
    deltaCls: 'text-secondary',
    icon: 'folder',
    iconBg: 'bg-primary/10',
    iconCls: 'text-primary',
  },
  {
    label: 'Disposisi Masuk',
    value: '1,280',
    delta: '45 tertunda',
    deltaCls: 'text-tertiary',
    icon: 'move_to_inbox',
    iconBg: 'bg-secondary-fixed/30',
    iconCls: 'text-secondary',
  },
  {
    label: 'Retensi & Musnah',
    value: '312',
    delta: 'Jadwal audit Q3',
    deltaCls: 'text-error',
    icon: 'delete_sweep',
    iconBg: 'bg-error-container',
    iconCls: 'text-error',
  },
  {
    label: 'Audit Trail Log',
    value: '99.8%',
    delta: 'Terenkripsi SHA-256',
    deltaCls: 'text-secondary',
    icon: 'shield',
    iconBg: 'bg-primary-fixed',
    iconCls: 'text-on-primary-fixed',
  },
]

const tree = [
  {
    id: 'folder-000',
    label: '000 - UMUM & ADMINISTRASI',
    count: '12.4k',
    open: true,
    children: [
      { label: '005 - Undangan & Rapat', count: '4.1k' },
      { label: '010 - Peraturan Internal', count: '850' },
      { label: '050 - Perencanaan & Statistik', count: '7,450' },
    ],
  },
  {
    id: 'folder-100',
    label: '100 - PEMERINTAHAN',
    count: '8.2k',
    open: false,
    children: [
      { label: '110 - Kerjasama Antar Daerah', count: '320' },
      { label: '130 - Otonomi Daerah', count: '7,880' },
    ],
  },
  {
    id: 'folder-800',
    label: '800 - KEPEGAWAIAN',
    count: '15.1k',
    open: false,
    children: [
      { label: '800.1 - SK Pengangkatan', count: '9,200' },
      { label: '820 - Kenaikan Pangkat', count: '5,900' },
    ],
  },
  {
    id: 'folder-900',
    label: '900 - KEUANGAN & ASET',
    count: '7.1k',
    open: false,
    children: [
      { label: '900.2 - Anggaran Belanja (APBD)', count: '2,100' },
      { label: '950 - Barang Milik Negara (BMN)', count: '5,000' },
    ],
  },
]

const docs = [
  {
    id: 'SRT-2024-0891',
    no: 'B-412/M.SETNEG/10/2024',
    klas: '005 - Undangan & Rapat',
    subject: 'Rapat Koordinasi Nasional E-Government & Keamanan Siber 2024',
    sender: 'Kementerian Sekretariat Negara',
    date: '24 Okt 2024',
    status: { label: 'Disposisi Aktif', cls: 'bg-secondary-fixed/30 text-secondary' },
  },
  {
    id: 'SRT-2024-0885',
    no: 'SK-102/BKD/IX/2024',
    klas: '800.1 - SK Pengangkatan',
    subject: 'Keputusan Pengangkatan Pejabat Fungsional Arsiparis Ahli Madya',
    sender: 'Badan Kepegawaian Daerah',
    date: '18 Okt 2024',
    status: { label: 'Arsip Permanen', cls: 'bg-primary-fixed text-on-primary-fixed' },
  },
  {
    id: 'SRT-2024-0750',
    no: 'PL-030/DPU/VIII/2024',
    klas: '950 - Barang Milik Negara',
    subject: 'Berita Acara Serah Terima Kendaraan Operasional Dinas Tahun 2024',
    sender: 'Dinas Pekerjaan Umum',
    date: '02 Agu 2024',
    status: { label: 'Retensi / Musnah', cls: 'bg-error-container text-error' },
  },
]

const auditLogs = [
  {
    tone: 'secondary',
    icon: 'done',
    title: 'Dokumen Diunduh',
    sub: 'Oleh: Dr. Ir. H. Bambang Sudarmanto, M.Si (Sekretaris Utama)',
    time: '25 Okt 2024, 09:14 WIB • IP: 103.24.12.90',
  },
  {
    tone: 'primary',
    icon: 'forward',
    title: 'Disposisi Diteruskan',
    sub: 'Ke: Kepala Biro Hukum & Organisasi',
    time: '24 Okt 2024, 14:30 WIB • Catatan: "Segera koordinasikan"',
  },
  {
    tone: 'primary',
    icon: 'visibility',
    title: 'Dokumen Dibaca',
    sub: 'Oleh: Siti Rahmawati, S.Sos (Admin Persuratan)',
    time: '24 Okt 2024, 11:05 WIB • IP: 103.24.12.44',
  },
  {
    tone: 'primary',
    icon: 'inbox',
    title: 'Arsip Masuk & Diindeks',
    sub: 'Sistem Otomasi Tata Naskah Dinas (TND-2024)',
    time: '24 Okt 2024, 10:00 WIB • SHA-256 Verified',
  },
]

export default function ArsipPage() {
  const [openFolders, setOpenFolders] = useState({ 'folder-000': true })
  const [docModal, setDocModal] = useState(null)
  const [exportModal, setExportModal] = useState(false)
  const [newArchiveModal, setNewArchiveModal] = useState(false)
  const [exportFormat, setExportFormat] = useState('xlsx')

  const toggleFolder = (id) => setOpenFolders((p) => ({ ...p, [id]: !p[id] }))

  const activeDoc = docModal ? docs.find((d) => d.id === docModal) || docs[0] : null

  return (
    <div className="flex flex-col w-full space-y-space-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-lg bg-surface-container-low rounded-xl p-space-xl shadow-sm">
        <div className="space-y-space-xs">
          <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">folder_managed</span>
            <span>Enterprise Document Management & Archives</span>
          </div>
          <h1 className="font-headline-lg text-primary">Arsip & Tata Naskah Dinas</h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl">
            Secure digital archive classification system adhering to governmental correspondence standards.
            Manage indexing, instant full-text retrieval, and immutable audit logs.
          </p>
        </div>
        <div className="flex items-center gap-space-md">
          <button
            className="flex items-center gap-space-sm px-space-lg py-space-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-xl font-label-md transition-all shadow-sm"
            onClick={() => setExportModal(true)}
          >
            <span className="material-symbols-outlined">download</span>
            Export Laporan
          </button>
          <button
            className="flex items-center gap-space-sm px-space-lg py-space-md bg-primary text-on-primary rounded-xl font-label-md transition-all shadow-sm"
            onClick={() => setNewArchiveModal(true)}
          >
            <span className="material-symbols-outlined">add_box</span>
            Arsip Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {metricCards.map((m) => (
          <div key={m.label} className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex items-center justify-between">
            <div>
              <span className="font-label-sm text-on-surface-variant block uppercase tracking-wider">{m.label}</span>
              <span className="font-headline-lg text-primary mt-space-xs block">{m.value}</span>
              <span className={`font-body-sm mt-space-xs flex items-center gap-1 ${m.deltaCls}`}>
                <span className="material-symbols-outlined text-[14px]">
                  {m.label === 'Total Arsip Aktif' || m.label === 'Audit Trail Log' ? 'trending_up' : m.label === 'Disposisi Masuk' ? 'schedule' : 'warning'}
                </span>{' '}
                {m.delta}
              </span>
            </div>
            <div className={`w-12 h-12 rounded-xl ${m.iconBg} ${m.iconCls} flex items-center justify-center`}>
              <span className="material-symbols-outlined">{m.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col space-y-space-md">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-primary flex items-center gap-space-sm">
              <span className="material-symbols-outlined">account_tree</span>
              Klasifikasi Arsip
            </h2>
            <span className="text-body-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
              TND-2024
            </span>
          </div>
          <div className="relative">
            <input
              className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md pl-10 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Cari kode klasifikasi..."
              type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-space-xs max-h-[600px] pr-1">
            {tree.map((node) => {
              const isOpen = !!openFolders[node.id]
              return (
                <div key={node.id} className="group">
                  <div
                    className="flex items-center justify-between p-space-sm rounded-xl hover:bg-surface-container-high cursor-pointer transition-colors"
                    onClick={() => toggleFolder(node.id)}
                  >
                    <div className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          isOpen ? 'text-secondary' : 'text-on-surface-variant'
                        }`}
                      >
                        {isOpen ? 'folder_open' : 'folder'}
                      </span>
                      <span className="font-label-md text-on-surface">{node.label}</span>
                    </div>
                    <span className="text-body-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
                      {node.count}
                    </span>
                  </div>
                  {isOpen && (
                    <div className="pl-space-xl space-y-space-xs mt-1">
                      {node.children.map((c) => (
                        <div
                          key={c.label}
                          className="flex items-center justify-between p-space-xs px-space-sm rounded-lg hover:bg-surface-container-high cursor-pointer text-body-md text-on-surface-variant"
                        >
                          <span>{c.label}</span>
                          <span className="text-body-sm">{c.count}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col space-y-space-lg">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-space-md">
            <div className="sm:col-span-2 relative">
              <input
                className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md pl-10 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Cari berdasarkan kata kunci, nomor surat, perihal..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
            </div>
            <div>
              <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                <option>Semua Status</option>
                <option>Disposisi Aktif</option>
                <option>Arsip Permanen</option>
                <option>Retensi / Musnah</option>
              </select>
            </div>
            <div>
              <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                <option>Urutkan: Terbaru</option>
                <option>Urutkan: Terlama</option>
                <option>Nomor Surat A-Z</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-space-md pt-2">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="text-body-sm text-on-surface-variant">Filter Aktif:</span>
              <span className="inline-flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded-full text-body-sm text-on-surface">
                <span>Klasifikasi: 005</span>
                <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded-full text-body-sm text-on-surface">
                <span>Tahun: 2024</span>
                <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
              </span>
            </div>
            <button className="text-body-sm text-secondary hover:underline font-label-sm">Reset Filter</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-container-highest text-on-surface-variant font-label-sm uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4">No. Surat / Klasifikasi</th>
                  <th className="py-3 px-4">Perihal & Pengirim</th>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-highest text-body-md">
                {docs.map((d) => (
                  <tr
                    key={d.id}
                    className="hover:bg-surface-container-high/50 cursor-pointer transition-colors"
                    onClick={() => setDocModal(d.id)}
                  >
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-primary block">{d.no}</span>
                      <span className="text-body-sm text-on-surface-variant">{d.klas}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-medium text-on-surface line-clamp-1">{d.subject}</span>
                      <span className="text-body-sm text-on-surface-variant">{d.sender}</span>
                    </td>
                    <td className="py-3.5 px-4 text-on-surface-variant whitespace-nowrap">{d.date}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-body-sm font-label-sm ${d.status.cls}`}
                      >
                        {d.status.label}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-space-sm" onClick={(e) => e.stopPropagation()}>
                        <button
                          className="p-1.5 hover:bg-surface-container-highest rounded-lg text-on-surface-variant hover:text-primary transition-colors"
                          onClick={() => setDocModal(d.id)}
                          title="Lihat Detail"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button
                          className="p-1.5 hover:bg-surface-container-highest rounded-lg text-on-surface-variant hover:text-primary transition-colors"
                          title="Unduh Dokumen"
                        >
                          <span className="material-symbols-outlined text-[18px]">download</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-body-sm text-on-surface-variant">Menampilkan 1-3 dari 42,850 arsip</span>
            <div className="flex items-center gap-space-xs">
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm disabled opacity-50">
                Sebelumnya
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm">1</button>
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-sm">
                2
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-sm">
                3
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-sm">
                Berikutnya
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeDoc && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md">
          <div className="bg-surface-container-low w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-space-xl py-space-lg bg-surface-container-lowest">
              <div className="flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <span className="font-headline-sm text-primary">{activeDoc.no}</span>
                  <span className="text-body-sm text-on-surface-variant block">Klasifikasi: {activeDoc.klas}</span>
                </div>
              </div>
              <button
                className="p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={() => setDocModal(null)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto p-space-xl gap-space-xl">
              <div className="lg:col-span-7 space-y-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
                  <h3 className="font-headline-sm text-primary">Informasi Dokumen</h3>
                  <div className="grid grid-cols-2 gap-space-md text-body-md">
                    <div>
                      <span className="text-body-sm text-on-surface-variant block">Pengirim / Instansi</span>
                      <span className="font-medium text-on-surface">{activeDoc.sender}</span>
                    </div>
                    <div>
                      <span className="text-body-sm text-on-surface-variant block">Tanggal Surat</span>
                      <span className="font-medium text-on-surface">{activeDoc.date}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-body-sm text-on-surface-variant block">Perihal</span>
                      <span className="font-medium text-on-surface">{activeDoc.subject}.</span>
                    </div>
                    <div>
                      <span className="text-body-sm text-on-surface-variant block">Sifat Keamanan</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-body-sm bg-error-container text-error font-label-sm">
                        Penting / Rahasia
                      </span>
                    </div>
                    <div>
                      <span className="text-body-sm text-on-surface-variant block">Tingkat Retensi</span>
                      <span className="font-medium text-on-surface">5 Tahun (Aktif)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                      Pratinjau Berkas Lampiran
                    </span>
                    <div className="flex items-center gap-space-sm">
                      <button className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg text-body-sm font-label-sm transition-colors">
                        Perbesar
                      </button>
                      <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg text-body-sm font-label-sm transition-colors">
                        Unduh PDF
                      </button>
                    </div>
                  </div>
                  <div
                    className="w-full h-72 bg-cover bg-center rounded-xl border border-surface-container-highest"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiUYMfjscVjPOZF2QwivtvS5YrMA3IEGdp0qqaUsMtNMqtaAGkCjY9MyR5jKpscQgoINx7pqwpK4GJCRI5KVFMjdsFKBsFSzrjrIRlGWnqc8i--m5L9DognFd0tR9_c456TMsTsxzJNXpzrlZWiRkFYB6OOSeNyghqrq8scQ5OfxlqcCWwzEf5QdyOFNV4YP0zEKRiBdpfF_QPOwbMuOpTbQ01FcVBqMcaUE5ZU0uYH7ycik1qoGOD')",
                    }}
                  ></div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">history</span>
                    Audit Trail Log
                  </h3>
                  <span className="text-body-sm text-secondary bg-secondary-fixed/30 px-2 py-0.5 rounded-full font-label-sm">
                    Immutable
                  </span>
                </div>
                <p className="text-body-sm text-on-surface-variant">
                  Catatan waktu real-time pelacakan aktivitas akses, unduhan, dan disposisi dokumen.
                </p>
                <div className="flex-1 overflow-y-auto space-y-space-md pr-1">
                  {auditLogs.map((log, i) => (
                    <div
                      key={i}
                      className={`flex gap-space-md relative pl-6 border-l-2 ${
                        log.tone === 'secondary' ? 'border-secondary' : 'border-surface-container-highest'
                      }`}
                    >
                      <span
                        className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
                          log.tone === 'secondary' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary'
                        } flex items-center justify-center text-[10px]`}
                      >
                        <span className="material-symbols-outlined text-[10px]">{log.icon}</span>
                      </span>
                      <div>
                        <span className="font-label-sm text-on-surface block">{log.title}</span>
                        <span className="text-body-sm text-on-surface-variant block">{log.sub}</span>
                        <span className="text-[11px] text-on-surface-variant opacity-75 mt-0.5 block">{log.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-space-xl py-space-md bg-surface-container-lowest border-t border-surface-container-highest">
              <span className="text-body-sm text-on-surface-variant">
                ID Dokumen: <code className="text-secondary font-code">DOC-891-2024-SEC</code>
              </span>
              <div className="flex items-center gap-space-md">
                <button
                  className="px-space-lg py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-md transition-all"
                  onClick={() => setDocModal(null)}
                >
                  Tutup
                </button>
                <button className="px-space-lg py-space-sm bg-primary text-on-primary rounded-xl font-label-md transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  Verifikasi Keaslian Arsip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {exportModal && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md">
          <div className="bg-surface-container-low w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col p-space-xl space-y-space-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">download</span>
                Export Laporan Arsip & DMS
              </h3>
              <button
                className="p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={() => setExportModal(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-space-md">
              <div>
                <label className="font-label-sm text-on-surface block mb-1">Format Berkas</label>
                <div className="grid grid-cols-2 gap-space-md">
                  {[
                    { v: 'xlsx', label: 'Excel (.xlsx)' },
                    { v: 'pdf', label: 'PDF Report' },
                  ].map((f) => (
                    <label
                      key={f.v}
                      className={
                        'flex items-center gap-space-sm p-space-md bg-surface-container-lowest rounded-xl cursor-pointer border-2 ' +
                        (exportFormat === f.v ? 'border-primary' : 'border border-surface-container-highest')
                      }
                    >
                      <input
                        type="radio"
                        name="export-format"
                        checked={exportFormat === f.v}
                        onChange={() => setExportFormat(f.v)}
                        className="text-primary"
                      />
                      <span className="font-label-md text-on-surface">{f.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-label-sm text-on-surface block mb-1">Rentang Tanggal</label>
                <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option>Bulan Ini (Oktober 2024)</option>
                  <option>Kuartal III 2024</option>
                  <option>Tahun Anggaran 2024</option>
                  <option>Semua Waktu</option>
                </select>
              </div>
              <div>
                <label className="font-label-sm text-on-surface block mb-1">Cakupan Klasifikasi</label>
                <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option>Semua Klasifikasi (000 - 900)</option>
                  <option>000 - Umum & Administrasi</option>
                  <option>800 - Kepegawaian</option>
                  <option>900 - Keuangan & Aset</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-space-md pt-2">
              <button
                className="px-space-lg py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-md transition-all"
                onClick={() => setExportModal(false)}
              >
                Batal
              </button>
              <button
                className="px-space-lg py-space-sm bg-primary text-on-primary rounded-xl font-label-md transition-all flex items-center gap-2"
                onClick={() => {
                  alert('Laporan berhasil diexport!')
                  setExportModal(false)
                }}
              >
                <span className="material-symbols-outlined text-[18px]">file_download</span>
                Unduh Laporan
              </button>
            </div>
          </div>
        </div>
      )}

      {newArchiveModal && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md">
          <div className="bg-surface-container-low w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col p-space-xl space-y-space-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">add_box</span>
                Input Arsip & Naskah Dinas Baru
              </h3>
              <button
                className="p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={() => setNewArchiveModal(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-space-md">
              <div className="grid grid-cols-2 gap-space-md">
                <div>
                  <label className="font-label-sm text-on-surface block mb-1">Nomor Surat / Dokumen</label>
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Contoh: B-102/SETDA/XI/2024"
                    type="text"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-on-surface block mb-1">Klasifikasi TND</label>
                  <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option>005 - Undangan & Rapat</option>
                    <option>800.1 - SK Pengangkatan</option>
                    <option>900.2 - Anggaran Belanja</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-label-sm text-on-surface block mb-1">Pengirim / Instansi Asal</label>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Nama instansi pengirim..."
                  type="text"
                />
              </div>
              <div>
                <label className="font-label-sm text-on-surface block mb-1">Perihal / Ringkasan Isi</label>
                <textarea
                  className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Masukkan perihal dokumen..."
                  rows={3}
                ></textarea>
              </div>
              <div>
                <label className="font-label-sm text-on-surface block mb-1">Unggah Berkas (PDF)</label>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-space-lg text-center cursor-pointer hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-[36px] text-primary">upload_file</span>
                  <span className="font-label-md text-on-surface block mt-2">
                    Seret berkas PDF di sini atau klik untuk memilih
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    Maksimal ukuran berkas 25MB (Otomatis enkripsi SHA-256)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-space-md pt-2">
              <button
                className="px-space-lg py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-md transition-all"
                onClick={() => setNewArchiveModal(false)}
              >
                Batal
              </button>
              <button
                className="px-space-lg py-space-sm bg-primary text-on-primary rounded-xl font-label-md transition-all flex items-center gap-2"
                onClick={() => {
                  alert('Arsip baru berhasil diindeks dan disimpan!')
                  setNewArchiveModal(false)
                }}
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                Simpan & Indeks
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}