"use client";

import {
  Brain,
  FileText,
  UserCheck,
  MessageCircle,
  Bell,
  BarChart,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <section className="min-h-screen bg-black text-green-400 px-6 md:px-20 py-16">
      <h1 className="text-4xl font-extrabold text-white mb-12 text-center">
        Smart Internships. Real Impact.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
          icon={<Brain size={32} />}
          title="AI-Powered Matching"
          description="Connect with internships and jobs that fit your skills, interests, and career goals using intelligent algorithms."
        />

        <FeatureCard
          icon={<FileText size={32} />}
          title="Resume Skill Extraction"
          description="Our engine reads your resume to extract skills using JavaScript — no need to fill out long forms."
        />

        <FeatureCard
          icon={<UserCheck size={32} />}
          title="Verified Employers Only"
          description="We prevent scams by manually verifying every employer before they post opportunities."
        />

        <FeatureCard
          icon={<MessageCircle size={32} />}
          title="AI Career Assistant"
          description="Get real-time guidance from our AI chatbot — resume tips, career advice, and more."
        />

        <FeatureCard
          icon={<Bell size={32} />}
          title="Instant Notifications"
          description="Track your applications and get real-time alerts when new, relevant listings go live."
        />

        <FeatureCard
          icon={<BarChart size={32} />}
          title="Recruiter Dashboard"
          description="Recruiters can filter applicants smartly, view analytics, and manage listings with ease."
        />

        <FeatureCard
          icon={<BadgeCheck size={32} />}
          title="Completely Free for Students"
          description="We believe in equal access — no fees, no hidden costs, ever."
        />

        <FeatureCard
          icon={<ShieldCheck size={32} />}
          title="Safe & Ethical Access"
          description="Built with student-first policies to ensure trust, transparency, and real opportunity."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition flex flex-col items-center text-center">
      <div className="text-green-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
