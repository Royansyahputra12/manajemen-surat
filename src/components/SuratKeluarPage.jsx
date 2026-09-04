import { useState } from 'react'
import Modal from './Modal'

const metrics = [
  {
    label: 'Total Draf Aktif',
    value: '24',
    delta: '+4 minggu ini',
    deltaColor: 'text-secondary',
    icon: 'edit_document',
    iconText: 'text-primary',
  },
  {
    label: 'Menunggu Paraf / TTE',
    value: '8',
    delta: 'Perlu tindakan segera',
    deltaColor: 'text-tertiary-container',
    icon: 'pending_actions',
    iconText: 'text-tertiary-container',
  },
  {
    label: 'Disetujui & Terkirim',
    value: '142',
    delta: 'Bulan ini',
    deltaColor: 'text-secondary',
    icon: 'verified',
    iconText: 'text-secondary',
  },
  {
    label: 'Arsip Koding Selesai',
    value: '99.8%',
    delta: 'Valid',
    deltaColor: 'text-secondary',
    icon: 'folder_managed',
    iconText: 'text-on-surface',
  },
]

const letters = [
  {
    id: '1',
    code: 'ND-412/DIR/V/2024',
    codeBg: 'bg-primary-fixed text-primary',
    status: 'Paraf Direksi',
    statusCls: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    title: 'Undangan Rapat Koordinasi Anggaran Q3 & Evaluasi Kinerja',
    tujuan: 'Tujuan: Kepala Divisi Regional & Cabang',
    date: '12 Mei 2024',
  },
  {
    id: '2',
    code: 'SK-089/HR/V/2024',
    codeBg: 'bg-surface-container text-on-surface-variant',
    status: 'TTE Terverifikasi',
    statusCls: 'bg-secondary-fixed text-on-secondary-fixed',
    title: 'Keputusan Mutasi & Promosi Pegawai Tetap Periode Mei',
    tujuan: 'Tujuan: Seluruh Pegawai Kantor Pusat',
    date: '10 Mei 2024',
  },
  {
    id: '3',
    code: 'SE-015/OPS/V/2024',
    codeBg: 'bg-surface-container text-on-surface-variant',
    status: 'Draf Awal',
    statusCls: 'bg-surface-container-high text-on-surface-variant',
    title: 'Standar Operasional Prosedur Pengamanan Dokumen Elektronik',
    tujuan: 'Tujuan: Tim IT & Kepatuhan',
    date: '08 Mei 2024',
  },
  {
    id: '4',
    code: 'UM-210/SEC/V/2024',
    codeBg: 'bg-surface-container text-on-surface-variant',
    status: 'Revisi Diperlukan',
    statusCls: 'bg-error-container text-on-error-container',
    title: 'Pemberitahuan Pemeliharaan Infrastruktur Server Utama',
    tujuan: 'Tujuan: Mitra Vendor Eksternal',
    date: '05 Mei 2024',
  },
]

const steps = [
  {
    no: 'TAHAP 1',
    state: 'done',
    title: 'Penyusunan Draf',
    by: 'Oleh: Staff Administrasi Umum (Selesai 08 Mei)',
  },
  {
    no: 'TAHAP 2',
    state: 'done',
    title: 'Koreksi & Paraf 1',
    by: 'Oleh: Kasubag Hukum & Organisasi (Selesai 10 Mei)',
  },
  {
    no: 'TAHAP 3',
    state: 'active',
    title: 'Paraf Direksi',
    by: 'Menunggu: Direktur Operasional',
  },
  {
    no: 'TAHAP 4',
    state: 'pending',
    title: 'TTE & Penomoran Final',
    by: 'Sistem Arsip Otomatis',
  },
]

export default function SuratKeluarPage() {
  const [selected, setSelected] = useState('1')
  const [openDraft, setOpenDraft] = useState(false)
  const [tab, setTab] = useState('preview')

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl">
        <div>
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="text-code uppercase tracking-wider text-on-surface-variant font-bold">
              Modul Pengelolaan
            </span>
            <span className="text-on-surface-variant">/</span>
            <span className="text-code uppercase tracking-wider text-primary font-bold">
              Surat Keluar
            </span>
          </div>
          <h1 className="text-headline-lg font-bold text-on-surface tracking-tight">
            Manajemen & Arsip Surat Keluar
          </h1>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Pusat kendali pembuatan draf, pelacakan paraf elektronik, verifikasi TTE, dan penomoran
            otomatis.
          </p>
        </div>
        <div className="flex items-center gap-space-sm">
          <button
            onClick={() => setOpenDraft(true)}
            className="flex items-center gap-space-sm px-space-lg py-space-md bg-primary-container text-on-primary-container font-bold rounded-xl shadow-md hover:bg-primary transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>Buat Draf Surat Baru</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-2xl">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-space-md">
              <span className="text-label-md text-on-surface-variant font-medium">{m.label}</span>
              <div
                className={`w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center ${m.iconText}`}
              >
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
            </div>
            <div className="flex items-baseline gap-space-sm">
              <span className="text-headline-lg font-bold text-on-surface">{m.value}</span>
              <span className={`text-body-sm font-medium ${m.deltaColor}`}>{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
            <input
              className="w-full bg-transparent text-body-md text-on-surface focus:outline-none"
              placeholder="Cari nomor, perihal, atau tujuan surat..."
              type="text"
            />
            <button className="px-space-md py-space-xs bg-surface-container-high rounded-xl text-label-md text-on-surface font-medium">
              Filter
            </button>
          </div>

          <div className="bg-surface-container-low rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-space-lg py-space-md bg-surface-container flex items-center justify-between">
              <span className="text-label-md font-bold text-on-surface">Daftar Surat Keluar Aktif</span>
              <span className="text-body-sm text-on-surface-variant">Menampilkan 4 dari 24</span>
            </div>
            <div className="flex flex-col divide-y divide-surface-container-high">
              {letters.map((l) => (
                <div
                  key={l.id}
                  onClick={() => setSelected(l.id)}
                  className={
                    'p-space-lg cursor-pointer transition-all flex flex-col gap-space-sm ' +
                    (selected === l.id
                      ? 'bg-surface-container-high/60 hover:bg-surface-container-high'
                      : 'hover:bg-surface-container-high/50')
                  }
                >
                  <div className="flex items-start justify-between">
                    <span className={`text-code font-bold px-space-xs py-0.5 rounded ${l.codeBg}`}>
                      {l.code}
                    </span>
                    <span className={`px-space-sm py-0.5 rounded-full text-body-sm font-medium ${l.statusCls}`}>
                      {l.status}
                    </span>
                  </div>
                  <h4 className="text-headline-sm text-on-surface line-clamp-1">{l.title}</h4>
                  <div className="flex items-center justify-between text-body-sm text-on-surface-variant mt-1">
                    <span>{l.tujuan}</span>
                    <span>{l.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div className="bg-surface-container-low p-space-sm rounded-xl shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              {[
                { id: 'preview', label: 'Pratinjau & Draf' },
                { id: 'workflow', label: 'Alur Paraf & TTE' },
                { id: 'coding', label: 'Koding Arsip' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={
                    'px-space-md py-space-sm rounded-xl text-label-md font-bold transition-all ' +
                    (tab === t.id
                      ? 'bg-primary-container text-on-primary-container'
                      : 'text-on-surface-variant font-medium hover:bg-surface-container-high')
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-space-sm">
              <button className="p-space-sm text-on-surface-variant hover:text-on-surface rounded-xl hover:bg-surface-container-high">
                <span className="material-symbols-outlined">print</span>
              </button>
              <button className="p-space-sm text-on-surface-variant hover:text-on-surface rounded-xl hover:bg-surface-container-high">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="p-space-sm text-on-surface-variant hover:text-on-surface rounded-xl hover:bg-surface-container-high">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg border-b border-surface-container-highest">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs flex-wrap">
                  <span className="text-code text-primary font-bold">
                    Nomor Otomatis: ND-412/DIR/V/2024
                  </span>
                  <span className="px-space-sm py-0.5 bg-secondary-fixed text-on-secondary-fixed text-body-sm font-medium rounded">
                    Sistem Kearsipan Standar
                  </span>
                </div>
                <h2 className="text-headline-md font-bold text-on-surface">
                  Undangan Rapat Koordinasi Anggaran Q3 & Evaluasi Kinerja
                </h2>
              </div>
              <div className="mt-space-md md:mt-0 flex items-center gap-space-sm">
                <span className="text-body-sm text-on-surface-variant">Template:</span>
                <span className="px-space-md py-space-xs bg-surface-container-high rounded-xl text-label-md font-bold text-on-surface">
                  Nota Dinas Internal
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-2xl rounded-xl shadow-inner font-body-md text-on-surface flex flex-col gap-space-lg max-h-[400px] overflow-y-auto">
              <div className="text-center font-bold text-headline-sm tracking-wide">
                PT ENTERPRISE SYSTEM INDONESIA
                <br />
                <span className="text-body-md font-normal text-on-surface-variant">
                  Gedung Menara Korporat Lt. 18, Jl. Jend. Sudirman Kav. 50, Jakarta
                </span>
              </div>
              <hr className="border-surface-container-highest" />
              <div className="grid grid-cols-2 gap-space-lg text-body-sm">
                <div>
                  <strong>Kepada:</strong> Kepala Divisi Regional & Seluruh Kepala Cabang
                </div>
                <div>
                  <strong>Tanggal:</strong> 12 Mei 2024
                </div>
                <div>
                  <strong>Dari:</strong> Direktur Operasional & Keuangan
                </div>
                <div>
                  <strong>Sifat:</strong> Penting / Rahasia
                </div>
                <div className="col-span-2">
                  <strong>Perihal:</strong> Undangan Rapat Koordinasi Anggaran Q3 & Evaluasi Kinerja
                </div>
              </div>
              <div className="mt-space-md space-y-space-md text-body-md">
                <p>
                  Sehubungan dengan berakhirnya paruh pertama tahun anggaran 2024, bersama ini kami
                  mengundang Bapak/Ibu pimpinan unit kerja untuk hadir dalam Rapat Koordinasi Anggaran
                  Q3 dan Evaluasi Kinerja yang akan diselenggarakan pada:
                </p>
                <ul className="list-disc pl-space-lg space-y-space-xs text-on-surface-variant">
                  <li>Hari/Tanggal: Rabu, 15 Mei 2024</li>
                  <li>Waktu: 09.00 WIB s.d. selesai</li>
                  <li>Media: Hybrid (Ruang Rapat Utama Lt. 20 & Tautan Daring Terenkripsi)</li>
                </ul>
                <p>
                  Mengingat pentingnya agenda tersebut, setiap kepala unit diwajibkan membawa draf
                  usulan anggaran operasional semester kedua serta laporan capaian KPI masing-masing.
                </p>
              </div>
              <div className="flex justify-end mt-space-xl">
                <div className="flex flex-col items-center text-center">
                  <span className="text-body-sm text-on-surface-variant mb-space-xs">
                    Disetujui secara elektronik via TTE BSRE
                  </span>
                  <div className="p-space-sm bg-surface-container-low rounded-xl border border-surface-container-highest flex items-center gap-space-md">
                    <div className="w-16 h-16 bg-surface-container-high rounded flex items-center justify-center text-primary font-bold text-code">
                      <span className="material-symbols-outlined text-[32px]">qr_code_2</span>
                    </div>
                    <div className="text-left">
                      <div className="text-code font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span> TTE
                        VALID
                      </div>
                      <div className="text-body-sm text-on-surface-variant">
                        Ditandatangani oleh:
                        <br />
                        Dr. H. M. Fauzi, M.Sc.
                        <br />
                        NIP. 19780412 200501 1 003
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <h3 className="text-headline-sm font-bold text-on-surface flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary">timeline</span> Pelacakan
                Alur Paraf & TTE
              </h3>
              <span className="text-label-md text-primary font-medium">
                Tahap 3 dari 4 (Menunggu Tanda Tangan Akhir)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md mt-space-xs">
              {steps.map((s) => {
                const cls =
                  s.state === 'active'
                    ? 'bg-surface-container-high border-l-4 border-tertiary-container shadow-sm'
                    : s.state === 'pending'
                      ? 'bg-surface-container-low border-l-4 border-surface-container-highest opacity-60'
                      : 'bg-surface-container-low border-l-4 border-primary'
                const noCls =
                  s.state === 'active'
                    ? 'text-tertiary-container'
                    : s.state === 'pending'
                      ? 'text-on-surface-variant'
                      : 'text-primary'
                const icon =
                  s.state === 'active'
                    ? 'progress_activity'
                    : s.state === 'pending'
                      ? 'radio_button_unchecked'
                      : 'check_circle'
                const iconCls =
                  s.state === 'active'
                    ? 'text-tertiary-container animate-spin'
                    : s.state === 'pending'
                      ? 'text-on-surface-variant'
                      : 'text-secondary'
                return (
                  <div key={s.no} className={`flex flex-col gap-space-xs p-space-md rounded-xl ${cls}`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-code font-bold ${noCls}`}>{s.no}</span>
                      <span className={`material-symbols-outlined text-[18px] ${iconCls}`}>
                        {icon}
                      </span>
                    </div>
                    <span className="text-label-md font-bold text-on-surface">{s.title}</span>
                    <span className="text-body-sm text-on-surface-variant">{s.by}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">folder_open</span>
              </div>
              <div>
                <h4 className="text-headline-sm font-bold text-on-surface">
                  Koding Arsip Organisasi: UM.01.02/348/2024
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  Klasifikasi: Umum & Tata Usaha / Rapat Pimpinan / Klasifikasi Keamanan Biasa
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm w-full md:w-auto">
              <button className="w-full md:w-auto px-space-lg py-space-md bg-primary text-on-primary font-bold rounded-xl text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Berikan Paraf / TTE Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openDraft}
        onClose={() => setOpenDraft(false)}
        icon="edit_document"
        title="Buat Draf Surat Keluar Baru"
        size="max-w-2xl"
      >
        <div className="flex flex-col gap-space-md">
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-space-xs">
              Pilih Template Standar Internal
            </label>
            <select className="w-full p-space-md bg-surface-container-low border border-surface-container-highest rounded-xl text-body-md text-on-surface focus:outline-none focus:border-primary">
              <option>Nota Dinas (ND) - Standar Koordinasi Internal</option>
              <option>Surat Edaran (SE) - Kebijakan Operasional</option>
              <option>Surat Keputusan (SK) - Mutasi & Promosi</option>
              <option>Surat Tugas (ST) - Penugasan Perjalanan Dinas</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-space-xs">
                Klasifikasi Arsip Otomatis
              </label>
              <input
                className="w-full p-space-md bg-surface-container border border-surface-container-highest rounded-xl text-body-md text-on-surface-variant"
                readOnly
                type="text"
                value="UM.01.02 - Ketatausahaan & Rapat"
              />
            </div>
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-space-xs">
                Nomor Surat Generator
              </label>
              <input
                className="w-full p-space-md bg-surface-container border border-surface-container-highest rounded-xl text-code font-bold text-primary"
                readOnly
                type="text"
                value="ND-413/DIR/V/2024 (Auto-Generated)"
              />
            </div>
          </div>
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-space-xs">
              Tujuan / Penerima Surat
            </label>
            <input
              className="w-full p-space-md bg-surface-container-low border border-surface-container-highest rounded-xl text-body-md text-on-surface focus:outline-none focus:border-primary"
              placeholder="Contoh: Seluruh Kepala Divisi / Mitra Kerja"
              type="text"
            />
          </div>
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-space-xs">
              Perihal / Subjek Surat
            </label>
            <input
              className="w-full p-space-md bg-surface-container-low border border-surface-container-highest rounded-xl text-body-md text-on-surface focus:outline-none focus:border-primary"
              placeholder="Tuliskan perihal surat secara ringkas dan jelas..."
              type="text"
            />
          </div>
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-space-xs">
              Isi Ringkas / Draf Pesan
            </label>
            <textarea
              className="w-full p-space-md bg-surface-container-low border border-surface-container-highest rounded-xl text-body-md text-on-surface focus:outline-none focus:border-primary"
              placeholder="Ketik atau tempel isi surat di sini..."
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-end gap-space-md pt-space-md border-t border-surface-container-highest mt-space-lg">
          <button
            onClick={() => setOpenDraft(false)}
            className="px-space-lg py-space-md bg-surface-container-high text-on-surface font-medium rounded-xl text-label-md hover:bg-surface-container-highest transition-all"
          >
            Batal
          </button>
          <button
            onClick={() => {
              alert('Draf surat baru berhasil disimpan dan dimasukkan ke dalam alur paraf elektronik (Tahap 1)!')
              setOpenDraft(false)
            }}
            className="px-space-lg py-space-md bg-primary text-on-primary font-bold rounded-xl text-label-md hover:bg-primary-container transition-all flex items-center gap-space-sm"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Simpan & Ajukan Paraf</span>
          </button>
        </div>
      </Modal>
    </>
  )
}