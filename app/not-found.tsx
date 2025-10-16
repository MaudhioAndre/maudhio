import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-400 mb-8">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
