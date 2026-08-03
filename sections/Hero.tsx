import { portfolio } from "@/constants/data";
import { ShieldCheck, SearchCheck, Laptop, FileCheck } from "lucide-react";

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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {portfolio.hero.welcome}
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              {portfolio.personal.name}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-cyan-400">
              {portfolio.personal.role}
            </h2>

            <p className="mt-2 text-gray-400">
              {portfolio.personal.company}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              {portfolio.hero.description}
            </p>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
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
                  className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
                Download Resume
              </button>

              <button className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-bold text-cyan-400">
              Enterprise Security Dashboard
            </h3>

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
          </div>
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
    <div className="rounded-xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-cyan-400">
      <div className="mb-3 flex items-center gap-3">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}
