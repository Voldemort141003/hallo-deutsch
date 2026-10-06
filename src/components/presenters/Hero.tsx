import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-de-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-de-gold">
          Belajar Bahasa Jerman
        </p>
        <h1 className="text-4xl font-extrabold md:text-6xl">
          Hallo! Mulai belajar <span className="text-de-gold">Deutsch</span>{" "}
          hari ini
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
          Kosakata, flashcard, kuis, dan pelacak progress dalam satu tempat.
          Cocok untuk pemula level A1 dan A2.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/lessons"
            className="rounded-lg bg-de-red px-6 py-3 font-semibold text-white hover:bg-de-red-dark"
          >
            Mulai Belajar
          </Link>
          <Link
            href="/quiz"
            className="rounded-lg border-2 border-de-gold px-6 py-3 font-semibold text-de-gold hover:bg-de-gold hover:text-black"
          >
            Coba Kuis
          </Link>
        </div>
      </div>
    </section>
  );
}
