import { portfolio } from "@/constants/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experience = portfolio.experience;

  return (
    <section
      id="experience"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Professional Experience
          </h2>

          <p className="mt-4 text-gray-400">
            My current role and key responsibilities in Enterprise Information Security.
          </p>
        </div>

        {/* Experience Card */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-zinc-900/60 p-10 shadow-xl backdrop-blur">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-3xl font-bold text-cyan-400">
                {experience.designation}
              </h3>

              <div className="mt-5 flex flex-wrap gap-6 text-gray-300">

                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  {experience.company}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {experience.duration}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {experience.location}
                </div>

              </div>

            </div>

          </div>

          {/* Responsibilities */}

          <div className="mt-12">

            <h4 className="mb-6 text-2xl font-semibold">
              Key Responsibilities
            </h4>

            <ul className="grid gap-4 md:grid-cols-2">

              {experience.responsibilities.map((item) => (

                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/30 p-4 text-gray-300 transition hover:border-cyan-400"
                >
                  • {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Technologies */}

          <div className="mt-14">

            <h4 className="mb-6 text-2xl font-semibold">
              Technologies & Domains
            </h4>

            <div className="flex flex-wrap gap-3">

              {experience.technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}