import FlagStripe from "./FlagStripe";

export default function Footer() {
  return (
    <footer className="bg-de-black text-gray-300">
      <FlagStripe />
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
        © 2026 Hallo <span className="text-de-gold">Deutsch</span> · Muhammad
        Hafidz Zuliesky &amp; Elsa Hariska Mardatillah
      </div>
    </footer>
  );
}
