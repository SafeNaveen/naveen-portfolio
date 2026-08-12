"use client";

import {
  ShieldCheck,
  ExternalLink,
  FolderKanban,
} from "lucide-react";

import { portfolio } from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <ScrollReveal>
          <SectionTitle
            title="Featured Security Projects"
            subtitle="Key cybersecurity initiatives, security domains and enterprise projects I have contributed to throughout my professional journey."
          />
        </ScrollReveal>

        {/* Project Introduction */}

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 text-center text-gray-400">

            <ShieldCheck
              size={20}
              className="shrink-0 text-cyan-400"
            />

            <p className="text-sm leading-6">
              Selected initiatives demonstrating practical experience across
              cybersecurity, governance, risk management, compliance, and
              enterprise security.
            </p>

          </div>
        </ScrollReveal>

        {/* Project Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {portfolio.projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={0.08 * index}
            >
              <div className="group relative h-full">

                {/* Project Number */}

                <div className="absolute -right-2 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/20 bg-zinc-950 text-xs font-bold text-cyan-400 shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Project Icon */}

                <div className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-black/70 text-cyan-400 backdrop-blur">
                  <FolderKanban size={20} />
                </div>

                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />

              </div>
            </ScrollReveal>
          ))}

        </div>

        {/* Bottom Message */}

        <ScrollReveal delay={0.2}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-center backdrop-blur">

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">

              <ShieldCheck
                size={22}
                className="text-cyan-400"
              />

              <p className="text-sm text-gray-400">
                Focused on building secure, resilient, compliant, and
                risk-aware enterprise environments.
              </p>

              <ExternalLink
                size={17}
                className="hidden text-gray-600 sm:block"
              />

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}