import { useState } from 'react'
import SuratMasukTable from './SuratMasukTable'
import DispositionTimeline from './DispositionTimeline'
import NotificationCenter from './NotificationCenter'
import Modal from './Modal'

const metrics = [
  {
    label: 'Total Surat Masuk',
    value: '1,248',
    delta: '+12% bln ini',
    deltaColor: 'text-secondary',
    icon: 'inbox',
    iconBg: 'bg-primary-fixed',
    iconText: 'text-on-primary-fixed',
  },
  {
    label: 'Perlu Disposisi',
    value: '38',
    delta: 'Urgensi Tinggi',
    deltaColor: 'text-error',
    icon: 'pending_actions',
    iconBg: 'bg-tertiary-fixed',
    iconText: 'text-on-tertiary-fixed',
  },
  {
    label: 'Sedang Diproses',
    value: '142',
    delta: 'Aktif',
    deltaColor: 'text-secondary',
    icon: 'sync',
    iconBg: 'bg-secondary-fixed',
    iconText: 'text-on-secondary-fixed',
  },
  {
    label: 'Arsip Selesai',
    value: '1,068',
    delta: 'Tuntas',
    deltaColor: 'text-on-surface-variant',
    icon: 'task_alt',
    iconBg: 'bg-surface-container-highest',
    iconText: 'text-on-surface',
  },
]

export default function SuratMasukPage() {
  const [openUpload, setOpenUpload] = useState(false)
  const [openDisposition, setOpenDisposition] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)
  const [agendaNum, setAgendaNum] = useState('AGD/2023/1029')

  return (
    <>
      <div className="grid grid-cols-12 gap-gutter mb-space-2xl">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          <span className="text-label-sm font-body-sm text-on-surface-variant uppercase tracking-wider mb-space-xs">
            Manajemen Dokumen & Disposisi
          </span>
          <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
            Surat Masuk & Alur Kerja
          </h1>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Kelola agenda surat masuk, penomoran otomatis, dan pelacakan disposisi elektronik secara
            real-time.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-center justify-end gap-space-md">
          <button
            className="flex items-center gap-space-sm bg-primary text-on-primary px-space-xl py-space-md rounded-xl font-label-md shadow-md hover:bg-primary-container transition-all"
            onClick={() => setOpenUpload(true)}
          >
            <span className="material-symbols-outlined">upload_file</span>
            Unggah Surat Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter mb-space-2xl">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-surface-container-low rounded-xl p-space-xl shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-space-lg">
              <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                {m.label}
              </span>
              <div
                className={`w-10 h-10 rounded-full ${m.iconBg} flex items-center justify-center ${m.iconText}`}
              >
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
            </div>
            <div className="flex items-baseline gap-space-sm">
              <span className="text-headline-lg font-headline-lg text-on-surface">{m.value}</span>
              <span className={`text-body-sm font-label-sm ${m.deltaColor}`}>{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-low rounded-xl p-space-lg mb-space-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-4 relative">
            <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full bg-surface-container-lowest text-on-surface pl-12 pr-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md transition-all"
              placeholder="Cari nomor surat, perihal, atau pengirim..."
              type="text"
            />
          </div>
          <div className="col-span-12 sm:col-span-4 md:col-span-2">
            <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md">
              <option value="">Status: Semua</option>
              <option value="pending">Menunggu Disposisi</option>
              <option value="process">Sedang Diproses</option>
              <option value="completed">Selesai</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-4 md:col-span-2">
            <select className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md">
              <option value="">Kerahasiaan</option>
              <option value="biasa">Biasa</option>
              <option value="penting">Penting</option>
              <option value="rahasia">Rahasia</option>
              <option value="sangat-rahasia">Sangat Rahasia</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-4 md:col-span-2">
            <input
              className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
              type="date"
            />
          </div>
          <div className="col-span-12 md:col-span-2 flex justify-end">
            <button className="w-full md:w-auto bg-surface-container-high text-on-surface px-space-lg py-space-sm rounded-xl text-label-md hover:bg-surface-variant transition-all">
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      <SuratMasukTable
        onDisposition={(a) => {
          setAgendaNum(a)
          setOpenDisposition(true)
        }}
        onDetail={() => setOpenDetail(true)}
      />

      <div className="grid grid-cols-12 gap-gutter">
        <DispositionTimeline />
        <NotificationCenter />
      </div>

      <Modal
        open={openUpload}
        onClose={() => setOpenUpload(false)}
        icon="upload_file"
        title="Unggah Dokumen Surat Masuk"
      >
        <form className="space-y-space-lg">
          <div>
            <label className="block text-label-md text-on-surface mb-space-xs">
              File Scan / PDF Surat *
            </label>
            <div className="border-2 border-dashed border-outline-variant rounded-xl p-space-2xl text-center hover:border-primary transition-colors cursor-pointer bg-surface-container-low">
              <span className="material-symbols-outlined text-[48px] text-primary mb-space-sm">
                cloud_upload
              </span>
              <div className="text-body-lg text-on-surface font-label-md">
                Seret file ke sini atau <span className="text-primary underline">telusuri</span>
              </div>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Format PDF, JPG, PNG (Maks. 25MB)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div>
              <label className="block text-label-md text-on-surface mb-space-xs">Nomor Surat Asal *</label>
              <input
                className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
                placeholder="Contoh: SRT-0912/KEMEN-PAN/X/2023"
                type="text"
              />
            </div>
            <div>
              <label className="block text-label-md text-on-surface mb-space-xs">
                Nomor Agenda Sistem (Otomatis)
              </label>
              <input
                className="w-full bg-surface-container-highest text-on-surface-variant px-space-md py-space-sm rounded-xl border border-outline-variant text-body-md cursor-not-allowed"
                disabled
                type="text"
                value="AGD/2023/1030"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div>
              <label className="block text-label-md text-on-surface mb-space-xs">Tanggal Surat *</label>
              <input
                className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
                type="date"
              />
            </div>
            <div>
              <label className="block text-label-md text-on-surface mb-space-xs">
                Tingkat Kerahasiaan *
              </label>
              <select className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md">
                <option value="biasa">Biasa</option>
                <option value="penting">Penting</option>
                <option value="rahasia">Rahasia</option>
                <option value="sangat-rahasia">Sangat Rahasia</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-label-md text-on-surface mb-space-xs">
              Pengirim / Instansi Asal *
            </label>
            <input
              className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
              placeholder="Contoh: Kementerian Pendayagunaan Aparatur Negara"
              type="text"
            />
          </div>
          <div>
            <label className="block text-label-md text-on-surface mb-space-xs">Perihal / Ringkasan Isi *</label>
            <textarea
              className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
              placeholder="Tuliskan ringkasan perihal surat..."
              rows="3"
            ></textarea>
          </div>
          <div className="flex items-center justify-end gap-space-md pt-space-md">
            <button
              type="button"
              onClick={() => setOpenUpload(false)}
              className="px-space-xl py-space-md rounded-xl bg-surface-container-high text-on-surface font-label-md hover:bg-surface-variant transition-all"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={() => setOpenUpload(false)}
              className="px-space-xl py-space-md rounded-xl bg-primary text-on-primary font-label-md hover:bg-primary-container transition-all"
            >
              Simpan & Generate Agenda
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={openDisposition}
        onClose={() => setOpenDisposition(false)}
        icon="account_tree"
        title={`Kelola Disposisi Elektronik (${agendaNum})`}
      >
        <form className="space-y-space-lg">
          <div>
            <label className="block text-label-md text-on-surface mb-space-xs">
              Teruskan Kepada (Penerima Disposisi) *
            </label>
            <select className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md">
              <option value="">Pilih Pejabat / Staff Tujuan...</option>
              <option value="kabag-hukum">Kepala Bagian Hukum</option>
              <option value="kabag-umum">Kepala Bagian Umum & Kepegawaian</option>
              <option value="kasubbag-tu">Kepala Sub Bagian Tata Usaha</option>
              <option value="staff-ahli">Staff Ahli Bidang Regulasi</option>
            </select>
          </div>
          <div>
            <label className="block text-label-md text-on-surface mb-space-xs">
              Instruksi / Catatan Pimpinan *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mb-space-sm">
              {['Untuk Diketahui', 'Mohon Tanggapan', 'Proses Lebih Lanjut', 'Arsipkan'].map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/50 text-body-sm cursor-pointer hover:bg-surface-container"
                >
                  <input className="rounded text-primary" type="checkbox" /> {c}
                </label>
              ))}
            </div>
            <textarea
              className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
              placeholder="Tambahkan instruksi detail disposisi..."
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block text-label-md text-on-surface mb-space-xs">Tenggat Waktu (Deadline)</label>
            <input
              className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xl border border-outline-variant focus:outline-none focus:border-secondary text-body-md"
              type="date"
            />
          </div>
          <div className="flex items-center justify-end gap-space-md pt-space-md">
            <button
              type="button"
              onClick={() => setOpenDisposition(false)}
              className="px-space-xl py-space-md rounded-xl bg-surface-container-high text-on-surface font-label-md hover:bg-surface-variant transition-all"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={() => setOpenDisposition(false)}
              className="px-space-xl py-space-md rounded-xl bg-primary text-on-primary font-label-md hover:bg-primary-container transition-all"
            >
              Kirim Disposisi
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        icon="description"
        title="Detail Dokumen Surat Masuk"
        size="max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          <div className="space-y-space-md bg-surface-container-low p-space-lg rounded-xl">
            <div className="text-label-sm uppercase tracking-wider text-on-surface-variant">
              Metadata Surat
            </div>
            {[
              ['Nomor Agenda', 'AGD/2023/1029'],
              ['Nomor Surat Asal', 'SRT-0912/KEMEN-PAN/X/2023'],
              ['Tanggal Surat', '24 Oktober 2023'],
              ['Pengirim', 'KemenPAN-RB RI'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1 border-b border-outline-variant/20">
                <span className="text-body-sm text-on-surface-variant">{k}</span>
                <span className="font-label-md text-on-surface">{v}</span>
              </div>
            ))}
            <div className="flex justify-between py-1 border-b border-outline-variant/20">
              <span className="text-body-sm text-on-surface-variant">Kerahasiaan</span>
              <span className="font-label-md text-error">Rahasia</span>
            </div>
            <div className="pt-space-sm">
              <span className="text-body-sm text-on-surface-variant block mb-1">Perihal</span>
              <p className="text-body-md text-on-surface font-label-md">
                Evaluasi Akuntabilitas Kinerja Instansi Pemerintah Tahun 2023
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-surface-container-low p-space-lg rounded-xl">
            <div>
              <div className="text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-md">
                Pratinjau Dokumen PDF
              </div>
              <div className="w-full h-64 bg-surface-container-high rounded-xl flex flex-col items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[64px] text-primary mb-space-sm">
                  picture_as_pdf
                </span>
                <span className="font-label-md text-on-surface">SRT-0912_KemenPAN_2023.pdf</span>
                <span className="text-body-sm text-outline mt-1">2.4 MB • 4 Halaman</span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-space-md pt-space-lg">
              <button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-surface-container text-on-surface text-label-md hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-[18px]">download</span> Unduh PDF
              </button>
              <button
                onClick={() => setOpenDetail(false)}
                className="px-space-xl py-space-sm rounded-xl bg-primary text-on-primary text-label-md hover:bg-primary-container transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}