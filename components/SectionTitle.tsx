type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">

      {/* Small Heading */}

      <span
        className="
          inline-block
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-500/10
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-400
        "
      >
        Professional Portfolio
      </span>

      {/* Main Title */}

      <h2
        className="
          mt-6
          text-4xl
          font-extrabold
          tracking-tight
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      {/* Divider */}

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-cyan-400" />

      {/* Subtitle */}

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        {subtitle}
      </p>

    </div>
  );
}