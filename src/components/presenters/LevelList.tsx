import Link from "next/link";
import { Level } from "@/types";

interface LevelListProps {
  levels: Level[];
}

export default function LevelList({ levels }: LevelListProps) {
  return (
    <section className="bg-de-gold-soft">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">
          Pilih Level Belajarmu
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {levels.map((lv) => (
            <div
              key={lv.code}
              className="rounded-xl border-l-8 border-l-de-red bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-de-black px-3 py-1 text-sm font-bold text-de-gold">
                  {lv.code}
                </span>
                <h3 className="text-xl font-semibold">{lv.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{lv.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {lv.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-de-gold-soft px-3 py-1 text-xs font-medium text-gray-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/lessons?level=${lv.code}`}
                className="mt-5 inline-block text-sm font-semibold text-de-red hover:underline"
              >
                Lihat pelajaran {lv.code} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
