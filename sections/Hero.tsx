import { portfolio } from "@/constants/data";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <p className="mb-4 text-lg text-gray-400">
          {portfolio.hero.welcome}
        </p>

        <h1 className="text-6xl font-extrabold leading-tight md:text-8xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {portfolio.personal.name}
          </span>
        </h1>

        <h2 className="mt-6 text-2xl text-gray-300 md:text-3xl">
          {portfolio.personal.role}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          {portfolio.hero.description}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Download Resume
          </button>

          <button className="rounded-xl border border-cyan-500 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}