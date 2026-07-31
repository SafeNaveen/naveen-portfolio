import { portfolio } from "@/constants/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Enterprise Security Initiatives
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Key enterprise security programs, governance initiatives, and cybersecurity engagements that I have contributed to.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {portfolio.projects.map((project) => (

            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-6 leading-7 text-gray-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500 px-4 py-2 text-sm text-cyan-400"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}