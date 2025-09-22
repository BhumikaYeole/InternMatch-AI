"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Section 1: Logo + Description */}
        <div>
          <h2 className="text-green-400 text-2xl font-bold mb-2">InternMatch</h2>
          <p className="text-sm">
            Helping students launch their careers with real opportunities.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/internships" className="hover:text-green-400">Internships</Link></li>
            <li><Link href="/employers" className="hover:text-green-400">Employers</Link></li>
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3: Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-green-400">About</Link></li>
            <li><Link href="/faq" className="hover:text-green-400">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-green-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Section 4: Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#"><Facebook className="hover:text-green-400" size={20} /></Link>
            <Link href="#"><Twitter className="hover:text-green-400" size={20} /></Link>
            <Link href="#"><Instagram className="hover:text-green-400" size={20} /></Link>
            <Link href="#"><Linkedin className="hover:text-green-400" size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} InternMatch. All rights reserved.
      </div>
    </footer>
  );
}
