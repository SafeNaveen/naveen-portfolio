"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { portfolio } from "@/constants/data";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export default function Experience() {
  const experience = portfolio.experience;

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <ScrollReveal>
          <SectionTitle
            title="Professional Experience"
            subtitle="My current role, responsibilities, and contributions in Enterprise Information Security."
          />
        </ScrollReveal>

        {/* Experience Card */}

        <ScrollReveal delay={0.15}>
          <div
            className="
              mt-16
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-zinc-900/70
              shadow-2xl
              shadow-black/30
              backdrop-blur-xl
            "
          >

            {/* Top Accent */}

            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500" />

            <div className="p-8 md:p-10">

              {/* Role Header */}

              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                <div className="flex gap-5">

                  {/* Icon */}

                  <div
                    className="
                      hidden
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      text-cyan-400
                      sm:flex
                    "
                  >
                    <ShieldCheck size={32} />
                  </div>

                  <div>

                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
                      Current Position
                    </p>

                    <h3 className="max-w-4xl text-2xl font-bold leading-tight text-cyan-400 md:text-3xl">
                      {experience.designation}
                    </h3>

                    {/* Metadata */}

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">

                      <div className="flex items-center gap-2">
                        <Briefcase
                          size={17}
                          className="text-cyan-400"
                        />
                        <span>{experience.company}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar
                          size={17}
                          className="text-cyan-400"
                        />
                        <span>{experience.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          className="text-cyan-400"
                        />
                        <span>{experience.location}</span>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Current Status */}

                <div className="flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                  Present

                </div>

              </div>

              {/* Divider */}

              <div className="my-10 h-px bg-white/10" />

              {/* Responsibilities */}

              <ScrollReveal delay={0.2}>
                <div>

                  <div className="mb-6 flex items-center gap-3">

                    <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                      <CheckCircle2 size={20} />
                    </div>

                    <h4 className="text-2xl font-semibold">
                      Key Responsibilities
                    </h4>

                  </div>

                  <ul className="grid gap-4 md:grid-cols-2">

                    {experience.responsibilities.map((item, index) => (
                      <ScrollReveal
                        key={item}
                        delay={0.05 * index}
                      >
                        <li
                          className="
                            group
                            h-full
                            rounded-xl
                            border
                            border-white/10
                            bg-black/30
                            p-5
                            text-gray-300
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-cyan-400/40
                            hover:bg-black/50
                          "
                        >
                          <div className="flex items-start gap-3">

                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                              <CheckCircle2 size={13} />
                            </span>

                            <span className="leading-7">
                              {item}
                            </span>

                          </div>
                        </li>
                      </ScrollReveal>
                    ))}

                  </ul>

                </div>
              </ScrollReveal>

              {/* Technologies */}

              <ScrollReveal delay={0.25}>
                <div className="mt-14">

                  <h4 className="mb-6 text-2xl font-semibold">
                    Technologies & Domains
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {experience.technologies.map((tech, index) => (
                      <ScrollReveal
                        key={tech}
                        delay={0.05 * index}
                      >
                        <span
                          className="
                            inline-block
                            rounded-full
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            px-4
                            py-2
                            text-sm
                            text-cyan-300
                            transition-all
                            duration-300
                            hover:border-cyan-400/60
                            hover:bg-cyan-500/20
                            hover:text-cyan-200
                          "
                        >
                          {tech}
                        </span>
                      </ScrollReveal>
                    ))}

                  </div>

                </div>
              </ScrollReveal>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}