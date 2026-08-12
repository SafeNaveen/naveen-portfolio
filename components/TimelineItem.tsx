import { GraduationCap, Calendar, Building2 } from "lucide-react";

type TimelineItemProps = {
  degree: string;
  institute: string;
  duration: string;
  description: string;
};

export default function TimelineItem({
  degree,
  institute,
  duration,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-8">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-zinc-950 bg-cyan-500 shadow-lg shadow-cyan-500/30">

          <GraduationCap size={22} className="text-black" />

        </div>

        <div className="mt-3 h-full w-1 rounded-full bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent" />

      </div>

      {/* Card */}

      <div
        className="
          mb-10
          w-full
          rounded-3xl
          border
          border-white/10
          bg-zinc-900/70
          p-8
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400
          hover:shadow-2xl
          hover:shadow-cyan-500/10
        "
      >
        {/* Duration */}

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">

          <Calendar size={16} />

          {duration}

        </div>

        {/* Degree */}

        <h3 className="text-3xl font-bold text-white">

          {degree}

        </h3>

        {/* Institute */}

        <div className="mt-4 flex items-center gap-2 text-lg text-gray-400">

          <Building2 size={18} />

          {institute}

        </div>

        {/* Description */}

        <p className="mt-6 leading-8 text-gray-300">

          {description}

        </p>

      </div>

    </div>
  );
}