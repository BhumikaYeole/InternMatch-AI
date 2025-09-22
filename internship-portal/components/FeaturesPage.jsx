"use client";

import {
    Brain,
    FileText,
    UserCheck,
    ShieldCheck,
    BadgeCheck,
    BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesPage() {
    return (
        <section className="min-h-screen bg-black text-green-400 px-4 sm:px-6 md:px-20 py-16">
            <h1 className="text-4xl font-extrabold text-white mb-12 text-center">
                Why Choose InternMatch?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <FeatureCard {...feature} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition flex flex-col items-center text-center h-full">
            <div className="text-green-400 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
}

// 🔢 Feature data
const features = [
    {
        icon: <Brain size={32} />,
        title: "AI-Powered Matching",
        description: "Connect with internships and jobs that fit your skills, interests, and career goals using intelligent algorithms.",
    },
    {
        icon: <FileText size={32} />,
        title: "Resume Skill Extraction",
        description: "Our engine reads your resume to extract skills using JavaScript — no need to fill out long forms.",
    },
    {
        icon: <UserCheck size={32} />,
        title: "Verified Employers Only",
        description: "We prevent scams by manually verifying every employer before they post opportunities.",
    },
    {
        icon: <BadgeCheck size={32} />,
        title: "Completely Free for Students",
        description: "We believe in equal access — no fees, no hidden costs, ever.",
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Safe & Ethical Access",
        description: "Built with student-first policies to ensure trust, transparency, and real opportunity.",
    },
    {
        icon: <BarChart size={32} />,
        title: "Recruiter Dashboard",
        description: "Recruiters can filter applicants smartly, view analytics, and manage listings with ease.",
    },
];
