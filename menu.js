/* ============================================================
   DAFTAR MENU PORTAL
   Tambah tool baru: simpan file HTML di folder /apps, lalu salin
   satu blok { ... } di TOOLS dan ubah isinya.
   ============================================================ */

const SITE = {
  title: "Portal Tools RF",
  subtitle: "Kumpulan tool kerja tim RF Indosat Ooredoo Hutchison",
  logo: "assets/logo-indosat.png",
  footer: "Dikelola oleh tim RF · Region East Java"
};

const TOOLS = [
  {
    name: "AOR Report Generator",
    desc: "Buat report Antenna Adjustment dari flash report WhatsApp, lengkap dengan foto, lalu unduh sebagai PPTX.",
    file: "apps/aor-report-generator.html",
    tag: "Report",
    updated: "2026-11-26"
  },
  {
    name: "CET PPT Builder",
    desc: "Susun laporan spot check dari foto menjadi PowerPoint dengan pilihan template dan tema terang atau gelap.",
    file: "apps/cet-ppt-builder.html",
    tag: "Slide",
    updated: "2026-11-26"
  },
  {
    name: "CTT Tracker",
    desc: "Muat tracker .xlsx untuk melihat ringkasan SLA tiket East Java dan Bali Nusra, lalu salin atau ekspor ke PPT.",
    file: "apps/ctt-dashboard.html",
    tag: "Tracker",
    updated: "2026-11-26"
  }
  /* Contoh menambah tool baru (hapus tanda komentar dan isi):
  ,{
    name: "Nama Tool",
    desc: "Satu kalimat tentang fungsinya.",
    file: "apps/nama-file.html",
    tag: "Lainnya",
    updated: "2026-11-26"
  }
  */
];
