# Manajemen Surat — Dasbor Eksekutif

Konversi desain `design/dasbor_eksekutif/code.html` menjadi proyek **React + Vite + Tailwind CSS**.

## Struktur

```
.
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   └─ components/
      ├─ Sidebar.jsx
      ├─ Header.jsx
      ├─ WelcomeBar.jsx
      ├─ MetricCards.jsx
      ├─ MonthlyBarChart.jsx
      ├─ DispositionStatus.jsx
      └─ RecentLettersTable.jsx
```

## Cara menjalankan

Pastikan **Node.js >= 18** sudah terpasang, kemudian:

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite (biasanya http://localhost:5173).

## Build produksi

```bash
npm run build
npm run preview
```

## Catatan

- Token warna/tipografi/spacing diambil dari `tailwind.config.js` (sama persis dengan desain).
- Font `Inter` dan ikon `Material Symbols Outlined` dimuat via Google Fonts di `index.html`.
- Sidebar tetap `fixed` (lebar 288px) dan header `fixed` (tinggi 64px) seperti desain asli.
- Data pada chart/tabel masih statis (hard-coded). Mudah diganti dengan data dari API.