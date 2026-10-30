# PRD — Website Portofolio Product Manager

Silfi Ardila Putri · 30 Oktober 2026

## Ringkasan

Website portofolio satu halaman yang membuktikan Silfi siap bekerja sebagai Product Manager, dengan v1 live dalam 2 minggu. Fokusnya bukti kerja PM, bukan daftar sertifikat.

**Masalah:** LinkedIn hanya menampilkan *apa* yang pernah dikerjakan (judul, tanggal, sertifikat). Perekrut PM ingin melihat *bagaimana* kandidat berpikir: cara mendefinisikan masalah, memprioritaskan, dan mengukur hasil. Bukti itu belum ada di mana pun.

**Kondisi saat ini:**

- Pengalaman nyata di Mepo: QA Engineer (Des 2025–Mar 2026), lalu Product Manager Intern (Mar–Okt 2026) dengan Best Award
- 12 sertifikat: 8 teknis dari Universitas Gunadarma, 2 product/BA (MySkill, Dibimbing), 1 AI (Hacktiv8), 1 magang (Mepo)
- Belum ada studi kasus, PRD, atau artefak PM yang bisa dibuka publik
- Jaringan LinkedIn masih kecil (3 koneksi), jadi website harus bisa ditemukan dan dibagikan sendiri

**Solusi:** satu website yang menempatkan studi kasus Mepo di depan, didukung bekal teknis (SQL, web, AI) sebagai pembeda, dengan jalur jelas ke CV dan kontak.

## Tujuan, non-tujuan, dan metrik sukses

Keberhasilan diukur dari tindakan perekrut (membuka CV, menghubungi, mengundang interview), bukan dari jumlah kunjungan.

**Tujuan**

1. Dalam 30 detik, perekrut paham: Silfi adalah PM dengan pengalaman nyata dan fondasi teknis.
2. Minimal satu studi kasus PM yang menunjukkan proses berpikir dari masalah sampai hasil.
3. Jalur ke tindakan selalu terlihat: unduh CV, email, LinkedIn.

**Non-tujuan (v1)**

- Blog atau CMS
- Multi-bahasa (v1 cukup bahasa Inggris)
- Desain yang mengutamakan efek visual di atas kecepatan dan keterbacaan

**Metrik sukses** (target awal, ditinjau ulang setelah 4 minggu)

| Metrik | Cara ukur | Target 4 minggu |
| --- | --- | --- |
| Klik unduh CV / kunjungan | Event analytics | ≥ 15% |
| Klik kontak (email + LinkedIn) / kunjungan | Event analytics | ≥ 8% |
| Pembaca studi kasus yang scroll sampai bagian Hasil | Scroll-depth event | ≥ 40% |
| Undangan interview yang menyebut portofolio | Catatan manual | ≥ 1 |
| Lighthouse Performance (mobile) | Lighthouse | ≥ 90 |

## Persona pengunjung

Pengunjung utama adalah perekrut yang menyaring cepat. Desain mengikuti kebutuhan mereka dulu, baru hiring manager.

| Persona | Konteks kunjungan | Yang dicari | Waktu di situs | Tindakan yang diharapkan |
| --- | --- | --- | --- | --- |
| Perekrut / talent acquisition (utama) | Membuka dari LinkedIn atau CV, sering di HP | Peran, pengalaman, kecocokan kata kunci | < 1 menit | Unduh CV, simpan kontak |
| Hiring manager PM | Menilai sebelum atau sesudah interview | Cara berpikir: masalah, prioritas, metrik, trade-off | 3–5 menit | Baca studi kasus sampai habis, undang interview |
| Rekan engineer / interviewer teknis | Diminta ikut menilai | Seberapa paham kandidat soal data dan engineering | 2 menit | Lihat bagian skills teknis |

**Implikasi desain:** informasi peran dan bukti utama harus terlihat tanpa scroll di layar HP; studi kasus harus bisa dipindai lewat subjudul, tapi tetap lengkap untuk pembaca yang serius.

## Struktur halaman

v1 berupa satu halaman panjang (single page) dengan navigasi anchor, ditambah satu halaman detail untuk studi kasus. Urutan section mengikuti pertanyaan perekrut: siapa, buktinya apa, bisa apa, bagaimana menghubungi.

1. **Hero:** nama, peran (Product Manager), satu kalimat value proposition, tombol Unduh CV dan Hubungi
2. **Highlight bukti:** 3 kartu angka/fakta (PM Intern di Mepo, Best Award, fondasi teknis SQL + Web + AI)
3. **Studi kasus unggulan:** ringkasan proyek Mepo, menuju halaman detail `/case-study/mepo`
4. **Pengalaman:** timeline peran (PM Intern dan QA Engineer di Mepo, Junior Web Programmer Intern di AKATRUST), menonjolkan perpindahan QA → PM
5. **Cara saya bekerja sebagai PM:** proses discovery → definisi → delivery → ukur, singkat
6. **Skills:** dikelompokkan Product, Data, Engineering, AI
7. **Sertifikasi:** grid ringkas, bisa difilter Product / Teknis / AI, tiap kartu menuju PDF atau kredensial
8. **Kontak:** email, LinkedIn, tombol Unduh CV (diulang)

**Halaman detail:** `/case-study/mepo` dengan format Konteks → Masalah → Riset & insight → Keputusan & prioritas → Solusi → Hasil & metrik → Pembelajaran.

## Requirement per section

Setiap requirement punya user story dan acceptance criteria yang bisa diuji. Prioritas P0 wajib ada di v1; P1 boleh menyusul.

| ID | Section | User story | Acceptance criteria | Prioritas |
| --- | --- | --- | --- | --- |
| R1 | Hero | Sebagai perekrut, saya ingin tahu peran dan bukti utama kandidat tanpa scroll | Nama, "Product Manager", value proposition, Unduh CV, dan Hubungi terlihat di viewport 375×667 tanpa scroll | P0 |
| R2 | Highlight bukti | Sebagai perekrut, saya ingin fakta yang bisa saya percaya, bukan klaim umum | 3 kartu; setiap fakta bisa ditelusuri ke pengalaman atau sertifikat di halaman yang sama | P0 |
| R3 | Studi kasus | Sebagai hiring manager, saya ingin melihat cara kandidat berpikir dari masalah sampai hasil | Halaman detail memuat 7 bagian (Konteks sampai Pembelajaran); minimal 1 metrik atau hasil terukur; tidak ada data rahasia Mepo | P0 |
| R4 | Pengalaman | Sebagai perekrut, saya ingin urutan peran yang jelas | Tiap peran: judul, perusahaan, jenis (Magang), bulan–tahun mulai/selesai, 2–3 poin dampak; data sama persis dengan LinkedIn | P0 |
| R5 | Cara bekerja | Sebagai hiring manager, saya ingin tahu pendekatan PM kandidat | 4 tahap proses, masing-masing 1–2 kalimat, dikaitkan ke contoh nyata di studi kasus | P1 |
| R6 | Skills | Sebagai interviewer teknis, saya ingin tahu kedalaman teknis | 4 kelompok skill; tiap skill teknis punya bukti (sertifikat atau proyek) | P0 |
| R7 | Sertifikasi | Sebagai perekrut, saya ingin memverifikasi sertifikat | Grid 12 sertifikat dengan filter; tiap kartu: nama, penerbit, bulan-tahun, ID kredensial, link ke PDF | P1 |
| R8 | Kontak & CV | Sebagai perekrut, saya ingin menghubungi atau menyimpan CV dengan satu klik | Tombol Unduh CV (PDF, ≤ 1 MB) di Hero dan Kontak; link email `mailto:` dan LinkedIn; tiap klik tercatat sebagai event analytics | P0 |
| R9 | Navigasi | Sebagai pengunjung, saya ingin lompat ke bagian yang saya cari | Navbar sticky dengan anchor ke tiap section; di HP menjadi menu ringkas | P1 |

## Konten sumber

Semua isi website diambil dari satu file konten (`content.json`) yang disalin dari LinkedIn per 30 Oktober 2026. Website dan LinkedIn harus selalu sama; perubahan dilakukan di file ini dulu. Isi studi kasus ada di `content/case-study-mepo.md`.

**Pengalaman** (terbaru di atas)

| Peran | Perusahaan | Jenis | Periode | Lokasi | Catatan untuk portofolio |
| --- | --- | --- | --- | --- | --- |
| Product Manager Intern | Mepo Indonesia (PT. Multi Kreasi Travel Indo) | Magang | Mar 2026 – Okt 2026 | — | Best Award; bahan studi kasus utama |
| Quality Assurance Engineer | Mepo Indonesia | — | Des 2025 – Mar 2026 | Jakarta Timur, hybrid | Cerita transisi QA → PM di Mepo |
| Junior Web Programmer Intern | AKATRUST | Magang | Jan 2022 – Apr 2022 | Padang, on-site | Fondasi engineering |

**Sertifikasi** (dikelompokkan untuk filter R7)

| Kelompok | Sertifikat | Penerbit | Terbit |
| --- | --- | --- | --- |
| Product | Certificate of Internship – Product Manager Intern (Best Award) | Mepo | Okt 2026 |
| Product | Business Analyst & Product Strategy | Dibimbing | Okt 2026 |
| Product | Introduction to Project Management | MySkill | Okt 2026 |
| AI | LLM-Based Tools & Gemini API Integration for Data Scientists | Hacktiv8 Indonesia | Mei 2026 |
| Teknis | Application Implementation and Development | Universitas Gunadarma | Jun 2026 |
| Teknis | JavaScript Programming Language Fundamental | Universitas Gunadarma | Jan 2026 |
| Teknis | Application Development Design | Universitas Gunadarma | Sep 2025 |
| Teknis | C# for Intermediate | Universitas Gunadarma | Agt 2025 |
| Teknis | SQL Server for Intermediate | Universitas Gunadarma | Feb 2025 |
| Teknis | C# for Beginner | Universitas Gunadarma | Agt 2024 |
| Teknis | Fundamental Web Programming | Universitas Gunadarma | Agt 2023 |
| Teknis | Fundamental DBMS | Universitas Gunadarma | Feb 2023 |

**Skills** (setiap skill punya bukti)

| Kelompok | Skill | Bukti |
| --- | --- | --- |
| Product | Product requirements, feature prioritization, cross-functional collaboration, user-centric design | PM Intern Mepo, Best Award |
| Product | Business analysis, product strategy | Dibimbing, MySkill |
| Quality | Software testing, quality assurance | QA Engineer Mepo |
| Data | SQL Server, MySQL, query optimization, stored procedures | Gunadarma: DBMS, SQL Server Intermediate |
| Engineering | C# / ASP.NET, Web API, JavaScript, application design | Gunadarma: 6 sertifikat; AKATRUST |
| AI | LLM-based tools, Gemini API integration | Hacktiv8 Maju Bareng AI |

**Bahan yang belum ada dan harus disiapkan Silfi:** CV terbaru (PDF), foto profil resolusi tinggi, email kontak, poin dampak untuk peran QA Engineer dan AKATRUST, dan isi studi kasus Mepo (fitur yang dikerjakan, keputusan yang diambil, hasil yang bisa dibagikan publik).

## Requirement non-fungsional

Situs harus cepat dan terbaca di HP, karena perekrut sering membuka link dari LinkedIn mobile.

| Area | Requirement | Cara uji |
| --- | --- | --- |
| Performa | LCP < 2,5 detik di 4G; total halaman utama < 1 MB | Lighthouse mobile ≥ 90 |
| Responsif | Tampil benar di lebar 360, 768, dan 1280 px; tidak ada scroll horizontal | Cek manual + Playwright screenshot |
| Aksesibilitas | Kontras teks ≥ 4.5:1; semua gambar punya alt; bisa dinavigasi dengan keyboard | Lighthouse Accessibility ≥ 95 |
| SEO & share | Title, meta description, dan Open Graph image; nama "Silfi Ardila Putri" + "Product Manager" di title | Preview link di LinkedIn dan WhatsApp tampil benar |
| Analytics | Event untuk klik Unduh CV, email, LinkedIn, buka studi kasus, scroll 75% studi kasus | Event muncul di dashboard analytics |
| Privasi | Tidak menampilkan nomor HP, alamat, NPM, atau hasil tes psikologi; studi kasus tanpa data internal Mepo | Review konten sebelum rilis |
| Konsistensi data | Semua tanggal, judul, dan penerbit sama dengan LinkedIn | Cek silang dengan `content.json` |

## Implementasi dengan Claude Code

Rekomendasi: **Astro + Tailwind CSS**, dideploy gratis ke **Vercel**, dibangun oleh Claude Code dari paket handoff (`PRD.md`, `content.json`, `CLAUDE.md`, sertifikat). Astro menghasilkan HTML statis yang cepat, cocok untuk target Lighthouse ≥ 90 tanpa setup server.

| Opsi | Kelebihan | Kekurangan | Keputusan |
| --- | --- | --- | --- |
| Astro + Tailwind (statis) | Paling cepat, sederhana, konten dari JSON, hosting gratis | Interaksi kompleks butuh komponen tambahan | **Dipilih** |
| Next.js + Tailwind | Fleksibel, ekosistem besar, mudah tambah fitur dinamis nanti | Lebih berat dan kompleks dari kebutuhan v1 | Cadangan jika butuh fitur dinamis |
| No-code (Framer, Notion) | Tanpa coding | Sulit dikontrol, data tidak terpusat, tidak memakai Claude Code | Tidak dipilih |

**Alur kerja dengan Claude Code**

1. Buat folder project kosong, taruh isi paket handoff di dalamnya.
2. Jalankan Claude Code di folder itu; minta: *"Baca CLAUDE.md dan PRD.md, lalu bangun v1 sesuai requirement P0."*
3. Claude Code membuat halaman dari `content.json`; jangan ketik ulang isi di kode.
4. Review hasil di browser lokal terhadap acceptance criteria R1–R9.
5. Deploy ke Vercel, lalu pasang link website di LinkedIn (Info kontak dan bagian Unggulan).

**Analytics:** Vercel Web Analytics (gratis, tanpa cookie banner) untuk event di R8; ganti ke GA4 jika butuh laporan funnel yang lebih detail.

## Scope rilis, risiko, dan pertanyaan terbuka

v1 hanya memuat requirement P0; risiko terbesar bukan teknis, tapi isi studi kasus yang belum ada.

**Scope**

| Rilis | Isi |
| --- | --- |
| v1 | R1, R2, R3, R4, R6, R8 + semua requirement non-fungsional |
| v1.1 | R5 (Cara bekerja), R7 (grid sertifikasi dengan filter), R9 (navbar) |
| Nanti | Studi kasus kedua (misalnya pengalaman QA → PM), versi bahasa Indonesia, domain pribadi |

**Risiko**

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Isi studi kasus Mepo tidak boleh dibagikan (data internal) | Section paling penting kosong | Tulis versi yang disamarkan: angka dalam persen atau rentang, tanpa nama klien atau detail internal; minta izin atasan jika ragu |
| Data di website berbeda dengan LinkedIn | Perekrut ragu pada kredibilitas | Satu sumber data (`content.json`) + cek silang sebelum rilis |
| Desain terlalu fokus visual, isi dangkal | Hiring manager tidak menemukan bukti cara berpikir | Studi kasus jadi P0; review isi sebelum styling |
| Klaim melebihi pengalaman nyata | Terbongkar saat interview | Setiap klaim punya bukti (R2, R6) |

**Pertanyaan terbuka**

- [ ] Peran di Hero: "Product Manager" atau "Junior Product Manager" (sesuai headline LinkedIn)?
- [ ] Target rilis v1 dalam 2 minggu: apakah realistis dengan waktu yang Silfi punya?
- [ ] Fitur atau proyek apa yang paling bisa diceritakan dari magang di Mepo, dan hasil apa yang boleh dibagikan?
- [ ] Pakai domain pribadi (misalnya `silfiardila.com`, berbayar per tahun) atau subdomain gratis Vercel dulu?
- [ ] Website cukup bahasa Inggris, atau perlu bahasa Indonesia sejak v1?
