import { portfolio } from "@/constants/data";

export default function Skills() {
  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-center text-4xl font-bold">
        Skills
      </h2>

      <div className="mt-10">
        {portfolio.skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </section>
  );
}