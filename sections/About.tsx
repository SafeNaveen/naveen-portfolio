"use client";

import {
  ShieldCheck,
  Target,
  LockKeyhole,
  MapPin,
} from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Section Heading */}

        <ScrollReveal>
          <SectionTitle
            title="About Me"
            subtitle="Get to know my professional background, expertise, and current role in Information Security."
          />
        </ScrollReveal>

        {/* Main Content */}

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* Professional Background */}

          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.04]">

              <div className="mb-6 flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <ShieldCheck size={26} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500">
                    Professional Profile
                  </p>

                  <h3 className="text-2xl font-bold text-cyan-400">
                    Professional Background
                  </h3>
                </div>

              </div>

              <p className="text-lg leading-8 text-gray-300">
                I am a Junior Manager – Information Security & Compliance
                at Safexpress with experience in Governance, Risk &
                Compliance (GRC), ISO/IEC 27001:2022 implementation,
                Vulnerability Assessment & Penetration Testing (VAPT),
                Endpoint Security, Security Awareness, Incident Management,
                Secure SDLC, Business Continuity Planning (BCP), Disaster
                Recovery (DR), and Enterprise Information Security.
              </p>

              {/* Security Domains */}

              <div className="mt-8 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <LockKeyhole className="mb-2 text-cyan-400" size={20} />
                  <p className="text-sm text-gray-300">
                    Cybersecurity
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <Target className="mb-2 text-cyan-400" size={20} />
                  <p className="text-sm text-gray-300">
                    GRC & Compliance
                  </p>
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* Current Role */}

          <ScrollReveal delay={0.2}>
            <div className="h-full rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40">

              <div className="mb-8 flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Target size={26} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500">
                    Current Position
                  </p>

                  <h3 className="text-2xl font-bold text-cyan-400">
                    Current Role
                  </h3>
                </div>

              </div>

              <div className="space-y-6">

                {/* Company */}

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Company
                  </p>

                  <p className="mt-1 text-lg font-medium text-white">
                    Safexpress Pvt. Ltd.
                  </p>
                </div>

                {/* Designation */}

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Designation
                  </p>

                  <p className="mt-1 text-lg font-medium text-white">
                    Junior Manager – Information Security & Compliance
                  </p>
                </div>

                {/* Experience */}

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Experience
                  </p>

                  <p className="mt-1 text-lg font-medium text-white">
                    September 2025 – Present
                  </p>
                </div>

                {/* Location */}

                <div className="flex items-start gap-3">

                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 text-lg font-medium text-white">
                      Gurgaon, Haryana, India
                    </p>
                  </div>

                </div>

              </div>

              {/* Status */}

              <div className="mt-8 flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">

                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                <span className="text-sm text-cyan-300">
                  Currently working in Enterprise Information Security
                </span>

              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}