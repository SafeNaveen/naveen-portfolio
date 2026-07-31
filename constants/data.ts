import { personal } from "./personal";
import { skills } from "./skills";
import { experience } from "./experience";
import { projects } from "./projects";

export const portfolio = {
  personal: {
    name: personal.name,
    role: personal.role,
    company: personal.company,
    location: personal.location,
    tagline: personal.tagline,
    email: personal.email,
    phone: personal.phone,
    github: personal.github,
    linkedin: personal.linkedin,
  },

  hero: personal.hero,

  skills,

  experience,

  projects,
};