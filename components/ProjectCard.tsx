import { ShieldCheck, ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/80
        p-8
        backdrop-blur-sm
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400
        hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]
      "
    >
      {/* Top Glow */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Badge */}

      <div className="mb-6 flex items-center justify-between">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">

          <ShieldCheck size={16} />

          Enterprise Security

        </div>

        <ArrowUpRight
          size={20}
          className="text-gray-500 transition group-hover:text-cyan-400"
        />

      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-400">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 leading-7 text-gray-400">
        {description}
      </p>

      {/* Technologies */}

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
              transition
              hover:bg-cyan-500
              hover:text-black
            "
          >
            {tech}
          </span>

        ))}

      </div>

    </div>
  );
}