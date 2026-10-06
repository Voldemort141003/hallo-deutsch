import { Feature, Level } from "@/types";

export const features: Feature[] = [
  {
    id: "f1",
    icon: "📚",
    title: "Materi Terstruktur",
    description:
      "Kosakata dan contoh kalimat per level dan topik, lengkap dengan arti Indonesia.",
  },
  {
    id: "f2",
    icon: "🃏",
    title: "Flashcard",
    description: "Balik kartu dan tandai kata yang sudah kamu hafal.",
  },
  {
    id: "f3",
    icon: "🔊",
    title: "Audio Pelafalan",
    description: "Dengarkan pengucapan bahasa Jerman langsung dari browser.",
  },
  {
    id: "f4",
    icon: "📝",
    title: "Kuis Interaktif",
    description: "Uji pemahamanmu dan lihat skor beserta pembahasan.",
  },
  {
    id: "f5",
    icon: "📈",
    title: "Progress & Streak",
    description: "Pantau kemajuan dan jaga konsistensi belajar harianmu.",
  },
  {
    id: "f6",
    icon: "⭐",
    title: "Kata Favorit",
    description: "Simpan kata atau pelajaran yang ingin diulang kembali.",
  },
];

export const levels: Level[] = [
  {
    code: "A1",
    title: "Pemula",
    description:
      "Mulai dari dasar: menyapa, memperkenalkan diri, dan kebutuhan sehari-hari.",
    topics: ["Salam", "Angka", "Keluarga", "Makanan"],
  },
  {
    code: "A2",
    title: "Dasar Lanjutan",
    description:
      "Berkomunikasi dalam situasi sederhana seperti belanja, bepergian, dan rutinitas.",
    topics: ["Belanja", "Transportasi", "Kegiatan Harian", "Cuaca"],
  },
];
