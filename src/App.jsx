import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import WelcomeBar from './components/WelcomeBar'
import MetricCards from './components/MetricCards'
import MonthlyBarChart from './components/MonthlyBarChart'
import DispositionStatus from './components/DispositionStatus'
import RecentLettersTable from './components/RecentLettersTable'
import SuratMasukPage from './components/SuratMasukPage'
import SuratKeluarPage from './components/SuratKeluarPage'
import PengaturanPage from './components/PengaturanPage'
import ArsipPage from './components/ArsipPage'

export default function App() {
  const [page, setPage] = useState('dasbor-eksekutif')

  return (
    <>
      <Sidebar active={page} onNavigate={setPage} />
      <div className="pl-72">
        <Header />
        <main className="relative pt-16 bg-surface min-h-screen px-space-desktop py-space-desktop">
          {page === 'dasbor-eksekutif' && (
            <div className="flex flex-col w-full space-y-space-xl">
              <WelcomeBar />
              <MetricCards />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-gutter">
                <MonthlyBarChart />
                <DispositionStatus />
              </div>
              <RecentLettersTable />
            </div>
          )}
          {page === 'surat-masuk' && <SuratMasukPage />}
          {page === 'surat-keluar' && <SuratKeluarPage />}
          {page === 'pengaturan-/-keamanan' && <PengaturanPage />}
          {page === 'arsip-&-dms' && <ArsipPage />}
          {page !== 'dasbor-eksekutif' &&
            page !== 'surat-masuk' &&
            page !== 'surat-keluar' &&
            page !== 'pengaturan-/-keamanan' &&
            page !== 'arsip-&-dms' && (
            <div className="flex flex-col w-full items-center justify-center py-space-2xl text-on-surface-variant">
              <span className="material-symbols-outlined text-[64px] text-primary mb-space-md">
                construction
              </span>
              <h2 className="text-headline-md text-on-surface mb-space-xs">Halaman dalam pengembangan</h2>
              <p className="text-body-md">Modul ini akan segera tersedia.</p>
            </div>
          )}
        </main>
      </div>
    </>
  )
}