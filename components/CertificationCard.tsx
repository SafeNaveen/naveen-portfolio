import {
  Award,
  Building2,
  Calendar,
  ExternalLink,
} from "lucide-react";

type CertificationCardProps = {
  title: string;
  organization: string;
  year: string;
  description: string;
  skills: string[];
  credential: string;
};

export default function CertificationCard({
  title,
  organization,
  year,
  description,
  skills,
  credential,
}: CertificationCardProps) {
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
        backdrop-blur
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]
      "
    >
      {/* Top Accent */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header */}

      <div className="flex items-start gap-4">

        <div className="rounded-2xl bg-cyan-500/10 p-4">

          <Award
            className="text-cyan-400"
            size={30}
          />

        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-400">
            {title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-400">

            <div className="flex items-center gap-2">

              <Building2 size={16} />

              {organization}

            </div>

            <div className="flex items-center gap-2">

              <Calendar size={16} />

              {year}

            </div>

          </div>

        </div>

      </div>

      {/* Description */}

      <p className="mt-8 leading-7 text-gray-300">
        {description}
      </p>

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-3">

        {skills.map((skill) => (

          <span
            key={skill}
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
            "
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Button */}

      <div className="mt-10">

        <a
          href={credential}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-500
            px-5
            py-3
            font-medium
            text-cyan-400
            transition-all
            duration-300
            hover:bg-cyan-500
            hover:text-black
          "
        >
          View Credential

          <ExternalLink size={18} />

        </a>

      </div>

    </div>
  );
}