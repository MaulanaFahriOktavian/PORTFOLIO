# Dokumentasi Foto Preview Portofolio (Per-Section)
**Pengembang**: Maulana Fahri Oktavian  
**Terakhir Diperbarui**: September 2026

Dokumentasi ini memuat seluruh aset tangkapan layar (screenshot preview) portofolio yang diambil per masing-masing section secara terpisah serta tampilan penuh (*full page*).

---

## 📐 Standar Dimensi & Ketentuan Teknis

1. **Lebar Horizontal (Menyamping) Disamakan Seragam**:
   - **Versi Desktop**: Lebar seragam **2560 px** (Render tajam Ultra-HD 2x Retina).
   - **Versi Mobile**: Lebar seragam **780 px** (Render viewport mobile modern 2x scale).
2. **Panjang Vertikal (Ke Bawah) Menyesuaikan Konten**:
   - Tinggi setiap section diatur dinamis mengikuti seluruh batas elemen DOM (`bounding box`) secara penuh sehingga **100% informasi tertangkap tanpa ada teks atau tombol yang terpotong**.
3. **Termasuk Navbar & Footer Terpisah**:
   - Komponen floating navbar dan footer diekstraksi ke file tersendiri di samping 7 section utama.

---

## 🖥️ Katalog Preview Desktop (Lebar Seragam: 2560 px)

Folder: [`previews/`](./previews/)

| No | File | Dimensi (L × T) | Deskripsi Section |
| :--- | :--- | :--- | :--- |
| **01** | [`01_navbar.png`](./previews/01_navbar.png) | **2560 × 220 px** | **Floating Navbar**: Wordmark brand *"Fahri Oktavian."*, tautan navigasi, theme toggle & tombol resume/kontak |
| **02** | [`02_hero_section.png`](./previews/02_hero_section.png) | **2560 × 1758 px** | **Hero Section**: ID Card profil pengembang, status availability, headline kesiapan kerja, dan tech badges |
| **03** | [`03_karya_proyek.png`](./previews/03_karya_proyek.png) | **2560 × 2000 px** | **Karya & Proyek Terpilih**: Galeri showcase proyek web unggulan lengkap dengan deskripsi, teknologi, & link |
| **04** | [`04_komitmen_nilai_tambah.png`](./previews/04_komitmen_nilai_tambah.png) | **2560 × 2120 px** | **Komitmen & Nilai Tambah**: 4 pilar standar industri (Clean Code, Performance, Responsive, Scalability) |
| **05** | [`05_keahlian_teknologi.png`](./previews/05_keahlian_teknologi.png) | **2560 × 1496 px** | **Keahlian & Teknologi**: Matriks tech stack frontend, backend, styling, database, dan tools kerja |
| **06** | [`06_pengalaman_rekam_jejak.png`](./previews/06_pengalaman_rekam_jejak.png) | **2560 × 3872 px** | **Pengalaman & Rekam Jejak**: Linimasa lengkap pengalaman kerja, magang, organisasi, dan pencapaian |
| **07** | [`07_tentang_saya.png`](./previews/07_tentang_saya.png) | **2560 × 1586 px** | **Tentang Saya**: Filosofi pengembangan web, spesifikasi kandidat DUDI, dan latar belakang personal |
| **08** | [`08_kontak_kolaborasi.png`](./previews/08_kontak_kolaborasi.png) | **2560 × 1628 px** | **Kontak & Rekrutmen**: Saluran komunikasi langsung (WhatsApp, Email, LinkedIn, GitHub) & ajakan kolaborasi |
| **09** | [`09_footer.png`](./previews/09_footer.png) | **2560 × 346 px** | **Footer**: Copyright, status build, dan link ringkas |
| **Full** | [`00_full_landing_page.png`](./previews/00_full_landing_page.png) | **2560 × 14806 px** | **Full Landing Page**: Seluruh halaman portofolio dari paling atas hingga paling bawah tanpa jeda |

---

## 📱 Katalog Preview Mobile (Lebar Seragam: 780 px)

Folder: [`previews/mobile/`](./previews/mobile/)

| No | File | Dimensi (L × T) | Deskripsi Section |
| :--- | :--- | :--- | :--- |
| **01** | [`mobile_01_navbar.png`](./previews/mobile/mobile_01_navbar.png) | **780 × 180 px** | Header ringkas mobile dengan brand Fahri dan burger trigger |
| **02** | [`mobile_02_hero.png`](./previews/mobile/mobile_02_hero.png) | **780 × 1932 px** | Hero section tersusun vertikal rapi, ID Card tanpa teks terpotong |
| **03** | [`mobile_03_proyek.png`](./previews/mobile/mobile_03_proyek.png) | **780 × 1536 px** | Daftar kartu proyek responsif untuk layar sentuh |
| **04** | [`mobile_04_nilai_tambah.png`](./previews/mobile/mobile_04_nilai_tambah.png) | **780 × 1698 px** | Kartu nilai tambah komitmen industri tersusun vertikal |
| **05** | [`mobile_05_keahlian.png`](./previews/mobile/mobile_05_keahlian.png) | **780 × 1142 px** | Grid badge keahlian teknologi mobile |
| **06** | [`mobile_06_pengalaman.png`](./previews/mobile/mobile_06_pengalaman.png) | **780 × 4920 px** | Linimasa perjalanan karier dan organisasi responsif penuh |
| **07** | [`mobile_07_tentang.png`](./previews/mobile/mobile_07_tentang.png) | **780 × 1526 px** | Ringkasan profil & filosofi kerja versi mobile |
| **08** | [`mobile_08_kontak.png`](./previews/mobile/mobile_08_kontak.png) | **780 × 1330 px** | Tombol kontak WhatsApp & channel media sosial layar sentuh |
| **09** | [`mobile_09_footer.png`](./previews/mobile/mobile_09_footer.png) | **780 × 442 px** | Footer mobile |
| **Full** | [`mobile_00_full_page.png`](./previews/mobile/mobile_00_full_page.png) | **780 × 14526 px** | Tampilan utuh halaman mobile dari awal hingga akhir |

---

## 🔄 Cara Mengambil Ulang / Memperbarui Foto Preview

Jika Anda telah melakukan perubahan teks atau desain dan ingin memperbarui seluruh foto di atas secara otomatis:

1. Pastikan server dev sedang berjalan:
   ```bash
   npm run dev
   ```
2. Buka terminal baru dan jalankan skrip penangkapan:
   ```bash
   npm run capture
   ```
Skrip Puppeteer akan otomatis membuka browser Chrome/Edge lokal di komputer Anda dan memperbarui seluruh 20 foto preview hanya dalam beberapa detik.
