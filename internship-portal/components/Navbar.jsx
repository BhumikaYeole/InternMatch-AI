"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/90 text-white fixed w-full top-0 left-0 z-50 shadow-md backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-green-400">
          Intern<span className="text-white">Match</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="/internships" className="hover:text-green-400 transition">Internships</Link>
          <Link href="/employers" className="hover:text-green-400 transition">Employers</Link>
          <Link href="/about" className="hover:text-green-400 transition">About</Link>
          <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
        </div>

        {/* Right side (Search + Auth) */}
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-green-400 transition">
            <Search size={20} />
          </button>
          <Link
            href="/login"
            className="px-4 py-2 border border-green-500 rounded-lg text-green-400 hover:bg-green-500/20 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg shadow transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-zinc-800 px-6 py-6 space-y-6">
          <Link href="/" className="block hover:text-green-400">Home</Link>
          <Link href="/internships" className="block hover:text-green-400">Internships</Link>
          <Link href="/employers" className="block hover:text-green-400">Employers</Link>
          <Link href="/about" className="block hover:text-green-400">About</Link>
          <Link href="/contact" className="block hover:text-green-400">Contact</Link>

          <div className="flex flex-col gap-4 pt-4 border-t border-zinc-800">
            <Link
              href="/login"
              className="px-4 py-2 border border-green-500 rounded-lg text-green-400 hover:bg-green-500/20 transition text-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg shadow transition text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
