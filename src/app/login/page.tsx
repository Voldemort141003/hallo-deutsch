
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-de-gold-soft px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Judul */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-de-black">
            Hallo <span className="text-de-red">Deutsch</span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold">
            Selamat Datang!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Silakan masuk ke akun Anda
          </p>
        </div>

        {/* Form Login */}
        <form className="space-y-5">

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Masukkan email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-de-red"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Masukkan password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-de-red"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-de-black py-3 font-semibold text-white transition hover:bg-de-red"
          >
            Masuk
          </button>

        </form>

        {/* Kembali ke Beranda */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-de-red hover:underline"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

      </div>
    </section>
  );
}
