"use client"

import { useState } from "react";
import { MapPin, Calendar, DollarSign, Search, Filter, Building2, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function InternshipPage() {
  const [search, setSearch] = useState("");

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      duration: "3 months",
      salary: "$3,000/month",
      description:
        "Work on cutting-edge web applications using React and Node.js. Join our dynamic team and contribute to products used by millions.",
      tags: ["React", "Node.js", "JavaScript", "Full-stack"],
      posted: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataMind",
      location: "New York, NY",
      type: "Remote",
      duration: "4 months",
      salary: "$2,800/month",
      description:
        "Analyze large datasets, build machine learning models, and create data visualizations to drive business insights.",
      tags: ["Python", "Machine Learning", "SQL", "Tableau"],
      posted: "1 week ago",
      applicants: 32,
    },
    {
      id: 3,
      title: "UX/UI Design Intern",
      company: "DesignStudio",
      location: "Los Angeles, CA",
      type: "Hybrid",
      duration: "3 months",
      salary: "$2,500/month",
      description:
        "Create user-centered designs for mobile and web applications. Work closely with product teams to improve user experience.",
      tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
      posted: "3 days ago",
      applicants: 28,
    },
  ];

  const filtered = internships.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
      <div className="min-h-screen bg-black text-green-400 p-8">
        <Navbar/>
      <div className="text-center mb-10 py-30">
        <h1 className="text-4xl font-extrabold mb-4 text-white">
          Find Your Perfect Internship
        </h1>
        <p className="text-lg text-green-400/80">
          Discover amazing internship opportunities from top companies and
          kickstart your career journey.
        </p>
      </div>


      <div className="flex justify-center items-center gap-3 mb-6">
        <div className="relative w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400/70" />
          <input
            type="text"
            placeholder="Search internships, companies, or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900/60 text-green-400 border border-zinc-800 px-10 py-2 rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <button className="border border-zinc-800 text-green-400 px-4 py-2 rounded hover:bg-zinc-900/60 transition flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>


      <p className="mb-6">
        Showing {filtered.length} of {internships.length} internships
      </p>


      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filtered.map((job) => (
          <div
            key={job.id}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="inline-block border border-zinc-800 text-green-400 text-xs px-2 py-1 rounded">
                {job.type}
              </span>
              <span className="text-xs text-green-400/70">{job.posted}</span>
            </div>

            <h2 className="text-xl font-semibold mb-1 text-white">
              {job.title}
            </h2>
            <p className="mb-3 text-green-400/90 flex items-center gap-2">
              <Building2 className="h-4 w-4" /> {job.company}
            </p>
            <p className="mb-4 text-sm text-gray-400 line-clamp-3">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black/40 border border-zinc-800 text-green-400 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {job.tags.length > 3 && (
                <span className="bg-black/40 border border-zinc-800 text-green-400 text-xs px-2 py-1 rounded">
                  +{job.tags.length - 3} more
                </span>
              )}
            </div>

            <div className="space-y-2 text-sm text-green-400/90">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {job.location}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {job.duration}
              </p>
              <p className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" /> {job.salary}
              </p>
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4" /> {job.applicants} applicants
              </p>
            </div>

            <button className="w-full mt-4 bg-green-500 text-black py-2 rounded font-semibold hover:bg-green-600 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-green-400/80 text-lg">
            No internships found matching your search criteria.
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 border border-zinc-800 text-green-400 px-4 py-2 rounded hover:bg-zinc-900/60 transition"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
