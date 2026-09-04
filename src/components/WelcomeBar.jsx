export default function WelcomeBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div>
        <span className="text-label-sm uppercase tracking-widest text-primary-container font-semibold">
          Dasbor Eksekutif • E-Office Enterprise
        </span>
        <h1 className="text-headline-lg text-on-surface font-bold tracking-tight">
          Ringkasan Operasional Surat
        </h1>
      </div>
      <div className="flex items-center gap-space-sm">
        <button className="bg-primary-container text-on-primary-container px-space-md py-space-sm rounded-xl flex items-center gap-space-xs font-label-md shadow-sm hover:opacity-95 transition-all">
          <span className="material-symbols-outlined text-[18px]">upload_file</span>
          Unggah Surat Masuk
        </button>
        <button className="bg-surface-container-high text-on-surface px-space-md py-space-sm rounded-xl flex items-center gap-space-xs font-label-md hover:bg-surface-container-highest transition-all">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          Buat Surat Keluar
        </button>
      </div>
    </div>
  )
}