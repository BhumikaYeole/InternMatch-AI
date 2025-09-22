"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-black/90 text-white fixed w-full top-0 left-0 z-50 shadow-md backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-green-400"
          onClick={closeMenu}
        >
          Intern<span className="text-white">Match</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/internships" label="Internships" />
          <NavLink href="/employers" label="Employers" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Desktop Right Side (Search + Auth) */}
        <div className="hidden md:flex items-center gap-6">
          <button
            className="hover:text-green-400 transition"
            aria-label="Search"
          >
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-green-400"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-zinc-800 px-6 py-6 space-y-6 animate-slideDown">
          <MobileNavLink href="/" label="Home" onClick={closeMenu} />
          <MobileNavLink href="/internships" label="Internships" onClick={closeMenu} />
          <MobileNavLink href="/employers" label="Employers" onClick={closeMenu} />
          <MobileNavLink href="/about" label="About" onClick={closeMenu} />
          <MobileNavLink href="/contact" label="Contact" onClick={closeMenu} />

          <div className="flex flex-col gap-4 pt-4 border-t border-zinc-800">
            <Link
              href="/login"
              onClick={closeMenu}
              className="px-4 py-2 border border-green-500 rounded-lg text-green-400 hover:bg-green-500/20 transition text-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={closeMenu}
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

function NavLink({ href, label }) {
  return (
    <Link href={href} className="hover:text-green-400 transition">
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-base hover:text-green-400 transition"
    >
      {label}
    </Link>
  );
}
