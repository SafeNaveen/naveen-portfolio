"use client";

import {
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { portfolio } from "@/constants/data";
import SectionTitle from "@/components/SectionTitle";
import TimelineItem from "@/components/TimelineItem";
import ScrollReveal from "@/components/ScrollReveal";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Section Title */}

        <ScrollReveal>
          <SectionTitle
            title="Education"
            subtitle="My academic journey that built the foundation for my career in Information Security and Cybersecurity."
          />
        </ScrollReveal>

        {/* Education Intro */}

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 backdrop-blur">

            <GraduationCap
              size={24}
              className="shrink-0 text-cyan-400"
            />

            <p className="text-center text-sm leading-6 text-gray-300">
              Academic foundation supporting my continuous growth across
              cybersecurity, information technology, governance, and
              enterprise security.
            </p>

          </div>
        </ScrollReveal>

        {/* Education Timeline */}

        <div className="relative mt-16">

          {/* Timeline Line */}

          <div className="absolute left-[10px] top-2 hidden h-[calc(100%-20px)] w-px bg-gradient-to-b from-cyan-400/60 via-cyan-500/20 to-transparent sm:block" />

          {portfolio.education.map((item, index) => (
            <ScrollReveal
              key={item.degree}
              delay={0.12 * index}
            >
              <div className="group relative mb-10">

                {/* Timeline Marker */}

                <div className="absolute -left-1 top-8 z-10 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-black bg-cyan-400 shadow-lg shadow-cyan-400/30 sm:flex" />

                {/* Education Card */}

                <div className="sm:ml-12">

                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-zinc-900">

                    {/* Top Accent */}

                    <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full" />

                    {/* Card Header */}

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      <div className="flex gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                          <GraduationCap size={24} />
                        </div>

                        <div>

                          <h3 className="text-xl font-bold text-white md:text-2xl">
                            {item.degree}
                          </h3>

                          <p className="mt-2 text-base text-gray-400">
                            {item.institute}
                          </p>

                        </div>

                      </div>

                      {/* Duration */}

                      <span className="w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        {item.duration}
                      </span>

                    </div>

                    {/* Description */}

                    <p className="mt-6 leading-7 text-gray-300">
                      {item.description}
                    </p>

                    {/* Security Accent */}

                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">

                      <ShieldCheck
                        size={16}
                        className="text-cyan-400"
                      />

                      Academic Foundation

                    </div>

                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}