"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolio } from "@/constants/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <ScrollReveal>
          <SectionTitle
            title="Let's Connect"
            subtitle="Feel free to reach out for cybersecurity opportunities, enterprise security discussions, collaborations, or professional networking."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}

          <ScrollReveal delay={0.15}>
            <div className="h-full rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <h3 className="text-3xl font-bold text-cyan-400">
                Contact Information
              </h3>

              <div className="mt-10 space-y-8">

                <ContactItem
                  icon={<Mail size={22} />}
                  title="Email"
                  value={portfolio.personal.email}
                />

                <ContactItem
                  icon={<Phone size={22} />}
                  title="Phone"
                  value={portfolio.personal.phone}
                />

                <ContactItem
                  icon={<MapPin size={22} />}
                  title="Location"
                  value={portfolio.personal.location}
                />

              </div>

            </div>
          </ScrollReveal>

          {/* Professional Profiles */}

          <ScrollReveal delay={0.3}>
            <div className="h-full rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <h3 className="text-3xl font-bold text-cyan-400">
                Professional Profiles
              </h3>

              <div className="mt-10 space-y-6">

                {/* LinkedIn */}

                <a
                  href={portfolio.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 p-5 transition-all duration-300 hover:border-cyan-400 hover:bg-zinc-800"
                >
                  <Globe
                    className="text-cyan-400"
                    size={24}
                  />

                  <div>
                    <p className="font-semibold">
                      LinkedIn
                    </p>

                    <p className="text-sm text-gray-400">
                      Connect professionally
                    </p>
                  </div>

                </a>

                {/* GitHub */}

                <a
                  href={portfolio.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 p-5 transition-all duration-300 hover:border-cyan-400 hover:bg-zinc-800"
                >
                  <Globe
                    className="text-cyan-400"
                    size={24}
                  />

                  <div>
                    <p className="font-semibold">
                      GitHub
                    </p>

                    <p className="text-sm text-gray-400">
                      View my repositories
                    </p>
                  </div>

                </a>

              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5">

      <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
        {icon}
      </div>

      <div>

        <p className="text-sm uppercase tracking-wider text-gray-500">
          {title}
        </p>

        <p className="mt-1 text-lg text-white">
          {value}
        </p>

      </div>

    </div>
  );
}