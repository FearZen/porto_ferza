"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as Icons from "lucide-react";

const projectDetails = {
    "kostify": {
        title: "Kostify: Smart Boarding House System",
        challenge: "Managing multiple boarding houses traditionally leads to data silos, payment delays, and poor communication between owners and tenants.",
        solution: "Developed a holistic SaaS platform with automated billing, a premium marketplace, and a centralized dashboard for real-time analytics.",
        result: "Increased operational efficiency by 40% and improved tenant retention through a seamless digital experience.",
        tech: ["Next.js 15+", "TypeScript", "Tailwind CSS 4", "Supabase", "PostgreSQL"],
        images: ["/kosthome.png", "/admindash.png", "/memberdash.png"]
    },
    "growthly": {
        title: "Growthly: SaaS Business Intelligence",
        challenge: "Small to medium SaaS companies often struggle to visualize complex financial metrics like MRR, Churn, and LTV without expensive enterprise tools.",
        solution: "Built a lightweight, high-performance dashboard using Recharts for interactive data visualization and Next.js for server-side stability.",
        result: "Provided stakeholders with a clear, actionable view of their business health in real-time.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
        images: ["/Dashboard.png", "/Analytics.png", "/Revenue.png"]
    },
    "data-access-form": {
        title: "Data Access Form System",
        challenge: "Manual data access requests in banking were slow, prone to errors, and difficult to audit.",
        solution: "Developed an automated internal form system with multi-level approval workflows and PostgreSQL audit logging.",
        result: "Reduced manual processing time by 40% and improved security compliance.",
        tech: ["Laravel", "PostgreSQL", "PHP", "API Integration"],
        images: ["/bank1.png", "/bank2.png", "/bank3.png"]
    },
    "design-branding": {
        title: "Design & Branding Portfolio",
        challenge: "Establishing a consistent visual identity and user-centric designs for various digital products.",
        solution: "Utilized Figma for collaborative wireframing, high-fidelity UI design, and branding assets.",
        result: "Delivered high-impact visual assets and streamlined handoff to development teams.",
        tech: ["Figma", "UI/UX", "Digital Design", "Adobe Suite"],
        images: ["/1.png", "/2.png", "/3.png"]
    }
};

export default function ProjectPage() {
    const params = useParams();
    const id = params.id as string;
    const project = projectDetails[id as keyof typeof projectDetails];

    if (!project) return <div>Project not found</div>;

    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans p-6 md:p-12 lg:p-24">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-500 mb-12 transition-colors group">
                <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 group-hover:bg-cyan-500/10 transition-colors">
                    <Icons.ArrowLeft size={20} />
                </div>
                Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">
                    {project.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-xl font-bold text-cyan-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                <Icons.Target size={20} />
                                The Challenge
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium italic">
                                {project.challenge}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-emerald-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                <Icons.Lightbulb size={20} />
                                The Solution
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                {project.solution}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-purple-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                <Icons.Trophy size={20} />
                                The Result
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                {project.result}
                            </p>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <h3 className="text-lg font-bold mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-bold text-zinc-600 dark:text-zinc-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {project.images.map((img, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-video relative group">
                                    <img src={img} alt={`Preview ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </motion.div>
        </div>
    );
}
