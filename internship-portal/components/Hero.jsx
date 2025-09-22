"use client";

import { Search, Users, TrendingUp, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-green-400 px-4 sm:px-6 md:px-20 py-20">
      {/* Responsive flex layout: stack on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-green-900/40 text-green-400 text-sm font-medium px-4 py-1 rounded-full">
              <Star size={16} className="text-green-400" />
              #1 Internship Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Launch Your Career <br className="hidden md:block" /> Journey
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl">
            Connect with top companies and discover internship opportunities that
            match your skills, interests, and career goals. Start building your
            professional future today.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/internships"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              <Search size={18} />
              Explore Internships
            </Link>
            <Link
              href="/employers"
              className="flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/20 font-semibold px-6 py-3 rounded-lg transition"
            >
              <Users size={18} />
              For Employers
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm">
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

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              icon={<TrendingUp size={28} className="text-green-400 mb-3" />}
              title="Career Growth"
              description="Fast-track your professional development with mentorship and real-world experience."
            />
            <Card
              icon={<Users size={28} className="text-green-400 mb-3" />}
              title="Network Building"
              description="Connect with industry professionals and build lasting relationships."
            />
            <Card
              icon={<Star size={28} className="text-green-400 mb-3" />}
              title="Top Companies"
              description="Access exclusive opportunities at leading organizations worldwide."
            />
            <Card
              icon={<Search size={28} className="text-green-400 mb-3" />}
              title="Smart Matching"
              description="AI-powered recommendations based on your skills and preferences."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition h-full">
      {icon}
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
