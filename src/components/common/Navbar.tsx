"use client";

import Link from "next/link";
import { useState } from "react";
import FlagStripe from "./FlagStripe";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/lessons", label: "Pelajaran" },
  { href: "/flashcard", label: "Flashcard" },
  { href: "/quiz", label: "Kuis" },
  { href: "/progress", label: "Progress" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-de-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">
          Hallo <span className="text-de-gold">Deutsch</span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-de-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-md border border-gray-600 px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-gray-800 px-4 py-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-de-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <FlagStripe />
    </header>
  );
}
