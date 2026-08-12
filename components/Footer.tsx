import {
  ArrowUp,
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { portfolio } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-block text-3xl font-extrabold tracking-wide text-cyan-400 transition hover:scale-105"
            >
              NK
            </a>

            <h3 className="mt-6 text-2xl font-bold">
              Naveen Kumar
            </h3>

            <p className="mt-3 max-w-xl leading-7 text-gray-400">
              Information Security & IT Compliance professional focused on
              cybersecurity, governance, risk management, compliance,
              enterprise security, and secure technology practices.
            </p>

            {/* Security Badge */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">

              <ShieldCheck size={17} />

              Information Security Professional

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-lg font-semibold text-cyan-400">
              Quick Links
            </h4>

            <nav className="mt-6 space-y-3">

              <a
                href="#home"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#certifications"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                Certifications
              </a>

              <a
                href="#education"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-cyan-400"
              >
                Education
              </a>

            </nav>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-lg font-semibold text-cyan-400">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              {/* Email */}

              <a
                href={`mailto:${portfolio.personal.email}`}
                className="flex items-start gap-3 text-gray-400 transition hover:text-cyan-400"
              >

                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span className="break-all">
                  {portfolio.personal.email}
                </span>

              </a>

              {/* Location */}

              <div className="flex items-start gap-3 text-gray-400">

                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span>
                  {portfolio.personal.location}
                </span>

              </div>

              {/* LinkedIn */}

              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >

                <Globe
                  size={19}
                  className="shrink-0 text-cyan-400"
                />

                <span>
                  LinkedIn Profile
                </span>

              </a>

              {/* GitHub */}

              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >

                <Globe
                  size={19}
                  className="shrink-0 text-cyan-400"
                />

                <span>
                  GitHub Profile
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Footer */}

        <div className="flex flex-col gap-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <div>
            © {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">

            <span>
              Cybersecurity • GRC • ISMS • IT Compliance
            </span>

            {/* Back to Top */}

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <ArrowUp size={19} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}