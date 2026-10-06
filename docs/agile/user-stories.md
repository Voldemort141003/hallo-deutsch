# User Stories - Hello Deutsch

Platform edukasi belajar bahasa Jerman berbasis Next.js. Dokumen ini berisi daftar user story, feature, dan acceptance criteria. Status mengikuti board GitHub Projects (kolom Backlog, Sprint, In Progress, Review, Done).

**Peran pengguna:** Pelajar (user yang ingin belajar bahasa Jerman).

## Ringkasan

| ID    | User Story                  | Feature           | Issue | Prioritas | Story Point | Assignee | Sprint | Status      |
| ----- | --------------------------- | ----------------- | ----- | --------- | ----------- | -------- | ------ | ----------- |
| US-01 | Mengakses halaman Home      | Halaman Home      | #1    | High      | 3           | (isi)    | 1      | Done        |
| US-02 | Menggunakan navigasi        | Navbar            | #2    | High      | 2           | (isi)    | 1      | Done        |
| US-03 | Memilih level belajar       | LevelList         | #3    | High      | 3           | (isi)    | 1      | Done        |
| US-04 | Membuka halaman pelajaran   | Halaman Pelajaran | #5    | High      | 5           | (isi)    | 1      | In Progress |
| US-05 | Menggunakan fitur kuis      | Fitur Kuis        | #6    | Medium    | 8           | (isi)    | -      | Backlog     |
| US-06 | Menggunakan fitur progres   | Fitur Progres     | #7    | Medium    | 5           | (isi)    | -      | Backlog     |
| US-07 | Menggunakan fitur flashcard | Fitur Flashcard   | #8    | Medium    | 5           | (isi)    | -      | Backlog     |
| US-08 | Menggunakan fitur pelajaran | Fitur Pelajaran   | #9    | High      | 5           | (isi)    | -      | Backlog     |
| US-09 | Membuka halaman kuis        | Halaman Kuis      | #10   | Medium    | 5           | (isi)    | -      | Backlog     |
| US-10 | Membuka halaman flashcard   | Halaman Flashcard | #11   | Medium    | 3           | (isi)    | -      | Backlog     |
| US-11 | Membuka halaman progress    | Halaman Progress  | #12   | Low       | 3           | (isi)    | -      | Backlog     |

## Sprint 1

### US-01: Halaman Home

**Sebagai** pelajar, **saya ingin** mengakses halaman Home **agar** dapat melihat informasi utama platform.

- **Feature:** Halaman Home
- **Issue:** #1
- **Status:** Done

**Acceptance criteria:**

- [x] Menampilkan hero section berisi judul dan deskripsi singkat platform
- [x] Terdapat tombol ajakan untuk mulai belajar
- [x] Tampilan responsif di mobile dan desktop

### US-02: Navbar

**Sebagai** pelajar, **saya ingin** menggunakan navigasi di bagian atas halaman **agar** dapat berpindah antar halaman dengan mudah.

- **Feature:** Navbar
- **Issue:** #2
- **Status:** Done

**Acceptance criteria:**

- [x] Navbar tampil di seluruh halaman
- [x] Berisi link ke halaman utama dan halaman lainnya
- [x] Tampilan menyesuaikan ukuran layar

### US-03: LevelList

**Sebagai** pelajar, **saya ingin** melihat daftar level belajar (misalnya A1, A2, B1) **agar** dapat memilih level sesuai kemampuan saya.

- **Feature:** LevelList
- **Issue:** #3
- **Status:** Done

**Acceptance criteria:**

- [x] Menampilkan daftar level dalam bentuk kartu
- [x] Setiap kartu memuat nama dan deskripsi singkat level
- [x] Kartu dapat diklik untuk menuju materi level tersebut

### US-04: Halaman Pelajaran

**Sebagai** pelajar, **saya ingin** membuka halaman pelajaran **agar** dapat mempelajari materi per topik.

- **Feature:** Halaman Pelajaran
- **Issue:** #5
- **Status:** In Progress

**Acceptance criteria:**

- [ ] Menampilkan daftar pelajaran berdasarkan level yang dipilih
- [ ] Setiap pelajaran dapat dibuka untuk melihat isi materi
- [ ] Terdapat navigasi kembali ke daftar level

---

## Product Backlog

### US-05: Fitur Kuis

**Sebagai** pelajar, **saya ingin** menggunakan fitur kuis **agar** dapat menguji pemahaman saya.

- **Feature:** Fitur Kuis (logika soal, pilihan jawaban, dan penilaian)
- **Issue:** #6

**Acceptance criteria:**

- [ ] Soal ditampilkan satu per satu dengan pilihan jawaban
- [ ] Jawaban pengguna diperiksa benar atau salah
- [ ] Skor akhir ditampilkan setelah kuis selesai

### US-06: Fitur Progres

**Sebagai** pelajar, **saya ingin** progres belajar saya tercatat **agar** tetap termotivasi.

- **Feature:** Fitur Progres (pencatatan kemajuan belajar, misalnya di localStorage)
- **Issue:** #7

**Acceptance criteria:**

- [ ] Pelajaran yang sudah diselesaikan tercatat
- [ ] Data progres tetap ada setelah halaman dimuat ulang

### US-07: Fitur Flashcard

**Sebagai** pelajar, **saya ingin** menggunakan flashcard **agar** dapat menghafal kosakata bahasa Jerman.

- **Feature:** Fitur Flashcard (kartu dua sisi: kata Jerman dan artinya)
- **Issue:** #8

**Acceptance criteria:**

- [ ] Kartu dapat dibalik untuk melihat arti kata
- [ ] Pengguna dapat berpindah ke kartu berikutnya dan sebelumnya

### US-08: Fitur Pelajaran

**Sebagai** pelajar, **saya ingin** menyelesaikan pelajaran secara bertahap **agar** materi dapat dipelajari secara terstruktur.

- **Feature:** Fitur Pelajaran (konten materi, status selesai)
- **Issue:** #9

**Acceptance criteria:**

- [ ] Isi materi pelajaran ditampilkan dengan jelas
- [ ] Pelajaran dapat ditandai selesai

### US-09: Halaman Kuis

**Sebagai** pelajar, **saya ingin** membuka halaman kuis **agar** dapat memilih dan mengerjakan kuis.

- **Feature:** Halaman Kuis
- **Issue:** #10

**Acceptance criteria:**

- [ ] Halaman menampilkan daftar atau antarmuka kuis
- [ ] Dapat diakses dari navbar

### US-10: Halaman Flashcard

**Sebagai** pelajar, **saya ingin** membuka halaman flashcard **agar** dapat berlatih kosakata.

- **Feature:** Halaman Flashcard
- **Issue:** (cek nomor issue di board)

**Acceptance criteria:**

- [ ] Halaman menampilkan kumpulan flashcard
- [ ] Dapat diakses dari navbar

### US-11: Halaman Progress

**Sebagai** pelajar, **saya ingin** melihat halaman progress **agar** mengetahui sejauh mana kemajuan belajar saya.

- **Feature:** Halaman Progress
- **Issue:** #12

**Acceptance criteria:**

- [ ] Menampilkan ringkasan pelajaran yang sudah selesai
- [ ] Menampilkan skor kuis terakhir (jika ada)

---
