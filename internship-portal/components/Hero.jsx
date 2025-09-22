"use client";

import { Search, Users, TrendingUp, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex bg-black text-green-400 px-6 md:px-20 py-30 ">
            <div>
                <div className="mb-4">
                    <span className="inline-flex items-center gap-2 bg-green-900/40 text-green-400 text-sm font-medium px-4 py-1 rounded-full">
                        <Star size={16} className="text-green-400" />
                        #1 Internship Platform
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Launch Your Career <br /> Journey
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                    Connect with top companies and discover internship opportunities that
                    match your skills, interests, and career goals. Start building your
                    professional future today.
                </p>

                <div className="mt-8 flex gap-4">
                    <Link
                        href="/internships"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                    >
                        <Search size={18} />
                        Explore Internships
                    </Link>
                    <Link
                        href="/employers"
                        className="flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/20 font-semibold px-6 py-3 rounded-lg transition"
                    >
                        <Users size={18} />
                        For Employers
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-400">10K+</h2>
                        <p className="text-sm text-gray-400">Active Internships</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-400">5K+</h2>
                        <p className="text-sm text-gray-400">Partner Companies</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-400">95%</h2>
                        <p className="text-sm text-gray-400">Success Rate</p>
                    </div>
                </div>

            </div>

            <div>
                <div className="mt-16 w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">
                        <TrendingUp size={28} className="text-green-400 mb-3" />
                        <h3 className="text-white font-semibold mb-2">Career Growth</h3>
                        <p className="text-gray-400 text-sm">
                            Fast-track your professional development with mentorship and
                            real-world experience.
                        </p>
                    </div>
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">
                        <Users size={28} className="text-green-400 mb-3" />
                        <h3 className="text-white font-semibold mb-2">Network Building</h3>
                        <p className="text-gray-400 text-sm">
                            Connect with industry professionals and build lasting relationships.
                        </p>
                    </div>
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">
                        <Star size={28} className="text-green-400 mb-3" />
                        <h3 className="text-white font-semibold mb-2">Top Companies</h3>
                        <p className="text-gray-400 text-sm">
                            Access exclusive opportunities at leading organizations worldwide.
                        </p>
                    </div>
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">
                        <Search size={28} className="text-green-400 mb-3" />
                        <h3 className="text-white font-semibold mb-2">Smart Matching</h3>
                        <p className="text-gray-400 text-sm">
                            AI-powered recommendations based on your skills and preferences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
