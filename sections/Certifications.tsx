"use client";

import {
  ShieldCheck,
  BadgeCheck,
  Award,
} from "lucide-react";

import { portfolio } from "@/constants/data";
import SectionTitle from "@/components/SectionTitle";
import CertificationCard from "@/components/CertificationCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <ScrollReveal>
          <SectionTitle
            title="Certifications"
            subtitle="Professional certifications and credentials supporting my expertise in Information Security, Cybersecurity, and IT Compliance."
          />
        </ScrollReveal>

        {/* Intro Banner */}

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 backdrop-blur">

            <ShieldCheck className="shrink-0 text-cyan-400" size={22} />

            <p className="text-center text-sm leading-6 text-gray-300">
              Verified learning achievements demonstrating continuous
              professional development in cybersecurity, governance,
              compliance, and enterprise security.
            </p>

          </div>
        </ScrollReveal>

        {/* Certification Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {portfolio.certifications.map((certification, index) => (
            <ScrollReveal
              key={certification.title}
              delay={0.08 * index}
            >
              <div className="group relative h-full">

                {/* Number Badge */}

                <div className="absolute -right-2 -top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 bg-zinc-950 text-xs font-bold text-cyan-400 shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Award Icon */}

                <div className="absolute left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-black/70 text-cyan-400 backdrop-blur transition-all duration-300 group-hover:scale-110">
                  <Award size={22} />
                </div>

                <CertificationCard
                  title={certification.title}
                  organization={certification.organization}
                  year={certification.year}
                  description={certification.description}
                  skills={certification.skills}
                  credential={certification.credential}
                />

              </div>
            </ScrollReveal>
          ))}

        </div>

        {/* Bottom Banner */}

        <ScrollReveal delay={0.2}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-center backdrop-blur">

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">

              <BadgeCheck
                size={22}
                className="text-cyan-400"
              />

              <p className="text-sm text-gray-400">
                Committed to continuous learning and staying aligned with
                evolving cybersecurity standards, frameworks, and enterprise
                security best practices.
              </p>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}