import { Feature } from "@/types";

interface FeatureListProps {
  features: Feature[];
}

const accents = ["border-t-black", "border-t-de-red", "border-t-de-gold"];

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold">Fitur Unggulan</h2>
      <p className="mt-2 text-center text-gray-600">
        Semua yang kamu butuhkan untuk belajar secara konsisten.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.id}
            className={`rounded-xl border border-gray-200 border-t-4 p-6 shadow-sm transition hover:shadow-md ${accents[i % 3]}`}
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
