"use client";

import {
  ShieldCheck,
  Bug,
  Settings,
  Code2,
  Network,
  FileCheck2,
  LockKeyhole,
  Database,
} from "lucide-react";

import { portfolio } from "@/constants/data";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

const skillIcons = [
  ShieldCheck,
  Bug,
  Settings,
  Code2,
  Network,
  FileCheck2,
  LockKeyhole,
  Database,
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <ScrollReveal>
          <SectionTitle
            title="Technical Expertise"
            subtitle="Technologies, frameworks, tools and security domains I work with."
          />
        </ScrollReveal>

        {/* Skills */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {portfolio.skills.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length];

            return (
              <ScrollReveal
                key={skill}
                delay={0.05 * index}
              >
                <div
                  className="
                    group
                    h-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-900/80
                    p-6
                    backdrop-blur
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/50
                    hover:bg-zinc-800
                    hover:shadow-xl
                    hover:shadow-cyan-500/10
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-cyan-400/40
                      group-hover:bg-cyan-500/20
                    "
                  >
                    <Icon size={24} />
                  </div>

                  {/* Skill Name */}

                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {skill}
                  </h3>

                  {/* Bottom Accent */}

                  <div className="mt-5 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </div>
              </ScrollReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}