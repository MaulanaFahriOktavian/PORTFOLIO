/**
 * Project Data Architecture
 * Personal Portfolio — Maulana Fahri Oktavian
 * 
 * Synchronized with official Curriculum Vitae (CV).
 * Projects: DIDISPEN & BeWood (Gembol Jati Furniture) + Figma UI/UX Design Systems.
 */

// Import Project Images
import didispenImg from "../assets/images/projects/laravel/didispen.png";
import bewoodImg from "../assets/images/projects/laravel/bewood.png";
import smartLearningImg from "../assets/images/projects/figma/smart-learning.png";
import voktadevImg from "../assets/images/projects/figma/voktadev.png";

export const categories = [
  { id: "all", label: "Semua Proyek" },
  { id: "fullstack", label: "Web Development" },
  { id: "uiux", label: "UI/UX & Figma" },
];

export const projects = [
  // ── 1. DIDISPEN (Official CV Project) ──
  {
    slug: "didispen-smkn1bangsri",
    title: "DIDISPEN — Sistem Informasi Dispensasi Sekolah",
    category: "fullstack",
    categoryLabel: "Web Development",
    badge: "Official School Capstone",
    featured: true,
    year: "2026",
    role: "UI/UX Designer & Web Developer",
    type: "School Web System",
    status: "Completed & Deployed",
    shortDescription: "Sistem informasi web dispensasi digital SMKN 1 Bangsri dengan hak akses multi-peran, perancangan PRD, ERD, dan prototype Figma.",
    statement: "Sistem informasi web berbasis Laravel dan MySQL dengan fitur pengajuan dispensasi digital dan hak akses multi-peran (role-based access) menggantikan formulir kertas manual.",
    image: didispenImg,
    liveUrl: "https://didispen.smkn1bangsri.sch.id",
    githubUrl: "https://github.com/MaulanaFahriOktavian",
    prototypeUrl: null,
    techSummary: ["Laravel", "MySQL", "Tailwind CSS", "Figma", "Blade"],
    techStack: {
      frontend: ["Blade Templates", "Tailwind CSS", "JavaScript (ES6+)"],
      backend: ["Laravel 11", "PHP 8.2", "MySQL"],
      design: ["Figma (Wireframe & Prototype)", "PRD & ERD Documentation"],
      tools: ["Git", "GitHub", "Visual Studio Code", "Laragon"]
    },
    overview: {
      about: "DIDISPEN adalah sistem informasi web resmi yang dikembangkan untuk SMKN 1 Bangsri. Berfungsi mendigitalkan seluruh alur perizinan dan dispensasi keluar lingkungan sekolah.",
      targetUser: "Siswa SMKN 1 Bangsri, Guru Piket, Wali Kelas, dan Petugas Keamanan (Satpam) gerbang sekolah.",
      problem: "Proses dispensasi manual berbasis kertas rentan hilang, memakan waktu validasi, serta sulit dipantau rekapitulasinya oleh pihak kesiswaan.",
      goal: "Membangun sistem informasi perizinan digital terpadu dengan autentikasi multi-peran yang aman, cepat diverifikasi, dan terdokumentasi rapi."
    },
    roleDetails: "Sebagai UI/UX Designer & Web Developer, saya bertanggung jawab merancang dokumentasi sistem (PRD, ERD, Flowchart), struktur basis data relasional, wireframe/prototype interaktif pada Figma, serta mengimplementasikan antarmuka responsif dan logika otentikasi peran di Laravel & MySQL.",
    features: [
      "Perancangan dokumentasi sistem lengkap: PRD, ERD, Flowchart alur izin, dan struktur basis data relasional",
      "Wireframing dan perancangan prototype interaktif di Figma sebelum tahap pengodean",
      "Sistem pengajuan dispensasi digital dengan alur verifikasi bertingkat (Siswa -> Guru Piket -> Satpam Gerbang)",
      "Hak akses multi-peran (role-based access control) untuk keamanan data",
      "Dashboard monitoring dan rekapitulasi izin siswa untuk kebutuhan laporan kedisiplinan sekolah"
    ],
    designAndDevelopment: "Antarmuka dirancang dengan pendekatan mobile-first agar mudah diakses oleh guru piket dan satpam melalui smartphone, menggunakan Tailwind CSS untuk styling yang presisi dan cepat.",
    challenge: "Menyelaraskan alur validasi antar peran pengguna yang berbeda dalam sistem perizinan yang ketat tanpa memperlambat proses bagi siswa yang membutuhkan izin mendesak.",
    solution: "Membuat alur pengajuan intuitif dengan validasi instan, serta dashboard verifikasi satpam yang menampilkan status izin secara visual dalam satu kali scan/lihat.",
    result: "Aplikasi berhasil diselesaikan, diuji, dan diimplementasikan sebagai sistem dispensasi resmi di lingkungan SMKN 1 Bangsri."
  },

  // ── 2. BEWOOD (Official CV Project) ──
  {
    slug: "bewood-gembol-jati-furniture",
    title: "BeWood (Gembol Jati Furniture)",
    category: "fullstack",
    categoryLabel: "Web Development",
    badge: "E-Commerce Platform",
    featured: true,
    year: "2025",
    role: "Full-Stack Web Developer",
    type: "E-Commerce & Inventory Web",
    status: "Production Ready",
    shortDescription: "Platform e-commerce dan katalog produk mebel Jepara interaktif berbasis Laravel, Livewire, MySQL, dan dashboard manajemen inventaris.",
    statement: "Membangun platform e-commerce dan katalog produk mebel Jepara interaktif menggunakan Laravel, Livewire, dan MySQL dengan antarmuka responsif Tailwind CSS.",
    image: bewoodImg,
    liveUrl: null,
    githubUrl: "https://github.com/MaulanaFahriOktavian",
    prototypeUrl: null,
    techSummary: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    techStack: {
      frontend: ["Tailwind CSS", "Livewire", "Blade Templates", "JavaScript"],
      backend: ["Laravel", "PHP 8.2", "MySQL"],
      design: ["Responsive E-Commerce UI", "Admin Dashboard System"],
      tools: ["Git", "GitHub", "Visual Studio Code", "Laragon"]
    },
    overview: {
      about: "BeWood adalah platform web e-commerce dan katalog produk mebel khas Jepara (Gembol Jati Furniture) yang dirancang untuk memamerkan kerajinan kayu jati unggulan kepada pelanggan secara interaktif.",
      targetUser: "Pembeli furniture lokal dan nasional, arsitek interior, serta pengelola toko mebel (admin).",
      problem: "Pemasaran mebel konvensional membutuhkan katalog fisik atau chat manual yang lambat dalam memberikan informasi stok, spesifikasi dimensi kayu, dan estimasi harga.",
      goal: "Menyediakan katalog digital interaktif dengan navigasi kategori dinamis serta dashboard inventaris terpusat bagi admin toko mebel."
    },
    roleDetails: "Sebagai Full-Stack Web Developer, saya membangun platform dari arsitektur backend hingga frontend: mengimplementasikan komponen interaktif Livewire, merancang basis data produk mebel di MySQL, menata UI responsif dengan Tailwind CSS, serta membangun modul dashboard inventaris admin.",
    features: [
      "Katalog produk mebel Jepara interaktif dengan penyaringan kategori dinamis (kursi, meja, lemari, gembol jati)",
      "Tampilan antarmuka responsif modern berbasis Tailwind CSS yang nyaman diakses di smartphone maupun desktop",
      "Komponen interaktif real-time menggunakan Laravel Livewire tanpa reload halaman penuh",
      "Dashboard manajemen inventaris bagi admin untuk menambah, mengubah, dan memantau ketersediaan stok produk",
      "Sistem pemesanan produk terintegrasi dengan tombol konsultasi langsung ke WhatsApp pengrajin"
    ],
    designAndDevelopment: "Menggunakan nuansa visual hangat yang mencerminkan keaslian kayu jati Jepara, dipadukan dengan tipografi modern dan layout grid produk yang bersih agar detail serat kayu terlihat menonjol.",
    challenge: "Mengelola variasi spesifikasi produk mebel kustom dan memastikan katalog dapat dimuat dengan cepat meskipun memuat gambar produk beresolusi tinggi.",
    solution: "Mengoptimalkan struktur query basis data MySQL serta mengimplementasikan lazy loading pada aset gambar produk mebel.",
    result: "Platform e-commerce mebel fungsional yang memudahkan pelanggan menjelajah produk sekaligus menyederhanakan manajemen stok admin."
  },

  // ── 3. SMART STUDENT LEARNING (Figma UI/UX) ──
  {
    slug: "smart-student-learning-dashboard",
    title: "Smart — Student Activity & E-Learning Dashboard",
    category: "uiux",
    categoryLabel: "UI/UX & Figma",
    badge: "Design System & Prototype",
    featured: false,
    year: "2026",
    role: "UI/UX Designer",
    type: "Interface Exploration",
    status: "Design System Complete",
    shortDescription: "Desain antarmuka dashboard e-learning modern yang berpusat pada siswa, dilengkapi pelacak performa pembelajaran dan manajemen tugas.",
    statement: "Eksplorasi antarmuka perancangan antarmuka serta pembuatan aset desain visual untuk aplikasi web edukasi di Figma.",
    image: smartLearningImg,
    liveUrl: null,
    githubUrl: null,
    prototypeUrl: "https://www.figma.com",
    techSummary: ["Figma", "Auto Layout", "Design System", "Prototyping"],
    techStack: {
      design: ["Figma", "Design Tokens", "Auto Layout 5.0", "Component Variants", "Interactive Prototyping"],
      tools: ["Figma", "Canva"]
    },
    overview: {
      about: "Eksplorasi antarmuka dashboard platform edukasi digital yang dirancang untuk membantu siswa memantau progres pembelajaran harian, tenggat waktu penugasan, dan jadwal kelas interaktif.",
      targetUser: "Siswa sekolah menengah dan mahasiswa yang membutuhkan satu pusat kendali untuk mengelola kegiatan akademik.",
      problem: "Banyak portal akademik siswa memiliki antarmuka yang padat informasi, kaku, dan sulit dinavigasi, sehingga siswa sering melewatkan pengumpulan tugas.",
      goal: "Membangun sistem antarmuka yang segar, ramah pengguna, dan memprioritaskan informasi krusial dengan hierarki visual yang jelas."
    },
    roleDetails: "Merancang wireframe, eksplorasi gaya visual, pembuatan sistem token desain (warna, tipografi, radius), komponen kartu metrik, serta prototype interaktif antarmuka di Figma.",
    features: [
      "Pelacak progres kursus mingguan dengan visual indikator persentase",
      "Kalender jadwal kelas harian dan pengingat ujian mendatang",
      "Daftar antrean tugas dengan penanda prioritas dan tenggat waktu",
      "Komposisi elemen visual yang harmonis untuk memberikan kesan ramah bagi siswa"
    ],
    designAndDevelopment: "Menerapkan sistem grid 8-titik yang konsisten serta auto-layout menyeluruh untuk memastikan skalabilitas komponen di Figma.",
    result: "Menghasilkan sistem desain lengkap beserta library komponen modular di Figma yang siap diterjemahkan ke kode frontend."
  },

  // ── 4. VOKTADEV ANALYTICS (Figma UI/UX) ──
  {
    slug: "voktadev-analytics-dashboard",
    title: "VoktaDev — SaaS Business & Sales Analytics",
    category: "uiux",
    categoryLabel: "UI/UX & Figma",
    badge: "Dark Theme UI",
    featured: false,
    year: "2026",
    role: "UI/UX Designer",
    type: "SaaS Dashboard Concept",
    status: "High-Fidelity Concept",
    shortDescription: "Dashboard analitik bisnis bertema dark mode dengan kontras tinggi, visualisasi data revenue, dan monitoring aktivitas.",
    statement: "Perancangan antarmuka visual data analitik dark mode dengan hierarki tipografi tegas dan komponen token Figma.",
    image: voktadevImg,
    liveUrl: null,
    githubUrl: null,
    prototypeUrl: "https://www.figma.com",
    techSummary: ["Figma", "Dark Theme UI", "Data Visualization", "Tokens"],
    techStack: {
      design: ["Figma", "Dark UI Palette", "Data Visualization Charts", "Component States"],
      tools: ["Figma"]
    },
    overview: {
      about: "Konsep antarmuka analitik bisnis berbasis langganan (SaaS) yang berfokus pada penyajian metrik finansial seperti Annual Recurring Revenue (ARR) dan retensi pengguna.",
      targetUser: "Product managers, founders, dan analis data SaaS.",
      problem: "Dashboard data analitik dalam mode gelap sering kali mengalami masalah kontras rendah atau warna grafik yang terlalu menyilaukan.",
      goal: "Menciptakan antarmuka dark-theme yang elegan dengan palet warna terkalibrasi agar nyaman dilihat tanpa mengorbankan keterbacaan data."
    },
    roleDetails: "Mengembangkan struktur layout dasbor, menentukan palet warna gelap kontras tinggi, merancang komponen grafik analitik, serta mengatur hierarki metrik kunci di Figma.",
    features: [
      "Widget metrik utama: ARR, Monthly Growth, Active Subscriptions, dan Churn Rate",
      "Grafik tren pendapatan dengan penanda kuartal",
      "Live activity stream untuk transaksi pelanggan baru",
      "Komponen filter rentang waktu interaktif (7D, 30D, 90D, 1Y)"
    ],
    result: "Desain sistem dashboard dark-mode lengkap dengan panduan komponen token dan varian status di Figma."
  }
];
