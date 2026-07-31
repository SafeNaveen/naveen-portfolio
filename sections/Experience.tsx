import { portfolio } from "@/constants/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Professional Experience
        </h2>

        <p className="mt-4 text-center text-gray-400">
          My professional journey in Information Security, Cybersecurity,
          Governance, Risk & Compliance, and Enterprise Security Operations.
        </p>

        <div className="mt-16">

          {portfolio.experience.map((job) => (

            <div
              key={job.company}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-10 shadow-lg"
            >

              <h3 className="text-3xl font-bold text-cyan-400">
                {job.company}
              </h3>

              <h4 className="mt-2 text-xl font-semibold">
                {job.designation}
              </h4>

              <div className="mt-4 flex flex-wrap gap-6 text-gray-400">

                <span>📅 {job.duration}</span>

                <span>📍 {job.location}</span>

              </div>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                {job.summary}
              </p>

              <h5 className="mt-10 text-xl font-semibold text-white">
                Key Responsibilities
              </h5>

              <ul className="mt-6 grid gap-4 md:grid-cols-2">

                {job.responsibilities.map((item) => (

                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-black p-4 text-gray-300"
                  >
                    ✅ {item}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}