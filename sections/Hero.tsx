"use client";

import Image from "next/image";
import { portfolio } from "@/constants/data";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  SearchCheck,
  Laptop,
  FileCheck,
  Download,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* PROFILE PHOTO */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative mx-auto h-[220px] w-[220px] lg:mx-0">

                {/* Animated Ring */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-cyan-400/40"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-2 rounded-full border border-blue-500/20"
                />

                {/* Photo */}

                <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20">

                  <Image
                    src="/profile.jpg"
                    alt="Naveen Kumar"
                    fill
                    priority
                    sizes="220px"
                    className="object-cover"
                  />

                </div>

                {/* Availability Indicator */}

                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#050816] bg-green-500">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

              </div>
            </motion.div>

            {/* Status */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-5 flex flex-wrap items-center gap-3"
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                Open to Professional Opportunities

              </span>

            </motion.div>

            {/* Welcome */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
            >
              {portfolio.hero.welcome}
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-extrabold leading-tight md:text-7xl"
            >
              {portfolio.personal.name}
            </motion.h1>

            {/* Role */}

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-2xl font-semibold text-cyan-400"
            >
              {portfolio.personal.role}
            </motion.h2>

            {/* Company */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-2 flex items-center gap-2 text-gray-400"
            >
              <MapPin size={16} className="text-cyan-400" />

              {portfolio.personal.company}
            </motion.p>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
            >
              {portfolio.hero.description}
            </motion.p>

            {/* Skills */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "ISO 27001",
                "VAPT",
                "GRC",
                "CrowdStrike",
                "Trend Micro",
                "Secure SDLC",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              {/* Resume */}

              <a
                href="/Naveen_Kumar_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Download size={20} />

                Download Resume
              </a>

              {/* Contact */}

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-black"
              >
                <Mail size={20} />

                Contact Me
              </a>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl"
          >

            {/* Dashboard Header */}

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Security Operations
                </p>

                <h3 className="mt-2 text-2xl font-bold text-cyan-400">
                  Enterprise Security Dashboard
                </h3>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                <ShieldCheck
                  size={24}
                  className="text-cyan-400"
                />
              </div>

            </div>

            {/* Dashboard Cards */}

            <div className="space-y-5">

              <DashboardCard
                icon={<ShieldCheck className="h-6 w-6 text-cyan-400" />}
                title="ISO/IEC 27001:2022"
                desc="Information Security Management System"
              />

              <DashboardCard
                icon={<SearchCheck className="h-6 w-6 text-cyan-400" />}
                title="Vulnerability Assessment"
                desc="Web • Mobile • API • Infrastructure"
              />

              <DashboardCard
                icon={<Laptop className="h-6 w-6 text-cyan-400" />}
                title="Endpoint Security"
                desc="CrowdStrike • Trend Micro"
              />

              <DashboardCard
                icon={<FileCheck className="h-6 w-6 text-cyan-400" />}
                title="Governance & Compliance"
                desc="GRC • DPDP • Risk Reviews"
              />

            </div>

            {/* Dashboard Status */}

            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={17}
                  className="text-green-400"
                />

                <span className="text-sm text-gray-300">
                  Security posture
                </span>

              </div>

              <span className="text-sm font-semibold text-green-400">
                Active
              </span>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        x: 4,
      }}
      className="group rounded-xl border border-white/10 bg-zinc-900/70 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-zinc-900"
    >
      <div className="mb-3 flex items-center gap-3">

        <div className="rounded-lg bg-cyan-500/10 p-2">
          {icon}
        </div>

        <h4 className="font-semibold">
          {title}
        </h4>

      </div>

      <p className="text-sm leading-6 text-gray-400">
        {desc}
      </p>
    </motion.div>
  );
}