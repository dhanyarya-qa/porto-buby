# Paket handoff: Website Portofolio Silfi Ardila Putri

## Cara pakai dengan Claude Code
1. Ekstrak folder ini, buka terminal di dalamnya.
2. Lengkapi dulu bahan yang masih kosong (lihat daftar di bawah).
3. Jalankan `claude`, lalu ketik:
   > Baca CLAUDE.md dan PRD.md, lalu bangun v1 website ini sesuai requirement P0. Laporkan pass/fail tiap acceptance criteria.

## Isi paket
| File | Fungsi |
|---|---|
| `PRD.md` | Apa yang dibangun, kenapa, requirement R1–R9, acceptance criteria |
| `CLAUDE.md` | Instruksi kerja untuk Claude Code: stack, aturan konten, definition of done |
| `content.json` | Satu-satunya sumber data profil (pengalaman, skills, 12 sertifikat) |
| `content/case-study-mepo.md` | Template studi kasus Mepo, diisi Silfi |
| `public/certificates/` | 12 PDF sertifikat, sudah diberi nama rapi |
| `public/images/mepo-certificate-preview.jpg` | Gambar sertifikat magang Mepo |

## Yang masih harus kamu isi sebelum rilis
- [ ] `public/cv/Silfi-Ardila-Putri-CV.pdf`
- [ ] `public/images/profile.jpg`
- [ ] Email kontak di `content.json` (`contact.email`)
- [ ] Poin dampak untuk peran QA Engineer dan AKATRUST di `content.json`
- [ ] Isi `content/case-study-mepo.md`, lalu ubah `status: draft` menjadi `status: ready`
